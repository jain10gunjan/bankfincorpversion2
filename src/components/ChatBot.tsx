import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface QuickQuestion {
  id: string;
  text: string;
  category: string;
}

interface ChatBotProps {
  initialOpen?: boolean;
  onClose?: () => void;
}

const ChatBot = ({ initialOpen = false, onClose }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your BankFincorp assistant. How can I help you today? I can answer questions about our services, interest rates, eligibility, and more!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [showSuggestionsButton, setShowSuggestionsButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    setIsOpen(initialOpen);
  }, [initialOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  // Pre-defined questions based on website content
  const quickQuestions: QuickQuestion[] = [
    { id: "q1", text: "What are your interest rates?", category: "rates" },
    { id: "q2", text: "What services do you offer?", category: "services" },
    { id: "q3", text: "What is the home loan interest rate?", category: "rates" },
    { id: "q4", text: "What is the personal loan interest rate?", category: "rates" },
    { id: "q5", text: "What documents are required?", category: "documents" },
    { id: "q6", text: "What are your business hours?", category: "contact" },
    { id: "q7", text: "How can I contact you?", category: "contact" },
    { id: "q8", text: "What is the eligibility criteria?", category: "eligibility" },
    { id: "q9", text: "How long does loan approval take?", category: "process" },
    { id: "q10", text: "Where is your office located?", category: "contact" },
  ];

  // Knowledge base with answers
  const getAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Interest Rates
    if (lowerQuestion.includes("rate") || lowerQuestion.includes("interest")) {
      if (lowerQuestion.includes("home")) {
        return "Our Home Loan interest rate starts at **7.60%** per annum. You can get a loan up to 90% of the property value with a tenure of up to 30 years. Home loans also offer tax benefits under Section 24(b) and Section 80C of the Income Tax Act.";
      }
      if (lowerQuestion.includes("personal")) {
        return "Our Personal Loan interest rate starts at **10.49%** per annum. It's an unsecured loan with quick approval, flexible tenure, and no collateral required. Perfect for personal expenses, medical emergencies, or debt consolidation.";
      }
      if (lowerQuestion.includes("business")) {
        return "Our Business Loan interest rate starts from **14%** per annum. We offer working capital loans, business expansion loans, and equipment financing with easy approval processes.";
      }
      if (lowerQuestion.includes("property") || lowerQuestion.includes("lap")) {
        return "Our Loan Against Property (LAP) interest rate starts at **9.2%** per annum. You can get high loan amounts with flexible repayment options and quick disbursal.";
      }
      return "Here are our current interest rates:\n\n🏠 **Home Loan**: Starting at 7.60% per annum\n💼 **Personal Loan**: Starting at 10.49% per annum\n🏢 **Business Loan**: Starting from 14% per annum\n🏘️ **Loan Against Property**: Starting at 9.2% per annum\n\nWould you like more details about any specific loan type?";
    }

    // Services
    if (lowerQuestion.includes("service") || lowerQuestion.includes("offer") || lowerQuestion.includes("provide")) {
      return "We offer a comprehensive range of financial services:\n\n**Main Services:**\n• Home Loans (7.60% interest rate)\n• Personal & Business Loans (10.49% & 14%)\n• Vehicle Loans (New & Old)\n• Education Loans\n• Investment Services\n• Insurance & Mediclaim\n• Credit Cards & Account Opening\n• MSME/SME Loans\n• Commercial Project Funding\n\n**Specialized Services:**\n• 350+ Bank & NBFC Partners\n• 300+ Online Services (Kiosk)\n• Taxation & Utility Services\n• Property Registration Services\n\nWe have 350+ Bank & NBFC partners and offer 300+ online services. Would you like details about any specific service?";
    }

    // Documents
    if (lowerQuestion.includes("document") || lowerQuestion.includes("paper") || lowerQuestion.includes("kyc")) {
      return "Here are the documents typically required for loan applications:\n\n**Required Documents:**\n✅ Identity Proof (Aadhaar, PAN, Passport, Driving License)\n✅ Address Proof (Utility bills, Rental agreement)\n✅ Income Proof (Salary slips, ITR, Bank statements)\n✅ Bank Statements (Last 6 months)\n✅ Property Documents (for secured loans)\n✅ Business Registration (for business loans)\n\n**Note:** Document requirements may vary based on the loan type. For specific requirements, please contact us or visit our Apply page.";
    }

    // Contact Information
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("phone") || lowerQuestion.includes("email") || lowerQuestion.includes("address")) {
      if (lowerQuestion.includes("phone") || lowerQuestion.includes("call") || lowerQuestion.includes("number")) {
        return "You can reach us at:\n\n📞 **Phone**: 1800 120 8921\n📱 **WhatsApp**: +91 9522444141\n📧 **Email**: support@bankfincorp.com\n\n**Business Hours:**\nMonday - Saturday: 10:00 AM - 5:00 PM\n\nWe're here to help! Feel free to call or WhatsApp us during business hours.";
      }
      if (lowerQuestion.includes("location") || lowerQuestion.includes("office") || lowerQuestion.includes("address") || lowerQuestion.includes("where")) {
        return "Our office locations:\n\n📍 **Main Branch**:\nB - Bank Fincorp Unit-1, Shop No. C/16\nSudarshan Complex, Near Police Post\nPithampur Sector-1, District Dhar\nMadhya Pradesh 454775, India\n\n📍 **Head Branch**:\nComing soon to Indore, M.P.\n\nYou can also reach us via phone, email, or WhatsApp for any queries!";
      }
      return "You can contact us through:\n\n📞 **Phone**: 1800 120 8921\n📱 **WhatsApp**: +91 9522444141\n📧 **Email**: support@bankfincorp.com\n📍 **Address**: B - Bank Fincorp Unit-1, Shop No. C/16, Sudarshan Complex, Near Police Post, Pithampur Sector-1, District Dhar, MP 454775\n\n**Business Hours**: Monday - Saturday, 10:00 AM - 5:00 PM";
    }

    // Business Hours
    if (lowerQuestion.includes("hour") || lowerQuestion.includes("time") || lowerQuestion.includes("open") || lowerQuestion.includes("available")) {
      return "Our business hours are:\n\n⏰ **Monday - Saturday**: 10:00 AM - 5:00 PM\n\nWe're closed on Sundays. For urgent queries, you can reach us via WhatsApp at +91 9522444141 or email at support@bankfincorp.com, and we'll respond as soon as possible!";
    }

    // Eligibility
    if (lowerQuestion.includes("eligibility") || lowerQuestion.includes("qualify") || lowerQuestion.includes("criteria") || lowerQuestion.includes("requirement")) {
      return "General eligibility criteria for our loans:\n\n**Common Requirements:**\n✅ Age: 21-65 years\n✅ Credit Score: 750+ (for better rates)\n✅ Stable income source\n✅ Good credit history\n✅ Valid KYC documents\n\n**Specific Requirements:**\n• **Home Loan**: Minimum income criteria, property valuation\n• **Personal Loan**: Credit score check, income proof\n• **Business Loan**: Business registration, financial statements\n\nEligibility may vary by loan type. For specific eligibility details, please contact us or apply online for a personalized assessment!";
    }

    // Process/Approval Time
    if (lowerQuestion.includes("approval") || lowerQuestion.includes("process") || lowerQuestion.includes("time") || lowerQuestion.includes("how long") || lowerQuestion.includes("duration")) {
      if (lowerQuestion.includes("approval") || lowerQuestion.includes("how long")) {
        return "Our loan approval process is quick and efficient:\n\n⏱️ **Approval Time**: Most loans are approved within **24-48 hours** after document submission\n\n**Application Process:**\n1️⃣ Submit application online\n2️⃣ Upload required documents\n3️⃣ Get instant approval (soft check doesn't impact credit score)\n4️⃣ Receive funds in your account\n\nWe use digital processes for faster approvals. Would you like to apply now?";
      }
      return "Our application process is simple:\n\n**Step 1**: Submit application online through our website\n**Step 2**: Upload required documents (KYC, income proof, bank statements)\n**Step 3**: Get instant approval (we do soft credit checks that don't impact your score)\n**Step 4**: Receive funds directly in your account\n\nMost loans are approved within 24-48 hours after document submission. Ready to get started?";
    }

    // Application/Apply
    if (lowerQuestion.includes("apply") || lowerQuestion.includes("application") || lowerQuestion.includes("how to")) {
      return "Applying for a loan is easy:\n\n**How to Apply:**\n1. Visit our website and click 'Apply Now'\n2. Select the loan type you need\n3. Fill out the application form\n4. Upload required documents\n5. Get instant approval\n\n**Benefits:**\n✅ Paperless process\n✅ Quick approval (24-48 hours)\n✅ No hidden charges\n✅ Expert guidance throughout\n\nYou can apply online anytime, or contact us at 1800 120 8921 for assistance!";
    }

    // Credit Score
    if (lowerQuestion.includes("credit") || lowerQuestion.includes("score") || lowerQuestion.includes("cibil")) {
      return "Yes, we check credit scores, but here's the good news:\n\n✅ **Soft Credit Check**: Our initial checks are soft inquiries that **don't impact your credit score**\n✅ **Minimum Score**: Credit score of 750+ gets you better interest rates\n✅ **Credit Score Services**: We also offer credit score improvement services\n\nEven if your credit score is lower, we may still be able to help. Contact us for personalized assistance!";
    }

    // Partners/Banks
    if (lowerQuestion.includes("partner") || lowerQuestion.includes("bank") || lowerQuestion.includes("nbfc")) {
      return "We partner with **350+ Banks & NBFCs** to offer you the best financial solutions:\n\n**Major Partners Include:**\n🏦 HDFC, Kotak Mahindra, TATA CAPITAL\n🏦 AXIS, IDFC, SBI, ICICI\n🏦 BAJAJ Finance, Aditya Birla, AU Bank\n🏦 IIFL, Money Wide, YES BANK\n🏦 Ujjivan, Chola Manndalam\n🏦 And many more!\n\n**Benefits:**\n✅ 285+ Financial Portals Unlocked\n✅ Best rates from multiple lenders\n✅ Compare and choose the best option\n✅ One-stop solution for all financial needs\n\nThis extensive network ensures you get the best rates and terms!";
    }

    // Default response
    return "I understand you're asking about: \"" + question + "\"\n\nI can help you with:\n\n📊 **Interest Rates** - Home loans (7.60%), Personal loans (10.49%), Business loans (14%)\n💼 **Services** - Loans, Insurance, Investment, Credit Cards, and more\n📄 **Documents** - Required documentation for applications\n✅ **Eligibility** - Criteria for different loan types\n⏱️ **Process** - Application and approval timelines\n📞 **Contact** - Phone, email, WhatsApp, and office locations\n\nCould you please rephrase your question, or would you like to know about any of these topics?";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setShowQuickQuestions(false);
    setShowSuggestionsButton(false);

    // Simulate bot thinking
    setTimeout(() => {
      const answer = getAnswer(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: answer,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      // Show suggestions button after bot responds
      setShowSuggestionsButton(true);
    }, 500);
  };

  const handleQuickQuestion = (question: QuickQuestion) => {
    handleSendMessage(question.text);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed z-[100] transition-all duration-300",
        isMinimized
          ? "bottom-20 md:bottom-6 right-2 md:right-6"
          : "bottom-20 md:bottom-6 right-2 md:right-6"
      )}
    >
      <Card
        className={cn(
          "shadow-2xl border-2 border-primary/20 bg-background transition-all",
          isMinimized
            ? "w-80 h-16"
            : "w-[calc(100vw-1rem)] md:w-[380px] h-[calc(100vh-6rem)] md:h-[550px] md:max-h-[85vh] flex flex-col"
        )}
      >
        {isMinimized ? (
          <CardHeader className="p-4 flex flex-row items-center justify-between cursor-pointer" onClick={() => setIsMinimized(false)}>
            <div className="flex items-center gap-2">
              <Bot className="text-primary" size={20} />
              <span className="font-semibold text-sm">BankFincorp Assistant</span>
            </div>
            <Maximize2 size={16} className="text-muted-foreground" />
          </CardHeader>
        ) : (
          <>
            <CardHeader className="p-4 border-b flex flex-row items-center justify-between bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                  <Bot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">BankFincorp Assistant</h3>
                  <p className="text-xs text-muted-foreground">We're here to help!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(true)}
                  className="h-8 w-8"
                  aria-label="Minimize"
                >
                  <Minimize2 size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="h-8 w-8"
                  aria-label="Close"
                >
                  <X size={16} />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.isBot ? "justify-start" : "justify-end"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-lg p-3 text-sm",
                          message.isBot
                            ? "bg-muted text-foreground"
                            : "gradient-hero text-white"
                        )}
                      >
                        <div className="whitespace-pre-wrap">{message.text}</div>
                        <div
                          className={cn(
                            "text-xs mt-1",
                            message.isBot
                              ? "text-muted-foreground"
                              : "text-white/70"
                          )}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  {showQuickQuestions && (
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground font-medium">
                        {messages.length === 1 ? "Quick questions:" : "Suggested questions:"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {quickQuestions.slice(0, 6).map((q) => (
                          <Button
                            key={q.id}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickQuestion(q)}
                            className="text-xs h-auto py-1.5 px-3 whitespace-normal text-left"
                          >
                            {q.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  {showSuggestionsButton && !showQuickQuestions && (
                    <div className="flex justify-center pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setShowQuickQuestions(true);
                          setShowSuggestionsButton(false);
                        }}
                        className="text-xs"
                      >
                        💡 Show suggested questions
                      </Button>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    className="gradient-hero"
                    size="icon"
                    disabled={!inputValue.trim()}
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;

