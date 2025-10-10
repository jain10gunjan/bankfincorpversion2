import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Home,
  Briefcase,
  TrendingUp,
  Calculator,
  CheckCircle2,
  ArrowRight,
  Building,
  Car,
  GraduationCap,
  Shield,
  Stethoscope,
  Monitor,
  Users,
} from "lucide-react";
import { bankFincorpServices } from "@/lib/utils";

// Icon mapping for services
const serviceIcons = {
  "home-loan": Home,
  "industrial-project": Building,
  "commercial-project": Building,
  "msme": Briefcase,
  "personal-business": CreditCard,
  "vehicle-instant": Car,
  "investment": TrendingUp,
  "education": GraduationCap,
  "insurance": Shield,
  "mediclaim": Stethoscope,
  "kiosk": Monitor,
  "credit-card-account": CreditCard,
};

// Enhanced service data with more details
const enhancedServices = bankFincorpServices.map(service => ({
  ...service,
  icon: serviceIcons[service.id as keyof typeof serviceIcons] || CreditCard,
  rate: service.rate || "Contact for rates",
  features: service.features || [
    "Quick approval process",
    "Competitive interest rates", 
    "Flexible repayment options",
    "Minimal documentation",
    "Digital application process",
    "Expert guidance"
  ],
  eligibility: service.eligibility || [
    "Age: 21-65 years",
    "Stable income source",
    "Good credit history",
    "Valid documentation"
  ],
  benefits: [
    "Fast processing",
    "Low interest rates",
    "Flexible tenure",
    "No hidden charges"
  ],
  documents: [
    "Identity proof",
    "Address proof", 
    "Income proof",
    "Bank statements"
  ]
}));

const additionalServices = [
  {
    icon: Calculator,
    title: "Credit Score Check",
    description: "Get your free credit score and report worth ₹500",
    link: "/calculators",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Compare and apply for the best credit cards",
    link: "/services",
  },
  {
    icon: TrendingUp,
    title: "Investment Plans",
    description: "Grow your wealth with smart investment options",
    link: "/services",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroSlider />

        {/* All Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive range of financial products and services
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {enhancedServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="text-white" size={28} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                      
                      {service.rate && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                          {service.rate}
                        </div>
                      )}

                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="text-primary flex-shrink-0" size={16} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        <Link to={`/services/${service.id}`}>
                          <Button className="w-full gradient-hero group-hover:shadow-lg transition-shadow">
                            Learn More
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                        <Link to="/apply">
                          <Button variant="outline" className="w-full">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose BankFincorp?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Quick Approval</h3>
                    <p className="text-muted-foreground">
                      Get instant approvals with our streamlined digital process
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Best Rates</h3>
                    <p className="text-muted-foreground">
                      Compare offers from 50+ lenders to get the best deal
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">100% Paperless</h3>
                    <p className="text-muted-foreground">
                      Complete your application online without any paperwork
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Get personalized advice from our financial experts
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
