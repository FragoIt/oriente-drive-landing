import { Badge, CheckCircle, Clock, MessageCircle, Shield, Trophy } from "lucide-react";
import { infoAmortiguador } from "@/assets/index";

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
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 mb-6">
            Por qué elegir Amortiguadores de Oriente
          </h2>
          <p className="text-h3 opacity-90 max-w-3xl mx-auto font-normal">
            Más de 10 años brindando soluciones automotrices con tecnología de punta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-4 bg-accent/20 rounded-full">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-h3 mb-2">
                {feature.title}
              </h3>
              <p className="opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Educational Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                    ¿Sabías que?
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  La Importancia de los Amortiguadores
                </h3>
                <div className="space-y-4 text-lg opacity-90">
                  <p>
                    Los amortiguadores son fundamentales para la seguridad de tu vehículo. 
                    No solo proporcionan comodidad, sino que también:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Mantienen las llantas en contacto con el pavimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Reducen las distancias de frenado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Mejoran la estabilidad en curvas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Protegen otros componentes del vehículo</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <img 
                  src={infoAmortiguador} 
                  alt="Información sobre amortiguadores"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
