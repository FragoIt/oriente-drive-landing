import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Promotions from "@/components/Promotions";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import UrgencySection from "@/components/UrgencySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <Promotions />
      <Features />
  <Team />
      <Gallery />
      <Testimonials />
      <Location />
      <FinalCTA />
      <UrgencySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
