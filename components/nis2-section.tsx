const nis2Triggers = [
  {
    icon: "🏭",
    label: "Branche",
    description:
      "Bestimmte Branchen wie Energie, Gesundheit, Transport oder digitale Infrastruktur sind direkt betroffen.",
  },
  {
    icon: "👥",
    label: "Mitarbeiterzahl",
    description:
      "Ab 50 Mitarbeitenden können Unternehmen in den Anwendungsbereich fallen.",
  },
  {
    icon: "💰",
    label: "Umsatz",
    description:
      "Ein Jahresumsatz über 10 Mio. Euro kann zur NIS2-Betroffenheit führen.",
  },
  {
    icon: "🔗",
    label: "Zulieferer",
    description:
      "Als Zulieferer oder Dienstleister größerer Organisationen können Sie indirekt betroffen sein.",
  },
  {
    icon: "⚡",
    label: "Kritische Dienste",
    description:
      "Unternehmen, die kritische Dienstleistungen erbringen, fallen häufig unter NIS2.",
  },
];

export default function NIS2Section() {
  return (
    <section
      id="nis2"
      className="section-padding bg-navy-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
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
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              NIS2-Richtlinie
            </div>
            <h2 className="section-title mb-4">
              NIS2: Viele Unternehmen unterschätzen ihre{" "}
              <span className="gradient-text">Betroffenheit</span>
            </h2>
            <div className="space-y-4 text-navy-200 text-sm md:text-base leading-relaxed mb-8">
              <p>
                Die NIS2-Richtlinie ist seit Oktober 2024 in deutsches Recht
                umgesetzt und betrifft deutlich mehr Unternehmen als die
                Vorgängerregelung. Viele KMU gehen davon aus, dass NIS2 nur
                große Konzerne betrifft – das ist ein Irrtum.
              </p>
              <p>
                Auch kleine und mittlere Unternehmen können betroffen sein: zum
                Beispiel durch ihre Branche, Mitarbeiterzahl, Umsatz, kritische
                Dienstleistungen oder als Zulieferer größerer Organisationen.
                Wer betroffen ist, muss Sicherheitsmaßnahmen nachweisen und
                Vorfälle melden.
              </p>
              <p>
                Der erste Schritt ist herauszufinden, ob und wie stark Ihr
                Unternehmen betroffen sein könnte.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-navy-800/60 border border-amber-500/20 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
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
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  <strong className="text-amber-300">Hinweis:</strong> Der Check
                  ersetzt keine Rechtsberatung, gibt aber eine erste
                  Orientierung, ob Ihr Unternehmen genauer hinschauen sollte.
                </p>
              </div>
            </div>

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
              NIS2-Ersteinschätzung starten
            </a>
          </div>

          {/* Right: NIS2 Trigger Cards */}
          <div>
            <div className="bg-navy-900/60 border border-white/8 rounded-2xl p-6 md:p-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs">
                  !
                </span>
                Mögliche NIS2-Betroffenheit durch:
              </h3>
              <div className="space-y-4">
                {nis2Triggers.map((trigger, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-navy-800/50 border border-white/5 rounded-xl hover:border-amber-500/15 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-lg">
                      {trigger.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">
                        {trigger.label}
                      </div>
                      <div className="text-navy-300 text-xs leading-relaxed">
                        {trigger.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* NIS2 Badge */}
              <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl text-center">
                <div className="text-amber-300 font-bold text-sm mb-1">
                  Sind Sie betroffen?
                </div>
                <div className="text-navy-300 text-xs">
                  Der kostenlose Check gibt Ihnen eine erste Einschätzung.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}