const trustPoints = [
  {
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
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    title: "Entwickelt für KMU",
    description:
      "Keine Konzern-Sprache, keine überkomplexen Fragebögen. Der Check ist auf die Realität kleiner und mittlerer Unternehmen zugeschnitten.",
  },
  {
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
    title: "Verständlich statt kompliziert",
    description:
      "Kein IT-Fachjargon, keine Audit-Sprache. Die Fragen und Ergebnisse sind so formuliert, dass Geschäftsführer sie direkt verstehen.",
  },
  {
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Einstieg ohne Risiko",
    description:
      "Der kostenlose Check ist unverbindlich. Kein Konto, keine Kreditkarte, keine versteckten Kosten für den Einstieg.",
  },
  {
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
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Von Webutissimo S.L.",
    description:
      "Der KMU-SicherheitsRadar wurde von Webutissimo S.L. entwickelt, um KMU einen einfachen Einstieg in Cyber-Sicherheit, NIS2-Vorbereitung und digitale Risikobewertung zu ermöglichen.",
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-500/4 rounded-full blur-3xl pointer-events-none" />

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
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            Vertrauen & Transparenz
          </div>
          <h2 className="section-title mb-4">
            Entwickelt für KMU –{" "}
            <span className="gradient-text">verständlich statt kompliziert</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Der KMU-SicherheitsRadar wurde von Webutissimo S.L. entwickelt, um
            kleinen und mittleren Unternehmen einen einfachen Einstieg in
            Cyber-Sicherheit, NIS2-Vorbereitung und digitale Risikobewertung zu
            geben.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 card-dark hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyber-500/10 border border-cyber-500/20 flex items-center justify-center text-cyber-400 group-hover:bg-cyber-500/15 transition-colors duration-300">
                {point.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">
                  {point.title}
                </h3>
                <p className="text-navy-300 text-sm md:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Banner */}
        <div className="bg-gradient-to-r from-navy-800/80 via-navy-800/60 to-navy-800/80 border border-white/10 rounded-2xl p-8 md:p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-cyber-500/50 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-cyber-400"
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
            <span className="text-white font-bold text-xl font-heading">
              KMU-SicherheitsRadar
            </span>
          </div>
          <p className="text-navy-300 text-sm md:text-base max-w-xl mx-auto mb-6">
            Eine Lösung von Webutissimo S.L. – entwickelt, um KMU den Einstieg
            in Cyber-Sicherheit so einfach wie möglich zu machen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://cyber-sicherheitsradar.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Zur Hauptseite
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <a
              href="https://cyber-sicherheitsradar.de/preise"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-sm"
            >
              Preise & Funktionen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}