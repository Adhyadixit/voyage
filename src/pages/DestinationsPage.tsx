
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  MapPin,
  Filter,
  ChevronRight,
  ArrowDown,
  ArrowUp
} from "lucide-react";

// Sample destination data
const destinations = [
  {
    id: "1",
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    location: "Kerala",
    description: "Experience the serene beauty of Kerala's interconnected lagoons, canals, and lakes. Glide through tranquil waters on a traditional houseboat and witness lush paddy fields, coconut groves, and local villages.",
    tags: ["Nature", "Peaceful", "Cultural"],
    region: "south"
  },
  {
    id: "2",
    name: "Taj Mahal",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
    location: "Agra, Uttar Pradesh",
    description: "Marvel at the magnificent ivory-white marble mausoleum, a UNESCO World Heritage site and one of the Seven Wonders of the World. The Taj Mahal's architectural beauty and historical significance attract millions of visitors.",
    tags: ["Heritage", "Architecture", "Wonder"],
    region: "north"
  },
  {
    id: "3",
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?q=80&w=2070&auto=format&fit=crop",
    location: "Himachal Pradesh",
    description: "Nestled in the mountains of Himachal Pradesh, Manali offers breathtaking landscapes, adventure activities, and a perfect escape from city life. Enjoy snow-capped peaks, lush forests, and the charming Old Manali.",
    tags: ["Mountains", "Adventure", "Scenic"],
    region: "north"
  },
  {
    id: "4",
    name: "Arunachal Pradesh",
    image: "https://images.unsplash.com/photo-1611250458392-c436ddbb1ea1?q=80&w=2070&auto=format&fit=crop",
    location: "Northeast India",
    description: "Discover the untouched beauty of India's northeastern frontier state. Arunachal Pradesh features majestic mountains, pristine rivers, diverse wildlife, and vibrant tribal cultures, offering an authentic and off-the-beaten-path experience.",
    tags: ["Adventure", "Nature", "Cultural"],
    region: "northeast"
  },
  {
    id: "5",
    name: "Goa Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
    location: "Goa",
    description: "Relax on the golden sands of Goa's beautiful beaches, each with its own unique character. From the lively shores of Baga and Calangute to the peaceful stretches of Palolem and Agonda, Goa offers the perfect beach vacation.",
    tags: ["Beach", "Relaxation", "Nightlife"],
    region: "west"
  },
  {
    id: "6",
    name: "Varanasi Ghats",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=2070&auto=format&fit=crop",
    location: "Uttar Pradesh",
    description: "Experience the spiritual heart of India at Varanasi's ghats, where ancient traditions meet the sacred Ganges River. Witness the mesmerizing evening Ganga Aarti ceremony and explore one of the world's oldest continuously inhabited cities.",
    tags: ["Spiritual", "Cultural", "Historical"],
    region: "north"
  },
  {
    id: "7",
    name: "Kasol",
    image: "https://images.unsplash.com/photo-1577289184770-8c0edeabf657?q=80&w=2069&auto=format&fit=crop",
    location: "Himachal Pradesh",
    description: "Tucked away in the Parvati Valley, Kasol is a picturesque hamlet known for its stunning landscapes, trekking trails, and bohemian vibe. The serene riverside setting and vibrant café culture make it a favorite among travelers.",
    tags: ["Scenic", "Trekking", "Peaceful"],
    region: "north"
  },
  {
    id: "8",
    name: "Cochin",
    image: "https://images.unsplash.com/photo-1590123550582-a449049d8511?q=80&w=2069&auto=format&fit=crop",
    location: "Kerala",
    description: "Explore the historic port city of Cochin (Kochi), where colonial heritage blends with modern life. Discover Chinese fishing nets, spice markets, Dutch palaces, and vibrant art scenes in this charming coastal gem.",
    tags: ["Cultural", "Historical", "Coastal"],
    region: "south"
  },
  {
    id: "9",
    name: "Shimla",
    image: "https://images.unsplash.com/photo-1626621621506-acbdbc318cc3?q=80&w=2070&auto=format&fit=crop",
    location: "Himachal Pradesh",
    description: "The former summer capital of British India, Shimla captivates with its colonial architecture, panoramic mountain views, and pleasant climate. Stroll along the famous Mall Road, visit Christ Church, and enjoy the scenic toy train journey.",
    tags: ["Mountains", "Colonial", "Scenic"],
    region: "north"
  },
  {
    id: "10",
    name: "Andaman Islands",
    image: "https://images.unsplash.com/photo-1587547131116-d224f8f5fdc9?q=80&w=2070&auto=format&fit=crop",
    location: "Bay of Bengal",
    description: "Discover paradise in the turquoise waters of the Bay of Bengal. The Andaman Islands boast pristine beaches, coral reefs, lush forests, and fascinating indigenous cultures, offering the perfect blend of adventure and relaxation.",
    tags: ["Beach", "Island", "Diving"],
    region: "islands"
  },
  {
    id: "11",
    name: "Darjeeling",
    image: "https://images.unsplash.com/photo-1591805052064-97825a77a3b9?q=80&w=2070&auto=format&fit=crop",
    location: "West Bengal",
    description: "Nestled in the foothills of the Himalayas, Darjeeling is famous for its tea plantations, stunning views of Kanchenjunga, and the historic Darjeeling Himalayan Railway. Experience colonial charm and breathtaking mountain scenery.",
    tags: ["Mountains", "Tea", "Colonial"],
    region: "east"
  },
  {
    id: "12",
    name: "Rann of Kutch",
    image: "https://images.unsplash.com/photo-1595815771614-ade1574f8fb7?q=80&w=2070&auto=format&fit=crop",
    location: "Gujarat",
    description: "Witness the surreal landscape of one of the world's largest salt deserts. The White Rann transforms into a shimmering expanse during full moon nights, while the Rann Utsav cultural festival showcases vibrant Gujarati traditions.",
    tags: ["Desert", "Cultural", "Unique"],
    region: "west"
  }
];

const regions = [
  { id: "all", name: "All Regions" },
  { id: "north", name: "North India" },
  { id: "south", name: "South India" },
  { id: "east", name: "East India" },
  { id: "west", name: "West India" },
  { id: "northeast", name: "Northeast India" },
  { id: "islands", name: "Islands" }
];

const uniqueTags = Array.from(new Set(destinations.flatMap(dest => dest.tags))).sort();

type SortOption = {
  label: string;
  value: keyof typeof destinations[0];
  direction: "asc" | "desc";
};

const sortOptions: SortOption[] = [
  { label: "Name A-Z", value: "name", direction: "asc" },
  { label: "Name Z-A", value: "name", direction: "desc" },
  { label: "Location A-Z", value: "location", direction: "asc" },
  { label: "Location Z-A", value: "location", direction: "desc" }
];

const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>(sortOptions[0]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter destinations based on search query, region and tags
  const filteredDestinations = destinations
    .filter(destination => 
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(destination => 
      selectedRegion === "all" || destination.region === selectedRegion
    )
    .filter(destination => 
      selectedTags.length === 0 || 
      selectedTags.some(tag => destination.tags.includes(tag))
    )
    .sort((a, b) => {
      const valueA = a[sortOption.value];
      const valueB = b[sortOption.value];
      
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOption.direction === 'asc' 
          ? valueA.localeCompare(valueB) 
          : valueB.localeCompare(valueA);
      }
      
      return 0;
    });

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Explore India's Wonders</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover breathtaking destinations across India, from majestic mountains and serene beaches
          to historic temples and vibrant cities.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search destinations..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <div className="hidden md:block">
              <select
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={sortOption.label}
                onChange={(e) => {
                  const selected = sortOptions.find(option => option.label === e.target.value);
                  if (selected) setSortOption(selected);
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto w-full flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              {showFilters ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            </Button>
          </div>
        </div>
        
        {showFilters && (
          <div className="p-4 border rounded-md bg-background mb-4 animate-fade-in">
            <h3 className="font-medium mb-3">Filter by Region</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {regions.map((region) => (
                <Button
                  key={region.id}
                  variant={selectedRegion === region.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(region.id)}
                >
                  {region.name}
                </Button>
              ))}
            </div>
            
            <h3 className="font-medium mb-3 mt-4">Filter by Tags</h3>
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </p>
          
          <div className="flex md:hidden">
            <select
              className="h-8 rounded-md border border-input bg-background px-3 py-1 text-xs ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={sortOption.label}
              onChange={(e) => {
                const selected = sortOptions.find(option => option.label === e.target.value);
                if (selected) setSortOption(selected);
              }}
            >
              {sortOptions.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="grid" className="mb-8">
        <div className="flex justify-end mb-4">
          <TabsList>
            <TabsTrigger value="grid" className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </TabsTrigger>
            <TabsTrigger value="list" className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3" y2="6" />
                <line x1="3" y1="12" x2="3" y2="12" />
                <line x1="3" y1="18" x2="3" y2="18" />
              </svg>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="grid">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredDestinations.map((destination) => (
                <Link key={destination.id} to={`/destinations/${destination.id}`}>
                  <Card className="overflow-hidden hover-lift h-full">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-display font-semibold text-lg mb-1">{destination.name}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span>{destination.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {destination.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <Search className="h-10 w-10 mb-4 mx-auto text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No destinations found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
              <Button 
                className="mt-4" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("all");
                  setSelectedTags([]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="list">
          {filteredDestinations.length > 0 ? (
            <div className="space-y-4">
              {filteredDestinations.map((destination) => (
                <Link key={destination.id} to={`/destinations/${destination.id}`}>
                  <Card className="overflow-hidden hover-lift">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4 md:p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div>
                            <h3 className="font-display font-semibold text-lg md:text-xl mb-1">{destination.name}</h3>
                            <div className="flex items-center text-muted-foreground text-sm mb-3">
                              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span>{destination.location}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 md:justify-end">
                            {destination.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground line-clamp-2 md:line-clamp-3 mb-3">
                          {destination.description}
                        </p>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            View Details <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <Search className="h-10 w-10 mb-4 mx-auto text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No destinations found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
              <Button 
                className="mt-4" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("all");
                  setSelectedTags([]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DestinationsPage;
