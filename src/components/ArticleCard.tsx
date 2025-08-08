import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

type ArticleCardProps = {
  article: Article;
};

const categoryPaths = {
  'Flower Types': 'flower-types',
  'Gardening Tips': 'gardening-tips',
  'Seasonal Guides': 'seasonal-guides',
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, description, image, slug, category } = article;
  const href = `/${categoryPaths[category]}/${slug}`;

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <Link href={href} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint="flower garden"
          />
        </div>
      </Link>
      <CardHeader>
        <Badge variant="secondary" className="mb-2 w-fit">{category}</Badge>
        <CardTitle className="font-headline text-xl">
          <Link href={href}>{title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter>
        <Button asChild variant="outline">
          <Link href={href}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
