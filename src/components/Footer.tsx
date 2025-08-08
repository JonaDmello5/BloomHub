import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <h3 className="font-headline text-lg font-semibold">BloomHub</h3>
          <p className="mt-2 text-muted-foreground">
            Your online handbook for all things flower gardening.
          </p>
        </div>
        
        <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <nav className="mt-2 flex flex-col space-y-2">
                <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link href="/ai-assistant" className="text-muted-foreground hover:text-primary">AI Assistant</Link>
            </nav>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-headline text-lg font-semibold">
            Subscribe to our Newsletter
          </h3>
          <p className="mt-2 text-muted-foreground">
            Get seasonal tips and new guides delivered to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t bg-accent/30 py-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BloomHub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
