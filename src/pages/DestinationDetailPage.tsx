import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Info, 
  Mail, 
  Share, 
  Bookmark, 
  Star, 
  ChevronLeft, 
  ArrowRight,
  Plane,
  Building,
  Train,
  Bus,
  Phone,
  ChevronRight
} from "lucide-react";

// Sample destination data
const destinations = [
  {
    id: "1",
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    location: "Kerala",
    description: "Experience the serene beauty of Kerala's interconnected lagoons, canals, and lakes. Glide through tranquil waters on a traditional houseboat and witness lush paddy fields, coconut groves, and local villages.",
    longDescription: `Kerala's backwaters are a network of interconnected canals, rivers, lakes, and inlets formed by more than 900 km of waterways. This unique ecosystem is one of Kerala's most popular attractions, offering a glimpse into rural Kerala life that remains largely unchanged by time.

The backwaters are best experienced by staying on a traditional houseboat, known locally as a 'Kettuvallam'. These boats were once used to transport rice and spices but have now been converted into floating accommodations while maintaining their traditional charm. Most houseboats come with comfortable bedrooms, a lounge area, kitchen, and a private crew including a chef.

As you slowly cruise through the tranquil waters, you'll witness daily life unfolding along the shores - farmers working in emerald green rice paddies, children playing, women washing clothes, and fishermen casting their nets. The lush landscape is dotted with coconut palms, creating a picturesque setting.

The backwaters stretch across several districts, but Alleppey (Alappuzha) is considered the gateway to this watery wonderland. Other notable areas include Kumarakom, Kollam, and parts of Kochi.

Beyond the houseboats, you can also explore smaller canals in country boats, visit traditional villages, sample authentic Kerala cuisine rich in coconut and seafood, and observe local crafts like coir-making and toddy tapping.

The best time to visit is from September to March when the weather is pleasant and ideal for cruising. During the monsoon months (June to August), the scenery becomes even more lush, though some may find the heavy rainfall challenging.`,
    bestTimeToVisit: "September to March (Avoid monsoon season from June to August unless you enjoy the rain)",
    howToReach: `By Air: The nearest airport is Cochin International Airport, about 85 km from Alleppey.
By Train: Alleppey has its own railway station well-connected to major cities.
By Road: Good road connectivity from major cities in Kerala like Kochi, Trivandrum, and Kollam.`,
    localTransport: "Auto-rickshaws, taxis, and local buses are readily available. For the backwaters experience, houseboats, motor boats, and country boats can be hired.",
    mustVisitPlaces: [
      "Alleppey Backwaters",
      "Kumarakom Bird Sanctuary",
      "Vembanad Lake",
      "Pathiramanal Island",
      "Marari Beach",
      "St. Mary's Church, Champakulam"
    ],
    localExperiences: [
      "Stay overnight on a traditional houseboat",
      "Try Karimeen (Pearl Spot fish) prepared in Kerala style",
      "Visit a coir manufacturing unit",
      "Witness the famous Nehru Trophy Boat Race (if visiting in August)",
      "Experience an Ayurvedic spa treatment",
      "Watch the sunset over the backwaters"
    ],
    tags: ["Nature", "Peaceful", "Cultural"],
    region: "south",
    nearbyDestinations: [
      { id: "8", name: "Cochin", distance: "53 km" },
      { id: "5", name: "Munnar", distance: "175 km" },
      { id: "2", name: "Kovalam Beach", distance: "159 km" }
    ],
    suggestedItineraries: [
      {
        title: "Weekend Escape (2 Days)",
        days: [
          {
            day: "Day 1",
            activities: [
              "Arrive in Alleppey",
              "Check-in to a houseboat by noon",
              "Cruise through the backwaters, enjoying lunch and dinner on board",
              "Overnight stay on the houseboat"
            ]
          },
          {
            day: "Day 2",
            activities: [
              "Morning cruise and breakfast on the houseboat",
              "Disembark by 9:30 AM",
              "Visit Marari Beach",
              "Explore Alleppey town and local markets",
              "Depart for your next destination"
            ]
          }
        ]
      },
      {
        title: "Kerala Backwaters Explorer (5 Days)",
        days: [
          {
            day: "Day 1",
            activities: [
              "Arrive in Cochin",
              "Explore Fort Kochi, Chinese Fishing Nets, and local attractions",
              "Overnight in Cochin"
            ]
          },
          {
            day: "Day 2",
            activities: [
              "Transfer to Alleppey (1.5 hour drive)",
              "Board a houseboat for an overnight cruise",
              "Enjoy traditional Kerala cuisine on board"
            ]
          },
          {
            day: "Day 3",
            activities: [
              "Disembark from houseboat",
              "Transfer to Kumarakom",
              "Visit Kumarakom Bird Sanctuary",
              "Stay at a lakeside resort"
            ]
          },
          {
            day: "Day 4",
            activities: [
              "Morning village walk or canoe ride through small canals",
              "Afternoon Ayurvedic massage",
              "Evening cultural performance"
            ]
          },
          {
            day: "Day 5",
            activities: [
              "Transfer back to Cochin",
              "Last-minute shopping for spices and souvenirs",
              "Departure"
            ]
          }
        ]
      }
    ],
    packages: [
      {
        title: "Luxury Houseboat Escape",
        duration: "2 Days / 1 Night",
        price: "₹15,000 per person",
        includes: [
          "Premium houseboat accommodation",
          "All meals on board",
          "Sightseeing during cruise",
          "Airport/hotel transfers",
          "Welcome drinks"
        ],
        rating: 4.8
      },
      {
        title: "Complete Kerala Backwaters Experience",
        duration: "5 Days / 4 Nights",
        price: "₹35,000 per person",
        includes: [
          "2 nights in Cochin hotel",
          "1 night on houseboat",
          "1 night in Kumarakom resort",
          "Daily breakfast, select meals",
          "Private transfers",
          "Guided tours",
          "Cultural performances"
        ],
        rating: 4.9
      },
      {
        title: "Budget Backwaters Tour",
        duration: "3 Days / 2 Nights",
        price: "₹12,000 per person",
        includes: [
          "Standard houseboat (shared)",
          "1 night in budget hotel",
          "Meals as per itinerary",
          "Public transport options",
          "Basic sightseeing"
        ],
        rating: 4.5
      }
    ],
    travelTips: [
      "Book houseboats well in advance, especially during peak season (December-January)",
      "Carry mosquito repellent as the waterside areas can have mosquitoes",
      "Respect local customs and dress modestly when visiting villages",
      "Carry cash as ATMs may be limited in rural backwater areas",
      "Check if your houseboat has air conditioning if traveling in summer months",
      "Most houseboats dock at shore for the night as navigation after sunset is restricted"
    ],
    faqs: [
      {
        question: "What is the best time to visit Kerala Backwaters?",
        answer: "The best time is from September to March when the weather is pleasant. However, if you enjoy the lush green landscapes, visiting during the monsoon (June-August) can be magical despite occasional rain showers."
      },
      {
        question: "How long should I book a houseboat for?",
        answer: "A one-night stay is sufficient for most travelers, allowing you to experience both day and night on the backwaters. The standard check-in time is around noon, and check-out is usually by 9:30 AM the next day."
      },
      {
        question: "Are houseboats safe?",
        answer: "Yes, houseboats are generally safe and come with experienced crew members. They provide life jackets and follow safety protocols. The boats dock at secure locations during the night."
      },
      {
        question: "What amenities are available on houseboats?",
        answer: "Most houseboats include bedrooms with attached bathrooms, a dining area, and a deck/sitting area. Premium boats may have air conditioning, TVs, and even small plunge pools. All houseboats come with a crew including a captain and chef."
      },
      {
        question: "Is vegetarian food available on houseboats?",
        answer: "Yes, houseboats can accommodate vegetarian, non-vegetarian, and even vegan meal requests. It's best to inform the operator about your dietary preferences when booking."
      }
    ]
  },
  // Other destinations would be here...
];

const recentViews = [
  {
    id: "2",
    name: "Taj Mahal",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
    location: "Agra, Uttar Pradesh"
  },
  {
    id: "5",
    name: "Goa Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
    location: "Goa"
  },
  {
    id: "3",
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?q=80&w=2070&auto=format&fit=crop",
    location: "Himachal Pradesh"
  }
];

const DestinationDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<typeof destinations[0] | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const found = destinations.find(dest => dest.id === id);
    if (found) {
      setDestination(found);
      
      // Scroll to top when destination changes
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!destination) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-display font-semibold mb-4">Destination not found</h2>
        <p className="text-muted-foreground mb-6">
          The destination you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/destinations">View All Destinations</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto">
            <Link to="/destinations" className="inline-flex items-center text-white/90 hover:text-white mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>Back to Destinations</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center text-white/90 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{destination.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {destination.tags.map((tag) => (
                <Badge key={tag} className="bg-white/20 hover:bg-white/30 text-white">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-semibold">About {destination.name}</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => setIsBookmarked(!isBookmarked)}>
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-primary text-primary' : ''}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Overview */}
            <div className="prose max-w-none mb-8">
              <p className="text-lg mb-4">{destination.description}</p>
              <div className="whitespace-pre-line">
                {destination.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Travel Information */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Travel Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Best Time to Visit
                  </h4>
                  <p className="text-muted-foreground">{destination.bestTimeToVisit}</p>
                </div>
                
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Plane className="h-4 w-4 text-primary" />
                    How to Reach
                  </h4>
                  <div className="text-muted-foreground whitespace-pre-line">
                    {destination.howToReach}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Bus className="h-4 w-4 text-primary" />
                    Local Transport
                  </h4>
                  <p className="text-muted-foreground">{destination.localTransport}</p>
                </div>
                
                <div>
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-primary" />
                    Travel Tips
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    {destination.travelTips.slice(0, 3).map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Must Visit Places */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Must Visit Places</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {destination.mustVisitPlaces.map((place, index) => (
                  <div key={index} className="border rounded-md p-4 hover-lift">
                    <div className="font-medium mb-1">{place}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Local Experiences */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Local Experiences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.localExperiences.map((experience, index) => (
                  <div key={index} className="flex items-start gap-2 p-4 border rounded-md hover-lift">
                    <div className="p-2 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Star className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{experience}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Suggested Itineraries */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Suggested Itineraries</h3>
              <div className="space-y-6">
                {destination.suggestedItineraries.map((itinerary, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-display font-semibold mb-4">{itinerary.title}</h4>
                      <div className="space-y-4">
                        {itinerary.days.map((day, dayIndex) => (
                          <div key={dayIndex}>
                            <h5 className="font-medium text-primary mb-2">{day.day}</h5>
                            <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                              {day.activities.map((activity, actIndex) => (
                                <li key={actIndex}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* FAQs */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {destination.faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-80 lg:w-96 space-y-6">
            {/* CTA Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-xl font-display font-semibold mb-4">Plan Your Trip</h3>
                <p className="mb-6">Ready to explore {destination.name}? Choose from our curated packages or customize your journey.</p>
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full">View All Packages</Button>
                  <Button variant="outline" className="w-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Customize Your Trip
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Popular Packages */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-display font-semibold mb-4">Popular Packages</h3>
                <div className="space-y-4">
                  {destination.packages.map((pkg, index) => (
                    <div key={index} className="border rounded-md p-4 hover-lift">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium">{pkg.title}</h4>
                        <div className="flex items-center text-amber-500">
                          <Star className="fill-amber-500 h-3 w-3" />
                          <span className="text-xs ml-1">{pkg.rating}</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{pkg.duration}</div>
                      <div className="text-lg font-semibold mb-3">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        <strong className="text-foreground">Includes:</strong>
                        <ul className="mt-1 space-y-1">
                          {pkg.includes.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {pkg.includes.length > 3 && (
                            <li className="flex items-start gap-1">
                              <span className="text-primary">•</span>
                              <span>+{pkg.includes.length - 3} more</span>
                            </li>
                          )}
                        </ul>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Travel Options */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-display font-semibold mb-4">Travel Options</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plane className="mr-2 h-4 w-4" />
                    <span>Find Flights</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building className="mr-2 h-4 w-4" />
                    <span>Book Hotels</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Train className="mr-2 h-4 w-4" />
                    <span>Check Trains</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bus className="mr-2 h-4 w-4" />
                    <span>Find Buses</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Nearby Destinations */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-display font-semibold mb-4">Nearby Destinations</h3>
                <div className="space-y-3">
                  {destination.nearbyDestinations.map((nearby) => (
                    <Link key={nearby.id} to={`/destinations/${nearby.id}`}>
                      <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors">
                        <div className="font-medium">{nearby.name}</div>
                        <div className="text-xs text-muted-foreground">{nearby.distance}</div>
                        <ArrowRight className="h-3 w-3 ml-auto" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Contact & Assistance */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-display font-semibold mb-4">Need Assistance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our travel experts are available to help you plan your perfect trip to {destination.name}.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email Us</span>
                  </Button>
                  <Button variant="default" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Call Now</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Recently Viewed */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-semibold">Recently Viewed</h2>
            <Button variant="ghost" asChild>
              <Link to="/destinations" className="flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentViews.map((item) => (
              <Link key={item.id} to={`/destinations/${item.id}`}>
                <Card className="overflow-hidden hover-lift">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-display font-semibold text-lg mb-1">{item.name}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
