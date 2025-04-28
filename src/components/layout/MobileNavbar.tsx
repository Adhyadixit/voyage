
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Search, 
  Plane, 
  Building, 
  Train, 
  Bus, 
  User 
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const MobileNavbar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-t py-2 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-around">
        <Link 
          to="/" 
          className={`mobile-nav-item ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'} hover-lift`}
        >
          <div className="p-2 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-soft">
            <Home className="h-5 w-5" />
          </div>
          <span className="text-[11px] mt-1">Home</span>
        </Link>
        
        <Link 
          to="/destinations" 
          className={`mobile-nav-item ${isActive('/destinations') ? 'text-primary font-medium' : 'text-muted-foreground'} hover-lift`}
        >
          <div className="p-2 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-soft">
            <Search className="h-5 w-5" />
          </div>
          <span className="text-[11px] mt-1">Explore</span>
        </Link>
        
        <Link 
          to="/flights" 
          className={`mobile-nav-item ${isActive('/flights') ? 'text-primary font-medium' : 'text-muted-foreground'} hover-lift`}
        >
          <div className="p-2 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-soft">
            <Plane className="h-5 w-5" />
          </div>
          <span className="text-[11px] mt-1">Flights</span>
        </Link>
        
        <Link 
          to="/hotels" 
          className={`mobile-nav-item ${isActive('/hotels') ? 'text-primary font-medium' : 'text-muted-foreground'} hover-lift`}
        >
          <div className="p-2 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-soft">
            <Building className="h-5 w-5" />
          </div>
          <span className="text-[11px] mt-1">Hotels</span>
        </Link>
        
        <Link 
          to={isAuthenticated ? "/profile" : "/login"} 
          className={`mobile-nav-item ${isActive('/profile') || isActive('/login') ? 'text-primary font-medium' : 'text-muted-foreground'} hover-lift`}
        >
          <div className="p-2 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-soft">
            <User className="h-5 w-5" />
          </div>
          <span className="text-[11px] mt-1">{isAuthenticated ? "Profile" : "Login"}</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
