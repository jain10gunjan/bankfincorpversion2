import { MessageCircle, Bot } from "lucide-react";

const FloatingButtons = () => {
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

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </button>

      {/* Chatbot Button */}
      <button
        onClick={handleChatbotClick}
        className="w-14 h-14 rounded-full gradient-hero text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Open Chatbot"
      >
        <Bot size={24} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;

