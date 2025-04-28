
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mail, Phone } from "lucide-react";

const faqCategories = [
  {
    id: "bookings",
    title: "Bookings & Reservations",
    questions: [
      {
        question: "How do I book a flight on Voyage Vista?",
        answer: "To book a flight, navigate to the Flights section, enter your travel details including departure and arrival cities, dates, and number of passengers. Browse available options, select your preferred flight, and follow the checkout process to complete your booking."
      },
      {
        question: "Can I book multiple destinations in a single trip?",
        answer: "Yes, you can book multi-city flights by selecting the 'Multi-city' option in the flight search form. This allows you to add multiple destinations and create a customized itinerary."
      },
      {
        question: "How far in advance should I book my travel?",
        answer: "For domestic travel within India, we recommend booking 3-4 weeks in advance to get the best rates. For peak season travel (holidays, festivals), booking 2-3 months ahead is advisable. International trips are best booked 3-6 months in advance."
      },
      {
        question: "Are the prices shown inclusive of all taxes and fees?",
        answer: "The prices displayed during the search include base fares and taxes. Some additional fees such as baggage fees, seat selection, or in-flight meals may be shown separately during the booking process."
      }
    ]
  },
  {
    id: "account",
    title: "Account Management",
    questions: [
      {
        question: "How do I create an account on Voyage Vista?",
        answer: "Click on the 'Login' button at the top right of the page, then select 'Create account'. Fill in your details, including name, email, and password, then verify your email address to complete registration."
      },
      {
        question: "I forgot my password. How can I reset it?",
        answer: "On the login page, click 'Forgot password?'. Enter your registered email address, and we'll send you instructions to reset your password. Follow the link in the email to create a new password."
      },
      {
        question: "How can I update my personal information?",
        answer: "Once logged in, go to your Profile page by clicking on your avatar in the top right corner. Select 'Profile' from the dropdown menu. Here you can edit your personal details, change your password, and update your preferences."
      },
      {
        question: "Can I add multiple travelers to my account?",
        answer: "Yes, you can add family members or frequent co-travelers to your account. Go to Profile > Travelers and use the 'Add Traveler' option to save their details for faster booking in the future."
      }
    ]
  },
  {
    id: "payment",
    title: "Payments & Refunds",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards (Visa, Mastercard, American Express), net banking, UPI, popular digital wallets, and EMI options from select banks. All payments are processed securely through our payment gateway."
      },
      {
        question: "How can I get a refund for a cancelled booking?",
        answer: "For eligible cancellations, refunds are processed to the original payment method. The refund timeline depends on your payment method and booking type, typically 5-10 business days for credit cards and 3-7 business days for other methods."
      },
      {
        question: "Is there a way to check my refund status?",
        answer: "Yes, you can check your refund status by going to My Bookings > Select the cancelled booking > View Refund Status. You can also contact our customer support for assistance."
      },
      {
        question: "Do you offer any price guarantees?",
        answer: "Yes, we offer a Best Price Guarantee on flights and hotels. If you find a lower price for the same itinerary within 24 hours of booking, we'll refund the difference, subject to our price match terms and conditions."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Support",
    questions: [
      {
        question: "The website is not loading properly. What should I do?",
        answer: "Try clearing your browser cache and cookies, then reload the page. Ensure you're using an updated browser version. If problems persist, try accessing from a different device or browser."
      },
      {
        question: "How can I download my e-tickets and vouchers?",
        answer: "Log in to your account, go to My Bookings, select the relevant booking, and click on 'Download E-ticket' or 'Download Voucher'. You can also access these documents from the confirmation email we sent you."
      },
      {
        question: "The payment was deducted but I didn't receive a booking confirmation. What now?",
        answer: "Don't worry. First check your email (including spam/junk folders) for a confirmation. If you can't find it, go to My Bookings to see if the booking appears there. If not, contact our support team with your payment details."
      },
      {
        question: "Can I use the Voyage Vista mobile app offline?",
        answer: "While you need internet connection to make bookings, once your bookings are confirmed, you can download your tickets and hotel vouchers to access them offline when traveling."
      }
    ]
  }
];

const FaqPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10">Find answers to the most common questions about our services</p>
        
        {faqCategories.map((category) => (
          <div key={category.id} className="mb-10">
            <h2 className="text-xl font-display font-semibold mb-4">{category.title}</h2>
            <Accordion type="single" collapsible className="border rounded-lg">
              {category.questions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-4 text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="text-muted-foreground">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-display font-semibold mb-6 text-center">Still have questions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex flex-col items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <span>Live Chat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Chat with our support team in real-time</p>
                <Button>Start Chat</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex flex-col items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Email Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Send us an email and we'll respond within 24 hours</p>
                <Button variant="outline">support@voyagevista.com</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex flex-col items-center gap-2">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Phone Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Call us directly for immediate assistance</p>
                <Button variant="outline">+91 1800-123-4567</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
