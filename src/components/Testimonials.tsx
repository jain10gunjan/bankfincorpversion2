import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    rating: 5,
    text: "UrbanMoney helped me get a business loan in just 24 hours. The process was completely paperless and hassle-free. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
    text: "I got my home loan at the best interest rate. The team was very supportive throughout the process. Thank you UrbanMoney!",
  },
  {
    name: "Amit Patel",
    role: "Entrepreneur",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    rating: 5,
    text: "Quick approval, competitive rates, and excellent customer service. UrbanMoney made my personal loan experience smooth and stress-free.",
  },
  {
    name: "Sneha Reddy",
    role: "Teacher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    rating: 5,
    text: "The EMI calculator helped me plan my finances perfectly. Got the loan against property with minimal documentation. Great service!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust UrbanMoney for their financial needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
