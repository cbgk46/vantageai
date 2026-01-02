import Hero from "@/components/home/Hero";
import CredibilityStatement from "@/components/home/CredibilityStatement";
import IndustryProblems from "@/components/home/IndustryProblems";
import Framework from "@/components/home/Framework";
import Proof from "@/components/home/Proof";
import WhyTrustMe from "@/components/home/WhyTrustMe";
import FinalCTA from "@/components/home/FinalCTA";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CredibilityStatement />
      <IndustryProblems />
      <Framework />
      <Proof />
      <WhyTrustMe />
      <FinalCTA />
      <Footer />
    </main>
  );
}

