import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ArticleCard from '@/components/ArticleCard';
import {
  getFeaturedArticles,
  getCategories,
} from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const categories = getCategories();

  return (
    <div className="flex flex-col gap-12 md:gap-20">
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="https://placehold.co/1600x800.png"
          alt="Vibrant garden in full bloom"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          data-ai-hint="vibrant garden"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Welcome to BloomHub
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Your online handbook for growing and caring for a wide variety of
            beautiful flowers.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/gardening-tips/getting-started">
              Start Your Garden
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-headline text-3xl font-semibold md:text-4xl">
          Explore Our Guides
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
                <Link key={category.name} href={category.href} className="block group">
                    <Card className="h-full flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="rounded-full bg-accent p-4 text-primary mb-4">
                            <category.icon className="h-10 w-10" />
                        </div>
                        <h3 className="font-headline text-xl font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground mt-2 flex-grow">{category.description}</p>
                        <Button variant="link" className="mt-4">
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Card>
                </Link>
            ))}
        </div>
      </section>

      <section className="bg-background/80 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-headline text-3xl font-semibold md:text-4xl">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
