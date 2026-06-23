import Link from "next/link";

const footerLinks = {
  check: [
    {
      label: "Zum Cyber-Sicherheitscheck",
      href: "https://cyber-sicherheitsradar.de/check",
    },
    {
      label: "Preise & Funktionen",
      href: "https://cyber-sicherheitsradar.de/preise",
    },
    {
      label: "Hauptseite KMU-SicherheitsRadar",
      href: "https://cyber-sicherheitsradar.de/",
    },
  ],
  legal: [
    {
      label: "Impressum",
      href: "https://cyber-sicherheitsradar.de/impressum",
    },
    {
      label: "Datenschutz",
      href: "https://cyber-sicherheitsradar.de/datenschutz",
    },
  ],
  topics: [
    { label: "KMU Cybercheck", href: "https://cyber-sicherheitsradar.de/check" },
    { label: "NIS2 für KMU", href: "https://cyber-sicherheitsradar.de/check" },
    { label: "IT-Sicherheit KMU", href: "https://cyber-sicherheitsradar.de/check" },
    { label: "Risiko-Score", href: "https://cyber-sicherheitsradar.de/check" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/8 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyber-500/30 to-transparent" />

      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-cyber-500/50" />
                <div className="absolute inset-1.5 rounded-full border border-cyber-500/25" />
                <svg
                  className="w-4 h-4 text-cyber-400 relative z-10"
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
              <div>
                <div className="text-white font-bold text-base font-heading">
                  KMU<span className="text-cyber-400">Cybercheck</span>
                </div>
                <div className="text-navy-400 text-xs">
                  powered by KMU-SicherheitsRadar
                </div>
              </div>
            </div>

            <p className="text-navy-400 text-sm leading-relaxed mb-5">
              Kostenloser Cyber-Sicherheitscheck für kleine und mittlere
              Unternehmen. Risiken erkennen, bevor es teuer wird.
            </p>

            <a
              href="https://cyber-sicherheitsradar.de/check"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5 inline-flex"
            >
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
              Check starten
            </a>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              KMU-SicherheitsRadar
            </h3>
            <ul className="space-y-3">
              {footerLinks.check.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-cyber-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyber-400"
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
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Themen
            </h3>
            <ul className="space-y-3">
              {footerLinks.topics.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-cyber-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyber-400"
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
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-cyber-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyber-400"
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
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Security badge */}
            <div className="bg-navy-900/60 border border-white/8 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
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
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <span className="text-white text-xs font-semibold">
                  Datenschutz
                </span>
              </div>
              <p className="text-navy-400 text-xs leading-relaxed">
                Ihre Daten werden vertraulich behandelt und nicht an Dritte
                weitergegeben.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-navy-500 text-xs text-center md:text-left">
            <p>
              © {currentYear} KMU-Cybercheck · Eine Landingpage des
              KMU-SicherheitsRadar
            </p>
            <p className="mt-1">
              KMU-Cybercheck ist eine Landingpage des KMU-SicherheitsRadar –
              eine Lösung von{" "}
              <a
                href="https://cyber-sicherheitsradar.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-cyber-400 transition-colors duration-200"
              >
                Webutissimo S.L.
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://cyber-sicherheitsradar.de/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-500 hover:text-navy-300 text-xs transition-colors duration-200"
            >
              Impressum
            </a>
            <span className="text-navy-700">·</span>
            <a
              href="https://cyber-sicherheitsradar.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-500 hover:text-navy-300 text-xs transition-colors duration-200"
            >
              Datenschutz
            </a>
            <span className="text-navy-700">·</span>
            <a
              href="https://cyber-sicherheitsradar.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-500 hover:text-cyber-400 text-xs transition-colors duration-200"
            >
              KMU-SicherheitsRadar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}