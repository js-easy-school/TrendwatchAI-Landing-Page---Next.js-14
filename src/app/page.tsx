import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HelpingSection from "@/components/HelpingSection";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Bonuses from "@/components/Bonuses";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <HelpingSection />
        <Features />
        <Pricing />
        <Bonuses />
        <FAQ />
        <FinalCTA />
        <BookSection />
      </main>
      <Footer />
    </>
  );
}
