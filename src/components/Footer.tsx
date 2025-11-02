import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="BankFincorp Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner for all financial needs. We provide comprehensive financial services to help you achieve your goals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579302287432#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/bank_fincorp/?fbclid=IwY2xjawN0ZMNleHRuA2FlbQIxMQBicmlkETFhaHRaWnJMaDVza1h2YkFXAR7i2NLecQXSeeS-UbqMvpBgetV1bxsDtESQK7_kBCtd_6421eqqDpc1tu5Spg_aem_QixDWqodVsPp3nrTfFM4xA" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Personal Loans</li>
              <li className="text-sm text-muted-foreground">Home Loans</li>
              <li className="text-sm text-muted-foreground">Business Loans</li>
              <li className="text-sm text-muted-foreground">Credit Score</li>
              <li className="text-sm text-muted-foreground">Investment Plans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>B - Bank Fincorp Unit-1, Shop No. C/16, Sudarshan Complex, Near Police Post, Pithampur Sector-2, District Dhar, MP 454775, India</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={18} />
                <span>1800 120 8921</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={18} />
                <span>support@bankfincorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BankFincorp. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
