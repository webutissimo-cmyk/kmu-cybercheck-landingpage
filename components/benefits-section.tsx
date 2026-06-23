const benefits = [
  {
    text: "In wenigen Minuten einen ersten Überblick erhalten",
    icon: "⏱",
  },
  {
    text: "Keine IT-Vorkenntnisse notwendig",
    icon: "👤",
  },
  {
    text: "Verständliche Fragen statt komplizierter Audit-Sprache",
    icon: "💬",
  },
  {
    text: "Risiko-Score für Geschäftsführung und Verantwortliche",
    icon: "📊",
  },
  {
    text: "NIS2-Ersteinschätzung inklusive",
    icon: "⚖️",
  },
  {
    text: "Sofortmaßnahmen für die wichtigsten Schwachstellen",
    icon: "🛡",
  },
  {
    text: "Ideal als Einstieg vor Beratung, Audit oder Penetrationstest",
    icon: "🚀",
  },
  {
    text: "Auch für Unternehmen geeignet, die mit Microsoft 365, Cloud-Diensten oder sensiblen Kundendaten arbeiten",
    icon: "☁️",
  },
];

export default function BenefitsSection() {
  return (
    <section id="vorteile" className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="section-label">
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Ihre Vorteile
            </div>
            <h2 className="section-title mb-4">
              Warum der Check für KMU{" "}
              <span className="gradient-text">sinnvoll ist</span>
            </h2>
            <p className="section-subtitle mb-8">
              Der KMU-Cybercheck wurde speziell für Unternehmen entwickelt, die
              keine eigene IT-Abteilung haben – aber trotzdem wissen wollen, wo
              sie stehen.
            </p>

            <a
              href="https://cyber-sicherheitsradar.de/check"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
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
          </div>

          {/* Right: Benefits List */}
          <div className="grid grid-cols-1 gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 bg-navy-900/50 border border-white/8 rounded-xl p-4 hover:border-cyber-500/25 hover:bg-navy-800/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyber-500/10 border border-cyber-500/20 flex items-center justify-center text-lg group-hover:bg-cyber-500/15 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <svg
                    className="w-4 h-4 text-cyber-400 flex-shrink-0"
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
                  <span className="text-navy-100 text-sm md:text-base leading-snug">
                    {benefit.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}