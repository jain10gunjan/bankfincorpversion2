import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomMenu from "@/components/MobileBottomMenu";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Briefcase, 
  Car, 
  GraduationCap, 
  Shield, 
  TrendingUp, 
  FileText,
  Building,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Network,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { serviceCategories } from "@/lib/utils";

// Icon mapping for categories
const categoryIcons = {
  "home-loans-commercial-property": Home,
  "personal-instant-loans-credit-cards": CreditCard,
  "business-loans-accounts": Briefcase,
  "specialized-loans-franchised": Building,
  "vehicle-loans": Car,
  "investment-education-loans": GraduationCap,
  "insurance-mediclaim": Shield,
  "taxation-utility-services": FileText,
  "bank-partners": Network,
  "kiosk-services": Building,
};

const Services = () => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simplifying Your Financial Journey
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                With a trusted partner offering 350+ Bank & NBFC solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                    Apply Now
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our wide range of financial products and services tailored to meet your every need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => {
                const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || Building;
                const isExpanded = expandedCategories[category.id] || false;
                const visibleServices = isExpanded ? category.services : category.services.slice(0, 8);
                const hasMore = category.services.length > 8;
                
                return (
                  <Card 
                    key={category.id} 
                    className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-border/50 hover:border-primary/30 bg-card"
                  >
                    <CardHeader className={`bg-gradient-to-br ${category.color} text-white p-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent group-hover:from-black/5 transition-all"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Icon className="text-white" size={28} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold leading-tight mb-1">{category.title}</h3>
                            <p className="text-white/90 text-sm leading-relaxed">{category.description}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 bg-background">
                      <div className="space-y-2.5 mb-6 overflow-hidden">
                        {/* Visible Services Container with sliding animation */}
                        <div 
                          className="transition-all duration-700 ease-in-out overflow-hidden"
                          style={{
                            maxHeight: isExpanded ? 'none' : '400px',
                          }}
                        >
                          <div className="space-y-2.5">
                            {category.services.map((service, idx) => {
                              const shouldShow = idx < 8 || isExpanded;
                              const isNewlyAdded = isExpanded && idx >= 8;
                              
                              return (
                                <div 
                                  key={`${category.id}-${idx}`}
                                  className={`flex items-start gap-2.5 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-500 ${
                                    shouldShow 
                                      ? 'opacity-100 translate-y-0' 
                                      : 'opacity-0 max-h-0 overflow-hidden -translate-y-2'
                                  }`}
                                  style={{ 
                                    transitionDelay: isNewlyAdded ? `${(idx - 8) * 50}ms` : '0ms'
                                  }}
                                >
                                  <CheckCircle2 
                                    className="text-primary flex-shrink-0 mt-0.5 w-4 h-4 group-hover:scale-110 transition-transform" 
                                    size={16} 
                                  />
                                  <span className="leading-relaxed">{service}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* View More/View Less Button */}
                        {hasMore && (
                          <div className="pt-3 border-t border-border mt-4">
                            <Button
                              variant="ghost"
                              onClick={() => toggleCategory(category.id)}
                              className="w-full text-primary hover:text-primary hover:bg-primary/10 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                            >
                              {isExpanded ? (
                                <>
                                  <span>View Less</span>
                                  <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                                </>
                              ) : (
                                <>
                                  <span>View More ({category.services.length - 8} more)</span>
                                  <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                                </>
                              )}
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-3 pt-4 border-t border-border">
                        <Link to="/apply" className="flex-1">
                          <Button className="w-full gradient-hero text-sm font-semibold hover:shadow-lg transition-shadow">
                            Apply Now
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                        <Link to="/contact" className="flex-1">
                          <Button 
                            variant="outline" 
                            className="w-full text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">350+</div>
                <div className="text-lg text-muted-foreground">Bank & NBFC Partners</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300+</div>
                <div className="text-lg text-muted-foreground">Online Services Available</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">285+</div>
                <div className="text-lg text-muted-foreground">Financial Portals Unlocked</div>
              </div>
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
      <MobileBottomMenu />
      <FloatingButtons />
    </div>
  );
};

export default Services;
