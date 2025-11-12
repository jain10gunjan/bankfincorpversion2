import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomMenu from "@/components/MobileBottomMenu";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  Download,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Zap,
  FileText,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Calculator,
  Briefcase,
  GraduationCap,
  Car,
  CreditCard,
  BarChart3,
  Target,
  Handshake,
  Rocket,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import whatsappImage from "@/assets/heroimages/whatsapp.png";

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    space: "",
    experience: "",
    investmentCapacity: false,
    source: "",
    message: "",
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: checked }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, source: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.location || !formData.space) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.investmentCapacity) {
      toast.error("Please confirm your investment capacity");
      return;
    }

    if (!formData.terms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `Hello BankFincorp Franchise Team,

I'm interested in becoming a franchise partner.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Available Space: ${formData.space} sq.ft
Business Experience: ${formData.experience || "N/A"} years
How did you hear about us: ${formData.source || "N/A"}

Message: ${formData.message || "N/A"}

Please contact me to discuss the franchise opportunity.

Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919599000062?text=${encodedMessage}`;

    // Simulate API call
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp... Please send your message there!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        space: "",
        experience: "",
        investmentCapacity: false,
        source: "",
        message: "",
        terms: false,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const quickStats = [
    { icon: Calculator, value: "₹1,50,000", label: "Investment Required" },
    { icon: Building2, value: "200 sq.ft", label: "Space Needed" },
    { icon: TrendingUp, value: "20%", label: "Royalty Model" },
    { icon: Calendar, value: "15-30 Days", label: "Training Program" },
  ];

  const whyFranchise = [
    {
      icon: Target,
      title: "Proven Business Model",
      description: "350+ existing NBFC and Bank partnerships with established infrastructure and processes. Low investment, high ROI potential.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Users,
      title: "Comprehensive Support System",
      description: "End-to-end training and onboarding, dedicated administrative team, and continuous business guidance throughout your journey.",
      color: "from-accent to-accent/80",
    },
    {
      icon: Zap,
      title: "Digital-First Approach",
      description: "WhatsApp integration and IVR setup, digital infrastructure provided, and access to 100+ online portal services.",
      color: "from-primary/90 to-accent/80",
    },
  ];

  const whatYouGet = [
    {
      icon: FileText,
      title: "Franchise Agreement",
      description: "Legal framework and territorial rights",
    },
    {
      icon: Award,
      title: "Brand Identity Package",
      description: "Logo, design guidelines, branded materials",
    },
    {
      icon: GraduationCap,
      title: "Comprehensive Training",
      description: "15-30 days onboarding program, product knowledge, sales techniques",
    },
    {
      icon: Building2,
      title: "Operational Setup",
      description: "Complete shop setup guidance, equipment and tools, POS system integration",
    },
    {
      icon: Zap,
      title: "Digital Infrastructure",
      description: "WhatsApp Business setup, IVR system, Customer CRM tools",
    },
    {
      icon: TrendingUp,
      title: "Marketing & Branding Support",
      description: "Pre-designed marketing materials, social media templates, local advertising support",
    },
    {
      icon: Shield,
      title: "Ongoing Administrative Support",
      description: "Regular check-ins, performance reviews, issue resolution support team",
    },
    {
      icon: BarChart3,
      title: "Commission & Incentive Structure",
      description: "Transparent commission breakdown, performance bonus schemes, seasonal incentives",
    },
  ];

  const howItWorksSteps = [
    {
      week: "Week 1",
      title: "Inquiry & Pre-Screening",
      description: "Submit franchise application form, eligibility verification, initial discussion call",
      icon: FileText,
    },
    {
      week: "Week 2",
      title: "Detailed Consultation",
      description: "In-depth business model explanation, financial projections review, location suitability assessment",
      icon: Users,
    },
    {
      week: "Week 3",
      title: "Agreement & Payment",
      description: "Franchise agreement signing, initial investment payment, setup kickoff",
      icon: Handshake,
    },
    {
      week: "Weeks 4-6",
      title: "Training & Launch",
      description: "Comprehensive training program, shop setup and branding, soft launch and testing",
      icon: GraduationCap,
    },
    {
      week: "Week 7+",
      title: "Official Launch & Support",
      description: "Grand opening, ongoing operational support, performance monitoring",
      icon: Rocket,
    },
  ];

  const servicesOffered = {
    loans: [
      "Personal Loans & Instant Loans",
      "Home Loans & Commercial Property",
      "Business & MSME Loans",
      "Education Loans",
      "Vehicle Loans (All types)",
      "Debt Consolidation Loans",
    ],
    financial: [
      "Insurance & Mediclaim Policies",
      "Investment Services",
      "Taxation & GST Services",
      "Online Portal Services (275+)",
      "Credit Card Applications",
      "Refinancing Options",
    ],
  };

  const faqItems = [
    {
      question: "What is the total investment required?",
      answer:
        "₹1,50,000 initial investment covering franchise fee, setup, and working capital. This includes all necessary equipment, branding materials, and initial marketing support.",
    },
    {
      question: "What's the royalty structure?",
      answer:
        "20% of net business generated. This is a transparent model where you keep 80% of your revenue after operational costs. The royalty covers ongoing support, marketing, and administrative services.",
    },
    {
      question: "How long is the training program?",
      answer:
        "15-30 days comprehensive onboarding program covering product knowledge, sales techniques, customer handling, operational procedures, and digital tools usage. Training is conducted both online and on-site.",
    },
    {
      question: "What support do you provide after launch?",
      answer:
        "We provide ongoing administrative, marketing, and operational support including regular check-ins, performance reviews, issue resolution, updated documentation, and continuous training opportunities.",
    },
    {
      question: "What's the break-even timeline?",
      answer:
        "Typically 12-18 months based on market conditions, location, and business volume. We provide financial projections and support to help you achieve profitability faster.",
    },
    {
      question: "Do you provide financing for franchise investment?",
      answer:
        "Yes, we can assist with loan facilitation through our partner banks. We have relationships with 350+ banks and NBFCs that can help finance your franchise investment.",
    },
    {
      question: "What's the geographical coverage?",
      answer:
        "Pan-India expansion focused on tier-1 and tier-2 cities. We're actively looking for partners in high-growth markets across all states.",
    },
    {
      question: "Can existing businesses apply?",
      answer:
        "Yes, we welcome partnerships with established financial or service businesses. Existing businesses can integrate our services into their current operations.",
    },
    {
      question: "What happens if I want to exit?",
      answer:
        "Detailed exit clause in franchise agreement. We have a transparent exit policy that protects both parties' interests. Terms are clearly outlined in the franchise agreement.",
    },
    {
      question: "How do you support marketing and lead generation?",
      answer:
        "We provide marketing materials, digital infrastructure, and local support. This includes pre-designed templates, social media content, local advertising guidance, and access to our brand assets.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join BankFincorp's Growing Network
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Build Your Financial Business with India's Leading Pan-India Financial Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                  onClick={() => {
                    document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start Your Franchise Journey
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20 font-semibold px-8"
                  onClick={() => {
                    toast.info("Brochure download coming soon!");
                  }}
                >
                  <Download className="mr-2" size={20} />
                  Download Franchise Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted/30 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-hero mb-3">
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Franchise */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Franchise with BankFincorp?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Partner with a trusted brand and build a successful financial services business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyFranchise.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <CardHeader className={`bg-gradient-to-br ${item.color} text-white p-6`}>
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <item.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Breakdown */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Franchise Investment Breakdown
                </h2>
                <p className="text-lg text-muted-foreground">
                  Transparent pricing with no hidden costs
                </p>
              </div>

              <Card className="shadow-elevated">
                <CardHeader className="gradient-hero text-white p-6">
                  <h3 className="text-2xl font-bold">Total Investment: ₹1,50,000</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="font-medium">Franchise Fee</span>
                      </div>
                      <span className="font-bold text-primary">₹75,000</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="font-medium">Equipment & Setup</span>
                      </div>
                      <span className="font-bold text-primary">₹40,000</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="font-medium">Initial Marketing</span>
                      </div>
                      <span className="font-bold text-primary">₹20,000</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="font-medium">Working Capital</span>
                      </div>
                      <span className="font-bold text-primary">₹15,000</span>
                    </div>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <TrendingUp className="text-primary" size={20} />
                        Expected ROI Timeline
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Break-even typically achieved in 12-18 months. We provide financial
                        projections and support to help you reach profitability faster.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Handshake className="text-accent" size={20} />
                        Financing Options
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We can assist with loan facilitation through our 350+ bank and NBFC
                        partners to help finance your franchise investment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive support package to ensure your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatYouGet.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A simple 5-step process to start your franchise journey
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent"></div>

                <div className="space-y-8">
                  {howItWorksSteps.map((step, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-hero flex items-center justify-center z-10 shadow-lg">
                        <step.icon className="text-white" size={24} />
                      </div>

                      {/* Content */}
                      <Card className="flex-1 shadow-card hover:shadow-elevated transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                              {step.week}
                            </span>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Partner Profile */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elevated border-2 border-primary/20">
                <CardHeader className="gradient-hero text-white p-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Ideal Franchise Partner Profile</h2>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg mb-6 text-muted-foreground">
                    We're looking for partners who have:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Entrepreneurial mindset and ambition",
                      "Basic understanding of financial services (not mandatory)",
                      "Local market knowledge and connections",
                      "Minimum space: 200 sq.ft (Ground floor preferred)",
                      "Willingness to complete training program",
                      "Investment capacity of ₹1,50,000",
                      "Active time commitment: 8-10 hours/day",
                      "Good communication and customer service skills",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Space & Location Requirements */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Space & Location Requirements
                </h2>
                <p className="text-lg text-muted-foreground">
                  Simple requirements for your franchise location
                </p>
              </div>

              <Card className="shadow-elevated">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Minimum 200 sq.ft space",
                      "Ground floor or high foot-traffic location preferred",
                      "Near residential or commercial clusters",
                      "Good parking availability",
                      "Accessibility via public transportation",
                      "Visibility from main road",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-6">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <MapPin className="mr-2" size={18} />
                      Submit Location Assessment Form
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services You Can Offer */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Services You Can Offer</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of financial products and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Loan Services */}
              <Card className="shadow-card">
                <CardHeader className="gradient-hero text-white p-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase size={24} />
                    Loan Services
                  </h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {servicesOffered.loans.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Financial Services */}
              <Card className="shadow-card">
                <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-white p-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp size={24} />
                    Financial Services
                  </h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {servicesOffered.financial.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Royalty & Commission Model */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Franchise Royalty & Commission Model
                </h2>
                <p className="text-lg text-muted-foreground">
                  Transparent and fair revenue sharing structure
                </p>
              </div>

              <Card className="shadow-elevated">
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4 font-bold">Component</th>
                          <th className="text-left p-4 font-bold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4 font-semibold">Royalty</td>
                          <td className="p-4 text-muted-foreground">
                            20% of net business generated
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 font-semibold">Administration Fee</td>
                          <td className="p-4 text-muted-foreground">
                            Included in royalty structure
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 font-semibold">Marketing Fund</td>
                          <td className="p-4 text-muted-foreground">
                            Included in royalty structure
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">Example</td>
                          <td className="p-4 text-muted-foreground">
                            If you generate ₹1 lakh revenue, your cost = ₹20k royalty. You keep
                            ₹80k.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <BarChart3 className="text-primary" size={20} />
                      Break-Even Analysis Timeline
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      With average business volume, most franchise partners achieve break-even
                      within 12-18 months. We provide detailed financial projections during the
                      consultation phase.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find answers to common questions about our franchise program
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Franchise Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our growing network of successful franchise partners across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                onClick={() => {
                  document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Apply for Franchise
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20 font-semibold px-8"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/919599000062?text=${encodeURIComponent("Hello! I'd like to schedule a call about the franchise opportunity.")}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                <Phone className="mr-2" size={20} />
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>

        {/* Contact & Application Form */}
        <section id="franchise-form" className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Apply for Franchise Partnership
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Form */}
                <Card className="shadow-elevated">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">
                          Current Location / Preferred Location{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="City, State"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="space">
                          Available Space (sq.ft) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="space"
                          name="space"
                          type="number"
                          value={formData.space}
                          onChange={handleInputChange}
                          placeholder="200"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Business Experience (years)</Label>
                        <Input
                          id="experience"
                          name="experience"
                          type="number"
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="0"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="source">How did you hear about us?</Label>
                        <Select value={formData.source} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message / Specific Questions</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your interest..."
                          rows={4}
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="investment"
                          checked={formData.investmentCapacity}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(checked as boolean, "investmentCapacity")
                          }
                        />
                        <Label
                          htmlFor="investment"
                          className="text-sm cursor-pointer leading-relaxed"
                        >
                          I confirm that I have the investment capacity of ₹1,50,000{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(checked as boolean, "terms")
                          }
                        />
                        <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                          I agree to the terms and conditions{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-hero"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="shadow-elevated">
                    <CardHeader className="gradient-hero text-white p-6">
                      <h3 className="text-xl font-bold">Direct Contact</h3>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <a
                        href="tel:09599000062"
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-sm text-muted-foreground">09599000062</div>
                        </div>
                      </a>

                      <a
                        href="mailto:contact@bankfincorp.com"
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                          <Mail className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-sm text-muted-foreground">
                        contact@bankfincorp.com
                          </div>
                        </div>
                      </a>

                      <a
                        href={`https://wa.me/919599000062?text=${encodeURIComponent("Hello! I'm interested in the franchise opportunity.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                          <img
                            src={whatsappImage}
                            alt="WhatsApp"
                            className="w-6 h-6 object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">WhatsApp</div>
                          <div className="text-sm text-muted-foreground">+91 9599000062</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card border-2 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Star className="text-accent flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-bold mb-2">Why Choose BankFincorp?</h4>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="text-primary mt-1" size={16} />
                              <span>350+ Bank & NBFC Partners</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="text-primary mt-1" size={16} />
                              <span>Proven Business Model</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="text-primary mt-1" size={16} />
                              <span>Comprehensive Training & Support</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="text-primary mt-1" size={16} />
                              <span>Digital-First Infrastructure</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions?{" "}
              <button
                onClick={() => {
                  document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-primary font-semibold hover:underline"
              >
                Check our FAQ section
              </button>{" "}
              or{" "}
              <a href="/contact" className="text-primary font-semibold hover:underline">
                contact us directly
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomMenu />
      <FloatingButtons />
    </div>
  );
};

export default Franchise;

