import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FinalCTA = () => {
  const whatsappNumber = "573001234567"; // Replace with actual number
  const phoneNumber = "tel:+573001234567"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hola, quiero agendar una cita para mi vehículo");

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTE2IDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Que tu carro no te deje tirado
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Agenda tu cita hoy mismo y viaja con total tranquilidad
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-7 text-lg shadow-2xl transition-all hover:scale-105 hover:shadow-glow"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Agendar por WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-7 text-lg backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => window.location.href = phoneNumber}
            >
              <Phone className="mr-2 h-6 w-6" />
              Llamar Ahora
            </Button>
          </div>

          <p className="text-white/80 text-sm mt-8">
            ⚡ Respuesta inmediata • 🛠️ Servicio profesional • ✅ Garantía de calidad
          </p>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;
