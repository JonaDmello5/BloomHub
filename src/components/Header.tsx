import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/flower-types', label: 'Flower Types' },
  { href: '/gardening-tips', label: 'Gardening Tips' },
  { href: '/seasonal-guides', label: 'Seasonal Guides' },
  { href: '/ai-assistant', label: 'AI Assistant' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              BloomHub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">BloomHub</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 pt-8 text-lg font-medium">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
