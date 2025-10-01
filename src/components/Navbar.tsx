import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { throttle } from "@/utils/performance";
import logoEmpresa from "@/assets/logo_empresa.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const whatsappNumber = "573182819825";
  const phoneNumber = "tel:+573182819825";
  const whatsappMessage = encodeURIComponent("Hola, necesito información sobre sus servicios");

  // Scroll behavior with throttling for performance
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { label: "Inicio", href: "hero" },
    { label: "Servicios", href: "servicios" },
    { label: "Promociones", href: "promociones" },
    { label: "Galería", href: "galeria" },
    { label: "Testimonios", href: "testimonios" },
    { label: "Contacto", href: "contacto" }
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-standard ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={() => handleNavClick('hero')}
                className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                aria-label="Ir al inicio"
              >
                <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden ring-2 transition-all duration-300 ${isScrolled ? 'ring-primary-dark/20' : 'ring-white/40 group-hover:ring-accent/60'}`}> 
                  <img 
                    src={logoEmpresa} 
                    alt="Logo Amortiguadores de Oriente" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="text-left leading-tight">
                  <span 
                    className={`block text-sm md:text-base font-bold tracking-wide transition-colors ${
                      isScrolled ? 'text-primary-dark' : 'text-white'
                    }`}
                  >
                    Amortiguadores
                  </span>
                  <span 
                    className={`block text-xs md:text-sm font-semibold tracking-wide bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent`}
                  >
                    de Oriente
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 lg:ml-12 xl:ml-16">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-semibold text-sm xl:text-base transition-all duration-300 hover:scale-105 px-2 py-1 rounded-md ${
                    isScrolled 
                      ? 'text-primary-dark hover:text-accent hover:bg-accent/10' 
                      : 'text-white hover:text-accent hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <Button
                size="sm"
                variant="outline"
                className={`transition-all duration-300 hover:scale-105 text-xs lg:text-sm px-3 lg:px-4 py-2 ${
                  isScrolled 
                    ? 'border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-primary-dark'
                }`}
                onClick={() => window.location.href = phoneNumber}
              >
                <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Llamar</span>
                <span className="lg:hidden">📞</span>
              </Button>
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white transition-all duration-300 hover:scale-105 text-xs lg:text-sm px-3 lg:px-4 py-2"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">WhatsApp</span>
                <span className="lg:hidden">💬</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:flex lg:hidden p-2 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className={`h-5 w-5 md:h-6 md:w-6 ${isScrolled ? 'text-primary-dark' : 'text-white'}`} />
              ) : (
                <Menu className={`h-5 w-5 md:h-6 md:w-6 ${isScrolled ? 'text-primary-dark' : 'text-white'}`} />
              )}
            </button>

            {/* Mobile CTA Button (visible only on small screens) */}
            <div className="md:hidden">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white transition-all duration-300 text-xs px-3 py-1.5"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-standard ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white/98 backdrop-blur-md border-t border-gray-200/30 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-1 mb-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-primary-dark font-semibold text-left py-3 px-4 rounded-lg hover:text-accent hover:bg-accent/10 transition-all duration-200 transform hover:translate-x-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center">
                      <span className="w-1 h-1 bg-accent rounded-full mr-3"></span>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200/50">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 flex-1"
                  onClick={() => window.location.href = phoneNumber}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar Ahora
                </Button>
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white transition-all duration-300 flex-1"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>

              {/* Contact Info in Mobile Menu */}
              <div className="mt-6 pt-4 border-t border-gray-200/50">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">📍 Rionegro, Antioquia</p>
                  <p className="text-xs text-gray-500">🕒 Lun - Sáb: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;