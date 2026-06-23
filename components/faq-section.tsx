"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Ist der Cyber-Sicherheitscheck wirklich kostenlos?",
    answer:
      "Ja, der Einstieg ist kostenlos. Sie erhalten eine erste Einschätzung Ihrer Sicherheitslage und können anschließend entscheiden, ob Sie weitere Funktionen nutzen möchten.",
  },
  {
    question: "Brauche ich technisches Vorwissen?",
    answer:
      "Nein. Die Fragen sind so formuliert, dass auch Geschäftsführer und Inhaber ohne IT-Abteilung sie beantworten können.",
  },
  {
    question: "Was wird geprüft?",
    answer:
      "Der Check betrachtet unter anderem Organisation, Website, E-Mail-Sicherheit, Backups, Zugänge, Cloud-Nutzung, NIS2-Relevanz und grundlegende Sicherheitsmaßnahmen.",
  },
  {
    question: "Ersetzt der Check ein Audit oder einen Penetrationstest?",
    answer:
      "Nein. Der Check ist ein verständlicher Einstieg und hilft, Risiken und Prioritäten zu erkennen. Für tiefgehende technische Prüfungen können später Audits oder Penetrationstests sinnvoll sein.",
  },
  {
    question: "Ist der Check für NIS2 geeignet?",
    answer:
      "Der Check enthält eine NIS2-Ersteinschätzung. Diese ersetzt keine Rechtsberatung, hilft aber dabei, mögliche Betroffenheit und Handlungsbedarf frühzeitig zu erkennen.",
  },
  {
    question: "Was passiert nach dem Check?",
    answer:
      "Sie erhalten eine verständliche Auswertung mit Risiko-Score und konkreten Maßnahmen. Je nach Bedarf können weitere Reports, Monitoring oder professionelle Unterstützung genutzt werden.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-cyber-500/30 bg-navy-800/60"
          : "border-white/8 bg-navy-900/40 hover:border-white/15"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-sm md:text-base leading-snug transition-colors duration-200 ${
            isOpen ? "text-cyber-300" : "text-white"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-cyber-500/40 bg-cyber-500/10 text-cyber-400 rotate-180"
              : "border-white/20 text-navy-300"
          }`}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="h-px bg-white/5 mb-4" />
          <p className="text-navy-200 text-sm md:text-base leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-section-gradient relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-500/4 rounded-full blur-3xl pointer-events-none" />

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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            Häufige Fragen
          </div>
          <h2 className="section-title mb-4">
            Ihre Fragen zum{" "}
            <span className="gradient-text">KMU-Cybercheck</span>
          </h2>
          <p className="section-subtitle">
            Hier finden Sie Antworten auf die häufigsten Fragen zum kostenlosen
            Cyber-Sicherheitscheck.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-navy-300 text-sm md:text-base mb-4">
            Noch weitere Fragen? Besuchen Sie die Hauptseite des
            KMU-SicherheitsRadar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://cyber-sicherheitsradar.de/check"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
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
              Kostenlosen Check starten
            </a>
            <a
              href="https://cyber-sicherheitsradar.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Zur Hauptseite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}