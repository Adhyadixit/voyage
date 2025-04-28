
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  Plane, 
  Building, 
  Train, 
  Bus, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Search,
  Filter,
  ArrowUpDown
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

// Mock data for the bookings
const mockBookings = [
  {
    id: "FL-123456",
    type: "flight",
    status: "upcoming",
    title: "Delhi to Mumbai",
    provider: "IndiGo Airlines",
    date: "May 15, 2025",
    time: "10:30 AM",
    amount: "₹4,250",
    pnr: "ABCDEF",
    details: {
      departureCity: "Delhi",
      arrivalCity: "Mumbai",
      departureTime: "10:30 AM",
      arrivalTime: "12:45 PM",
      flightNumber: "6E-123",
      terminal: "T3",
      passengers: 2,
      class: "Economy"
    }
  },
  {
    id: "HT-789012",
    type: "hotel",
    status: "upcoming",
    title: "The Taj Palace",
    provider: "Taj Hotels",
    date: "May 15-20, 2025",
    time: "Check-in: 2:00 PM",
    amount: "₹52,500",
    pnr: "TJ5678",
    details: {
      hotelName: "The Taj Palace",
      location: "Mumbai",
      checkIn: "May 15, 2025",
      checkOut: "May 20, 2025",
      roomType: "Deluxe Room",
      guests: 2,
      address: "Apollo Bunder, Mumbai, Maharashtra 400001",
      contact: "+91 22 6665 3366",
      email: "reservations@tajhotels.com"
    }
  },
  {
    id: "TR-345678",
    type: "train",
    status: "completed",
    title: "Mumbai to Pune",
    provider: "Indian Railways",
    date: "April 5, 2025",
    time: "08:15 AM",
    amount: "₹550",
    pnr: "2612345789",
    details: {
      trainName: "Deccan Express",
      trainNumber: "12124",
      departure: "Mumbai CST",
      arrival: "Pune Junction",
      departureTime: "08:15 AM",
      arrivalTime: "11:30 AM",
      coach: "B4",
      seatNumbers: "45, 46",
      passengers: 2,
      class: "AC Chair Car"
    }
  },
  {
    id: "BU-901234",
    type: "bus",
    status: "cancelled",
    title: "Manali to Shimla",
    provider: "HRTC",
    date: "March 22, 2025",
    time: "06:00 AM",
    amount: "₹850",
    pnr: "HRTC7890",
    details: {
      busOperator: "Himachal Road Transport Corporation",
      busType: "Volvo AC Seater",
      departure: "Manali Bus Stand",
      arrival: "Shimla ISBT",
      departureTime: "06:00 AM",
      arrivalTime: "02:30 PM",
      seatNumbers: "12, 13",
      passengers: 2
    }
  },
  {
    id: "FL-567890",
    type: "flight",
    status: "completed",
    title: "Bangalore to Cochin",
    provider: "Air India",
    date: "Feb 10, 2025",
    time: "03:45 PM",
    amount: "₹3,850",
    pnr: "XYZABC",
    details: {
      departureCity: "Bangalore",
      arrivalCity: "Cochin",
      departureTime: "03:45 PM",
      arrivalTime: "05:30 PM",
      flightNumber: "AI-657",
      terminal: "T1",
      passengers: 1,
      class: "Economy"
    }
  }
];

type BookingStatus = "upcoming" | "completed" | "cancelled";

const statusColors = {
  upcoming: "bg-green-100 text-green-800 hover:bg-green-200",
  completed: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  cancelled: "bg-red-100 text-red-800 hover:bg-red-200",
};

const BookingsPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  // Filter bookings based on search query
  const filteredBookings = mockBookings.filter(booking => 
    booking.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterBookingsByStatus = (status: BookingStatus) => {
    return filteredBookings.filter(booking => booking.status === status);
  };

  const getBookingIcon = (type: string) => {
    switch (type) {
      case "flight":
        return <Plane className="h-4 w-4" />;
      case "hotel":
        return <Building className="h-4 w-4" />;
      case "train":
        return <Train className="h-4 w-4" />;
      case "bus":
        return <Bus className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const renderBookingDetails = (booking: typeof mockBookings[0]) => {
    switch (booking.type) {
      case "flight":
        return (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <Plane className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">
                  {booking.details.departureCity} to {booking.details.arrivalCity}
                </h3>
              </div>
              <Badge variant="outline" className={statusColors[booking.status as BookingStatus]}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Flight Details</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Airline:</span>
                    <span>{booking.provider}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Flight Number:</span>
                    <span>{booking.details.flightNumber}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Date:</span>
                    <span>{booking.date}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Departure:</span>
                    <span>{booking.details.departureTime} • {booking.details.departureCity}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Arrival:</span>
                    <span>{booking.details.arrivalTime} • {booking.details.arrivalCity}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Terminal:</span>
                    <span>{booking.details.terminal}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Passenger Information</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Booking ID:</span>
                    <span>{booking.id}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">PNR:</span>
                    <span>{booking.pnr}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Passengers:</span>
                    <span>{booking.details.passengers}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Class:</span>
                    <span>{booking.details.class}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Amount:</span>
                    <span className="font-semibold">{booking.amount}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-2">
              <Button variant="outline" size="sm">View Boarding Pass</Button>
              <Button variant="default" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download E-Ticket
              </Button>
            </div>
          </div>
        );
        
      case "hotel":
        return (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <Building className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">{booking.details.hotelName}</h3>
              </div>
              <Badge variant="outline" className={statusColors[booking.status as BookingStatus]}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Stay Details</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Hotel:</span>
                    <span>{booking.details.hotelName}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Location:</span>
                    <span>{booking.details.location}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Check-in:</span>
                    <span>{booking.details.checkIn}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Check-out:</span>
                    <span>{booking.details.checkOut}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Room Type:</span>
                    <span>{booking.details.roomType}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Guests:</span>
                    <span>{booking.details.guests}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Contact Information</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Booking ID:</span>
                    <span>{booking.id}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Confirmation #:</span>
                    <span>{booking.pnr}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Address:</span>
                    <span>{booking.details.address}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Phone:</span>
                    <span>{booking.details.contact}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Email:</span>
                    <span>{booking.details.email}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Amount:</span>
                    <span className="font-semibold">{booking.amount}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-4 bg-amber-50 rounded-md border border-amber-200">
              <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <div>
                <p className="text-sm text-amber-800">
                  <span className="font-medium">Hotel Location</span>: {booking.details.address}
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  You can view the exact location and get directions using the map in your e-voucher.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-2">
              <Button variant="outline" size="sm">View Map</Button>
              <Button variant="default" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download Voucher
              </Button>
            </div>
          </div>
        );
        
      case "train":
        return (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <Train className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">
                  {booking.details.departure} to {booking.details.arrival}
                </h3>
              </div>
              <Badge variant="outline" className={statusColors[booking.status as BookingStatus]}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Train Details</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Train Name:</span>
                    <span>{booking.details.trainName}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Train Number:</span>
                    <span>{booking.details.trainNumber}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Date:</span>
                    <span>{booking.date}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Departure:</span>
                    <span>{booking.details.departureTime} • {booking.details.departure}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Arrival:</span>
                    <span>{booking.details.arrivalTime} • {booking.details.arrival}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Passenger Information</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Booking ID:</span>
                    <span>{booking.id}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">PNR:</span>
                    <span>{booking.pnr}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Coach:</span>
                    <span>{booking.details.coach}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Seat Numbers:</span>
                    <span>{booking.details.seatNumbers}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Class:</span>
                    <span>{booking.details.class}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Amount:</span>
                    <span className="font-semibold">{booking.amount}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-2">
              <Button variant="default" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download E-Ticket
              </Button>
            </div>
          </div>
        );
        
      case "bus":
        return (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <Bus className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">
                  {booking.details.departure} to {booking.details.arrival}
                </h3>
              </div>
              <Badge variant="outline" className={statusColors[booking.status as BookingStatus]}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Bus Details</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Operator:</span>
                    <span>{booking.details.busOperator}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Bus Type:</span>
                    <span>{booking.details.busType}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Date:</span>
                    <span>{booking.date}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Departure:</span>
                    <span>{booking.details.departureTime} • {booking.details.departure}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Arrival:</span>
                    <span>{booking.details.arrivalTime} • {booking.details.arrival}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Passenger Information</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Booking ID:</span>
                    <span>{booking.id}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Ticket Number:</span>
                    <span>{booking.pnr}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Seat Numbers:</span>
                    <span>{booking.details.seatNumbers}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Passengers:</span>
                    <span>{booking.details.passengers}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium w-32">Amount:</span>
                    <span className="font-semibold">{booking.amount}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-2">
              <Button variant="default" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download Ticket
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-6">My Bookings</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bookings..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Date Range</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort</span>
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Bookings</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {filteredBookings.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {getBookingIcon(booking.type)}
                          <span className="capitalize">{booking.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>{booking.title}</TableCell>
                      <TableCell>{booking.provider}</TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={statusColors[booking.status as BookingStatus]}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <div className="text-muted-foreground mb-4 p-4 rounded-full bg-muted">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">No bookings found</h3>
                  <p className="text-muted-foreground text-center">
                    We couldn't find any bookings matching your search criteria.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6">
            {filterBookingsByStatus("upcoming").length > 0 ? (
              <div className="space-y-6">
                {filterBookingsByStatus("upcoming").map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="pt-6">
                      {renderBookingDetails(booking)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <div className="text-muted-foreground mb-4 p-4 rounded-full bg-muted">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">No upcoming bookings</h3>
                  <p className="text-muted-foreground text-center">
                    You don't have any upcoming bookings at the moment.
                  </p>
                  <Button className="mt-4">Explore Travel Options</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            {filterBookingsByStatus("completed").length > 0 ? (
              <div className="space-y-6">
                {filterBookingsByStatus("completed").map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="pt-6">
                      {renderBookingDetails(booking)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <div className="text-muted-foreground mb-4 p-4 rounded-full bg-muted">
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">No completed bookings</h3>
                  <p className="text-muted-foreground text-center">
                    You don't have any completed bookings in your history.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="cancelled" className="mt-6">
            {filterBookingsByStatus("cancelled").length > 0 ? (
              <div className="space-y-6">
                {filterBookingsByStatus("cancelled").map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="pt-6">
                      {renderBookingDetails(booking)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <div className="text-muted-foreground mb-4 p-4 rounded-full bg-muted">
                    <XCircleIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">No cancelled bookings</h3>
                  <p className="text-muted-foreground text-center">
                    You don't have any cancelled bookings in your history.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const CheckCircleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
};

const XCircleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
};

export default BookingsPage;
