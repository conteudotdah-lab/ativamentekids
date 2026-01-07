import UrgencyBar from "@/components/landing/UrgencyBar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import ExclusiveBenefits from "@/components/landing/ExclusiveBenefits";
import Bonuses from "@/components/landing/Bonuses";
import Testimonials from "@/components/landing/Testimonials";
import AboutAuthor from "@/components/landing/AboutAuthor";
import PricingPlans from "@/components/landing/PricingPlans";
import Guarantee from "@/components/landing/Guarantee";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <Hero />
      <Benefits />
      <ExclusiveBenefits />
      <Bonuses />
      <Testimonials />
      <PricingPlans />
      <AboutAuthor />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
