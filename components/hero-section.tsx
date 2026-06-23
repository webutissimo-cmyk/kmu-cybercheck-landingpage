import Link from "next/link";

const bulletPoints = [
  "Kostenloser Einstieg",
  "Risiko-Score für Ihr Unternehmen",
  "NIS2-Ersteinschätzung",
  "Konkrete Sofortmaßnahmen",
  "Ohne IT-Fachjargon",
];

// Ziel-URL für alle Cybercheck-Buttons
const CYBERCHECK_URL = "https://cyber-sicherheitsradar.de/check";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient radar-bg grid-pattern overflow-hidden pt-16 md:pt-20">
      {/* Dekorative Radar-Ringe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-cyber-500/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[500px] h-[500px] md:w-[900px] md:h-[900px] rounded-full border border-cyber-500/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] rounded-full border border-cyber-500/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Glow-Effekte */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 pt-8 md:pt-10 pb-2 md:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Linke Seite: Inhalt */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyber-500/10 border border-cyber-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyber-400 animate-pulse-slow" />
              <span className="text-cyber-400 text-xs font-semibold uppercase tracking-wider">
                Kostenloser Cyber-Sicherheitscheck
              </span>
            </div>

            {/* Überschrift */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 font-heading">
              Wie sicher ist Ihr{" "}
              <span className="gradient-text">Unternehmen</span> wirklich?
            </h1>

            {/* Unterüberschrift */}
            <p className="text-navy-200 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Machen Sie den kostenlosen Cyber-Sicherheitscheck für KMU und
              erkennen Sie in wenigen Minuten, wo Ihre größten Risiken liegen.
            </p>

            {/* Aufzählungspunkte */}
            <ul className="flex flex-col gap-3 mb-10 text-left max-w-sm mx-auto lg:mx-0">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyber-500/20 border border-cyber-500/40 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-cyber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-navy-100 text-sm md:text-base font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA-Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={CYBERCHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 text-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                Kostenlosen Cybercheck starten
              </a>
              <a
                href="https://cyber-sicherheitsradar.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-base px-8 py-4 text-center"
              >
                Mehr über den SicherheitsRadar erfahren
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>

            {/* Vertrauenshinweis */}
            <p className="mt-6 text-navy-400 text-xs md:text-sm text-center lg:text-left">
              ✓ Kein Konto erforderlich &nbsp;·&nbsp; ✓ Keine Kreditkarte
              &nbsp;·&nbsp; ✓ Sofort starten
            </p>
          </div>

          {/* Rechte Seite: Visuelles Dashboard-Mockup */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-lg">
              {/* Dashboard-Karte */}
              <div className="relative bg-navy-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Dashboard-Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 bg-navy-800/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-cyber-500/20 border border-cyber-500/40 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-cyber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-semibold">
                      KMU Cyber-Sicherheitscheck
                    </span>
                  </div>
                  <span className="text-xs text-cyber-400 bg-cyber-500/10 border border-cyber-500/20 rounded-full px-2.5 py-0.5 font-medium">
                    Kostenlos
                  </span>
                </div>

                {/* Risiko-Score Bereich */}
                <div className="px-5 py-5 border-b border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-navy-300 text-xs font-medium uppercase tracking-wider">
                      Ihr Risiko-Score
                    </span>
                    <span className="text-xs text-navy-400">Beispiel-Auswertung</span>
                  </div>
                  {/* Score-Balken */}
                  <div className="flex items-end gap-3 mb-3">
                    <span className="text-4xl font-bold text-white leading-none">62</span>
                    <span className="text-navy-400 text-sm mb-1">/ 100</span>
                    <span className="ml-auto text-amber-400 text-xs font-semibold bg-amber-500/10 border border-amber-500/20 rounded-full px-2.5 py-0.5">
                      Mittleres Risiko
                    </span>
                  </div>
                  {/* Fortschrittsbalken */}
                  <div className="w-full h-2.5 bg-navy-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyber-500 via-amber-400 to-red-500"
                      style={{ width: "62%" }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5">
                    <span className="text-xs text-green-400">Niedrig</span>
                    <span className="text-xs text-amber-400">Mittel</span>
                    <span className="text-xs text-red-400">Hoch</span>
                  </div>
                </div>

                {/* Kategorien */}
                <div className="px-5 py-4 border-b border-white/5">
                  <span className="text-navy-300 text-xs font-medium uppercase tracking-wider block mb-3">
                    Sicherheitsbereiche
                  </span>
                  <div className="space-y-2.5">
                    {[
                      { label: "E-Mail-Sicherheit", score: 40, color: "bg-red-500" },
                      { label: "Zugänge & Passwörter", score: 55, color: "bg-amber-400" },
                      { label: "Backups & Datensicherung", score: 70, color: "bg-amber-400" },
                      { label: "Website-Sicherheit", score: 80, color: "bg-green-400" },
                      { label: "NIS2-Vorbereitung", score: 30, color: "bg-red-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="text-navy-300 text-xs w-40 flex-shrink-0">
                          {item.label}
                        </span>
                        <div className="flex-1 h-1.5 bg-navy-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                        <span className="text-navy-400 text-xs w-8 text-right">
                          {item.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maßnahmen-Vorschau */}
                <div className="px-5 py-4">
                  <span className="text-navy-300 text-xs font-medium uppercase tracking-wider block mb-3">
                    Prioritäre Maßnahmen
                  </span>
                  <div className="space-y-2">
                    {[
                      { text: "SPF/DKIM für E-Mail einrichten", priority: "Hoch", color: "text-red-400 bg-red-500/10 border-red-500/20" },
                      { text: "Zwei-Faktor-Authentifizierung aktivieren", priority: "Hoch", color: "text-red-400 bg-red-500/10 border-red-500/20" },
                      { text: "Backup-Strategie überprüfen", priority: "Mittel", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                    ].map((action, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3 bg-navy-800/50 rounded-lg px-3 py-2.5 border border-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-current text-cyber-400 flex-shrink-0" />
                          <span className="text-navy-200 text-xs">{action.text}</span>
                        </div>
                        <span className={`text-xs font-medium border rounded-full px-2 py-0.5 flex-shrink-0 ${action.color}`}>
                          {action.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* NIS2-Badge unten */}
                <div className="mx-5 mb-5 mt-1 flex items-center gap-3 bg-amber-500/8 border border-amber-500/20 rounded-xl px-4 py-3">
                  <svg
                    className="w-4 h-4 text-amber-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  <div>
                    <span className="text-amber-300 text-xs font-semibold block">
                      NIS2-Ersteinschätzung
                    </span>
                    <span className="text-navy-400 text-xs">
                      Mögliche Betroffenheit erkannt – Details im Report
                    </span>
                  </div>
                </div>
              </div>

              {/* Schwebende Badges außerhalb der Karte */}
              <div className="absolute -top-4 -right-6 bg-navy-800 border border-cyber-500/30 rounded-xl px-3.5 py-2.5 shadow-cyber-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-semibold">
                    Sofort-Ergebnis
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-navy-800 border border-cyber-500/30 rounded-xl px-3.5 py-2.5 shadow-cyber-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-400" />
                  <span className="text-white text-xs font-semibold">
                    &lt; 5 Minuten
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unterer Übergang */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </section>
  );
}