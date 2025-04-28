
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SearchBuses from "@/components/bookings/SearchBuses";
import { 
  Bus, 
  MapPin, 
  Clock, 
  Calendar, 
  Filter, 
  ArrowUpDown,
  Wifi,
  Music,
  Snowflake,
  Tv,
  Power,
  LucideIcon,
  ArrowRight
} from "lucide-react";

type BusType = "AC Sleeper" | "Non-AC Sleeper" | "AC Seater" | "Non-AC Seater" | "Volvo Multi-Axle" | "Mercedes";

type Amenity = {
  name: string;
  icon: LucideIcon;
};

type Bus = {
  id: string;
  operator: string;
  type: BusType;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureBusStand: string;
  arrivalBusStand: string;
  price: number;
  rating: number;
  totalRatings: number;
  amenities: Amenity[];
  seatsAvailable: number;
  totalSeats: number;
  discountPercentage?: number;
};

const amenities: Record<string, Amenity> = {
  wifi: { name: "Wi-Fi", icon: Wifi },
  entertainment: { name: "Entertainment", icon: Tv },
  charging: { name: "Charging Point", icon: Power },
  ac: { name: "Air Conditioning", icon: Snowflake },
  music: { name: "Music System", icon: Music }
};

const sampleBuses: Bus[] = [
  {
    id: "B1",
    operator: "Volvo Bus Service",
    type: "Volvo Multi-Axle",
    departureCity: "Delhi",
    arrivalCity: "Manali",
    departureTime: "21:00",
    arrivalTime: "09:30",
    duration: "12h 30m",
    departureBusStand: "Kashmere Gate ISBT",
    arrivalBusStand: "Manali Bus Stand",
    price: 1500,
    rating: 4.5,
    totalRatings: 324,
    amenities: [
      amenities.wifi,
      amenities.ac,
      amenities.charging,
      amenities.entertainment
    ],
    seatsAvailable: 14,
    totalSeats: 40,
    discountPercentage: 15
  },
  {
    id: "B2",
    operator: "Himachal Tourism",
    type: "AC Sleeper",
    departureCity: "Delhi",
    arrivalCity: "Manali",
    departureTime: "18:30",
    arrivalTime: "08:00",
    duration: "13h 30m",
    departureBusStand: "Kashmere Gate ISBT",
    arrivalBusStand: "Manali Bus Stand",
    price: 1350,
    rating: 4.2,
    totalRatings: 156,
    amenities: [
      amenities.ac,
      amenities.charging
    ],
    seatsAvailable: 6,
    totalSeats: 30
  },
  {
    id: "B3",
    operator: "Zing Bus",
    type: "Volvo Multi-Axle",
    departureCity: "Delhi",
    arrivalCity: "Manali",
    departureTime: "20:00",
    arrivalTime: "09:00",
    duration: "13h 00m",
    departureBusStand: "Majnu Ka Tila",
    arrivalBusStand: "Manali Bus Stand",
    price: 1800,
    rating: 4.7,
    totalRatings: 218,
    amenities: [
      amenities.wifi,
      amenities.ac,
      amenities.charging,
      amenities.entertainment,
      amenities.music
    ],
    seatsAvailable: 22,
    totalSeats: 45,
    discountPercentage: 10
  },
  {
    id: "B4",
    operator: "Rajasthan State Transport",
    type: "Non-AC Seater",
    departureCity: "Delhi",
    arrivalCity: "Jaipur",
    departureTime: "09:30",
    arrivalTime: "15:00",
    duration: "5h 30m",
    departureBusStand: "Kashmere Gate ISBT",
    arrivalBusStand: "Sindhi Camp Bus Stand",
    price: 450,
    rating: 3.8,
    totalRatings: 94,
    amenities: [
      amenities.charging
    ],
    seatsAvailable: 35,
    totalSeats: 54
  },
  {
    id: "B5",
    operator: "Intercity Bus Service",
    type: "AC Seater",
    departureCity: "Delhi",
    arrivalCity: "Jaipur",
    departureTime: "11:00",
    arrivalTime: "16:00",
    duration: "5h 00m",
    departureBusStand: "Sarai Kale Khan ISBT",
    arrivalBusStand: "Sindhi Camp Bus Stand",
    price: 650,
    rating: 4.0,
    totalRatings: 127,
    amenities: [
      amenities.ac,
      amenities.charging,
      amenities.music
    ],
    seatsAvailable: 18,
    totalSeats: 40
  },
  {
    id: "B6",
    operator: "Volvo Tours",
    type: "Mercedes",
    departureCity: "Delhi",
    arrivalCity: "Shimla",
    departureTime: "22:00",
    arrivalTime: "08:00",
    duration: "10h 00m",
    departureBusStand: "Kashmere Gate ISBT",
    arrivalBusStand: "Shimla ISBT",
    price: 1650,
    rating: 4.6,
    totalRatings: 183,
    amenities: [
      amenities.wifi,
      amenities.ac,
      amenities.charging,
      amenities.entertainment,
      amenities.music
    ],
    seatsAvailable: 8,
    totalSeats: 30,
    discountPercentage: 20
  }
];

const busTypes: BusType[] = [
  "AC Sleeper",
  "Non-AC Sleeper",
  "AC Seater",
  "Non-AC Seater",
  "Volvo Multi-Axle",
  "Mercedes"
];

const BusesPage = () => {
  const [buses] = useState<Bus[]>(sampleBuses);
  const [sortBy, setSortBy] = useState<'departure' | 'arrival' | 'duration' | 'price' | 'rating'>('departure');
  const [selectedBusTypes, setSelectedBusTypes] = useState<BusType[]>([]);

  // Apply filters and sorting
  const filteredAndSortedBuses = [...buses]
    .filter(bus => selectedBusTypes.length === 0 || selectedBusTypes.includes(bus.type))
    .sort((a, b) => {
      if (sortBy === 'departure') {
        const timeA = parseInt(a.departureTime.replace(':', ''));
        const timeB = parseInt(b.departureTime.replace(':', ''));
        return timeA - timeB;
      }
      if (sortBy === 'arrival') {
        const timeA = parseInt(a.arrivalTime.replace(':', ''));
        const timeB = parseInt(b.arrivalTime.replace(':', ''));
        return timeA - timeB;
      }
      if (sortBy === 'duration') {
        // Convert duration strings to minutes for comparison
        const durationToMinutes = (duration: string) => {
          const [hours, minutes] = duration.split('h ').map(part => parseInt(part.replace('m', '')));
          return hours * 60 + minutes;
        };
        return durationToMinutes(a.duration) - durationToMinutes(b.duration);
      }
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

  const toggleBusType = (type: BusType) => {
    if (selectedBusTypes.includes(type)) {
      setSelectedBusTypes(selectedBusTypes.filter(t => t !== type));
    } else {
      setSelectedBusTypes([...selectedBusTypes, type]);
    }
  };

  // Function to generate seat availability colors
  const getSeatAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "bg-green-100 text-green-800 hover:bg-green-200";
    if (percentage > 20) return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    return "bg-red-100 text-red-800 hover:bg-red-200";
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-display font-bold mb-6">Bus Search</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <SearchBuses />
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
                  <h4 className="font-medium mb-2">Bus Type</h4>
                  <div className="space-y-2">
                    {busTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`type-${type}`} 
                          className="mr-2"
                          checked={selectedBusTypes.includes(type)}
                          onChange={() => toggleBusType(type)}
                        />
                        <label htmlFor={`type-${type}`}>{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Departure Time</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="morning" className="mr-2" />
                      <label htmlFor="morning">Morning (06:00 - 12:00)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="afternoon" className="mr-2" />
                      <label htmlFor="afternoon">Afternoon (12:00 - 18:00)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="evening" className="mr-2" />
                      <label htmlFor="evening">Evening (18:00 - 24:00)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="night" className="mr-2" />
                      <label htmlFor="night">Night (00:00 - 06:00)</label>
                    </div>
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
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="px-2">
                    <div className="h-2 bg-muted rounded-full mb-2 relative">
                      <div className="absolute h-2 bg-primary rounded-full left-1/4 right-1/4"></div>
                      <div className="absolute w-4 h-4 rounded-full bg-primary border-2 border-white top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/4"></div>
                      <div className="absolute w-4 h-4 rounded-full bg-primary border-2 border-white top-1/2 -translate-y-1/2 -translate-x-1/2 right-1/4"></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹400</span>
                      <span>₹2,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bus Results */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredAndSortedBuses.length} buses found
            </h2>
            <div className="flex items-center">
              <span className="mr-2 hidden md:inline">Sort by:</span>
              <select
                className="p-2 border rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="departure">Departure Time</option>
                <option value="arrival">Arrival Time</option>
                <option value="duration">Duration</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredAndSortedBuses.map((bus) => (
              <Card key={bus.id} className="hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col gap-4">
                      {/* Bus Info */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-display font-semibold text-lg">{bus.operator}</h3>
                            {bus.discountPercentage && (
                              <Badge className="bg-red-600 text-white hover:bg-red-700">
                                {bus.discountPercentage}% OFF
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {bus.type}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-1 rounded">
                            <span className="font-semibold">{bus.rating}</span>
                            <svg className="h-3 w-3 fill-amber-500" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span className="text-xs">
                              ({bus.totalRatings})
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className={getSeatAvailabilityColor(bus.seatsAvailable, bus.totalSeats)}
                          >
                            {bus.seatsAvailable} seats left
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Journey Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div>
                          <div className="text-lg font-semibold">{bus.departureTime}</div>
                          <div className="text-sm text-muted-foreground">{bus.departureCity}</div>
                          <div className="text-xs text-muted-foreground/70">
                            {bus.departureBusStand}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="text-xs text-muted-foreground mb-1">{bus.duration}</div>
                          <div className="relative w-full">
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-muted-foreground/30"></div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                            <Bus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-semibold">{bus.arrivalTime}</div>
                          <div className="text-sm text-muted-foreground">{bus.arrivalCity}</div>
                          <div className="text-xs text-muted-foreground/70">
                            {bus.arrivalBusStand}
                          </div>
                        </div>
                      </div>
                      
                      {/* Price, Amenities and Booking */}
                      <div className="mt-2 pt-4 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                          {bus.amenities.map((amenity, index) => (
                            <Badge key={index} variant="outline" className="flex items-center gap-1 font-normal">
                              <amenity.icon className="h-3 w-3" />
                              <span>{amenity.name}</span>
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-2xl font-semibold text-primary">₹{bus.price}</div>
                            {bus.discountPercentage && (
                              <div className="text-sm text-muted-foreground">
                                <span className="line-through">₹{Math.round(bus.price / (1 - bus.discountPercentage / 100))}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline">View Seats</Button>
                            <Button className="flex items-center gap-1">
                              <span>Book</span>
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
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

export default BusesPage;
