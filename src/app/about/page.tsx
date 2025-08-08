import { Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <div className="text-center">
        <Leaf className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          About BloomHub
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
          BloomHub is a passion project born from a love for gardening and the simple joy of seeing a flower bloom. Our mission is to create a comprehensive, beautiful, and easy-to-use resource for flower enthusiasts of all levels.
        </p>
      </div>

      <div className="mt-12 space-y-8 text-left prose prose-lg dark:prose-invert max-w-none">
        <p>
          Whether you have a sprawling garden, a small balcony, or just a sunny windowsill, we want to empower you with the knowledge and inspiration to grow beautiful flowers. From detailed care guides for specific species to seasonal tips and innovative gardening techniques, BloomHub is your trusted partner in your gardening journey.
        </p>
        <p>
          Our team is a mix of experienced horticulturists, tech enthusiasts, and creative minds, all united by a shared love for plants. We're constantly working to grow our library of guides and add new features, like our AI Gardening Assistant, to make gardening more accessible and enjoyable for everyone.
        </p>
        <p>
          Thank you for visiting. We hope BloomHub helps your garden flourish!
        </p>
      </div>
    </div>
  );
}
