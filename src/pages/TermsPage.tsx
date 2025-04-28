
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TermsPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 21, 2025</p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to Voyage Vista. These Terms of Service ("Terms") govern your use of our website
              and services. By accessing or using our website, you agree to be bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully before using our services. If you do not agree with
              any part of these Terms, please do not use our website or services.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Use of Our Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Voyage Vista provides an online platform for users to discover, search for, and book
              travel services including flights, hotels, trains, buses, and tour packages. When you
              make a booking through our platform, you enter into a contract with the relevant travel service
              provider, not with Voyage Vista. We act as an intermediary between you and the service provider.
            </p>
            <p>
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Provide accurate and complete information when creating an account or making a booking</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Bookings and Payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              When you make a booking through our platform:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You agree to review all booking details, including dates, times, locations, and prices,
                before confirming your booking.
              </li>
              <li>
                You are responsible for ensuring that all traveler information is accurate and complete.
              </li>
              <li>
                Payment is processed securely through our platform, and you agree to pay all fees
                and charges associated with your booking.
              </li>
              <li>
                Voyage Vista may charge a service fee for facilitating your booking, which will be
                clearly displayed before you confirm your booking.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cancellations and Refunds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Cancellation policies vary depending on the travel service provider and the specific
              terms of your booking. Please refer to our Cancellation Policy for detailed information.
            </p>
            <p>
              In general:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Some bookings may be non-refundable or may incur cancellation fees.
              </li>
              <li>
                Refunds are processed according to the terms of the specific booking and the
                travel service provider's policies.
              </li>
              <li>
                Voyage Vista service fees may not be refundable in the event of cancellation.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              All content on our website, including text, graphics, logos, images, and software,
              is the property of Voyage Vista or our licensors and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>
              You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Reproduce, distribute, modify, or create derivative works of our content without
                our express written permission.
              </li>
              <li>
                Use our trademarks, logos, or service marks without our prior written consent.
              </li>
              <li>
                Use our content for commercial purposes without our authorization.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              To the maximum extent permitted by law, Voyage Vista shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including lost
              profits, arising out of or in connection with your use of our services.
            </p>
            <p>
              We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The actions or omissions of travel service providers.
              </li>
              <li>
                Any loss, damage, or injury arising from your travel arrangements.
              </li>
              <li>
                Any disruptions, delays, or cancellations by travel service providers.
              </li>
              <li>
                Inaccurate or incomplete information provided by travel service providers.
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
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> legal@voyagevista.com<br />
              <strong>Address:</strong> 123 Travel Street, Bangalore, India
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

export default TermsPage;
