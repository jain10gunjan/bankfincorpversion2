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
  const applyDSA = "/dsa";


  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b sticky top-0 z-50 shadow-sm w-full max-w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
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
            <Link to={applyDSA}>
              <Button className="gradient-hero h-10 px-4">
                 DSA
              </Button>
            </Link>
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
