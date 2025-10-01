import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Ramírez",
    vehicle: "Toyota Hilux 2018",
    text: "Profesionales y honestos. Mi Hilux quedó como nueva después del cambio de amortiguadores.",
    rating: 5,
    initial: "C"
  },
  {
    name: "María González",
    vehicle: "Chevrolet Spark 2020",
    text: "Excelente servicio y precios justos. El diagnóstico fue preciso y la reparación perfecta.",
    rating: 5,
    initial: "M"
  },
  {
    name: "Jorge Martínez",
    vehicle: "Mazda CX-5 2019",
    text: "Rápidos y expertos. Mi carro va perfecto ahora, se siente como nuevo en la carretera.",
    rating: 5,
    initial: "J"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="relative section-padding overflow-hidden">
      {/* Dark gradient background matching hero */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTE2IDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-white mb-6 leading-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-h3 text-white/90 max-w-3xl mx-auto font-normal">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group transition-all duration-400 ease-standard hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up border-0"
              style={{ 
                animationDelay: `${index * 150}ms`,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* 5 Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">⭐</span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-white/90 mb-6 italic text-lg leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {/* Avatar with Initial */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: 'var(--gradient-cta)' }}
                  >
                    {testimonial.initial}
                  </div>
                  
                  {/* Name and Vehicle */}
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.vehicle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
