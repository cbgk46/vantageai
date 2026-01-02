import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import IndustriesFocus from "@/components/home/IndustriesFocus";
import Approach from "@/components/home/Approach";
import InsightsPreview from "@/components/home/InsightsPreview";
import FinalCTA from "@/components/home/FinalCTA";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesOverview />
      <IndustriesFocus />
      <Approach />
      <InsightsPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}

