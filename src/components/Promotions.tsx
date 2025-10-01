import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Tag } from "lucide-react";

const promotions = [
  {
    title: "Compra 4 Llantas",
    description: "Recibe alineación y balanceo GRATIS",
    highlight: "¡Oferta Especial!",
    color: "bg-primary"
  },
  {
    title: "Paquete Hilux/Fortuner",
    description: "2 amortiguadores TOKIKO + 4 bujes tijera + alineación y balanceo",
    price: "$1.300.000",
    details: "Mano de obra incluida",
    highlight: "Promoción del Mes",
    color: "bg-secondary"
  }
];

const Promotions = () => {
  const whatsappNumber = "573001234567";

  const handlePromoClick = (promo: string) => {
    const message = encodeURIComponent(`Hola, quiero información sobre la promoción: ${promo}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Tag className="h-5 w-5" />
            <span className="font-semibold">Promociones Exclusivas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ofertas del Mes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestras promociones especiales y ahorra en el mantenimiento de tu vehículo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${promo.color}`} />
              
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className={`inline-block ${promo.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {promo.highlight}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {promo.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-4">
                  {promo.description}
                </p>
                
                {promo.price && (
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-primary">{promo.price}</p>
                    {promo.details && (
                      <p className="text-sm text-muted-foreground">{promo.details}</p>
                    )}
                  </div>
                )}
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-glow text-white font-semibold group-hover:scale-105 transition-transform"
                  onClick={() => handlePromoClick(promo.title)}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
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
