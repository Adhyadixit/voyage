
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  HelpCircle, 
  FileText, 
  CreditCard, 
  Ticket, 
  MapPin,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "booking-issues",
    title: "Booking Issues",
    icon: <Ticket className="h-5 w-5" />,
    description: "Help with bookings, cancellations, and modifications"
  },
  {
    id: "payment-refunds",
    title: "Payments & Refunds",
    icon: <CreditCard className="h-5 w-5" />,
    description: "Questions about payments, refunds, and invoices"
  },
  {
    id: "account-help",
    title: "Account Help",
    icon: <HelpCircle className="h-5 w-5" />,
    description: "Manage your profile, login issues, and settings"
  },
  {
    id: "destinations",
    title: "Destinations",
    icon: <MapPin className="h-5 w-5" />,
    description: "Information about locations, attractions, and guides"
  },
  {
    id: "policy-questions",
    title: "Policies",
    icon: <FileText className="h-5 w-5" />,
    description: "Clarification on terms, cancellations, and refunds"
  }
];

const popularQuestions = [
  {
    question: "How do I cancel a booking?",
    answer: "To cancel a booking, log in to your account, go to 'My Bookings', find the booking you want to cancel, and click on the 'Cancel' button. Review the cancellation details and confirm. You'll receive a confirmation email with refund details if applicable."
  },
  {
    question: "When will I receive my refund?",
    answer: "Refund processing times vary by payment method. Credit card refunds typically take 5-10 business days, bank transfers 3-7 business days, and digital wallets 1-3 business days. You can check your refund status in the 'My Bookings' section."
  },
  {
    question: "How can I download my e-tickets?",
    answer: "You can download your e-tickets by logging into your account, going to 'My Bookings', selecting the relevant booking, and clicking the 'Download E-ticket' button. E-tickets are also sent to your registered email address."
  },
  {
    question: "Can I change my travel dates after booking?",
    answer: "Yes, in most cases you can modify your travel dates. Go to 'My Bookings', select the booking you want to change, and click 'Modify'. Date changes may incur fees depending on the service provider's policies and fare differences."
  },
  {
    question: "What documentation do I need for domestic travel in India?",
    answer: "For domestic travel within India, adults (18+) should carry a government-issued photo ID such as Aadhaar Card, PAN Card, Driving License, or Voter ID. For children, a school ID or birth certificate is usually sufficient. These requirements may vary by transportation provider."
  }
];

const HelpPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-bold mb-2">How Can We Help You?</h1>
          <p className="text-muted-foreground mb-6">Find answers, get support, and resolve issues quickly</p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for help topics..." 
              className="pl-10 h-12 rounded-full"
            />
            <Button className="absolute right-1 top-1 rounded-full px-4 h-10">
              Search
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Card key={category.id} className="hover-lift">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{category.description}</CardDescription>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/help/${category.id}`}>View topics</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Tabs defaultValue="faq" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faq">Popular Questions</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {popularQuestions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="text-muted-foreground pt-2 pb-4">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link to="/faq" className="flex items-center gap-1">
                      View all FAQs <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Our Support Team</CardTitle>
                <CardDescription>We're here to help 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-6 text-center hover-lift">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Live Chat</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Chat with our support team in real-time
                    </p>
                    <Button variant="outline" className="w-full">Start Chat</Button>
                  </div>
                  
                  <div className="border rounded-lg p-6 text-center hover-lift">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Call Us</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      24/7 customer support hotline
                    </p>
                    <Button variant="outline" className="w-full">+91 1800-123-4567</Button>
                  </div>
                  
                  <div className="border rounded-lg p-6 text-center hover-lift">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      We'll respond within 24 hours
                    </p>
                    <Button variant="outline" className="w-full">support@voyagevista.com</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <h2 className="text-xl font-display font-semibold mb-3">Need More Help?</h2>
          <p className="text-muted-foreground mb-6">Check out our detailed policy documents</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/terms">Terms of Service</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/refund-policy">Refund Policy</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/cancellation-policy">Cancellation Policy</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
