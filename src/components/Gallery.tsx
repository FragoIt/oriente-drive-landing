import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    title: "Taller Especializado",
    description: "Equipamiento moderno y profesional"
  },
  {
    title: "Alineación de Precisión",
    description: "Tecnología de última generación"
  },
  {
    title: "Cambio de Suspensiones",
    description: "Expertos en todas las marcas"
  },
  {
    title: "Sistema de Frenos",
    description: "Tu seguridad es lo primero"
  },
  {
    title: "Diagnóstico Computarizado",
    description: "Scanner de alta precisión"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Taller en Acción
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnología de punta y experiencia al servicio de tu vehículo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group">
                      <div className="relative aspect-[4/3] bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/40 to-secondary/30 group-hover:from-primary/30 group-hover:via-accent/50 group-hover:to-secondary/40 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                              {image.title}
                            </h3>
                            <p className="text-white/90 drop-shadow-md">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-primary text-white border-none hover:bg-primary-glow" />
            <CarouselNext className="-right-12 bg-primary text-white border-none hover:bg-primary-glow" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
