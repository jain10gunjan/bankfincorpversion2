import { Bot } from "lucide-react";
import whatsappImage from "@/assets/heroimages/whatsapp.png";
import { useChatBot } from "./ChatBotWrapper";

const FloatingButtons = () => {
  const whatsappNumber = "919522444141";
  const defaultMessage = "Hello! I'm interested in your financial services.";
  const { openChatBot, isOpen } = useChatBot();

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group overflow-hidden"
        aria-label="Contact us on WhatsApp"
      >
        <img 
          src={whatsappImage} 
          alt="WhatsApp" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
        <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </button>

      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={openChatBot}
          className="w-14 h-14 rounded-full gradient-hero text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Open Chatbot"
        >
          <Bot size={24} className="group-hover:scale-110 transition-transform" />
          <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;

