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
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-[80vh] md:min-h-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 h-full flex items-center">
        {/* === DESKTOP: Grid (unchanged) === */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center w-full">
          {/* Text - Desktop */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 z-10">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold-custom leading-tight">
                {slides[currentSlide].title}
                <span className="block text-accent mt-2">{slides[currentSlide].highlight}</span>
                <span className="block text-xl lg:text-2xl xl:text-3xl mt-4 text-foreground/80 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              {slides[currentSlide].features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="text-primary" size={14} />
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Link to={slides[currentSlide].link}>
                <Button size="lg" className="gradient-hero text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform">
                  {slides[currentSlide].cta}
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image - Desktop */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl bg-gray-100">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].highlight}
                className="w-full h-[500px] xl:h-[550px] object-contain object-top transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* === MOBILE & TABLET: Stacked (Text → Image → Controls) === */}
        <div className="lg:hidden flex flex-col items-start w-full space-y-6">
          {/* Text - Mobile */}
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold-custom leading-tight">
                {slides[currentSlide].title}
                <span className="block text-accent mt-1">{slides[currentSlide].highlight}</span>
                <span className="block text-sm sm:text-base mt-3 text-foreground/80 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
            </div>

            {/* Features hidden on mobile */}
            <div className="hidden md:block space-y-3">
              {slides[currentSlide].features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="text-primary" size={14} />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to={slides[currentSlide].link} className="flex-1">
                <Button size="lg" className="gradient-hero text-white w-full px-4 py-3 text-sm font-semibold hover:scale-105 transition-transform">
                  {slides[currentSlide].cta}
                </Button>
              </Link>
              <Link to="/services" className="flex-1">
                <Button size="lg" variant="outline" className="w-full px-4 py-3 text-sm font-semibold">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image - Mobile (below text) */}
          <div className="w-full mt-6"> {/* ← Extra space between text & image */}
            <div className="overflow-hidden rounded-xl shadow-2xl bg-gray-100">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].highlight}
                className="w-full h-[280px] sm:h-[350px] object-contain object-top transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Navigation - Mobile (below image) */}
          <div className="w-full flex justify-center items-center gap-3 mt-8"> {/* ← Extra space */}
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-card hover:shadow-elevated transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-primary" size={18} />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`relative transition-all duration-300 ${
                    i === currentSlide
                      ? "w-7 h-2 bg-primary rounded-full"
                      : "w-2 h-2 bg-muted rounded-full hover:bg-primary/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {i === currentSlide && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-card hover:shadow-elevated transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="text-primary" size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation (unchanged) */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white shadow-card hover:shadow-elevated transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-primary" size={18} />
        </button>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`relative transition-all duration-300 ${
                i === currentSlide ? "w-8 h-2 bg-primary rounded-full" : "w-2 h-2 bg-muted rounded-full hover:bg-primary/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white shadow-card hover:shadow-elevated transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="text-primary" size={18} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;