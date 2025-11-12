import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Home, Menu, Calculator, Phone, Briefcase, Bot, Users } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { bankFincorpServices } from "@/lib/utils";
import whatsappImage from "@/assets/heroimages/whatsapp.png";
import { useChatBot } from "./ChatBotWrapper";

const MobileBottomMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openChatBot } = useChatBot();

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
    openChatBot();
  };

  const handleDSAClick = () => {
    alert("DSA feature coming soon!");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Sticky Bottom Menu - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg md:hidden w-full max-w-full overflow-hidden">
        <div className="flex items-center justify-evenly h-16 px-0.5 w-full max-w-full">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center justify-center flex-1 min-w-0 h-full transition-colors px-0.5"
          >
            <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center shadow-md mb-0.5">
              <Menu size={16} className="text-white" />
            </div>
            <span className="text-[9px] leading-tight text-primary font-medium whitespace-nowrap">Menu</span>
          </button>

          {/* Home */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center flex-1 min-w-0 h-full transition-colors px-0.5 ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center mb-0.5">
              <Home size={16} />
            </div>
            <span className="text-[9px] leading-tight whitespace-nowrap">Home</span>
          </Link>

          {/* Services */}
          <Link
            to="/services"
            className={`flex flex-col items-center justify-center flex-1 min-w-0 h-full transition-colors px-0.5 ${
              isActive("/services") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center mb-0.5">
              <Briefcase size={16} />
            </div>
            <span className="text-[9px] leading-tight whitespace-nowrap">Services</span>
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact"
            className={`flex flex-col items-center justify-center flex-1 min-w-0 h-full transition-colors px-0.5 ${
              isActive("/contact") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center mb-0.5">
              <Phone size={16} />
            </div>
            <span className="text-[9px] leading-tight whitespace-nowrap">Contact</span>
          </Link>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center justify-center flex-1 min-w-0 h-full transition-colors px-0.5"
            aria-label="Contact us on WhatsApp"
          >
            <div className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors mb-0.5 shadow-sm overflow-hidden">
              <img 
                src={whatsappImage} 
                alt="WhatsApp" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[9px] leading-tight text-muted-foreground whitespace-nowrap">WhatsApp</span>
          </button>

          {/* Chatbot Button */}
          <button
            onClick={handleChatbotClick}
            className="flex flex-col items-center justify-center flex-1 min-w-0 h-full transition-colors px-0.5"
            aria-label="Open Chatbot"
          >
            <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center transition-colors mb-0.5 shadow-sm">
              <Bot size={16} className="text-white" />
            </div>
            <span className="text-[9px] leading-tight text-muted-foreground whitespace-nowrap">Chat</span>
          </button>

          {/* DSA Button - Coming Soon */}
          <button
            onClick={handleDSAClick}
            className="flex flex-col items-center justify-center flex-1 min-w-0 h-full transition-colors opacity-70 px-0.5"
            aria-label="DSA - Coming Soon"
          >
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center transition-colors mb-0.5">
              <Users size={16} className="text-muted-foreground" />
            </div>
            <span className="text-[9px] leading-tight text-muted-foreground whitespace-nowrap">DSA</span>
            <span className="text-[8px] leading-tight text-muted-foreground/70 whitespace-nowrap">Soon</span>
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

