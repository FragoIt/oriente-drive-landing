import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Promotions from "@/components/Promotions";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Promotions />
      <Features />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
