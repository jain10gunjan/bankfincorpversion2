import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { bankFincorpServices } from "@/lib/utils";

const slides = bankFincorpServices.slice(0, 10).map((s) => ({
  title: "Explore",
  highlight: s.title,
  subtitle: s.tagline || s.description,
  features: ["Best Rates", "Digital Process", "Quick Approval"],
  image: s.image,
  cta: "Explore",
  link: `/services/${s.id}`,
}));

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-muted/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            animation: 'progress 5s linear infinite'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 z-10 relative order-2 lg:order-1">
            {/* Slide Counter */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="font-medium">{currentSlide + 1}</span>
              <span>/</span>
              <span>{slides.length}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold-custom leading-tight">
                {slides[currentSlide].title}
                <span className="block text-accent mt-2">{slides[currentSlide].highlight}</span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-foreground/80 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
            </div>

            <div className="space-y-3 md:space-y-4">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="text-primary" size={14} />
                  </div>
                  <span className="text-sm md:text-base lg:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Link to={slides[currentSlide].link}>
                <Button size="lg" className="gradient-hero text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold hover:scale-105 transition-transform w-full sm:w-auto">
                  {slides[currentSlide].cta}
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative group order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].highlight}
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Centered Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 rounded-full bg-white shadow-card hover:shadow-elevated transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-primary" size={18} />
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2 md:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-6 md:w-8 h-2 bg-primary rounded-full" 
                    : "w-2 h-2 bg-muted rounded-full hover:bg-primary/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 rounded-full bg-white shadow-card hover:shadow-elevated transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="text-primary" size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;