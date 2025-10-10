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
import { ArrowRight, CheckCircle2, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
// Using high-quality internet images instead of local assets
const personalLoanImg = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80&auto=format&fit=crop";
const homeLoanImg = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop";
const businessLoanImg = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop";
const propertyLoanImg = "https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?w=1200&q=80&auto=format&fit=crop";

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
                  { alt: "SBI", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/State_Bank_of_India_logo.svg" },
                  { alt: "HDFC Bank", src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/HDFC_Bank_Logo.svg" },
                  { alt: "ICICI Bank", src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/ICICI_Bank_Logo.svg" },
                  { alt: "Axis Bank", src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Axis_Bank_logo.svg" },
                  { alt: "Kotak", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Kotak_Mahindra_Bank_logo.svg" },
                  { alt: "Yes Bank", src: "https://upload.wikimedia.org/wikipedia/commons/7/77/YES_BANK_Logo.svg" },
                  { alt: "L&T Finance", src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Larsen_%26_Toubro_logo.svg" },
                  { alt: "Bajaj Finserv", src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Bajaj_Finserv_Logo.svg" },
                  { alt: "IDFC First", src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/IDFC_First_Bank_logo.svg" },
                  { alt: "IndusInd Bank", src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/IndusInd_Bank_logo.svg" },
                ].map((bank, i) => (
                  <div key={i} className="flex-shrink-0 mx-8 h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                    <img src={bank.src} alt={bank.alt} className="h-8 w-auto object-contain" />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { alt: "SBI", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/State_Bank_of_India_logo.svg" },
                  { alt: "HDFC Bank", src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/HDFC_Bank_Logo.svg" },
                  { alt: "ICICI Bank", src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/ICICI_Bank_Logo.svg" },
                  { alt: "Axis Bank", src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Axis_Bank_logo.svg" },
                  { alt: "Kotak", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Kotak_Mahindra_Bank_logo.svg" },
                  { alt: "Yes Bank", src: "https://upload.wikimedia.org/wikipedia/commons/7/77/YES_BANK_Logo.svg" },
                  { alt: "L&T Finance", src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Larsen_%26_Toubro_logo.svg" },
                  { alt: "Bajaj Finserv", src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Bajaj_Finserv_Logo.svg" },
                  { alt: "IDFC First", src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/IDFC_First_Bank_logo.svg" },
                  { alt: "IndusInd Bank", src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/IndusInd_Bank_logo.svg" },
                ].map((bank, i) => (
                  <div key={`dup-${i}`} className="flex-shrink-0 mx-8 h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                    <img src={bank.src} alt={bank.alt} className="h-8 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blogs - UrbanMoney Style */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Blogs</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["All", "Business Loan Archive", "CIBIL Score Archive", "Financial News", "Home Loan Archive", "LAP Archive", "Media Coverage", "Mutual Funds Archive", "Personal Loan Archive"].map((cat, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${i === 0 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "RBI Holds Repo Rate at 5.5%, Keeps GDP Growth Forecast at 6.5%",
                  category: "Media Coverage",
                  date: "Jun 10, 2025",
                  image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
                },
                {
                  title: "Home Loans Get Costlier : SBI Increases Interest Rates by 25 Basis Points",
                  category: "Financial News",
                  date: "Jun 06, 2025",
                  image: "https://images.unsplash.com/photo-1560518883-3c1c2a96e09f?auto=format&fit=crop&w=1400&q=80",
                },
                {
                  title: "Best 10 Credit Card in India 2025",
                  category: "CIBIL Score Archive",
                  date: "Jan 09, 2025",
                  image: "https://images.unsplash.com/photo-1518544889286-b88aee9dde4b?auto=format&fit=crop&w=1400&q=80",
                },
              ].map((post, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-elevated transition-shadow">
                  <CardContent className="p-0">
                    <div className="h-44 w-full overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-primary font-medium mb-2">{post.category}</div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <div className="text-xs text-muted-foreground mb-4">{post.date}</div>
                      <Link to="/">
                        <Button variant="outline" size="sm">Read More</Button>
                      </Link>
                    </div>
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
