
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock, AlertCircle, CheckCircle, HelpCircle } from "lucide-react";

const RefundPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2">Refund Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 21, 2025</p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This Refund Policy outlines the terms and conditions for refunds on bookings made
              through Voyage Vista. We strive to provide fair and transparent refund policies
              while working within the constraints set by our travel service providers.
            </p>
            <p>
              Please note that refund policies vary depending on the type of booking (flights,
              hotels, trains, buses) and the specific terms set by the service provider.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2">
            <Plane className="h-5 w-5 text-primary" />
            <CardTitle>Flight Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Refund policies for flight bookings are primarily determined by the airline's fare rules.
              In general:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Non-Refundable Tickets:</strong> Most discounted fares are non-refundable.
                However, you may be entitled to a refund of certain taxes and fees.
              </li>
              <li>
                <strong>Refundable Tickets:</strong> Premium or flexible fares usually offer full or
                partial refunds, often subject to a cancellation fee.
              </li>
              <li>
                <strong>Cancellation Window:</strong> Refund amounts typically depend on how far in
                advance you cancel your flight.
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Typical Airline Refund Schedule</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cancellation Timing</TableHead>
                    <TableHead>Refundable Tickets</TableHead>
                    <TableHead>Non-Refundable Tickets</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>More than 72 hours before departure</TableCell>
                    <TableCell>Full refund minus cancellation fee</TableCell>
                    <TableCell>Only taxes and fees</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>24-72 hours before departure</TableCell>
                    <TableCell>Partial refund (50-75%)</TableCell>
                    <TableCell>No refund</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Less than 24 hours before departure</TableCell>
                    <TableCell>Minimal refund (25-50%)</TableCell>
                    <TableCell>No refund</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>No-show</TableCell>
                    <TableCell>Minimal or no refund</TableCell>
                    <TableCell>No refund</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2">
            <Building className="h-5 w-5 text-primary" />
            <CardTitle>Hotel Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Hotel refund policies vary by property and rate type:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Free Cancellation:</strong> Many hotels offer rates with free cancellation
                up to a certain date (typically 24-48 hours before check-in).
              </li>
              <li>
                <strong>Non-Refundable Rates:</strong> Discounted rates often come with a non-refundable
                policy. These bookings cannot be refunded regardless of when you cancel.
              </li>
              <li>
                <strong>Partial Refunds:</strong> Some bookings may offer partial refunds based on
                the cancellation date.
              </li>
            </ul>
            
            <div className="flex items-center gap-2 p-4 rounded-md bg-amber-50 border border-amber-200 mt-4">
              <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <p className="text-amber-800 text-sm">
                For hotel bookings, always check the specific cancellation policy displayed
                during the booking process, as it may differ from the general policy outlined here.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2">
            <Train className="h-5 w-5 text-primary" />
            <CardTitle>Train Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              For train bookings within India, refund policies follow Indian Railways guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cancellation Charges:</strong> Deductions depend on the class of travel and
                how far in advance the ticket is cancelled.
              </li>
              <li>
                <strong>Timing:</strong> Tickets must be cancelled at least 4 hours before the
                scheduled departure to be eligible for a refund.
              </li>
              <li>
                <strong>Tatkal Tickets:</strong> These tickets generally have a more restrictive
                refund policy with higher cancellation charges.
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Train Ticket Cancellation Charges</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cancellation Timing</TableHead>
                    <TableHead>Cancellation Fee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>More than 48 hours before departure</TableCell>
                    <TableCell>₹240 for AC First Class/Executive Class<br />₹200 for AC 2 Tier/First Class<br />₹180 for AC 3 Tier/AC Chair Car<br />₹120 for Sleeper Class<br />₹60 for Second Class</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12-48 hours before departure</TableCell>
                    <TableCell>25% of fare subject to minimum flat rate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4-12 hours before departure</TableCell>
                    <TableCell>50% of fare subject to minimum flat rate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Less than 4 hours before departure</TableCell>
                    <TableCell>No refund</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2">
            <Bus className="h-5 w-5 text-primary" />
            <CardTitle>Bus Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bus booking refunds are subject to the specific operator's policies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Standard Policy:</strong> Most bus operators provide partial refunds based
                on how far in advance you cancel.
              </li>
              <li>
                <strong>Cancellation Window:</strong> Typically, cancellations made more than 24 hours
                before departure are eligible for higher refund percentages.
              </li>
              <li>
                <strong>Special Conditions:</strong> During peak travel seasons, holidays, or for
                certain routes, more restrictive refund policies may apply.
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Typical Bus Cancellation Refund Schedule</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cancellation Timing</TableHead>
                    <TableHead>Refund Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>More than 48 hours before departure</TableCell>
                    <TableCell>75-100% of fare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>24-48 hours before departure</TableCell>
                    <TableCell>50-75% of fare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12-24 hours before departure</TableCell>
                    <TableCell>25-50% of fare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Less than 12 hours before departure</TableCell>
                    <TableCell>0-25% of fare</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Refund Processing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              When a refund is approved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Method:</strong> Refunds are processed to the original payment method used for booking.
              </li>
              <li>
                <strong>Timeline:</strong> Processing times vary by payment method:
                <ul className="list-disc pl-6 mt-2">
                  <li>Credit/Debit Cards: 5-10 business days</li>
                  <li>Net Banking: 3-7 business days</li>
                  <li>Digital Wallets: 1-3 business days</li>
                  <li>UPI: 1-3 business days</li>
                </ul>
              </li>
              <li>
                <strong>Voyage Vista Service Fee:</strong> Our service fee is non-refundable unless
                the cancellation is due to a service failure on our part.
              </li>
            </ul>
            
            <div className="flex items-center gap-2 p-4 rounded-md bg-blue-50 border border-blue-200 mt-4">
              <HelpCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <p className="text-blue-800 text-sm">
                You can check your refund status by logging into your account and visiting the
                My Bookings section. Select the cancelled booking to view the current refund status.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Force Majeure and Special Circumstances</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              In case of extraordinary circumstances beyond our control or the service provider's
              control (such as natural disasters, pandemic restrictions, civil unrest, etc.):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Special refund policies may apply as determined by the service provider.
              </li>
              <li>
                Voyage Vista will advocate on your behalf for the most favorable refund terms possible.
              </li>
              <li>
                In some cases, service providers may offer alternatives like travel credits or
                rescheduling instead of cash refunds.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about our Refund Policy or need assistance with a refund,
              please contact our customer support team:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> refunds@voyagevista.com<br />
              <strong>Phone:</strong> +91 1800-123-4567<br />
              <strong>Hours:</strong> 24/7 Support
            </p>
          </CardContent>
        </Card>
        
        <Separator className="my-8" />
        
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Voyage Vista. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const Plane = ({ className }: { className?: string }) => (
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
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
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
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

const Train = ({ className }: { className?: string }) => (
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
    <rect x="4" y="3" width="16" height="16" rx="2" />
    <path d="M4 11h16" />
    <path d="M12 3v8" />
    <path d="m8 19-2 3" />
    <path d="m18 22-2-3" />
    <path d="M8 15h0" />
    <path d="M16 15h0" />
  </svg>
);

const Bus = ({ className }: { className?: string }) => (
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
    <path d="M19 17h2l.64-2.54c.24-.959.24-1.96 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2" />
    <path d="M14 17H9" />
    <circle cx="6.5" cy="17.5" r="2.5" />
    <circle cx="16.5" cy="17.5" r="2.5" />
  </svg>
);

export default RefundPage;
