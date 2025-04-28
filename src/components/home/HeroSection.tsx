
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const heroImages = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1569156706489-f31afbb874cb?q=80&w=2046&auto=format&fit=crop"
];

const captions = [
  "Discover the wonder of India",
  "Experience the vibrant culture",
  "Explore breathtaking landscapes",
  "Create unforgettable memories"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in">
          {captions[currentIndex]}
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8 animate-fade-in">
          From majestic mountains to pristine beaches, book your perfect getaway with Voyage Vista.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button size="lg" asChild>
            <Link to="/destinations">Explore Destinations</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
            <Link to="/offers">View Special Offers</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
