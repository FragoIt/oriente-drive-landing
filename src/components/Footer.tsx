import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Amortiguadores de Oriente</h3>
            <p className="opacity-80 mb-4">
              Tu taller de confianza en Rionegro para el cuidado integral de tu vehículo.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-3 opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Rionegro, Antioquia, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Lunes a Sábado</p>
                  <p className="font-semibold">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 opacity-80">
              <li>• Scanner Computarizado</li>
              <li>• Alineación y Balanceo</li>
              <li>• Suspensiones</li>
              <li>• Frenos</li>
              <li>• Llantas</li>
              <li>• Cambio de Aceite</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center opacity-80">
          <p>&copy; {new Date().getFullYear()} Amortiguadores de Oriente. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
