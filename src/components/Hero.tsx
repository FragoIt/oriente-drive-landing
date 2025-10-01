import { Button } from "@/components/ui/button";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-automotive.jpg";
import { heroVideo } from "@/assets/index";

const Hero = () => {
  const whatsappNumber = "573182819825";
  const phoneNumber = "tel:+573182819825";
  const whatsappMessage = encodeURIComponent("Hola, necesito revisar mi vehículo urgente");

  // Counter animations for stats
  const clientsCount = useCounterAnimation({ end: 5000, suffix: '+', duration: 2500 });
  const experienceCount = useCounterAnimation({ end: 15, suffix: '+', duration: 2000 });
  const guaranteeCount = useCounterAnimation({ end: 100, suffix: '%', duration: 1500 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
            preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallbackDiv) fallbackDiv.style.display = 'block';
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
        
        {/* Radial gradient for focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto section-padding">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent px-6 py-3 rounded-full mb-8 animate-scale-in">
            <span className="text-xl">✨</span>
            <span className="font-semibold text-sm">15+ Años en Rionegro</span>
          </div>

          {/* Massive H1 with Gradient Highlight */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            <span 
              className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent"
            >
              Amortiguadores
            </span>
            <br />
            <span className="text-white">de Oriente</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-normal mb-12 leading-relaxed" style={{ color: '#CBD5E1' }}>
            Devolvemos la confianza a tu vehículo.<br />
            <span className="text-accent font-semibold">Tu seguridad no se negocia.</span> Nosotros la garantizamos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button 
              size="lg"
              className="font-bold text-base sm:text-lg text-white transition-all duration-400 ease-standard hover:-translate-y-0.5 hover:scale-[1.02] animate-subtle-pulse cta-pulse w-full sm:w-auto"
              style={{ 
                background: 'var(--gradient-cta)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
                fontWeight: '700'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(245, 158, 11, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(245, 158, 11, 0.4)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <span className="relative z-10">
                🎁 Revisión GRATIS
              </span>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="font-bold text-base sm:text-lg text-white transition-all duration-400 ease-standard hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/20 hover:border-white/40 w-full sm:w-auto"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '700',
                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
              }}
              onClick={() => window.location.href = phoneNumber}
            >
              📞 Llamar Ahora
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl md:text-3xl font-black text-accent mb-2">
                <span ref={clientsCount.countRef}>{clientsCount.count}</span>
              </div>
              <div className="text-white/80 font-medium">Vehículos Reparados</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl md:text-3xl font-black text-accent mb-2">
                <span ref={experienceCount.countRef}>{experienceCount.count}</span>
              </div>
              <div className="text-white/80 font-medium">Años de Experiencia</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl md:text-3xl font-black text-accent mb-2">
                <span ref={guaranteeCount.countRef}>{guaranteeCount.count}</span>
              </div>
              <div className="text-white/80 font-medium">Garantía Total</div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
