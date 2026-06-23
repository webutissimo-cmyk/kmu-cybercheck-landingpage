# KMU Cybercheck – Landingpage

Landingpage für die Domain **kmu-cybercheck.de** als schlanke Vorverkaufs- und Weiterleitungsseite zum KMU-SicherheitsRadar.

## Über das Projekt

Diese Landingpage richtet sich an Geschäftsführer, Inhaber und KMU-Verantwortliche und leitet Besucher zum kostenlosen Cyber-Sicherheitscheck auf [cyber-sicherheitsradar.de/check](https://cyber-sicherheitsradar.de/check) weiter.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Inter, Plus Jakarta Sans)

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Produktionsserver starten
npm start
```

Die Seite ist unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Deployment mit Docker & Coolify/Hetzner

### Docker Build & Run (lokal testen)

```bash
# Docker Image bauen
docker build -t kmu-cybercheck .

# Container starten
docker run -p 3000:3000 kmu-cybercheck
```

### Deployment über Coolify

1. Repository auf GitHub pushen
2. In Coolify: Neues Projekt → "From Git Repository"
3. Repository URL eingeben und Branch auswählen
4. Build Pack: **Dockerfile** auswählen
5. Port: **3000**
6. Domain: `kmu-cybercheck.de` konfigurieren
7. Deploy klicken

### Umgebungsvariablen

Keine zwingend erforderlichen Umgebungsvariablen für den Basisbetrieb.

## Projektstruktur

```
kmu-cybercheck/
├── app/
│   ├── globals.css          # Tailwind + Custom CSS
│   ├── layout.tsx           # Root Layout mit Metadata & Fonts
│   └── page.tsx             # Startseite (alle Sektionen)
├── components/
│   ├── header.tsx           # Navigation mit Mobile-Burger-Menü
│   ├── hero-section.tsx     # Hero-Bereich
│   ├── problem-section.tsx  # Problem-Bereich
│   ├── solution-section.tsx # Lösung-Bereich
│   ├── benefits-section.tsx # Vorteile-Bereich
│   ├── target-groups-section.tsx # Zielgruppen-Bereich
│   ├── nis2-section.tsx     # NIS2-Bereich
│   ├── process-section.tsx  # Ablauf-Bereich
│   ├── trust-section.tsx    # Vertrauens-Bereich
│   ├── faq-section.tsx      # FAQ-Bereich
│   ├── final-cta.tsx        # Abschluss-CTA
│   └── footer.tsx           # Footer
├── Dockerfile               # Multi-stage Docker Build
├── next.config.ts           # Next.js Konfiguration
├── tailwind.config.ts       # Tailwind mit Custom-Farben
└── tsconfig.json            # TypeScript Konfiguration
```

## Wichtige Links

- **Haupt-CTA:** https://cyber-sicherheitsradar.de/check
- **Preise:** https://cyber-sicherheitsradar.de/preise
- **Hauptseite:** https://cyber-sicherheitsradar.de/
- **Impressum:** https://cyber-sicherheitsradar.de/impressum
- **Datenschutz:** https://cyber-sicherheitsradar.de/datenschutz

## Entwickelt von

[Webutissimo S.L.](https://cyber-sicherheitsradar.de/) – KMU-SicherheitsRadar