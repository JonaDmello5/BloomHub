import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-headline text-lg font-semibold">BloomHub</h3>
          <p className="mt-2 text-muted-foreground">
            Your online handbook for all things flower gardening.
          </p>
        </div>
        <div className="lg:col-span-2 lg:justify-self-end">
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
