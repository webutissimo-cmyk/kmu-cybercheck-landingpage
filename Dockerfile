# Multi-stage build for Next.js
FROM node:18-alpine AS base

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

# Install dependencies - handle missing lock files gracefully
RUN set -eux; \
  if [ -f yarn.lock ]; then \
    echo ">>> INSTALL: using yarn --frozen-lockfile"; \
    yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then \
    echo ">>> INSTALL: package-lock.json found, trying npm ci"; \
    npm ci --legacy-peer-deps || { \
      echo ">>> INSTALL: npm ci failed, falling back to yarn install"; \
      rm -f package-lock.json; \
      yarn install --no-lockfile; \
    }; \
  elif [ -f pnpm-lock.yaml ]; then \
    echo ">>> INSTALL: using pnpm"; \
    corepack enable pnpm && pnpm i --frozen-lockfile; \
  else \
    echo ">>> INSTALL: no lock file found, using yarn install"; \
    yarn install --no-lockfile; \
  fi; \
  echo ">>> INSTALL: done, node_modules size:"; \
  du -sh node_modules || true

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN echo ">>> BUILD: starting next build" && npm run build && echo ">>> BUILD: complete"

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
