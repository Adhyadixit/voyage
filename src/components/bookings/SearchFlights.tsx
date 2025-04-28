
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plane, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchFlights = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("roundtrip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [passengers, setPassengers] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would pass search params to the flights page
    navigate("/flights");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="grid gap-4">
        <div className="flex flex-wrap gap-4 mb-2">
          <RadioGroup
            defaultValue="roundtrip"
            value={tripType}
            onValueChange={setTripType}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="roundtrip" id="roundtrip" />
              <Label htmlFor="roundtrip">Round Trip</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="oneway" id="oneway" />
              <Label htmlFor="oneway">One Way</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="from">From</Label>
            <Input
              id="from"
              placeholder="Departure City"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="to">To</Label>
            <div className="relative">
              <Input
                id="to"
                placeholder="Arrival City"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
              <div className="absolute top-1/2 -translate-y-1/2 -left-6">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Departure Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {departDate ? format(departDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={departDate}
                  onSelect={setDepartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {tripType === "roundtrip" && (
            <div>
              <Label>Return Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
          
          <div>
            <Label htmlFor="passengers">Passengers</Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              max="10"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full mt-2" size="lg">
          <Plane className="mr-2 h-4 w-4" /> Search Flights
        </Button>
      </div>
    </form>
  );
};

export default SearchFlights;
