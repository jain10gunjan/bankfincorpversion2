import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import educationImage from "@/assets/heroimages/educationimage.jpg"
import homeLoan from "@/assets/heroimages/homeloan.jpg"
import commercialProject from "@/assets/heroimages/commercialImage.jpg"
import personalBusiness from "@/assets/heroimages/personalImage.jpg"
import vehicleInstant from "@/assets/heroimages/vechileImage.jpg"
import msmeImage from "@/assets/heroimages/msmeImage.jpg"
import insuranceImage from "@/assets/heroimages/insuranceImage.jpg"
import creditCardAccount from "@/assets/heroimages/creditCardImage.jpg"

type Service = {
  title: string;
  subtitle?: string; 
  image: string;
  link?: string;
};

const services: Service[] = [
  { title: "Home Loan", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop" },
  { title: "Industrial Project", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop" },
  { title: "Commercial Project", image: commercialProject },
  { title: "M.SM.E / SME", image: msmeImage },
  { title: "Personal, Business", image: personalBusiness },
  { title: "Vehicle, Instant", image: vehicleInstant },
  { title: "Investment", image: insuranceImage },
  { title: "Education", image: educationImage },
  { title: "Insurance", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop" },
  { title: "Credit Card, Account Open", image: creditCardAccount },
];

const ServicesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (delta: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-muted/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-2">Explore financing and financial products designed around your needs.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scrollBy(-400)} className="p-2 rounded-full bg-white shadow-card hover:shadow-elevated" aria-label="Scroll left">
              <ChevronLeft className="text-primary" />
            </button>
            <button onClick={() => scrollBy(400)} className="p-2 rounded-full bg-white shadow-card hover:shadow-elevated" aria-label="Scroll right">
              <ChevronRight className="text-primary" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4" style={{ scrollBehavior: "smooth" }}>
            {services.map((s, i) => (
              <Card key={i} className="min-w-[260px] max-w-[260px] snap-start overflow-hidden hover:shadow-elevated transition-shadow">
                <CardContent className="p-0">
                  <div className="h-40 w-full overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    {s.subtitle ? <p className="text-sm text-muted-foreground mt-1">{s.subtitle}</p> : null}
                    <div className="mt-4">
                      <Link to={s.link || "/services"}>
                        <Button variant="outline" size="sm" className="w-full">
                          Explore <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-end gap-2 mt-2">
            <button onClick={() => scrollBy(-300)} className="p-2 rounded-full bg-white shadow-card" aria-label="Scroll left">
              <ChevronLeft className="text-primary" />
            </button>
            <button onClick={() => scrollBy(300)} className="p-2 rounded-full bg-white shadow-card" aria-label="Scroll right">
              <ChevronRight className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;


