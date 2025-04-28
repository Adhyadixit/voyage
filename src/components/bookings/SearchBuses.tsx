
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Bus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBuses = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [passengers, setPassengers] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would pass search params to the buses page
    navigate("/buses");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="from-bus">From</Label>
            <Input
              id="from-bus"
              placeholder="Departure City"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="to-bus">To</Label>
            <div className="relative">
              <Input
                id="to-bus"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Travel Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label htmlFor="passengers-bus">Passengers</Label>
            <Input
              id="passengers-bus"
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
          <Bus className="mr-2 h-4 w-4" /> Search Buses
        </Button>
      </div>
    </form>
  );
};

export default SearchBuses;
