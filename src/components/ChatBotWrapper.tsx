import { useState, createContext, useContext } from "react";
import ChatBot from "./ChatBot";

interface ChatBotContextType {
  openChatBot: () => void;
  closeChatBot: () => void;
  isOpen: boolean;
}

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (!context) {
    throw new Error("useChatBot must be used within ChatBotProvider");
  }
  return context;
};

export const ChatBotProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatBot = () => setIsOpen(true);
  const closeChatBot = () => setIsOpen(false);

  return (
    <ChatBotContext.Provider value={{ openChatBot, closeChatBot, isOpen }}>
      {children}
      <ChatBot initialOpen={isOpen} onClose={closeChatBot} />
    </ChatBotContext.Provider>
  );
};

