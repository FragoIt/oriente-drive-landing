import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-automotive.jpg";

const Hero = () => {
  const whatsappNumber = "573001234567"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hola, quiero cotizar un servicio para mi vehículo");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Confianza y seguridad en cada kilómetro
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Especialistas en suspensiones, frenos y mantenimiento automotriz en Rionegro
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-white font-semibold px-8 py-6 text-lg shadow-glow transition-all hover:scale-105"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Cotizar ahora por WhatsApp
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
