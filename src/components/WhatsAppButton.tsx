import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "573182819825"; // Replace with actual number
  const message = encodeURIComponent("Hola, quiero información sobre sus servicios");

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse"></div>
      
      <Button
        size="lg"
  className="relative rounded-full h-14 w-14 md:h-16 md:w-16 p-0 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-400 ease-standard hover:-translate-y-2 hover:scale-110 group"
        style={{
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.4)';
        }}
        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')}
        aria-label="Contactar por WhatsApp"
      >
  <MessageCircle className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-400 ease-standard group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" />
      </Button>
      
      {/* Tooltip - only show on desktop */}
      <div className="absolute bottom-full right-0 mb-3 hidden md:group-hover:block">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          ¡Chatea con nosotros!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
