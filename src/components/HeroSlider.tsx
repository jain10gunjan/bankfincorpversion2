import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { bankFincorpServices } from "@/lib/utils";

// Mock data for demonstration
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

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Mobile Layout */}
      <div className="lg:hidden h-screen flex flex-col">
        <div className="flex-1 flex flex-col px-4 pt-6 overflow-hidden">
          {/* Content Section */}
          <div className="flex-shrink-0 space-y-3 mb-4">
            {/* Title */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-600">{slides[currentSlide].title}</h2>
              <h1 className="text-4xl font-bold text-orange-600 leading-tight mt-1">
                {slides[currentSlide].highlight}
              </h1>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="text-blue-600 w-3 h-3" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex flex-col justify-between min-h-0 mt-4">
            <div className="flex-shrink-0 mb-0">
              <div className="relative overflow-hidden shadow-xl">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].highlight}
                  className="w-full h-[28vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* CTA Buttons */}
            <div className="flex gap-3 pb-2 mt-4">
              <Button className="flex-1 gradient-hero text-white text-sm font-semibold py-2 hover:scale-105 transition-transform">
                {slides[currentSlide].cta}
              </Button>
              <Button variant="outline" className="flex-1 text-sm font-semibold py-5 border-2">
                All Services
              </Button>
            </div>
            </div>

            

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 pb-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-blue-600 w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide 
                        ? "w-6 h-1.5 bg-blue-600" 
                        : "w-1.5 h-1.5 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="text-blue-600 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen">
        <div className="container mx-auto px-8 lg:px-12 py-12 h-full flex items-center">
          <div className="grid grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="space-y-8 z-10 relative">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  {slides[currentSlide].title}
                  <span className="block text-orange-600 mt-2">{slides[currentSlide].highlight}</span>
                  <span className="block text-xl lg:text-2xl xl:text-3xl mt-4 text-gray-600 leading-relaxed">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
              </div>

              <div className="space-y-4">
                {slides[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <CheckCircle className="text-blue-600 w-4 h-4" />
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="gradient-hero text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform">
                  {slides[currentSlide].cta}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold border-2">
                  View All Services
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].highlight}
                  className="w-full h-[550px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-blue-600" size={18} />
            </button>

            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-300 ${
                    index === currentSlide 
                      ? "w-8 h-2 bg-blue-600 rounded-full" 
                      : "w-2 h-2 bg-gray-300 rounded-full hover:bg-blue-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="text-blue-600" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;