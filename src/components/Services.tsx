import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Gauge, Settings, Disc, Circle, Droplets, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Scanner Computarizado",
    description: "Diagnóstico preciso de cualquier falla en tu vehículo"
  },
  {
    icon: Settings,
    title: "Alineación y Balanceo",
    description: "Geometría perfecta para mayor seguridad y ahorro"
  },
  {
    icon: Wrench,
    title: "Suspensiones y Amortiguadores",
    description: "Expertos en sistemas de suspensión de todas las marcas"
  },
  {
    icon: Disc,
    title: "Frenos",
    description: "Mantenimiento y reparación de sistema de frenos"
  },
  {
    icon: Circle,
    title: "Llantas",
    description: "Venta e instalación de llantas de las mejores marcas"
  },
  {
    icon: Droplets,
    title: "Cambio de Aceite",
    description: "Servicio completo con aceites certificados"
  }
];

const whatsappNumber = "573001234567";

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas para el mantenimiento de tu vehículo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceMessage = encodeURIComponent(`Hola, quiero cotizar ${service.title}`);
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors self-start">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary-glow text-white font-medium transition-all hover:scale-105"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${serviceMessage}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Cotiza ya por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
