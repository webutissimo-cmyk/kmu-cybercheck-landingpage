const steps = [
  {
    number: "1",
    title: "Unternehmensdaten eingeben",
    description:
      "Geben Sie grundlegende Informationen zu Ihrem Unternehmen ein – Branche, Größe und digitale Infrastruktur.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Sicherheitsfragen beantworten",
    description:
      "Beantworten Sie verständliche Fragen zu Organisation, IT-Infrastruktur, Zugängen, Backups und Mitarbeiterschutz.",
    icon: (
      <svg
        className="w-6 h-6"
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
  },
  {
    number: "3",
    title: "Website- und E-Mail-Sicherheit einschätzen lassen",
    description:
      "Der Check analysiert automatisch grundlegende Sicherheitsaspekte Ihrer Website und E-Mail-Konfiguration.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
        />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Risiko-Score und erste Maßnahmen erhalten",
    description:
      "Sie erhalten sofort eine verständliche Auswertung mit Ihrem persönlichen Risiko-Score und konkreten Handlungsempfehlungen.",
    icon: (
      <svg
        className="w-6 h-6"
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
  },
];

export default function ProcessSection() {
  return (
    <section
      id="prozess"
      className="section-padding bg-section-gradient relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyber-500/4 rounded-full blur-3xl pointer-events-none" />

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
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            So funktioniert es
          </div>
          <h2 className="section-title mb-4">
            So funktioniert der kostenlose{" "}
            <span className="gradient-text">Cyber-Sicherheitscheck</span>
          </h2>
          <p className="section-subtitle">
            In vier einfachen Schritten zu Ihrer persönlichen
            Sicherheitseinschätzung – ohne technisches Vorwissen.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-500/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy-800 border-2 border-cyber-500/30 flex items-center justify-center text-cyber-400 group-hover:border-cyber-500/60 group-hover:bg-navy-700 transition-all duration-300 shadow-cyber-sm relative z-10">
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyber-500 flex items-center justify-center z-20">
                    <span className="text-navy-950 text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-base md:text-lg mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note + CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-cyber-500/10 border border-cyber-500/20 rounded-full px-5 py-2 mb-6">
            <svg
              className="w-4 h-4 text-cyber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span className="text-cyber-300 text-sm font-medium">
              Der Einstieg ist kostenlos und unverbindlich.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cyber-sicherheitsradar.de/check"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
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
              Jetzt starten
            </a>
            <a
              href="https://cyber-sicherheitsradar.de/preise"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-8 py-4"
            >
              Alle Funktionen & Preise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}