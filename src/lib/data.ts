import { RoseIcon } from '@/components/icons/RoseIcon';
import { OrchidIcon } from '@/components/icons/OrchidIcon';
import { SucculentIcon } from '@/components/icons/SucculentIcon';
import { GardeningToolsIcon } from '@/components/icons/GardeningToolsIcon';
import { Sun, Leaf, Snowflake, Flower } from 'lucide-react';

export type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: 'Flower Types' | 'Gardening Tips' | 'Seasonal Guides';
  content: string;
  tags: string[];
  gallery?: string[];
  featured?: boolean;
};

const articles: Article[] = [
  // Flower Types
  {
    slug: 'roses',
    title: 'How to Grow Beautiful Roses',
    description: 'A comprehensive guide to planting, caring for, and pruning roses for vibrant blooms.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Introduction to Rose Care</h2>
      <p class="mb-4">Roses are timeless symbols of beauty and love, but growing them can seem daunting. This guide will walk you through everything you need to know to cultivate healthy, beautiful roses in your own garden.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Choosing the Right Roses</h3>
      <p class="mb-4">There are thousands of rose varieties, from hybrid teas to floribundas. Consider your climate and garden space. For beginners, disease-resistant shrub roses are an excellent choice.</p>
      <img src="https://placehold.co/600x400.png" alt="Different varieties of roses" class="my-4 rounded-lg shadow-md" data-ai-hint="rose varieties">
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Planting Your Roses</h3>
      <p class="mb-4">Select a location that receives at least six hours of direct sunlight per day. Dig a hole twice as wide as the root ball and just as deep. Mix in compost to enrich the soil. After placing the rose, backfill the hole, water thoroughly, and add a layer of mulch.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">3. Watering and Fertilizing</h3>
      <p class="mb-4">Water deeply but infrequently. The soil should be moist, not waterlogged. Feed your roses with a balanced fertilizer in early spring and again after the first bloom cycle.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">4. Pruning for Health and Blooms</h3>
      <p class="mb-4">Pruning is essential for promoting new growth and more flowers. In late winter or early spring, remove any dead or crossing branches. Cut at a 45-degree angle about 1/4 inch above an outward-facing bud.</p>
    `,
    tags: ['roses', 'pruning', 'planting'],
    gallery: [
      'https://placehold.co/800x600.png',
      'https://placehold.co/800x600.png',
      'https://placehold.co/800x600.png',
      'https://placehold.co/800x600.png',
    ],
    featured: true,
  },
  {
    slug: 'orchids',
    title: 'A Beginner\'s Guide to Orchid Care',
    description: 'Learn the secrets to keeping your orchids healthy and reblooming year after year.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Mastering Orchid Care</h2>
      <p class="mb-4">Orchids have a reputation for being fussy, but with the right care, they are surprisingly resilient. This guide focuses on the most common type, the Phalaenopsis or "moth orchid."</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Light Requirements</h3>
      <p class="mb-4">Orchids thrive in bright, indirect light. An east-facing window is ideal. If you see yellow leaves, it might be getting too much sun.</p>
      <img src="https://placehold.co/600x400.png" alt="Orchid in a window" class="my-4 rounded-lg shadow-md" data-ai-hint="orchid window">
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Watering Technique</h3>
      <p class="mb-4">Overwatering is the most common mistake. Water once a week by letting tepid water run through the pot for a minute. Ensure the pot has excellent drainage. Let it dry out completely between waterings.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">3. Humidity and Temperature</h3>
      <p class="mb-4">Orchids love humidity. Place them on a tray of pebbles with water or use a humidifier. They prefer daytime temperatures between 65-80°F (18-27°C).</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">4. Encouraging Reblooming</h3>
      <p class="mb-4">After the last flower falls, you can encourage a new spike. Find a node on the stem below the lowest flower and cut one inch above it. A new spike may emerge in a few weeks.</p>
    `,
    tags: ['orchids', 'houseplants', 'reblooming'],
    gallery: [
      'https://placehold.co/800x600.png',
      'https://placehold.co/800x600.png',
      'https://placehold.co/800x600.png',
    ],
    featured: false,
  },
  // Gardening Tips
  {
    slug: 'soil-preparation',
    title: 'The Foundation of a Great Garden: Soil Preparation',
    description: 'Learn how to prepare your garden soil to give your plants the best possible start.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Why Soil Matters</h2>
      <p class="mb-4">Healthy soil is the single most important ingredient for a successful garden. It provides nutrients, water, and air to plant roots.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Test Your Soil</h3>
      <p class="mb-4">Before you add anything, get a soil test. This will tell you your soil's pH and which nutrients are lacking. Most plants prefer a pH between 6.0 and 7.0.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Add Organic Matter</h3>
      <p class="mb-4">Compost is the best amendment for any soil type. It improves drainage in clay soil and water retention in sandy soil. Spread a 2-4 inch layer of compost over your garden bed.</p>
      <img src="https://placehold.co/600x400.png" alt="Hands holding rich compost" class="my-4 rounded-lg shadow-md" data-ai-hint="compost soil">
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">3. Tilling and Aeration</h3>
      <p class="mb-4">Loosen the soil to a depth of 8-12 inches using a tiller or garden fork. This helps break up compaction and allows roots to grow deeper.</p>
    `,
    tags: ['soil', 'compost', 'gardening basics'],
    featured: true,
  },
    {
    slug: 'getting-started',
    title: 'Getting Started with Flower Gardening',
    description: 'A perfect guide for absolute beginners to start their flower gardening journey.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Your First Flower Garden</h2>
      <p class="mb-4">Welcome to the wonderful world of gardening! This guide will help you take the first steps.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Start Small</h3>
      <p class="mb-4">Don't overwhelm yourself. Start with a small raised bed or a few containers. This makes management easier as you learn.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Choose Easy Plants</h3>
      <p class="mb-4">Select flowers that are known to be low-maintenance and hardy in your area. Sunflowers, marigolds, and zinnias are great choices for beginners.</p>
      <img src="https://placehold.co/600x400.png" alt="Colorful marigolds" class="my-4 rounded-lg shadow-md" data-ai-hint="colorful marigolds">
    `,
    tags: ['beginners', 'easy flowers', 'gardening basics'],
    featured: false,
  },
  // Seasonal Guides
  {
    slug: 'spring',
    title: 'Preparing Your Garden for Spring',
    description: 'Wake up your garden from its winter slumber with these essential spring tasks.',
    image: 'https://placehold.co/600x400.png',
    category: 'Seasonal Guides',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Spring Awakening</h2>
      <p class="mb-4">Spring is a time of renewal. Get your garden ready for a season of growth.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Clean Up</h3>
      <p class="mb-4">Remove fallen leaves, weeds, and dead foliage from last season. This prevents pests and diseases.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Prune Shrubs</h3>
      <p class="mb-4">Prune summer-flowering shrubs before they break dormancy. For spring-flowering shrubs like forsythia, wait until after they have bloomed.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">3. Plant Cool-Season Flowers</h3>
      <p class="mb-4">Pansies, snapdragons, and violas can tolerate a light frost and will bring early color to your garden.</p>
    `,
    tags: ['spring', 'seasonal care', 'preparation'],
    featured: true,
  },
];

export const getArticles = () => articles;

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (category: string) => articles.filter((a) => a.category === category);

export const getFeaturedArticles = () => articles.filter((a) => a.featured);

export const getRelatedArticles = (currentArticle: Article) => {
  return articles.filter(a => a.slug !== currentArticle.slug && (a.category === currentArticle.category || a.tags.some(tag => currentArticle.tags.includes(tag)))).slice(0, 3);
}

export const getCategories = () => [
  { name: 'Flower Types', description: 'Guides for specific flowers like roses and orchids.', href: '/flower-types/roses', icon: RoseIcon },
  { name: 'Gardening Tips', description: 'Learn techniques for soil, pest control, and more.', href: '/gardening-tips/soil-preparation', icon: GardeningToolsIcon },
  { name: 'Seasonal Guides', description: 'What to do in your garden each season.', href: '/seasonal-guides/spring', icon: Flower },
  { name: 'AI Assistant', description: 'Get personalized gardening advice for your location.', href: '/ai-assistant', icon: Leaf },
];

export const getFlowerDataBySlug = (slug: string) => articles.find(a => a.category === 'Flower Types' && a.slug === slug);
export const getGardeningTipBySlug = (slug: string) => articles.find(a => a.category === 'Gardening Tips' && a.slug === slug);
export const getSeasonalGuideBySlug = (slug: string) => articles.find(a => a.category === 'Seasonal Guides' && a.slug === slug);

export const getSeasonalGuides = () => [
  { slug: 'spring', name: 'Spring', icon: Flower },
  { slug: 'summer', name: 'Summer', icon: Sun },
  { slug: 'fall', name: 'Fall', icon: Leaf },
  { slug: 'winter', name: 'Winter', icon: Snowflake },
]
