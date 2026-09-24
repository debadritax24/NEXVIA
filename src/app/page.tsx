import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { ProblemSection } from "@/components/landing/problem";
import { HowItWorks } from "@/components/landing/how-it-works";
import { SkillIntelligence } from "@/components/landing/skill-intelligence";
import { CareerPath } from "@/components/landing/career-path";
import { OpportunityMatching } from "@/components/landing/opportunity-matching";
import { SkillPassport } from "@/components/landing/skill-passport";
import { IndustryConnection } from "@/components/landing/industry-connection";
import { InstitutionIntelligence } from "@/components/landing/institution-intelligence";
import { FinalCTA } from "@/components/landing/final-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <SkillIntelligence />
        <CareerPath />
        <OpportunityMatching />
        <SkillPassport />
        <IndustryConnection />
        <InstitutionIntelligence />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
