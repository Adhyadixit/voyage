
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SearchTrains from "@/components/bookings/SearchTrains";
import { 
  Train, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Calendar, 
  Filter, 
  ArrowUpDown,
  Utensils,
  Wifi,
  Power,
  BedSingle,
  LucideIcon
} from "lucide-react";

type TrainClass = "SL" | "3A" | "2A" | "1A" | "CC" | "EC";

type TrainDetails = {
  id: string;
  name: string;
  number: string;
  departureStation: string;
  departureCode: string;
  arrivalStation: string;
  arrivalCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  runsOn: string[];
  classes: TrainClass[];
  prices: Record<TrainClass, number>;
  availability: Record<TrainClass, "Available" | "WL" | "RAC" | "GNWL" | "RLWL">;
  amenities: Array<{
    name: string;
    icon: LucideIcon;
  }>;
};

const sampleTrains: TrainDetails[] = [
  {
    id: "T1",
    name: "Rajdhani Express",
    number: "12301",
    departureStation: "Delhi",
    departureCode: "NDLS",
    arrivalStation: "Mumbai",
    arrivalCode: "CSMT",
    departureTime: "16:25",
    arrivalTime: "08:15",
    duration: "15h 50m",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    classes: ["3A", "2A", "1A"],
    prices: {
      "SL": 0,
      "3A": 1865,
      "2A": 3120,
      "1A": 5345,
      "CC": 0,
      "EC": 0
    },
    availability: {
      "SL": "Available",
      "3A": "Available",
      "2A": "Available",
      "1A": "Available",
      "CC": "Available",
      "EC": "Available"
    },
    amenities: [
      { name: "Meals Included", icon: Utensils },
      { name: "Bedding", icon: BedSingle },
      { name: "Charging Points", icon: Power }
    ]
  },
  {
    id: "T2",
    name: "Duronto Express",
    number: "12223",
    departureStation: "Delhi",
    departureCode: "NDLS",
    arrivalStation: "Mumbai",
    arrivalCode: "CSMT",
    departureTime: "23:00",
    arrivalTime: "15:35",
    duration: "16h 35m",
    runsOn: ["Mon", "Wed", "Fri"],
    classes: ["SL", "3A", "2A", "1A"],
    prices: {
      "SL": 755,
      "3A": 1985,
      "2A": 2875,
      "1A": 4930,
      "CC": 0,
      "EC": 0
    },
    availability: {
      "SL": "WL",
      "3A": "Available",
      "2A": "Available",
      "1A": "Available",
      "CC": "Available",
      "EC": "Available"
    },
    amenities: [
      { name: "Meals Included", icon: Utensils },
      { name: "Bedding", icon: BedSingle },
      { name: "Charging Points", icon: Power }
    ]
  },
  {
    id: "T3",
    name: "Shatabdi Express",
    number: "12001",
    departureStation: "Delhi",
    departureCode: "NDLS",
    arrivalStation: "Bhopal",
    arrivalCode: "BPL",
    departureTime: "06:00",
    arrivalTime: "14:10",
    duration: "8h 10m",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    classes: ["CC", "EC"],
    prices: {
      "SL": 0,
      "3A": 0,
      "2A": 0,
      "1A": 0,
      "CC": 1145,
      "EC": 2150
    },
    availability: {
      "SL": "Available",
      "3A": "Available",
      "2A": "Available",
      "1A": "Available",
      "CC": "Available",
      "EC": "Available"
    },
    amenities: [
      { name: "Meals Included", icon: Utensils },
      { name: "Wi-Fi", icon: Wifi },
      { name: "Charging Points", icon: Power }
    ]
  },
  {
    id: "T4",
    name: "Garib Rath Express",
    number: "12909",
    departureStation: "Delhi",
    departureCode: "NDLS",
    arrivalStation: "Mumbai",
    arrivalCode: "CSMT",
    departureTime: "15:35",
    arrivalTime: "09:10",
    duration: "17h 35m",
    runsOn: ["Tue", "Thu", "Sat"],
    classes: ["3A"],
    prices: {
      "SL": 0,
      "3A": 1125,
      "2A": 0,
      "1A": 0,
      "CC": 0,
      "EC": 0
    },
    availability: {
      "SL": "Available",
      "3A": "RAC",
      "2A": "Available",
      "1A": "Available",
      "CC": "Available",
      "EC": "Available"
    },
    amenities: [
      { name: "Bedding", icon: BedSingle },
      { name: "Charging Points", icon: Power }
    ]
  },
  {
    id: "T5",
    name: "Sampark Kranti Express",
    number: "12621",
    departureStation: "Delhi",
    departureCode: "NZM",
    arrivalStation: "Mumbai",
    arrivalCode: "CSMT",
    departureTime: "12:50",
    arrivalTime: "05:20",
    duration: "16h 30m",
    runsOn: ["Mon", "Wed", "Fri", "Sun"],
    classes: ["SL", "3A", "2A"],
    prices: {
      "SL": 645,
      "3A": 1695,
      "2A": 2485,
      "1A": 0,
      "CC": 0,
      "EC": 0
    },
    availability: {
      "SL": "Available",
      "3A": "Available",
      "2A": "Available",
      "1A": "Available",
      "CC": "Available",
      "EC": "Available"
    },
    amenities: [
      { name: "Bedding", icon: BedSingle },
      { name: "Charging Points", icon: Power }
    ]
  }
];

const classNames: Record<TrainClass, string> = {
  "SL": "Sleeper Class",
  "3A": "AC 3 Tier",
  "2A": "AC 2 Tier",
  "1A": "AC First Class",
  "CC": "Chair Car",
  "EC": "Executive Chair Car"
};

const availabilityColors: Record<string, string> = {
  "Available": "bg-green-100 text-green-800 hover:bg-green-200",
  "WL": "bg-amber-100 text-amber-800 hover:bg-amber-200",
  "RAC": "bg-amber-100 text-amber-800 hover:bg-amber-200",
  "GNWL": "bg-red-100 text-red-800 hover:bg-red-200",
  "RLWL": "bg-red-100 text-red-800 hover:bg-red-200"
};

const TrainsPage = () => {
  const [trains] = useState<TrainDetails[]>(sampleTrains);
  const [sortBy, setSortBy] = useState<'departure' | 'arrival' | 'duration' | 'price'>('departure');
  const [selectedClass, setSelectedClass] = useState<TrainClass>("3A");

  // Apply filters and sorting
  const filteredAndSortedTrains = [...trains]
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
        const priceA = a.prices[selectedClass] || Number.MAX_SAFE_INTEGER;
        const priceB = b.prices[selectedClass] || Number.MAX_SAFE_INTEGER;
        return priceA - priceB;
      }
      return 0;
    });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-display font-bold mb-6">Train Search</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <SearchTrains />
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
                  <h4 className="font-medium mb-2">Train Class</h4>
                  <div className="space-y-2">
                    {(Object.keys(classNames) as TrainClass[]).map((classType) => (
                      <div key={classType} className="flex items-center">
                        <input 
                          type="radio" 
                          id={`class-${classType}`} 
                          name="train-class" 
                          className="mr-2"
                          checked={selectedClass === classType}
                          onChange={() => setSelectedClass(classType)}
                        />
                        <label htmlFor={`class-${classType}`}>{classNames[classType]}</label>
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
                      <label htmlFor="morning">Early Morning (00:00 - 06:00)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="day" className="mr-2" />
                      <label htmlFor="day">Morning/Afternoon (06:00 - 12:00)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="afternoon" className="mr-2" />
                      <label htmlFor="afternoon">Afternoon/Evening (12:00 - 18:00)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="night" className="mr-2" />
                      <label htmlFor="night">Night (18:00 - 00:00)</label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Train Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="rajdhani" className="mr-2" />
                      <label htmlFor="rajdhani">Rajdhani</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="shatabdi" className="mr-2" />
                      <label htmlFor="shatabdi">Shatabdi</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="duronto" className="mr-2" />
                      <label htmlFor="duronto">Duronto</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="garibrath" className="mr-2" />
                      <label htmlFor="garibrath">Garib Rath</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="superfast" className="mr-2" />
                      <label htmlFor="superfast">Superfast</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="express" className="mr-2" />
                      <label htmlFor="express">Express/Mail</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="passenger" className="mr-2" />
                      <label htmlFor="passenger">Passenger</label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Days of Journey</h4>
                  <div className="grid grid-cols-7 gap-1">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                      <button
                        key={index}
                        className="h-8 w-8 rounded-full border-2 border-primary/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary"
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Train Results */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredAndSortedTrains.length} trains found
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
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredAndSortedTrains.map((train) => (
              <Card key={train.id} className="hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col gap-4">
                      {/* Train Info */}
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-display font-semibold text-lg">{train.name}</h3>
                          <div className="text-sm text-muted-foreground">
                            {train.number} • Runs on: {train.runsOn.join(", ")}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {train.amenities.map((amenity, index) => (
                            <Badge key={index} variant="outline" className="flex items-center gap-1 font-normal">
                              <amenity.icon className="h-3 w-3" />
                              <span>{amenity.name}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Journey Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div>
                          <div className="text-lg font-semibold">{train.departureTime}</div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <span>{train.departureStation}</span>
                            <span className="text-xs ml-1 text-muted-foreground/70">({train.departureCode})</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="text-xs text-muted-foreground mb-1">{train.duration}</div>
                          <div className="relative w-full">
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-muted-foreground/30"></div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                            <Train className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-semibold">{train.arrivalTime}</div>
                          <div className="flex items-center justify-end text-muted-foreground text-sm">
                            <span>{train.arrivalStation}</span>
                            <span className="text-xs ml-1 text-muted-foreground/70">({train.arrivalCode})</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Classes and Booking */}
                      <div className="mt-2 pt-4 border-t">
                        <h4 className="font-medium mb-3">Available Classes</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {train.classes.map((classType) => (
                            <div key={classType} className="border rounded-md p-3">
                              <div className="flex justify-between items-center mb-1">
                                <div className="font-medium">{classNames[classType]}</div>
                                <Badge
                                  variant="outline"
                                  className={availabilityColors[train.availability[classType]]}
                                >
                                  {train.availability[classType]}
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="text-lg font-semibold text-primary">₹{train.prices[classType]}</div>
                                <Button size="sm">Book</Button>
                              </div>
                            </div>
                          ))}
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

export default TrainsPage;
