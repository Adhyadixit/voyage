import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import SearchFlights from "@/components/bookings/SearchFlights";
import { 
  Plane, 
  Clock, 
  ArrowRight, 
  Calendar, 
  LucideIcon,
  Filter,
  ArrowUpDown,
  Briefcase,
  Utensils,
  Wifi,
  Monitor,
  BatteryFull
} from "lucide-react";

type Airline = {
  id: string;
  name: string;
  logo: string;
};

type Flight = {
  id: string;
  airline: Airline;
  flightNumber: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  type: "direct" | "1-stop" | "2-stop";
  stops?: { airport: string; duration: string }[];
  amenities: Array<{
    name: string;
    icon: LucideIcon;
  }>;
};

const airlines: Airline[] = [
  { id: "AI", name: "Air India", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRWdMJRkVX3xT4FCenWUNKX0CQjwCZYyO-w&s" },
  { id: "6E", name: "IndiGo", logo: "https://play-lh.googleusercontent.com/zG1e9Pdw27RYpUo_TpSZcD-zjCeShkN5pxwgy7L-e9hra170T_SpBzcUc5nsBu3gWQ" },
  { id: "SG", name: "SpiceJet", logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=11" },
  { id: "I5", name: "AirAsia India", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbgswtEVHsGwHfni16vWkba2Yd8wLXOLJ3g&s" },
  { id: "UK", name: "Vistara", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Air_Vistara_logo.png" },
  { id: "IX", name: "Air India Express", logo: "https://seeklogo.com/images/A/air-india-express-logo-2D3C7C6C1D-seeklogo.com.png" },
  { id: "QP", name: "Akasa Air", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Akasa_Air_logo.png" },
  { id: "9I", name: "Alliance Air", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alliance_Air_Logo.png" },
  { id: "S5", name: "Star Air", logo: "https://starair.in/images/logo.png" },
  { id: "OG", name: "Fly91", logo: "https://www.fly91.in/assets/img/logo.svg" },
  { id: "FLG", name: "FlyBig", logo: "https://flybig.in/assets/images/logo.png" },
  { id: "ZO", name: "Zooom Air", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Zooom_Air_logo.png" }
];

const sampleFlights: Flight[] = [
  // Major trunk routes, realistic timings, and a diverse set of airlines and routes for India
  // Delhi - Mumbai
  {
    id: "F1",
    airline: airlines[0],
    flightNumber: "AI-809",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    departureTime: "06:00",
    arrivalTime: "08:15",
    duration: "2h 15m",
    price: 5600,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase },
      { name: "Meals", icon: Utensils },
      { name: "In-flight Entertainment", icon: Monitor }
    ]
  },
  {
    id: "F2",
    airline: airlines[1],
    flightNumber: "6E-201",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    departureTime: "07:00",
    arrivalTime: "09:10",
    duration: "2h 10m",
    price: 5100,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  {
    id: "F3",
    airline: airlines[2],
    flightNumber: "SG-421",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    departureTime: "08:00",
    arrivalTime: "10:20",
    duration: "2h 20m",
    price: 4950,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase },
      { name: "Meals Available", icon: Utensils }
    ]
  },
  {
    id: "F4",
    airline: airlines[3],
    flightNumber: "I5-1234",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    departureTime: "09:00",
    arrivalTime: "11:15",
    duration: "2h 15m",
    price: 4800,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  {
    id: "F5",
    airline: airlines[4],
    flightNumber: "UK-933",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    departureTime: "10:00",
    arrivalTime: "12:20",
    duration: "2h 20m",
    price: 5700,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase },
      { name: "Complimentary Meals", icon: Utensils }
    ]
  },
  // Mumbai - Bengaluru
  {
    id: "F6",
    airline: airlines[1],
    flightNumber: "6E-379",
    departureCity: "Mumbai",
    arrivalCity: "Bengaluru",
    departureTime: "12:00",
    arrivalTime: "14:00",
    duration: "2h 00m",
    price: 4200,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  {
    id: "F7",
    airline: airlines[5],
    flightNumber: "IX-811",
    departureCity: "Mumbai",
    arrivalCity: "Bengaluru",
    departureTime: "13:00",
    arrivalTime: "15:05",
    duration: "2h 05m",
    price: 4100,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  // Bengaluru - Hyderabad
  {
    id: "F8",
    airline: airlines[6],
    flightNumber: "QP-131",
    departureCity: "Bengaluru",
    arrivalCity: "Hyderabad",
    departureTime: "15:30",
    arrivalTime: "16:45",
    duration: "1h 15m",
    price: 2950,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  // Regional/commuter
  {
    id: "F9",
    airline: airlines[7],
    flightNumber: "9I-751",
    departureCity: "Delhi",
    arrivalCity: "Shimla",
    departureTime: "06:30",
    arrivalTime: "07:30",
    duration: "1h 00m",
    price: 3200,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  {
    id: "F10",
    airline: airlines[8],
    flightNumber: "S5-101",
    departureCity: "Bengaluru",
    arrivalCity: "Belgaum",
    departureTime: "09:10",
    arrivalTime: "10:20",
    duration: "1h 10m",
    price: 2600,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  {
    id: "F11",
    airline: airlines[9],
    flightNumber: "OG-201",
    departureCity: "Goa",
    arrivalCity: "Bengaluru",
    departureTime: "11:00",
    arrivalTime: "12:30",
    duration: "1h 30m",
    price: 3400,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  {
    id: "F12",
    airline: airlines[10],
    flightNumber: "FLG-301",
    departureCity: "Guwahati",
    arrivalCity: "Kolkata",
    departureTime: "08:00",
    arrivalTime: "09:30",
    duration: "1h 30m",
    price: 3500,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  },
  {
    id: "F13",
    airline: airlines[11],
    flightNumber: "ZO-401",
    departureCity: "Delhi",
    arrivalCity: "Jabalpur",
    departureTime: "16:00",
    arrivalTime: "17:30",
    duration: "1h 30m",
    price: 2700,
    type: "direct",
    amenities: [
      { name: "Baggage Included", icon: Briefcase }
    ]
  }
];

const FlightsPage = () => {
  const [flights] = useState<Flight[]>(sampleFlights);
  const [sortBy, setSortBy] = useState<'price' | 'duration' | 'departure' | 'arrival'>('price');
  const [filterType, setFilterType] = useState<'all' | 'direct' | 'with-stops'>('all');

  // Apply filters and sorting
  const filteredAndSortedFlights = [...flights]
    .filter(flight => {
      if (filterType === 'all') return true;
      if (filterType === 'direct') return flight.type === 'direct';
      if (filterType === 'with-stops') return flight.type !== 'direct';
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'duration') {
        // Convert duration strings to minutes for comparison
        const durationToMinutes = (duration: string) => {
          const [hours, minutes] = duration.split('h ').map(part => parseInt(part.replace('m', '')));
          return hours * 60 + minutes;
        };
        return durationToMinutes(a.duration) - durationToMinutes(b.duration);
      }
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
      return 0;
    });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-display font-bold mb-6">Flight Search</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <Tabs defaultValue="oneway">
            <TabsList className="mb-4 w-full sm:w-auto">
              <TabsTrigger value="oneway">One Way</TabsTrigger>
              <TabsTrigger value="roundtrip">Round Trip</TabsTrigger>
              <TabsTrigger value="multicity">Multi-City</TabsTrigger>
            </TabsList>
            
            <TabsContent value="oneway">
              <SearchFlights />
            </TabsContent>
            
            <TabsContent value="roundtrip">
              <SearchFlights />
            </TabsContent>
            
            <TabsContent value="multicity">
              <div className="flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2">Multi-City Booking</h3>
                  <p className="text-muted-foreground mb-4">
                    Plan a complex itinerary with multiple destinations
                  </p>
                  <Button>Start Planning</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
                  <h4 className="font-medium mb-2">Stops</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="all-stops" 
                        name="stops" 
                        className="mr-2"
                        checked={filterType === 'all'}
                        onChange={() => setFilterType('all')}
                      />
                      <label htmlFor="all-stops">All</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="non-stop" 
                        name="stops" 
                        className="mr-2"
                        checked={filterType === 'direct'}
                        onChange={() => setFilterType('direct')}
                      />
                      <label htmlFor="non-stop">Non-stop</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="with-stops" 
                        name="stops" 
                        className="mr-2"
                        checked={filterType === 'with-stops'}
                        onChange={() => setFilterType('with-stops')}
                      />
                      <label htmlFor="with-stops">With stops</label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Airlines</h4>
                  <div className="space-y-2">
                    {airlines.map((airline) => (
                      <div key={airline.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`airline-${airline.id}`}
                          className="mr-2"
                        />
                        <label htmlFor={`airline-${airline.id}`}>{airline.name}</label>
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
                      <span>₹2,000</span>
                      <span>₹10,000</span>
                    </div>
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
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Flight Results */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredAndSortedFlights.length} flights found
            </h2>
            <div className="flex items-center">
              <span className="mr-2 hidden md:inline">Sort by:</span>
              <select
                className="p-2 border rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="price">Price</option>
                <option value="duration">Duration</option>
                <option value="departure">Departure Time</option>
                <option value="arrival">Arrival Time</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredAndSortedFlights.map((flight) => (
              <Card key={flight.id} className="hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      {/* Airline Info */}
                      <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="h-10 w-10 p-1 border rounded-md flex items-center justify-center">
                          <img 
                            src={flight.airline.logo} 
                            alt={flight.airline.name} 
                            className="h-full" 
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target.src !== "https://via.placeholder.com/64?text=Logo") {
                                target.src = "https://via.placeholder.com/64?text=Logo";
                              }
                            }} 
                          />
                        </div>
                        <div>
                          <div className="font-medium">{flight.airline.name}</div>
                          <div className="text-sm text-muted-foreground">{flight.flightNumber}</div>
                        </div>
                      </div>
                      
                      {/* Flight Times */}
                      <div className="flex-1 grid grid-cols-3 gap-2 w-full">
                        <div className="text-center">
                          <div className="text-lg font-semibold">{flight.departureTime}</div>
                          <div className="text-sm text-muted-foreground">{flight.departureCity}</div>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-xs text-muted-foreground mb-1">{flight.duration}</div>
                          <div className="relative w-full">
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-muted-foreground/30"></div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                            {flight.type !== 'direct' && (
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                            )}
                          </div>
                          <div className="text-xs pt-1">
                            {flight.type === 'direct' ? (
                              <Badge variant="outline" className="text-xs font-normal">Non-stop</Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs font-normal">
                                {flight.type === '1-stop' ? '1 stop' : '2 stops'}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-lg font-semibold">{flight.arrivalTime}</div>
                          <div className="text-sm text-muted-foreground">{flight.arrivalCity}</div>
                        </div>
                      </div>
                      
                      {/* Price and Book Button */}
                      <div className="w-full md:w-auto text-center md:text-right">
                        <div className="text-2xl font-semibold text-primary">₹{flight.price}</div>
                        <Button className="mt-2 w-full md:w-auto">Select</Button>
                      </div>
                    </div>
                    
                    {/* Amenities and Flight Details */}
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex flex-wrap gap-3">
                        {flight.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center text-xs text-muted-foreground">
                            <amenity.icon className="h-3 w-3 mr-1" />
                            <span>{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                      
                      {flight.type !== 'direct' && flight.stops && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          <span className="font-medium">Stops: </span>
                          {flight.stops.map((stop, index) => (
                            <span key={index}>
                              {stop.airport} ({stop.duration} layover)
                              {index < flight.stops!.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </div>
                      )}
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

export default FlightsPage;
