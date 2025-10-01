import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencySection = () => {
  const whatsappNumber = "573182819825"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("🚨 OFERTA LIMITADA: Quiero mi revisión + diagnóstico GRATIS este mes");

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end of month as deadline
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endOfMonth.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Vibrant amber/orange gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 25%, #dc2626 50%, #ea580c 75%, #f59e0b 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 8s ease infinite'
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMTYgMzZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Limited offer badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 animate-pulse">
          <Clock className="h-5 w-5 text-white" />
          <span className="text-white font-bold text-lg">⏰ OFERTA LIMITADA</span>
        </div>

        {/* Main headline */}
        <h2 className="text-h1 text-white mb-6 leading-tight font-black">
          ¿Tu Vehículo Necesita
          <br />
          <span className="text-white/90 relative">
            Atención YA?
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded-full"></div>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-h2 text-white/95 mb-12 font-bold max-w-4xl mx-auto">
          Solo este mes: <span className="bg-white/20 px-4 py-2 rounded-lg">Revisión + diagnóstico GRATIS</span>
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] border border-white/30">
              <div className="text-3xl font-black text-white mb-1">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm font-semibold uppercase">
                {unit === 'days' ? 'Días' : unit === 'hours' ? 'Hrs' : unit === 'minutes' ? 'Min' : 'Seg'}
              </div>
            </div>
          ))}
        </div>

        {/* Large CTA Button */}
        <Button 
          size="lg"
          className="text-amber-600 font-black text-2xl transition-all duration-400 ease-standard hover:-translate-y-1 hover:scale-[1.02] animate-bounce"
          style={{ 
            background: 'white',
            padding: '1.5rem 3rem',
            borderRadius: '60px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
            fontWeight: '900'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.4)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.background = 'white';
          }}
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
        >
          <MessageCircle className="mr-3 h-8 w-8" />
          🚨 Agendar Ahora
        </Button>

        <p className="text-white/90 text-lg mt-8 font-semibold">
          ⚡ Respuesta inmediata • 🎁 Sin compromiso • ✅ Solo este mes
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default UrgencySection;