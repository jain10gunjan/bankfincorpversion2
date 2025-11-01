import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Calculators", path: "/calculators" },
    { name: "Contact", path: "/contact" },
  ];

  const applyButtonPath = "/apply";

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src={logo} 
              alt="BankFincorp Logo" 
              className="h-12 w-auto"
            />
            <span className="sr-only">BankFincorp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(item.path) 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* DSA Button */}
            <Button
              onClick={() => alert("DSA feature coming soon!")}
              className="gradient-hero relative h-10 px-4"
            >
              DSA
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-gray-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                Soon
              </span>
            </Button>
            {/* Apply Now Button */}
            <Link to={applyButtonPath}>
              <Button className="gradient-hero h-10 px-4">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Apply Button */}
          <Link to={applyButtonPath} className="md:hidden flex-shrink-0">
            <Button className="gradient-hero h-10 px-4 text-sm">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
