
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Train, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchTrains = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [passengers, setPassengers] = useState("1");
  const [classType, setClassType] = useState("sleeper");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would pass search params to the trains page
    navigate("/trains");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="from-train">From</Label>
            <Input
              id="from-train"
              placeholder="Departure Station"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="to-train">To</Label>
            <div className="relative">
              <Input
                id="to-train"
                placeholder="Arrival Station"
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
            <Label>Journey Date</Label>
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
            <Label htmlFor="passengers-train">Passengers</Label>
            <Input
              id="passengers-train"
              type="number"
              min="1"
              max="10"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="class-type">Class</Label>
            <select
              id="class-type"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
              required
            >
              <option value="sleeper">Sleeper Class</option>
              <option value="ac3">AC 3 Tier</option>
              <option value="ac2">AC 2 Tier</option>
              <option value="ac1">AC 1st Class</option>
              <option value="chair">Chair Car</option>
            </select>
          </div>
        </div>

        <Button type="submit" className="w-full mt-2" size="lg">
          <Train className="mr-2 h-4 w-4" /> Search Trains
        </Button>
      </div>
    </form>
  );
};

export default SearchTrains;
