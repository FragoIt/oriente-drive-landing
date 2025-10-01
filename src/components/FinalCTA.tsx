import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FinalCTA = () => {
  const whatsappNumber = "573182819825";
  const phoneNumber = "tel:+573182819825";
  const whatsappMessage = encodeURIComponent("Hola, necesito revisar mi vehículo urgente");

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTE2IDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-h2 text-white mb-8 leading-tight">
            ¿Listo para mejorar tu vehículo?
          </h2>
          <p className="text-h3 text-white/90 mb-12 font-normal">
            Agenda tu cita hoy mismo y viaja con total tranquilidad
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="text-white font-bold px-10 py-7 text-body shadow-2xl transition-all duration-400 ease-standard hover:-translate-y-0.5 hover:scale-[1.02]"
              style={{ 
                background: 'var(--gradient-cta)',
                boxShadow: '0 15px 35px rgba(245, 158, 11, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(245, 158, 11, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(245, 158, 11, 0.4)';
              }}
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Agendar por WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-3 border-accent text-white hover:bg-accent/20 hover:border-accent/60 font-bold px-10 py-7 text-body backdrop-blur-sm transition-all duration-400 ease-standard hover:-translate-y-0.5 hover:scale-[1.02]"
              style={{
                boxShadow: '0 8px 25px rgba(245, 158, 11, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(245, 158, 11, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.2)';
              }}
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
