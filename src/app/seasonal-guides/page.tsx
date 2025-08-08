import ArticleCard from '@/components/ArticleCard';
import { getArticlesByCategory, getCategories } from '@/lib/data';

export default function SeasonalGuidesPage() {
  const articles = getArticlesByCategory('Seasonal Guides');
  const category = getCategories().find(c => c.name === 'Seasonal Guides');

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          {category?.name}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {category?.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
