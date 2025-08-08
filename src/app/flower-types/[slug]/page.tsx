import { getFlowerDataBySlug, getRelatedArticles } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type FlowerTypePageProps = {
  params: {
    slug: string;
  };
};

export default function FlowerTypePage({ params }: FlowerTypePageProps) {
  const article = getFlowerDataBySlug(params.slug);

  if (!article) {
    notFound();
  }
  
  const relatedArticles = getRelatedArticles(article);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <article className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">{article.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{article.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
          </div>

          {article.gallery && article.gallery.length > 0 && (
             <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="font-headline">Image Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                    <Carousel className="w-full">
                        <CarouselContent>
                        {article.gallery.map((img, index) => (
                            <CarouselItem key={index}>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                <Image src={img} alt={`${article.title} - image ${index + 1}`} layout="fill" objectFit="cover" data-ai-hint="flower species"/>
                            </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </CardContent>
            </Card>
          )}

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Readers Also Liked</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedArticles.map(related => (
                <Link key={related.slug} href={`/${related.category.toLowerCase().replace(' ', '-')}/${related.slug}`} className="block group">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image src={related.image} alt={related.title} layout="fill" objectFit="cover" data-ai-hint="flower plant" />
                    </div>
                    <div>
                      <h4 className="font-semibold leading-tight group-hover:underline">{related.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
