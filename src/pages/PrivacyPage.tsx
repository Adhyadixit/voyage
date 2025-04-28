
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 21, 2025</p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At Voyage Vista, we respect your privacy and are committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this
              Privacy Policy, please do not access the site or use our services.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, postal address, phone number, date of birth,
                and payment information when you create an account, make a booking, or contact us.
              </li>
              <li>
                <strong>Travel Information:</strong> Details about your travel plans, preferences, and special
                requests when making bookings.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including IP address,
                browser type, pages visited, time spent on pages, and other browsing data.
              </li>
              <li>
                <strong>Cookie Data:</strong> Information collected through cookies and similar technologies
                to enhance your browsing experience.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Processing and managing your travel bookings and reservations
              </li>
              <li>
                Creating and maintaining your account
              </li>
              <li>
                Providing customer support and responding to inquiries
              </li>
              <li>
                Sending transactional emails (booking confirmations, updates, etc.)
              </li>
              <li>
                Sending marketing communications if you've opted in
              </li>
              <li>
                Personalizing your experience and delivering content relevant to your interests
              </li>
              <li>
                Analyzing usage data to improve our website and services
              </li>
              <li>
                Detecting and preventing fraud or unauthorized access
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disclosure of Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Hotels, airlines, transport providers, and other
                travel service providers to fulfill your bookings.
              </li>
              <li>
                <strong>Business Partners:</strong> Third parties we partner with to offer services.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to protect our rights.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectify inaccurate or incomplete data</li>
              <li>Right to erasure of your data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@voyagevista.com<br />
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

export default PrivacyPage;
