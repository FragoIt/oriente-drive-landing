import { 
  tallerAutomotriz, 
  servicioEvidencia, 
  trabajador, 
  serviceLlantas,
  revisionFrenes,
  llantasService 
} from "@/assets/index";

const galleryImages = [
  {
    title: "Taller Especializado",
    description: "Equipamiento moderno y profesional",
    image: tallerAutomotriz
  },
  {
    title: "Servicio de Calidad", 
    description: "Evidencia de nuestro trabajo profesional",
    image: servicioEvidencia
  },
  {
    title: "Equipo Especializado",
    description: "Técnicos expertos en suspensiones", 
    image: trabajador
  },
  {
    title: "Servicio de Llantas",
    description: "Cambio y balanceado profesional",
    image: serviceLlantas
  },
  {
    title: "Revisión de Frenos",
    description: "Tu seguridad es lo primero",
    image: revisionFrenes
  },
  {
    title: "Alineación de Llantas",
    description: "Servicio especializado de llantas",
    image: llantasService
  }
];

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-foreground mb-6">
            Nuestro Taller
          </h2>
          <p className="text-h3 text-muted-foreground max-w-3xl mx-auto font-normal">
            Instalaciones modernas y equipos de última tecnología
          </p>
        </div>

        {/* Grid Layout: 3 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-400 ease-standard hover:scale-105"
              style={{
                aspectRatio: '4/3',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.image})` }}
              />
              
              {/* Subtle overlay for better contrast */}
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Overlay gradient with text on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-standard flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-standard">
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm drop-shadow-md">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMTYgMzZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
