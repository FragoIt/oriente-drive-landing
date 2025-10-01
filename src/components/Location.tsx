import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Location = () => {
  const address = "Carrera 52 #50-15, Centro, Rionegro, Antioquia";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Carrera+52+50-15+Rionegro+Antioquia+Colombia";
  
  return (
    <section id="contacto" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Encuéntranos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visítanos en nuestro taller en Rionegro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.848717726464!2d-75.37663168715821!3d6.15528758637845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468298b7be52f7%3A0x4b5b4b4b4b4b4b4b!2sCarrera%2052%2C%20Rionegro%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1696181234567"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Amortiguadores de Oriente"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Dirección</h3>
                    <p className="text-muted-foreground">{address}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary mt-2"
                      onClick={() => window.open(googleMapsUrl, '_blank')}
                    >
                      <Navigation className="h-4 w-4 mr-1" />
                      Cómo llegar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Horarios</h3>
                    <p className="text-muted-foreground">Lunes a Viernes</p>
                    <p className="text-foreground font-semibold">7:30 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sábados: 8:00 AM - 4:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-2">Domingos cerrado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contacto</h3>
                    <p className="text-muted-foreground mb-2">Escríbenos por WhatsApp</p>
                    <Button 
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                      onClick={() => window.open('https://wa.me/573182819825', '_blank')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Contactar ahora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
