import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Delhi",
    content: "Mayank Singh got my salary account unfreezed within 10 days. His expertise in handling PMLA cases is exceptional. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "IT Professional, Bangalore",
    content: "Saved my business from a PMLA freeze. The team's quick response and thorough understanding of cyber laws made all the difference.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Entrepreneur, Gurgaon, Delhi",
    content: "Recovered funds from crypto scam when I had lost all hope. Professional service and constant communication throughout the case.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "HR Manager, Ghaziabad, UP",
    content: "Best cyber lawyer in Kolkata. They handled my online defamation case with utmost professionalism and got positive results quickly.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 opacity-10">
        <Quote className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Quote className="w-24 h-24 text-primary rotate-180" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-background rounded-2xl p-8 md:p-12 border border-border shadow-elevated">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-foreground mb-8 font-serif leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            <div>
              <p className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="goldOutline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="goldOutline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
