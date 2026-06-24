# Multi-stage build for Next.js
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json ./
COPY package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Debug: show which lock files are present
RUN set -eux; \
    echo "===== DEBUG: Lock files in /app ====="; \
    ls -la package*.json yarn.lock pnpm-lock.yaml 2>/dev/null || true; \
    echo "===== DEBUG: End lock file listing ====="

# Configure registries to use npmjs.org (yarnpkg.com often unreachable)
RUN npm config set registry https://registry.npmjs.org/ && \
    yarn config set registry https://registry.npmjs.org/

# Install dependencies
RUN set -eux; \
  if [ -f yarn.lock ]; then \
    echo ">>> INSTALL: using yarn --frozen-lockfile (yarn.lock found)"; \
    yarn --frozen-lockfile --network-timeout 600000 --non-interactive; \
  elif [ -f pnpm-lock.yaml ]; then \
    echo ">>> INSTALL: using pnpm (pnpm-lock.yaml found)"; \
    corepack enable pnpm && pnpm i --frozen-lockfile; \
  else \
    echo ">>> INSTALL: using yarn install (no lock file)"; \
    yarn install --no-lockfile --network-timeout 600000 --verbose --non-interactive; \
  fi; \
  echo ">>> INSTALL: done, node_modules size:"; \
  du -sh node_modules || true

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN mkdir -p public
RUN echo ">>> BUILD: starting next build" && yarn build && echo ">>> BUILD: complete"

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set correct permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy standalone output if available, otherwise copy full build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
