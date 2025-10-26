import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import ServicesCarousel from "@/components/ServicesCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap, Users, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import mapImage from "@/assets/heroimages/mapImage.png";
// Using high-quality internet images instead of local assets
const personalLoanImg = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80&auto=format&fit=crop";
const homeLoanImg = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop";
const businessLoanImg = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop";
const propertyLoanImg = "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/home-loan/all-about-mortgage-loans-and-lap-717x404.jpg";

const loanProducts = [
  {
    title: "Personal Loan",
    description: "Paperless process at low rate",
    rate: "10.49%",
    features: ["Quick approval", "Flexible tenure", "No collateral"],
    image: personalLoanImg,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Home Loan",
    description: "Instant approval at lowest interest rates",
    rate: "7.60%",
    features: ["Low interest", "Long tenure", "Tax benefits"],
    image: homeLoanImg,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Loan Against Property",
    description: "Lowest interest rate",
    rate: "9.2%",
    features: ["High loan amount", "Flexible repayment", "Quick disbursal"],
    image: propertyLoanImg,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Business Loan",
    description: "Interest rate starting from",
    rate: "14%",
    features: ["Working capital", "Business expansion", "Easy approval"],
    image: businessLoanImg,
    color: "from-purple-500 to-violet-500",
  },
];

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data is completely safe and encrypted",
  },
  {
    icon: Zap,
    title: "Quick Process",
    description: "Get instant approvals within minutes",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team to assist you 24/7",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSlider />
        <StatsBar />


        {/* Services Carousel */}
        <ServicesCarousel />

 {/* Lenders & Partners Marquee */}
 <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Top Banks & NBFCs</h2>
              <p className="text-muted-foreground">Over 50+ lending partners for the best deals</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[
                  { alt: "SBI", src: "https://sbi.co.in/o/SBI-Theme/images/custom/logo.png" },
                  { alt: "HDFC Bank", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/375px-HDFC_Bank_Logo.svg.png" },
                  { alt: "ICICI Bank", src: "https://i0.wp.com/pathfinderstraining.com/wp-content/uploads/2022/10/ICICI-BANK-LOGO.png?fit=4620%2C1200&ssl=1" },
                  { alt: "Axis Bank", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/2560px-AXISBank_Logo.svg.png" },
                  { alt: "Kotak", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ51HGpmIn5CQwTBteGJ8dH5FZj4-V6kuPoQ&s" },
                  { alt: "Yes Bank", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hIU7hKVcm98kSsxw_qhXR6-Xx2Wi-BSXAw&s" },
                  { alt: "L&T Finance", src: "https://selfhelp.ltfs.com/ServicingApp/assets/images/logo.png" },
                  { alt: "Bajaj Finserv", src: "https://wp.logos-download.com/wp-content/uploads/2024/04/Bajaj_Finserv_Logo.png?dl" },
                  { alt: "IndusInd Bank", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_IDFC_First_Bank.svg/375px-Logo_of_IDFC_First_Bank.svg.png" },
                  { alt: "Federal Bank", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Federal-Bank-Logo_SVG.svg/500px-Federal-Bank-Logo_SVG.svg.png" },
                  { alt: "PNB", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Punjab_National_Bank_new_logo.svg/375px-Punjab_National_Bank_new_logo.svg.png" },
                ].map((bank, i) => (
                  <div key={i} className="flex-shrink-0 mx-8 h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                    <img src={bank.src} alt={bank.alt} className="h-8 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Credit Score Section - UrbanMoney Style */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get your CIBIL Credit Report{" "}
                    <span className="text-yellow-300">worth ₹500 for FREE</span>
                  </h2>
                  <p className="text-lg text-white/90 mb-6">
                    5 Lac+ people have got their Credit Scores for FREE!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/apply">
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 w-full sm:w-auto font-semibold">
                        Check Your FREE Credit Score
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-yellow-300">750</div>
                      <div className="text-sm mt-2">Excellent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Loans - UrbanMoney Style */}
        <section className="py-16 bg-gradient-to-b from-transparent to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trending Loans & Offers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are a one-stop-shop for all your loan credit requirements. We aim to revolutionise 
                how loans are distributed by infusing technology and digital platforms into the financial sector. 
                With a network of over 50 lenders, BankFincorp offers you the best financial products and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanProducts.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elevated transition-shadow group">
                  <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-4`}>
                      {product.rate}
                    </div>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link to="/apply" className="flex-1">
                        <Button className="w-full group-hover:shadow-lg transition-shadow gradient-hero">
                          Check Eligibility
                        </Button>
                      </Link>
                      <Link to="/services" className="flex-1">
                        <Button variant="outline" className="w-full group-hover:shadow-lg transition-shadow">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Calculators - UrbanMoney Style */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Calculators</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At BankFincorp, we aim to ease the burden of credit procedures through the help of financial calculators. 
                You get access to various financial calculators, from EMI calculators to balance transfer calculators to FD calculators.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Home Loan EMI Calculator", desc: "A Home Loan EMI Calculator permits you to compute", action: "Calculate EMI" },
                { name: "Home Loan Eligibility Calculator", desc: "Determine your housing loan eligibility through Home Loan", action: "Check Now" },
                { name: "Home Loan Balance Transfer", desc: "Put forward your decision on the balance transfer", action: "Check Now" },
                { name: "Home Loan Prepayment Calculator", desc: "A Home Loan Prepayment calculator is an online", action: "Check Now" },
                { name: "SIP Calculator", desc: "SIP calculator is a tool that enables you to compute", action: "Check Now" },
                { name: "Gratuity Calculator", desc: "A gratuity calculator is an advanced tool that estimates", action: "Check Now" },
              ].map((calc, i) => (
                <Card key={i} className="hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{calc.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{calc.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">know more</span>
                      <Link to="/calculators">
                        <Button variant="outline" size="sm">{calc.action}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Swipe Like A Pro - Credit Card CTA - UrbanMoney Style */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Swipe Like A Pro - Credit Card on the Go!</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                BankFincorp is your one-stop solution for informed consultations pertaining to your next online credit card purchase. 
                Not only does a Credit Card improve your credit score, but it also allows you to purchase high-end commodities. 
                However, with a massive range of credit cards, we have hand-picked some of the best credit cards across various banks. 
                Conveniently apply online today!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "HDFC Credit Card", desc: "Premium rewards and cashback" },
                { name: "ICICI Credit Card", desc: "Travel and lifestyle benefits" },
                { name: "Axis Credit Card", desc: "Shopping and dining rewards" },
                { name: "SBI Credit Card", desc: "Fuel and utility benefits" },
              ].map((card, i) => (
                <Card key={i} className="hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                    <Link to="/services">
                      <Button className="w-full gradient-hero">Apply Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

       

        

        <HowItWorks />

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BankFincorp?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the best in financial services with our customer-first approach
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elevated transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4">
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <FAQ />

        {/* Map Section */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Service PAN India</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our financial services are available across all major cities in India
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <Card className="overflow-hidden shadow-elevated hover:shadow-2xl transition-shadow">
                <div className="relative">
                  <img 
                    src={mapImage} 
                    alt="BankFincorp PAN India Service Coverage Map" 
                    className="w-full h-auto object-contain"
                    style={{ minHeight: '400px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="text-primary" size={24} />
                        <span className="font-bold text-xl">Head Office Location</span>
                      </div>
                      <p className="text-muted-foreground text-lg">
                        B - Bank Fincorp Unit-1, Shop No. C/16, Sudarshan Complex<br />
                        Near Police Post, Pithampur Sector-2, District Dhar, MP 454775
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
