
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: "1",
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    location: "Kerala",
    tag: "Nature"
  },
  {
    id: "2",
    name: "Taj Mahal",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
    location: "Agra",
    tag: "Heritage"
  },
  {
    id: "3",
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?q=80&w=2070&auto=format&fit=crop",
    location: "Himachal Pradesh",
    tag: "Mountains"
  },
  {
    id: "4",
    name: "Arunachal Pradesh",
    image: "https://images.unsplash.com/photo-1611250458392-c436ddbb1ea1?q=80&w=2070&auto=format&fit=crop",
    location: "Northeast India",
    tag: "Adventure"
  },
  {
    id: "5",
    name: "Goa Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
    location: "Goa",
    tag: "Beach"
  },
  {
    id: "6",
    name: "Varanasi Ghats",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=2070&auto=format&fit=crop",
    location: "Uttar Pradesh",
    tag: "Spiritual"
  },
  {
    id: "7",
    name: "Kasol",
    image: "https://images.unsplash.com/photo-1577289184770-8c0edeabf657?q=80&w=2069&auto=format&fit=crop",
    location: "Himachal Pradesh",
    tag: "Scenic"
  },
  {
    id: "8",
    name: "Cochin",
    image: "https://images.unsplash.com/photo-1590123550582-a449049d8511?q=80&w=2069&auto=format&fit=crop",
    location: "Kerala",
    tag: "Cultural"
  }
];

const PopularDestinations = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {destinations.map((destination) => (
        <Link key={destination.id} to={`/destinations/${destination.id}`}>
          <Card className="overflow-hidden hover-lift">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <Badge
                variant="secondary"
                className="absolute top-3 right-3"
              >
                {destination.tag}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-display font-semibold text-lg mb-1">{destination.name}</h3>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{destination.location}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default PopularDestinations;
