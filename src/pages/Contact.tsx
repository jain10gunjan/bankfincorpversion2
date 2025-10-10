import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 1800-123-4567",
    subdetails: "Mon-Sat, 9 AM - 6 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "support@urbanmoney.com",
    subdetails: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Financial District",
    subdetails: "Mumbai, India 400001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Saturday",
    subdetails: "9:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/90">
                Have questions? We're here to help and answer any questions you might have
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-elevated bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-hero mb-4">
                      <info.icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.subdetails}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full gradient-hero">
                        <Send className="mr-2" size={20} />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                  <Card className="shadow-card overflow-hidden">
                    <div className="w-full h-[400px] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <div className="text-center p-8">
                        <MapPin className="mx-auto mb-4 text-primary" size={48} />
                        <p className="text-lg font-semibold mb-2">123 Financial District</p>
                        <p className="text-muted-foreground">Mumbai, India 400001</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="shadow-card gradient-hero text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                    <p className="text-white/90 mb-6">
                      Our customer support team is available to help you with any urgent matters
                    </p>
                    <div className="space-y-3">
                      <a
                        href="tel:+911800123567"
                        className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Phone size={24} />
                        <div>
                          <div className="font-semibold">Call Now</div>
                          <div className="text-sm text-white/80">+91 1800-123-4567</div>
                        </div>
                      </a>
                      <a
                        href="mailto:support@urbanmoney.com"
                        className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Mail size={24} />
                        <div>
                          <div className="font-semibold">Email Us</div>
                          <div className="text-sm text-white/80">support@urbanmoney.com</div>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-8">
                Find quick answers to common questions about our services
              </p>
              
              <div className="space-y-4">
                <Card className="text-left shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">How long does loan approval take?</h3>
                    <p className="text-muted-foreground">
                      Most loans are approved within 24-48 hours after document submission.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-left shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">What documents do I need?</h3>
                    <p className="text-muted-foreground">
                      Basic KYC documents, income proof, and bank statements are required.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-left shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Is my credit score checked?</h3>
                    <p className="text-muted-foreground">
                      Yes, we check credit scores, but soft checks don't impact your score.
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

export default Contact;
