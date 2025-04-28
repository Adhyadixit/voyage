
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    quote: "Voyage Vista made our family trip to Kerala absolutely seamless. Their attention to detail and excellent customer service truly made our vacation special.",
    name: "Priya Sharma",
    location: "New Delhi",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: "2",
    quote: "I've used many travel platforms, but Voyage Vista stands out for its intuitive interface and amazing deals. My Manali trip was perfect thanks to their recommendations.",
    name: "Arjun Mehta",
    location: "Mumbai",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    quote: "The ticket management system is phenomenal! I could download all my bookings and access hotel information even without internet during my Northeast tour.",
    name: "Lakshmi Iyer",
    location: "Bangalore",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg"
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
          What Our Travelers Say
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-soft">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <Quote className="h-10 w-10 text-primary/20 mb-6" />
                
                <p className="text-lg md:text-xl italic mb-8">
                  "{testimonial.quote}"
                </p>
                
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="font-display font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
