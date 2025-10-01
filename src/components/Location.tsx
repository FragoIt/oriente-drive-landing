import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Location = () => {
  const address = "Rionegro, Antioquia, Colombia";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rionegro+Antioquia+Colombia";
  
  return (
    <section className="py-20 bg-background">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63441.38219476429!2d-75.42349245!3d6.155287599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46829e6a0f5a3f%3A0x3b9b0b0b0b0b0b0b!2sRionegro%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1234567890"
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
                    <p className="text-muted-foreground">Lunes a Sábado</p>
                    <p className="text-foreground font-semibold">8:00 AM - 6:00 PM</p>
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
                      onClick={() => window.open('https://wa.me/573001234567', '_blank')}
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
