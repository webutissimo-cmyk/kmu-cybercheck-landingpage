import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import BenefitsSection from "@/components/benefits-section";
import TargetGroupsSection from "@/components/target-groups-section";
import NIS2Section from "@/components/nis2-section";
import ProcessSection from "@/components/process-section";
import TrustSection from "@/components/trust-section";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <TargetGroupsSection />
        <NIS2Section />
        <ProcessSection />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}