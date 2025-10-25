import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, TrendingUp, Shield, Calendar, Building, Globe, Zap } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in complete transparency with our customers and maintain the highest standards of integrity.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our customers are at the heart of everything we do. We strive to exceed their expectations.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously innovate to provide the best financial solutions using cutting-edge technology.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering excellence in service and maintaining the highest quality standards.",
  },
];

const stats = [
  { value: "98.99%", label: "Happy Customers" },
  { value: "₹1600Cr+", label: "Disbursed Annually" },
  { value: "All Over India", label: "City Coverage" },
  { value: "350+", label: "Bank Partners" },
];

const timelineData = [
  {
    year: "2011",
    title: "Company Founded",
    description: "Started with a vision to democratize financial services",
    icon: Building,
    color: "from-blue-500 to-blue-600"
  },
  {
    year: "2012",
    title: "Pan India Expansion",
    description: "Expanded operations across all major Indian cities",
    icon: Zap,
    color: "from-green-500 to-green-600"
  },
  {
    year: "2015",
    title: "Digital Transformation",
    description: "Launched online loan application platforms for faster and easier loan approvals",
    icon: Globe,
    color: "from-purple-500 to-purple-600"
  },
  {
    year: "2023",
    title: "₹1600Cr Milestone",
    description: "Achieved ₹1600 Crores in total loan disbursements",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600"
  },
  {
    year: "2025",
    title: "98.99% Happy Customers",
    description: "Served well over Pan India with 98.99% happy customers",
    icon: Shield,
    color: "from-red-500 to-red-600"
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About BankFincorp</h1>
              <p className="text-xl text-white/90">
                Empowering financial dreams through innovative solutions and dedicated service since 2008
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2008, BankFincorp has grown to become one of India's most trusted financial services platforms. 
                    We started with a simple mission: to make financial services accessible, transparent, and hassle-free for everyone.
                  </p>
                  <p>
                    Over the years, we've helped millions of customers achieve their financial goals through our innovative 
                    products and personalized service. Our team of financial experts works tirelessly to ensure that every 
                    customer gets the best possible solution for their unique needs.
                  </p>
                  <p>
                    Today, we're proud to be a leader in the fintech space, leveraging technology to simplify complex 
                    financial processes and deliver exceptional value to our customers across 150+ cities in India.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={aboutTeam}
                  alt="Our Team"
                  className="rounded-2xl shadow-elevated w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to becoming a trusted financial partner for millions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {timelineData.map((item, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Timeline Dot */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center z-10 shadow-lg`}>
                        <item.icon className="text-white" size={24} />
                      </div>
                      
                      {/* Content Card */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <Card className="shadow-card hover:shadow-elevated transition-shadow">
                          <CardContent className="p-6">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold mb-3`}>
                              <Calendar size={16} />
                              {item.year}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mb-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize financial services by providing easy access to credit and financial products, 
                    empowering individuals and businesses to achieve their goals through technology-driven solutions 
                    and personalized service.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-orange-600 flex items-center justify-center mb-4">
                    <Eye className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be India's most trusted and innovative financial services platform, where every individual 
                    and business can access fair, transparent, and tailored financial solutions that help them thrive 
                    in an ever-changing economic landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape the way we serve our customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4">
                      <value.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust BankFincorp for their financial needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
