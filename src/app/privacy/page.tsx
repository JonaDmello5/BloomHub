import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <div className="text-center">
        <Shield className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
        </p>
      </div>

      <div className="mt-12 space-y-6 prose prose-lg dark:prose-invert max-w-none">
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you subscribe to our newsletter or use our AI Assistant. This may include your email address and location data. We also collect anonymous usage data to help us improve our website and services.
        </p>

        <h2>How We Use Information</h2>
        <p>
          The information we collect is used to operate, maintain, and improve our services. For example, location data is used by the AI Assistant to provide tailored gardening tips, and your email is used to send you newsletters if you opt-in. We do not sell your personal information to third parties.
        </p>

        <h2>Data Security</h2>
        <p>
          We are committed to protecting your data. We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
        </p>

        <h2>Your Consent</h2>
        <p>
          By using our site, you consent to our web site privacy policy.
        </p>

        <h2>Changes to our Privacy Policy</h2>
        <p>
          If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on {new Date().toLocaleDateString()}.
        </p>
      </div>
    </div>
  );
}
