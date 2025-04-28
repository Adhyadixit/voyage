
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Building, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchHotels = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 3))
  );
  const [rooms, setRooms] = useState("1");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would pass search params to the hotels page
    navigate("/hotels");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="location">Destination</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="location"
              className="pl-10"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Check-in Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label>Check-out Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="rooms">Rooms</Label>
            <Input
              id="rooms"
              type="number"
              min="1"
              max="10"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="adults">Adults</Label>
            <Input
              id="adults"
              type="number"
              min="1"
              max="10"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="children">Children</Label>
            <Input
              id="children"
              type="number"
              min="0"
              max="10"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            />
          </div>
        </div>

        <Button type="submit" className="w-full mt-2" size="lg">
          <Building className="mr-2 h-4 w-4" /> Search Hotels
        </Button>
      </div>
    </form>
  );
};

export default SearchHotels;
