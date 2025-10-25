import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Star,
  Clock,
  Award,
  Target,
  Phone,
  Zap,
  DollarSign,
  Percent,
  FileText,
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
        {/* Hero Section with Image */}
       
        {/* Featured Services with Images */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our most popular financial products designed to meet your specific needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Home Loan */}
              <Card className="group overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-600">
                  <img 
                    src="/src/assets/heroimages/homeloan.jpg" 
                    alt="Home Loan" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">Home Loan</h3>
                    <p className="text-lg text-white/90">Starting from 8.5% p.a.</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Home className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Quick Processing</h4>
                        <p className="text-sm text-muted-foreground">Get approved in 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Percent className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Low Interest Rates</h4>
                        <p className="text-sm text-muted-foreground">Best rates in the market</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <FileText className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Minimal Documentation</h4>
                        <p className="text-sm text-muted-foreground">Simple application process</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link to="/apply" className="flex-1">
                      <Button className="w-full gradient-hero">Apply Now</Button>
                    </Link>
                    <Link to="/calculators">
                      <Button variant="outline" className="px-6">Calculate EMI</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Loan */}
              <Card className="group overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 bg-gradient-to-br from-green-500 to-green-600">
                  <img 
                    src="/src/assets/heroimages/personalImage.jpg" 
                    alt="Personal Loan" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">Personal Loan</h3>
                    <p className="text-lg text-white/90">Starting from 10.5% p.a.</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Zap className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Instant Approval</h4>
                        <p className="text-sm text-muted-foreground">Get funds in 2 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <DollarSign className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Up to ₹50 Lakhs</h4>
                        <p className="text-sm text-muted-foreground">High loan amounts available</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <Clock className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Flexible Tenure</h4>
                        <p className="text-sm text-muted-foreground">Choose your repayment period</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link to="/apply" className="flex-1">
                      <Button className="w-full gradient-hero">Apply Now</Button>
                    </Link>
                    <Link to="/calculators">
                      <Button variant="outline" className="px-6">Calculate EMI</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* All Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {enhancedServices.slice(0, 8).map((service) => (
                <Card key={service.id} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="text-white" size={28} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                      
                      {service.rate && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                          <Star className="w-4 h-4" />
                          {service.rate}
                        </div>
                      )}

                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 2).map((feature, index) => (
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
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose BankFincorp?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're committed to providing the best financial solutions with unmatched service quality and customer satisfaction
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="shadow-card hover:shadow-elevated transition-shadow text-center group">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-6 group-hover:scale-110 transition-transform">
                      <Clock className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Quick Approval</h3>
                    <p className="text-muted-foreground">
                      Get instant approvals with our streamlined digital process and AI-powered assessment
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-elevated transition-shadow text-center group">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-6 group-hover:scale-110 transition-transform">
                      <Award className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Best Rates</h3>
                    <p className="text-muted-foreground">
                      Compare offers from 50+ lenders to get the best deal with our competitive rate comparison
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-elevated transition-shadow text-center group">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-6 group-hover:scale-110 transition-transform">
                      <Shield className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">100% Paperless</h3>
                    <p className="text-muted-foreground">
                      Complete your application online without any paperwork using our secure digital platform
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-elevated transition-shadow text-center group">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-6 group-hover:scale-110 transition-transform">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Get personalized advice from our certified financial experts and loan specialists
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Apply for your loan today and get approved within 24 hours with our streamlined process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8 py-4 text-lg">
                    Apply Now
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg">
                    <Phone className="mr-2" size={20} />
                    Contact Us
                  </Button>
                </Link>
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
