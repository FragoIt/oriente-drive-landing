import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Tag } from "lucide-react";
import { promoHilux, ctaTaller } from "@/assets/index";

const promotions = [
  {
    title: "Compra 4 Llantas",
    description: "Recibe alineación y balanceo GRATIS",
    highlight: "¡Oferta Especial!",
    color: "bg-primary",
    image: ctaTaller
  },
  {
    title: "Paquete Hilux/Fortuner",
    description: "2 amortiguadores TOKIKO + 4 bujes tijera + alineación y balanceo",
    price: "$1.300.000",
    details: "Mano de obra incluida",
    highlight: "Promoción del Mes",
    color: "bg-secondary",
    image: promoHilux
  }
];

const Promotions = () => {
  const whatsappNumber = "573182819825";

  const handlePromoClick = (promo: string) => {
    const message = encodeURIComponent(`Hola, quiero información sobre la promoción: ${promo}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="promociones" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full mb-6">
            <Tag className="h-5 w-5" />
            <span className="font-semibold">Promociones Exclusivas</span>
          </div>
          <h2 className="text-h2 text-foreground mb-6">
            Ofertas del Mes
          </h2>
          <p className="text-h3 text-muted-foreground max-w-3xl mx-auto font-normal">
            Aprovecha nuestras promociones especiales y ahorra en el mantenimiento de tu vehículo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 hover:border-accent transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${promo.color}`} />
              
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-400 ease-standard group-hover:scale-110"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/20" />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block ${promo.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {promo.highlight}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-8">
                
                <h3 className="text-h3 text-foreground mb-3">
                  {promo.title}
                </h3>
                
                <p className="text-body text-muted-foreground mb-4">
                  {promo.description}
                </p>
                
                {promo.price && (
                  <div className="mb-4">
                    <p className="text-h3 text-primary">{promo.price}</p>
                    {promo.details && (
                      <p className="text-sm text-muted-foreground">{promo.details}</p>
                    )}
                  </div>
                )}
                
                <Button
                  className="w-full text-white font-semibold transition-all duration-400 ease-standard hover:-translate-y-0.5 hover:scale-[1.02]"
                  style={{ 
                    background: 'var(--gradient-cta)',
                    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.2)';
                  }}
                  onClick={() => handlePromoClick(promo.title)}
                >
                  <MessageCircle className="mr-2 h-5 w-5 transition-transform duration-400 ease-standard group-hover:scale-110" aria-hidden="true" />
                  Quiero esta promoción
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
