const solutionCards = [
  {
    step: "01",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Fragen beantworten",
    description:
      "Beantworten Sie verständliche Fragen zu Unternehmen, IT, E-Mail, Website, Backups und Organisation.",
    color: "cyber",
  },
  {
    step: "02",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Risiken erkennen",
    description:
      "Ihre Angaben werden ausgewertet und zu einem verständlichen Risiko-Score zusammengeführt.",
    color: "accent",
  },
  {
    step: "03",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
    title: "Maßnahmen erhalten",
    description:
      "Sie erhalten konkrete Empfehlungen, welche Schritte jetzt Priorität haben.",
    color: "green",
  },
];

export default function SolutionSection() {
  return (
    <section className="section-padding bg-section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="section-label justify-center">
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
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
            Die Lösung
          </div>
          <h2 className="section-title mb-4">
            Der einfache Einstieg in mehr{" "}
            <span className="gradient-text">Cyber-Sicherheit</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Der KMU-SicherheitsRadar ist ein verständlicher Online-Check für
            kleine und mittlere Unternehmen. Der Check kombiniert kurze Fragen
            mit einer automatischen Sicherheitsauswertung und zeigt, wo akuter
            Handlungsbedarf besteht.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {solutionCards.map((card, index) => (
            <div
              key={index}
              className="relative group card-glow hover:-translate-y-1"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-navy-700 border border-white/10 flex items-center justify-center">
                <span className="text-navy-300 text-xs font-bold">
                  {card.step}
                </span>
              </div>

              {/* Connector line (desktop) */}
              {index < solutionCards.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyber-500/40 to-transparent z-20" />
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  card.color === "cyber"
                    ? "bg-cyber-500/15 border border-cyber-500/30 text-cyber-400"
                    : card.color === "accent"
                    ? "bg-accent-500/15 border border-accent-500/30 text-accent-400"
                    : "bg-green-500/15 border border-green-500/30 text-green-400"
                }`}
              >
                {card.icon}
              </div>

              <h3 className="text-white font-bold text-lg md:text-xl mb-3">
                {card.title}
              </h3>
              <p className="text-navy-300 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://cyber-sicherheitsradar.de/check"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-flex"
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
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
            Jetzt kostenlosen Check starten
          </a>
          <p className="mt-3 text-navy-400 text-sm">
            Kostenlos · Unverbindlich · Sofort verfügbar
          </p>
        </div>
      </div>
    </section>
  );
}