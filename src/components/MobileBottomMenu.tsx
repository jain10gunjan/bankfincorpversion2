import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Home, Menu, Calculator, Phone, Briefcase, MessageCircle, Bot } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { bankFincorpServices } from "@/lib/utils";

const MobileBottomMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Calculators", path: "/calculators", icon: Calculator },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const whatsappNumber = "919522444141";
  const defaultMessage = "Hello! I'm interested in your financial services.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChatbotClick = () => {
    // You can integrate with your chatbot service here
    // For now, we'll show an alert or you can add your chatbot integration
    alert("Chatbot feature coming soon!");
    // Example: window.open('your-chatbot-url', '_blank');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Sticky Bottom Menu - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg md:hidden">
        <div className="flex items-center justify-around h-16 px-2">
          {/* Left Navigation Item */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home size={20} />
            <span className="text-xs mt-0.5">Home</span>
          </Link>

          {/* Services */}
          <Link
            to="/services"
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              isActive("/services") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Briefcase size={20} />
            <span className="text-xs mt-0.5">Services</span>
          </Link>

          {/* Center Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center justify-center h-full px-3"
          >
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-lg -mt-2">
              <Menu size={22} className="text-white" />
            </div>
            <span className="text-xs mt-0.5 text-primary">Menu</span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <div className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors">
              <MessageCircle size={18} className="text-white" />
            </div>
            <span className="text-xs mt-0.5 text-muted-foreground">WhatsApp</span>
          </button>

          {/* Chatbot Button */}
          <button
            onClick={handleChatbotClick}
            className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
            aria-label="Open Chatbot"
          >
            <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center transition-colors">
              <Bot size={18} className="text-white" />
            </div>
            <span className="text-xs mt-0.5 text-muted-foreground">Chat</span>
          </button>
        </div>
      </div>

      

      {/* Services Menu Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-center">Services & Shortcuts</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <div className="font-semibold">All Services</div>
                  <div className="text-sm text-muted-foreground mt-1">View all services</div>
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <div className="font-semibold">About Us</div>
                  <div className="text-sm text-muted-foreground mt-1">Learn more</div>
                </Link>
              </div>
            </div>

            {/* Service Shortcuts */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Service Shortcuts</h3>
              <div className="grid grid-cols-2 gap-3">
                {bankFincorpServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-semibold text-sm">{service.title}</div>
                    {service.tagline && (
                      <div className="text-xs text-muted-foreground mt-1">{service.tagline}</div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileBottomMenu;

