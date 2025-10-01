import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Gauge, Settings, Disc, Circle, Droplets, MessageCircle } from "lucide-react";
import { 
  amortiguadorProducto, 
  freneros, 
  muellesProducto, 
  variedadRepuestos,
  serviceLlantas,
  trabajador
} from "@/assets/index";

const services = [
  {
    icon: Gauge,
    title: "Scanner Computarizado",
    description: "Diagnóstico preciso de cualquier falla en tu vehículo",
    image: trabajador
  },
  {
    icon: Settings,
    title: "Alineación y Balanceo", 
    description: "Geometría perfecta para mayor seguridad y ahorro",
    image: serviceLlantas
  },
  {
    icon: Wrench,
    title: "Suspensiones y Amortiguadores",
    description: "Expertos en sistemas de suspensión de todas las marcas",
    image: amortiguadorProducto
  },
  {
    icon: Disc,
    title: "Frenos",
    description: "Mantenimiento y reparación de sistema de frenos",
    image: freneros
  },
  {
    icon: Circle,
    title: "Muelles y Resortes",
    description: "Cambio e instalación de muelles para todas las marcas",
    image: muellesProducto
  },
  {
    icon: Droplets,
    title: "Repuestos Originales",
    description: "Amplia variedad de repuestos certificados",
    image: variedadRepuestos
  }
];

const whatsappNumber = "573182819825";

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-h3 text-muted-foreground max-w-3xl mx-auto font-normal">
            Soluciones completas para el mantenimiento de tu vehículo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceMessage = encodeURIComponent(`Hola, quiero cotizar ${service.title}`);
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden animate-fade-in-up border-border/50 transition-all duration-400 ease-standard hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Gradient Border Top - Appears on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-yellow-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-standard" />
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-400 ease-standard group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 p-3 bg-accent/90 backdrop-blur-sm rounded-xl">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-2 transition-colors duration-400 ease-standard group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow transition-colors duration-400 ease-standard group-hover:text-foreground/80">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full text-white font-medium transition-all duration-400 ease-standard hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(245,158,11,0.3)]"
                    style={{ 
                      background: 'var(--gradient-cta)',
                      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.2)'
                    }}
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${serviceMessage}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4 transition-transform duration-400 ease-standard group-hover:scale-110" aria-hidden="true" />
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
