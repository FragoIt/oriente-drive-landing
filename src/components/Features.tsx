import { Badge, CheckCircle, Clock, MessageCircle, Shield, Trophy } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Repuestos Originales",
    description: "Trabajamos con repuestos certificados y de las mejores marcas"
  },
  {
    icon: Trophy,
    title: "Mano de Obra Especializada",
    description: "Técnicos certificados con años de experiencia"
  },
  {
    icon: Badge,
    title: "Promociones Mensuales",
    description: "Ofertas exclusivas cada mes para nuestros clientes"
  },
  {
    icon: MessageCircle,
    title: "Atención Inmediata",
    description: "Respuesta rápida por WhatsApp y atención personalizada"
  },
  {
    icon: CheckCircle,
    title: "Equipos Modernos",
    description: "Taller equipado con tecnología de punta"
  },
  {
    icon: Clock,
    title: "Servicio Ágil",
    description: "Tiempos de entrega rápidos sin comprometer la calidad"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Compromiso con la excelencia en cada servicio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-4 bg-primary/20 rounded-full">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
