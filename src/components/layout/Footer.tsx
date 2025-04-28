
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className={`bg-muted py-12 ${isMobile ? 'pb-24' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Voyage Vista</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Your ultimate travel companion for exploring the wonders of India. Book flights, hotels, trains, and more.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-md mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/flights" className="text-muted-foreground hover:text-foreground">Flights</Link></li>
              <li><Link to="/hotels" className="text-muted-foreground hover:text-foreground">Hotels</Link></li>
              <li><Link to="/trains" className="text-muted-foreground hover:text-foreground">Trains</Link></li>
              <li><Link to="/buses" className="text-muted-foreground hover:text-foreground">Buses</Link></li>
              <li><Link to="/destinations" className="text-muted-foreground hover:text-foreground">Destinations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-md mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link to="/refund-policy" className="text-muted-foreground hover:text-foreground">Refund Policy</Link></li>
              <li><Link to="/cancellation-policy" className="text-muted-foreground hover:text-foreground">Cancellation Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-md mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Voyage Vista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
