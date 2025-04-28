
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SearchHotels from "@/components/bookings/SearchHotels";
import { 
  Building, 
  MapPin, 
  Star, 
  Wifi, 
  Coffee, 
  Utensils, 
  Car, 
  Snowflake,
  LucideIcon,
  Filter,
  ArrowUpDown,
  Heart,
  ExternalLink
} from "lucide-react";

type Amenity = {
  name: string;
  icon: LucideIcon;
};

type Hotel = {
  id: string;
  name: string;
  location: string;
  address: string;
  rating: number;
  price: number;
  thumbnails: string[];
  description: string;
  amenities: Amenity[];
  popular?: boolean;
  discountPercentage?: number;
};

const amenities: Record<string, Amenity> = {
  wifi: { name: "Free WiFi", icon: Wifi },
  breakfast: { name: "Free Breakfast", icon: Coffee },
  restaurant: { name: "Restaurant", icon: Utensils },
  parking: { name: "Free Parking", icon: Car },
  ac: { name: "Air Conditioning", icon: Snowflake }
};

const sampleHotels: Hotel[] = [
  {
    id: "H1",
    name: "The Taj Palace",
    location: "New Delhi",
    address: "2 Sardar Patel Marg, Diplomatic Enclave, New Delhi",
    rating: 4.8,
    price: 12500,
    thumbnails: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Experience luxury and elegance at this iconic 5-star hotel featuring spacious rooms, award-winning restaurants, and world-class amenities.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ],
    popular: true
  },
  {
    id: "H2",
    name: "The Leela Palace",
    location: "Bangalore",
    address: "23 Airport Road, Bangalore",
    rating: 4.9,
    price: 15000,
    thumbnails: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop"
    ],
    description: "Nestled in the Garden City, this luxurious hotel offers royal treatment with its grand architecture, lush gardens, and impeccable service.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ],
    popular: true,
    discountPercentage: 15
  },
  {
    id: "H3",
    name: "JW Marriott",
    location: "Mumbai",
    address: "Juhu Tara Road, Juhu Beach, Mumbai",
    rating: 4.7,
    price: 10800,
    thumbnails: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Located along the beautiful Juhu Beach, this contemporary hotel offers stunning ocean views, excellent dining options, and premium amenities.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ]
  },
  {
    id: "H4",
    name: "ITC Grand Chola",
    location: "Chennai",
    address: "Mount Road, Chennai",
    rating: 4.8,
    price: 11500,
    thumbnails: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "A magnificent tribute to South Indian architecture, this luxury hotel combines traditional grandeur with modern comforts and sustainability practices.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ],
    popular: true,
    discountPercentage: 10
  },
  {
    id: "H5",
    name: "The Oberoi",
    location: "Udaipur",
    address: "Lake Pichola, Udaipur",
    rating: 4.9,
    price: 18000,
    thumbnails: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Set on the peaceful island of Lake Pichola, this palace-like hotel offers breathtaking views of the lake, city palace, and sunset.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ],
    popular: true
  },
  {
    id: "H6",
    name: "Vivanta by Taj",
    location: "Goa",
    address: "Panjim, Goa",
    rating: 4.6,
    price: 8500,
    thumbnails: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop"
    ],
    description: "Located near the beach, this hotel offers a perfect blend of Goan charm and modern luxury with its beautiful architecture and excellent hospitality.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ],
    discountPercentage: 20
  },
  {
    id: "H7",
    name: "Radisson Blu",
    location: "Jaipur",
    address: "Airport Plaza, Jaipur",
    rating: 4.5,
    price: 7500,
    thumbnails: [
      "https://images.unsplash.com/photo-1560200353-ce0a76b1d438?q=80&w=2074&auto=format&fit=crop"
    ],
    description: "A modern hotel offering comfortable accommodations, multiple dining options, and convenient access to the Pink City's attractions.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ]
  },
  {
    id: "H8",
    name: "The Imperial",
    location: "New Delhi",
    address: "Janpath, New Delhi",
    rating: 4.7,
    price: 13000,
    thumbnails: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "A heritage hotel with Victorian, colonial, and Art Deco influences, offering a glimpse into India's past with its museum-quality art collection.",
    amenities: [
      amenities.wifi,
      amenities.breakfast,
      amenities.restaurant,
      amenities.parking,
      amenities.ac
    ]
  }
];

const HotelsPage = () => {
  const [hotels] = useState<Hotel[]>(sampleHotels);
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('price');
  const [priceRange, setPriceRange] = useState<[number, number]>([5000, 20000]);
  const [starRating, setStarRating] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Apply filters and sorting
  const filteredAndSortedHotels = [...hotels]
    .filter(hotel => {
      const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesRating = starRating ? Math.floor(hotel.rating) === starRating : true;
      return matchesPrice && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-display font-bold mb-6">Hotel Search</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <SearchHotels />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="px-2">
                    <div className="h-2 bg-muted rounded-full mb-2 relative">
                      <div 
                        className="absolute h-2 bg-primary rounded-full"
                        style={{
                          left: `${((priceRange[0] - 5000) / 15000) * 100}%`,
                          right: `${100 - ((priceRange[1] - 5000) / 15000) * 100}%`
                        }}
                      ></div>
                      <div 
                        className="absolute w-4 h-4 rounded-full bg-primary border-2 border-white top-1/2 -translate-y-1/2 -translate-x-1/2"
                        style={{ left: `${((priceRange[0] - 5000) / 15000) * 100}%` }}
                      ></div>
                      <div 
                        className="absolute w-4 h-4 rounded-full bg-primary border-2 border-white top-1/2 -translate-y-1/2 -translate-x-1/2"
                        style={{ left: `${((priceRange[1] - 5000) / 15000) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹5,000</span>
                      <span>₹20,000</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Star Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <input 
                          type="radio" 
                          id={`star-${rating}`} 
                          name="star-rating" 
                          className="mr-2"
                          checked={starRating === rating}
                          onChange={() => setStarRating(rating === starRating ? null : rating)}
                        />
                        <label htmlFor={`star-${rating}`} className="flex items-center">
                          {Array(rating).fill(0).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {Array(5 - rating).fill(0).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-gray-300" />
                          ))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Amenities</h4>
                  <div className="space-y-2">
                    {Object.values(amenities).map((amenity) => (
                      <div key={amenity.name} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`amenity-${amenity.name}`}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`amenity-${amenity.name}`}
                          className="flex items-center"
                        >
                          <amenity.icon className="h-4 w-4 mr-1" />
                          <span>{amenity.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Property Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="hotel" className="mr-2" />
                      <label htmlFor="hotel">Hotel</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="resort" className="mr-2" />
                      <label htmlFor="resort">Resort</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="villa" className="mr-2" />
                      <label htmlFor="villa">Villa</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="apartment" className="mr-2" />
                      <label htmlFor="apartment">Apartment</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="guesthouse" className="mr-2" />
                      <label htmlFor="guesthouse">Guest House</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Hotel Results */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredAndSortedHotels.length} hotels found
            </h2>
            <div className="flex items-center">
              <span className="mr-2 hidden md:inline">Sort by:</span>
              <select
                className="p-2 border rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="price">Price (Low to High)</option>
                <option value="rating">Rating (High to Low)</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredAndSortedHotels.map((hotel) => (
              <Card key={hotel.id} className="hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Hotel Image */}
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <img 
                        src={hotel.thumbnails[0]} 
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Favorite Button */}
                      <button 
                        className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
                        onClick={() => toggleFavorite(hotel.id)}
                      >
                        <Heart 
                          className={`h-5 w-5 ${
                            favorites.includes(hotel.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-500'
                          }`} 
                        />
                      </button>
                      
                      {/* Discount Badge */}
                      {hotel.discountPercentage && (
                        <Badge 
                          className="absolute top-2 left-2 bg-red-600 text-white hover:bg-red-700"
                        >
                          {hotel.discountPercentage}% OFF
                        </Badge>
                      )}
                      
                      {/* Popular Badge */}
                      {hotel.popular && !hotel.discountPercentage && (
                        <Badge 
                          className="absolute top-2 left-2 bg-amber-500 text-white hover:bg-amber-600"
                        >
                          Popular
                        </Badge>
                      )}
                    </div>
                    
                    {/* Hotel Details */}
                    <div className="flex-1 p-4 md:p-6 flex flex-col">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-display font-semibold">{hotel.name}</h3>
                        
                        <div className="flex items-center gap-1">
                          <span className="font-semibold">{hotel.rating}</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span>{hotel.address}</span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {hotel.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, index) => (
                          <Badge key={index} variant="outline" className="flex items-center gap-1 font-normal">
                            <amenity.icon className="h-3 w-3" />
                            <span>{amenity.name}</span>
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                          <div className="text-2xl font-semibold text-primary">
                            ₹{hotel.price}
                            <span className="text-sm font-normal text-muted-foreground ml-1">per night</span>
                          </div>
                          
                          {hotel.discountPercentage && (
                            <div className="text-sm text-muted-foreground">
                              <span className="line-through">₹{Math.round(hotel.price / (1 - hotel.discountPercentage / 100))}</span>
                              <span className="text-green-600 ml-1">Save ₹{Math.round(hotel.price / (1 - hotel.discountPercentage / 100)) - hotel.price}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2 w-full sm:w-auto">
                          <Button variant="outline" size="sm" className="flex items-center gap-1 flex-1 sm:flex-auto">
                            <ExternalLink className="h-3 w-3" />
                            <span>Details</span>
                          </Button>
                          <Button className="flex-1 sm:flex-auto">Book Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
