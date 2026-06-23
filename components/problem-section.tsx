const problemItems = [
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    question: "Sind E-Mail und Website richtig abgesichert?",
    description:
      "Viele KMU nutzen E-Mail und Website täglich – ohne zu wissen, ob grundlegende Schutzmaßnahmen aktiv sind.",
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
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    question: "Gibt es klare Verantwortlichkeiten?",
    description:
      "Wer ist in Ihrem Unternehmen für IT-Sicherheit zuständig? Ohne klare Zuständigkeiten bleiben Risiken unbemerkt.",
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
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    question: "Sind Backups, Zugänge und Mitarbeiterschutz geregelt?",
    description:
      "Regelmäßige Backups, sichere Passwörter und geschulte Mitarbeitende sind die Basis – aber oft nicht vorhanden.",
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
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
    question: "Besteht möglicherweise eine NIS2-Betroffenheit?",
    description:
      "Die NIS2-Richtlinie betrifft mehr Unternehmen als gedacht – auch KMU können betroffen sein, ohne es zu wissen.",
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    question: "Gibt es Nachweispflichten gegenüber Kunden, Partnern oder Versicherungen?",
    description:
      "Immer mehr Geschäftspartner und Versicherungen fordern Nachweise über IT-Sicherheitsmaßnahmen.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/3 rounded-full blur-3xl pointer-events-none" />

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
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            Die Realität für KMU
          </div>
          <h2 className="section-title mb-4">
            Cyberangriffe treffen längst nicht mehr nur{" "}
            <span className="gradient-text">Konzerne</span>
          </h2>
          <p className="section-subtitle">
            Viele kleine und mittlere Unternehmen kennen ihre eigene
            Sicherheitslage nicht genau. Dabei sind die Fragen oft einfacher
            als gedacht – wenn man weiß, wo man hinschauen muss.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {problemItems.map((item, index) => (
            <div
              key={index}
              className="group bg-navy-900/60 border border-white/8 rounded-xl p-6 hover:border-red-500/20 hover:bg-navy-800/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/15 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base mb-2 leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group bg-gradient-to-br from-cyber-500/10 to-accent-600/10 border border-cyber-500/20 rounded-xl p-6 hover:border-cyber-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-cyber-500/20 border border-cyber-500/30 flex items-center justify-center text-cyber-400 mb-4">
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
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-2">
                Jetzt Klarheit schaffen
              </h3>
              <p className="text-navy-200 text-sm leading-relaxed mb-4">
                Ein einfacher Einstieg ist sinnvoll – bevor ein Vorfall passiert
                und es teuer wird.
              </p>
            </div>
            <a
              href="https://cyber-sicherheitsradar.de/check"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm w-full justify-center"
            >
              Check starten
            </a>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div className="bg-navy-900/60 border border-white/8 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                stat: "43%",
                label: "aller Cyberangriffe",
                sub: "richten sich gegen KMU",
              },
              {
                stat: "∅ 200.000 €",
                label: "Schaden pro Vorfall",
                sub: "bei kleinen Unternehmen",
              },
              {
                stat: "60%",
                label: "der betroffenen KMU",
                sub: "schließen innerhalb von 6 Monaten",
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl font-bold text-cyber-400 mb-1">
                  {item.stat}
                </div>
                <div className="text-white text-sm font-semibold">
                  {item.label}
                </div>
                <div className="text-navy-400 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}