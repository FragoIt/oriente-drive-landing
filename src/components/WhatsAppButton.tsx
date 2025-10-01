import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "573001234567"; // Replace with actual number
  const message = encodeURIComponent("Hola, quiero información sobre sus servicios");

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full h-16 w-16 p-0 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white animate-glow"
      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppButton;
