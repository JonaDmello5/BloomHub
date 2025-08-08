import { getSeasonalGuideBySlug, getRelatedArticles, getSeasonalGuides } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SeasonalGuidePageProps = {
  params: {
    slug: string;
  };
};

export default function SeasonalGuidePage({ params }: SeasonalGuidePageProps) {
  const article = getSeasonalGuideBySlug(params.slug);

  if (!article) {
    notFound();
  }
  
  const allSeasons = getSeasonalGuides();

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
          
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
             <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" data-ai-hint="seasonal garden" />
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">All Seasons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {allSeasons.map(season => (
                <Button key={season.slug} asChild variant={params.slug === season.slug ? 'default' : 'ghost'} className="w-full justify-start">
                  <Link href={`/seasonal-guides/${season.slug}`}>
                    <season.icon className={cn("mr-2 h-4 w-4", params.slug === season.slug ? '' : 'text-primary')} />
                    {season.name}
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
