
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Building, 
  Train, 
  Bus, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronRight,
  Bookmark
} from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import SearchFlights from "@/components/bookings/SearchFlights";
import SearchHotels from "@/components/bookings/SearchHotels";
import SearchTrains from "@/components/bookings/SearchTrains";
import SearchBuses from "@/components/bookings/SearchBuses";
import PopularDestinations from "@/components/home/PopularDestinations";
import SpecialOffers from "@/components/home/SpecialOffers";
import TestimonialSection from "@/components/home/TestimonialSection";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <div className="container mx-auto px-4 -mt-8 md:-mt-16 mb-10 relative z-10">
        <Card className="shadow-card">
          <CardContent className="p-4 md:p-6">
            <Tabs defaultValue="flights" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="flights" className="flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  <span className="hidden sm:inline">Flights</span>
                </TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span className="hidden sm:inline">Hotels</span>
                </TabsTrigger>
                <TabsTrigger value="trains" className="flex items-center gap-2">
                  <Train className="h-4 w-4" />
                  <span className="hidden sm:inline">Trains</span>
                </TabsTrigger>
                <TabsTrigger value="buses" className="flex items-center gap-2">
                  <Bus className="h-4 w-4" />
                  <span className="hidden sm:inline">Buses</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="flights">
                <SearchFlights />
              </TabsContent>
              
              <TabsContent value="hotels">
                <SearchHotels />
              </TabsContent>
              
              <TabsContent value="trains">
                <SearchTrains />
              </TabsContent>
              
              <TabsContent value="buses">
                <SearchBuses />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Popular Destinations</h2>
            <Button variant="ghost" asChild>
              <Link to="/destinations" className="flex items-center gap-1">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <PopularDestinations />
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Special Offers</h2>
            <Button variant="ghost" asChild>
              <Link to="/offers" className="flex items-center gap-1">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <SpecialOffers />
        </div>
      </section>

      <TestimonialSection />
      
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to start your Indian adventure?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who discover the beauty of India with Voyage Vista.
            From the snow-capped Himalayas to the tropical beaches of Kerala.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/destinations">Explore Destinations</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
