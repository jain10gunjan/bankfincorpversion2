import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomMenu from "@/components/MobileBottomMenu";
import FloatingButtons from "@/components/FloatingButtons";
import { useParams, Link } from "react-router-dom";
import { bankFincorpServices } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, FileText, Clock, Shield, Users } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = bankFincorpServices.find((s) => s.id === id);

  // Enhanced service data with more details
  const enhancedService = service ? {
    ...service,
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
    ],
    process: [
      "Submit application online",
      "Upload required documents",
      "Get instant approval",
      "Receive funds in your account"
    ]
  } : null;

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />

      <main className="flex-1">
        {enhancedService ? (
          <>
            {/* Hero Section */}
            <section className="gradient-hero text-white py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">{enhancedService.title}</h1>
                  <p className="text-xl text-white/90 mb-8">{enhancedService.description}</p>
                  {enhancedService.rate && (
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold">
                      {enhancedService.rate}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-12">
                    {/* Features */}
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {enhancedService.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                            <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Benefits</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {enhancedService.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3 p-4 rounded-lg border">
                            <Shield className="text-primary" size={20} />
                            <span className="font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Application Process</h2>
                      <div className="space-y-4">
                        {enhancedService.process.map((step, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                              {index + 1}
                            </div>
                            <span className="font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Eligibility */}
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Users className="text-primary" size={20} />
                          Eligibility Criteria
                        </h3>
                        <ul className="space-y-3">
                          {enhancedService.eligibility.map((criteria, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Required Documents */}
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <FileText className="text-primary" size={20} />
                          Required Documents
                        </h3>
                        <ul className="space-y-2">
                          {enhancedService.documents.map((doc, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* CTA Buttons */}
                    <div className="space-y-4">
                      <Link to="/apply" className="block">
                        <Button size="lg" className="w-full gradient-hero">
                          Apply Now
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </Link>
                      <Link to="/calculators" className="block">
                        <Button size="lg" variant="outline" className="w-full">
                          Calculate EMI
                        </Button>
                      </Link>
                      <Link to="/contact" className="block">
                        <Button size="lg" variant="outline" className="w-full">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Services */}
            <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">You may also be interested in</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {bankFincorpServices.filter((s) => s.id !== enhancedService.id).slice(0, 3).map((s) => (
                    <Link key={s.id} to={`/services/${s.id}`} className="block">
                      <Card className="hover:shadow-elevated transition-shadow overflow-hidden group">
                        <CardContent className="p-0">
                          <div className="h-48 w-full overflow-hidden">
                            <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                          </div>
                          <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{s.description}</p>
                            <div className="flex items-center text-primary font-medium">
                              Learn More
                              <ArrowRight className="ml-2" size={16} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="py-24 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold mb-4">Service not found</h1>
              <Link to="/services" className="text-primary font-semibold">Back to Services</Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileBottomMenu />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;


