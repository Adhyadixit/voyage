
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, Tag } from "lucide-react";

const offers = [
  {
    id: "1",
    title: "Monsoon Special: Kerala Tour Package",
    discount: "25% OFF",
    validUntil: "30 May 2025",
    description: "Explore the beauty of God's own country with special monsoon discounts.",
    tag: "Package Deal",
    color: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
    icon: "🌧️"
  },
  {
    id: "2",
    title: "Weekend Getaway: Goa Flight + Hotel",
    discount: "₹2,500 OFF",
    validUntil: "31 Aug 2025",
    description: "Beach vibes and coastal delights with special combo offer.",
    tag: "Flight + Hotel",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
    icon: "✈️"
  },
  {
    id: "3",
    title: "Himalayan Adventure: Manali Trek",
    discount: "15% OFF",
    validUntil: "15 July 2025",
    description: "Thrilling treks and breathtaking views at discounted rates.",
    tag: "Adventure",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100",
    icon: "🏔️"
  },
  {
    id: "4",
    title: "Cultural Expedition: Rajasthan Tour",
    discount: "20% OFF",
    validUntil: "30 Sept 2025",
    description: "Experience royal heritage and vibrant culture with exclusive discounts.",
    tag: "Cultural Tour",
    color: "bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100",
    icon: "🏰"
  }
];

const SpecialOffers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {offers.map((offer) => (
        <Card key={offer.id} className="hover-lift overflow-hidden border border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-3xl mb-3">{offer.icon}</div>
                <h3 className="font-display font-semibold text-xl mb-2">{offer.title}</h3>
                <Badge variant="outline" className={offer.color}>{offer.tag}</Badge>
                <p className="mt-3 text-muted-foreground">{offer.description}</p>
              </div>
              <div className="text-right">
                <div className="bg-accent font-display font-semibold text-accent-foreground px-4 py-2 rounded-md">
                  {offer.discount}
                </div>
              </div>
            </div>
            
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>Valid until {offer.validUntil}</span>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <Button variant="default">View Details</Button>
              <Button variant="outline">Book Now</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SpecialOffers;
