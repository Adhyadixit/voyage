import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Timeline, TimelineItem, TimelineHeading, TimelineDescription } from "@/components/custom/Timeline";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const CancellationPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2">Cancellation Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 21, 2025</p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This Cancellation Policy outlines the terms and procedures for cancelling bookings made
              through Voyage Vista. We understand that travel plans can change, and we aim to provide
              clear guidelines for cancellations while balancing the requirements of our travel
              service providers.
            </p>
            <p>
              Please note that cancellation policies and fees vary depending on the type of booking
              (flights, hotels, trains, buses) and the specific terms set by the service provider.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Cancel a Booking</CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline>
              <TimelineItem>
                <TimelineHeading>Log in to your Voyage Vista account</TimelineHeading>
                <TimelineDescription>
                  Access your account using your email and password
                </TimelineDescription>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeading>Navigate to &quot;My Bookings&quot; section</TimelineHeading>
                <TimelineDescription>
                  Find all your active and past bookings in one place
                </TimelineDescription>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeading>Select the booking you wish to cancel</TimelineHeading>
                <TimelineDescription>
                  Click on the specific booking to view its details
                </TimelineDescription>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeading>Click on &quot;Cancel Booking&quot; button</TimelineHeading>
                <TimelineDescription>
                  Review the cancellation fees and refund amount before proceeding
                </TimelineDescription>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeading>Confirm cancellation</TimelineHeading>
                <TimelineDescription>
                  Once confirmed, you&apos;ll receive a cancellation confirmation email
                </TimelineDescription>
              </TimelineItem>
            </Timeline>
            
            <Alert className="mt-6">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                If you&apos;re unable to cancel online, please contact our customer support team at
                +91 1800-123-4567 for assistance.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flight Cancellation Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Flight cancellation policies are primarily determined by the individual airlines.
              Here&apos;s a general overview:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-800">What&apos;s Covered</h3>
                </div>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>Free cancellation within 24 hours of booking for flights departing &gt;7 days later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>Partial refunds based on airline policy and fare type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>Refund of unused airport taxes and fees in most cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>Option to reschedule flights with most airlines (subject to fare difference)</span>
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4 bg-red-50 border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">What&apos;s Not Covered</h3>
                </div>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>Special or promotional fares marked as non-refundable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>No-shows (failing to cancel before departure time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>Voyage Vista service fee (except in cases of technical issues)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">•</span>
                    <span>Ancillary services already used (seat selection, meals, etc.)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Cancellation Fee Structure</h4>
              <p className="mb-2">
                Typical airline cancellation fees by fare type:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Flexible/Premium Economy/Business/First Class:</strong> ₹1,500-3,000 or 10-20% of base fare
                </li>
                <li>
                  <strong>Standard Economy:</strong> ₹3,000-5,000 or 20-50% of base fare
                </li>
                <li>
                  <strong>Discounted/Special Fares:</strong> ₹5,000+ or non-refundable
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Hotel Cancellation Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Hotel cancellation policies vary widely by property, season, and rate type:
            </p>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Cancellation Types</h4>
              <div className="space-y-4">
                <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
                  <div>
                    <h5 className="font-medium">Free Cancellation</h5>
                    <p className="text-sm text-muted-foreground">
                      Many hotels offer free cancellation up to 24-48 hours before check-in.
                      You'll receive a full refund with no penalty.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-amber-500 pl-4 py-2">
                  <div>
                    <h5 className="font-medium">Partial Refund</h5>
                    <p className="text-sm text-muted-foreground">
                      Some bookings offer partial refunds based on when you cancel.
                      Earlier cancellations typically receive higher refund percentages.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-red-500 pl-4 py-2">
                  <div>
                    <h5 className="font-medium">Non-Refundable</h5>
                    <p className="text-sm text-muted-foreground">
                      Special discounted rates are often non-refundable from the moment of booking.
                      These are clearly marked during the booking process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Alert variant="default" className="mt-6 bg-amber-50 text-amber-800 border-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle>Important Notice</AlertTitle>
              <AlertDescription>
                During peak seasons (festivals, holidays) and for luxury properties,
                cancellation policies may be more restrictive. Always check the specific
                policy for your booking before confirming your reservation.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Train Cancellation Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              For train bookings within India, cancellation policies follow Indian Railways guidelines:
            </p>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Key Points for Train Cancellations</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Online Cancellation:</strong> Available up to 4 hours before scheduled departure
                </li>
                <li>
                  <strong>Counter Cancellation:</strong> Available up to 30 minutes before departure at railway stations
                </li>
                <li>
                  <strong>Partial Cancellation:</strong> You can cancel individual passengers from a group booking
                </li>
                <li>
                  <strong>Clerkage Charge:</strong> A small processing fee is deducted for all cancellations
                </li>
              </ul>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Special Rules for Tatkal Tickets</h4>
              <p className="mb-2">
                Tatkal tickets have special cancellation rules:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  No refund is provided for cancelled Tatkal tickets unless:
                </li>
                <ul className="list-disc pl-6 mt-2">
                  <li>The train is delayed by more than 3 hours</li>
                  <li>The train is cancelled by the railways</li>
                  <li>If accommodation provided is lower than what was booked (partial refund)</li>
                </ul>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Bus Cancellation Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bus booking cancellation policies depend on the operator, route, and timing:
            </p>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Standard Cancellation Fee Structure</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>More than 48 hours before departure:</strong> 10% of ticket amount
                </li>
                <li>
                  <strong>24-48 hours before departure:</strong> 25% of ticket amount
                </li>
                <li>
                  <strong>12-24 hours before departure:</strong> 50% of ticket amount
                </li>
                <li>
                  <strong>Less than 12 hours before departure:</strong> 75-100% of ticket amount (minimal or no refund)
                </li>
              </ul>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Policy Variations</h4>
              <p>
                Cancellation policies may be more restrictive for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Premium or luxury bus services</li>
                <li>High-demand routes (between major cities)</li>
                <li>Weekend travel (Friday to Sunday)</li>
                <li>Festival periods and public holidays</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cancellation Due to Extraordinary Circumstances</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              In case of extraordinary circumstances beyond your control or the service provider's
              control, special considerations may apply:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Natural Disasters:</strong> Earthquakes, floods, volcanic eruptions, etc.
              </li>
              <li>
                <strong>Severe Weather Conditions:</strong> Storms, hurricanes, heavy snowfall affecting travel
              </li>
              <li>
                <strong>Government Travel Advisories:</strong> Official warnings against travel to specific regions
              </li>
              <li>
                <strong>Health Emergencies:</strong> Pandemics, epidemics, or personal medical emergencies (with documentation)
              </li>
              <li>
                <strong>Civil Unrest:</strong> Strikes, riots, or political instability affecting travel safety
              </li>
            </ul>
            
            <p className="mt-4">
              In these cases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact our customer support team as soon as possible with relevant documentation
              </li>
              <li>
                We'll work with service providers to seek the most favorable resolution
              </li>
              <li>
                Options may include full/partial refunds, travel credits, or rebooking without penalties
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
              If you have any questions about our Cancellation Policy or need assistance with
              cancelling a booking, please contact our customer support team:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> support@voyagevista.com<br />
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

export default CancellationPage;
