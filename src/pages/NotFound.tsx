
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Search, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute w-64 h-64 bg-muted rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
          <div className="text-6xl font-display font-bold">404</div>
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
        Destination Not Found
      </h1>
      
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
        Looks like you've wandered off the map. The page you're looking for doesn't exist.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" size="lg" asChild className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </Link>
        </Button>
        
        <Button size="lg" asChild className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
        </Button>
      </div>
      
      <div className="mt-12">
        <h2 className="text-lg font-medium mb-4 text-center">Popular Destinations</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/destinations">Explore Destinations</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/flights">Find Flights</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/hotels">Book Hotels</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/trains">Check Trains</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/buses">Search Buses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
