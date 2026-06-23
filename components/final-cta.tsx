export default function FinalCTA() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Radar rings decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full border border-cyber-500/8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[600px] h-[600px] rounded-full border border-cyber-500/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[800px] h-[800px] rounded-full border border-cyber-500/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-cyber-500/10 border border-cyber-500/20 animate-pulse-slow" />
              <div className="absolute inset-2 rounded-full border border-cyber-500/15" />
              <svg
                className="w-10 h-10 text-cyber-400 relative z-10 drop-shadow-[0_0_15px_rgba(0,204,255,0.5)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading">
            Finden Sie jetzt heraus, wo Ihr{" "}
            <span className="gradient-text">Unternehmen steht.</span>
          </h2>

          {/* Text */}
          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Starten Sie den kostenlosen Cyber-Sicherheitscheck und erhalten Sie
            eine erste Orientierung zu Risiken, NIS2 und konkreten Maßnahmen.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Kostenlos",
              "Keine Registrierung",
              "Sofort verfügbar",
              "NIS2-Ersteinschätzung",
              "Risiko-Score",
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 bg-navy-800/60 border border-white/10 rounded-full px-4 py-1.5 text-navy-200 text-xs md:text-sm font-medium"
              >
                <svg
                  className="w-3.5 h-3.5 text-cyber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cyber-sicherheitsradar.de/check"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base md:text-lg px-10 py-4 shadow-cyber-lg"
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
              Jetzt kostenlosen Cybercheck starten
            </a>
            {/* Link geändert von /preise auf / */}
            <a
              href="https://cyber-sicherheitsradar.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base md:text-lg px-10 py-4"
            >
              Alle Funktionen ansehen
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-6 text-navy-500 text-xs md:text-sm">
            KMU-Cybercheck ist eine Landingpage des KMU-SicherheitsRadar – eine
            Lösung von Webutissimo S.L.
          </p>
        </div>
      </div>
    </section>
  );
}