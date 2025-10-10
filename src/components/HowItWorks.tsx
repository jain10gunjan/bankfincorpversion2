import { Card, CardContent } from "@/components/ui/card";
import { FileText, UserCheck, BadgeCheck, Wallet } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out our simple online form with your basic details and loan requirements.",
    number: "01",
  },
  {
    icon: UserCheck,
    title: "Document Verification",
    description: "Upload required documents digitally. Our team will verify them within hours.",
    number: "02",
  },
  {
    icon: BadgeCheck,
    title: "Instant Approval",
    description: "Get instant approval based on your eligibility and credit profile.",
    number: "03",
  },
  {
    icon: Wallet,
    title: "Funds Disbursed",
    description: "Receive the loan amount directly in your bank account within 24 hours.",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your loan in 4 simple steps. Our streamlined process ensures quick and hassle-free approvals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary opacity-20" />
          
          {steps.map((step, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-elevated transition-all relative group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center relative z-10">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm z-20">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
