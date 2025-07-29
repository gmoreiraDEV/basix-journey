import Header from "@/components/lp/header";
import Hero from "@/components/lp/hero";
import Benefites from "@/components/lp/benefits";
import HowItWorks from "@/components/lp/how-it-works";
import Testimonials from "@/components/lp/testimonials";
import CTA from "@/components/lp/cta";
import Footer from "@/components/lp/footer";
import FAQ from "@/components/lp/faq";

export default function BasixJourneyLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefites />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
