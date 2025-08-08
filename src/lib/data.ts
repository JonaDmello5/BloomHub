
import { RoseIcon } from '@/components/icons/RoseIcon';
import { OrchidIcon } from '@/components/icons/OrchidIcon';
import { SucculentIcon } from '@/components/icons/SucculentIcon';
import { GardeningToolsIcon } from '@/components/icons/GardeningToolsIcon';
import { Sun, Leaf, Snowflake, Flower, Wind, VenetianMask } from 'lucide-react';

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
  {
    slug: 'succulents',
    title: 'Caring for Succulents',
    description: 'Discover how to care for these low-maintenance and stylish plants.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">The Joy of Succulents</h2>
      <p class="mb-4">Succulents are perfect for busy plant lovers. Their needs are simple: lots of light, and not too much water.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Sunlight is Key</h3>
      <p class="mb-4">Most succulents need at least 6 hours of bright, indirect sunlight per day. A south-facing window is often perfect.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Watering: The "Soak and Dry" Method</h3>
      <p class="mb-4">Water the soil thoroughly, then wait for the soil to dry out completely before watering again. This prevents root rot.</p>
    `,
    tags: ['succulents', 'houseplants', 'low-maintenance'],
    featured: false,
  },
  {
    slug: 'tulips',
    title: 'Planting Tulips for Spring Color',
    description: 'Learn when and how to plant tulip bulbs for a stunning spring display.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">A Vibrant Spring with Tulips</h2>
      <p class="mb-4">Tulips are a classic sign of spring. Planting bulbs in the fall is the key to a beautiful display.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. When to Plant</h3>
      <p class="mb-4">Plant tulip bulbs in the autumn, before the ground freezes. This gives them the cold period they need to bloom.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. How to Plant</h3>
      <p class="mb-4">Plant bulbs 6-8 inches deep, with the pointy end up. Choose a sunny spot with well-draining soil.</p>
    `,
    tags: ['tulips', 'bulbs', 'spring flowers'],
    featured: false,
  },
  {
    slug: 'lavender',
    title: 'Growing Lavender for Beauty and Fragrance',
    description: 'Learn how to cultivate lavender for its beautiful purple spikes and calming scent.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">The Allure of Lavender</h2>
      <p class="mb-4">Lavender is a versatile herb, beloved for its fragrant flowers and silvery foliage. It's drought-tolerant and relatively easy to grow.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Sun and Soil</h3>
      <p class="mb-4">Lavender demands full sun (at least 6-8 hours a day) and well-drained, slightly alkaline soil. It dislikes "wet feet," so good drainage is critical.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Pruning for Longevity</h3>
      <p class="mb-4">Prune lavender every year after it flowers to promote bushy growth and prevent it from becoming woody. Cut back about one-third of the plant.</p>
    `,
    tags: ['lavender', 'herbs', 'fragrant-flowers', 'drought-tolerant'],
    featured: true,
  },
  {
    slug: 'peonies',
    title: 'Peonies: The Queens of the Spring Garden',
    description: 'Grow breathtaking peonies with huge, fragrant blooms that return year after year.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Planting Peonies for a Lifetime of Beauty</h2>
      <p class="mb-4">Peonies are long-lived perennials that can grace your garden for decades with minimal care. Their lush, romantic blooms are a springtime highlight.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Planting Depth is Crucial</h3>
      <p class="mb-4">The most common reason peonies fail to bloom is because they are planted too deep. The "eyes" (or growth buds) on the root should be no more than 1.5 to 2 inches below the soil surface.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Support is Helpful</h3>
      <p class="mb-4">The large, heavy blooms can cause the stems to flop over, especially after rain. Use a peony ring or other support to keep the flowers upright.</p>
    `,
    tags: ['peonies', 'perennials', 'spring-flowers', 'fragrant-flowers'],
    featured: true,
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
  {
    slug: 'pest-control',
    title: 'Natural Pest Control for Your Garden',
    description: 'Keep pests away from your precious plants without harsh chemicals.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Eco-Friendly Pest Management</h2>
      <p class="mb-4">A healthy garden ecosystem can naturally keep pests in check. Encourage beneficial insects and use natural remedies.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Attract Beneficial Insects</h3>
      <p class="mb-4">Ladybugs, lacewings, and parasitic wasps are your allies. Plant flowers like dill, fennel, and yarrow to attract them.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Use Insecticidal Soap</h3>
      <p class="mb-4">For soft-bodied insects like aphids, a simple solution of mild soap and water can be very effective and is safe for most plants.</p>
    `,
    tags: ['pests', 'organic gardening', 'beneficial insects'],
    featured: false,
  },
  {
    slug: 'watering-basics',
    title: 'The Art of Watering Your Garden',
    description: 'Learn how to water your plants effectively for optimal health and growth.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Water Wisely</h2>
      <p class="mb-4">Proper watering is crucial. Too much or too little can stress your plants.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Water Deeply, Less Frequently</h3>
      <p class="mb-4">This encourages deep root growth, making plants more resilient. Water when the top inch of soil is dry.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Water in the Morning</h3>
      <p class="mb-4">Watering early in the day minimizes evaporation and allows leaves to dry, which helps prevent fungal diseases.</p>
    `,
    tags: ['watering', 'plant care', 'gardening basics'],
    featured: false,
  },
  {
    slug: 'container-gardening',
    title: 'Flower Power in Pots: A Guide to Container Gardening',
    description: 'No garden space? No problem! Learn to create stunning flower displays in containers.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Big Blooms in Small Spaces</h2>
      <p class="mb-4">Container gardening lets you grow beautiful flowers on balconies, patios, or any small space. The key is choosing the right pot and soil.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Pot Selection</h3>
      <p class="mb-4">Ensure your pot has drainage holes. The size depends on the plant, but bigger pots dry out slower than smaller ones.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Use Potting Mix, Not Garden Soil</h3>
      <p class="mb-4">Potting mixes are specially formulated to be lightweight and provide good drainage and aeration for container plants. Garden soil becomes too compacted in pots.</p>
    `,
    tags: ['container-gardening', 'small-space-gardening', 'pots'],
    featured: true,
  },
  {
    slug: 'deadheading',
    title: 'Deadheading for Continuous Blooms',
    description: 'Learn the simple technique of deadheading to keep your flowers blooming all season long.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">More Flowers, Less Effort</h2>
      <p class="mb-4">Deadheading is the process of removing spent flowers from a plant. This not only tidies up the plant but also encourages it to produce more blooms.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Why Deadhead?</h3>
      <p class="mb-4">When a flower fades, the plant's energy goes into producing seeds. By removing the old flower, you redirect that energy into creating new flowers.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. How to Deadhead</h3>
      <p class="mb-4">For most plants, you can simply pinch or snip off the faded flower stem just above the next set of healthy leaves. For flowers on single stems, cut the stem back to the base of the plant.</p>
    `,
    tags: ['deadheading', 'pruning', 'more-blooms'],
    featured: true,
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
  {
    slug: 'summer',
    title: 'Summer Garden Maintenance',
    description: 'Keep your garden thriving through the heat of summer with these tips.',
    image: 'https://placehold.co/600x400.png',
    category: 'Seasonal Guides',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Beating the Summer Heat</h2>
      <p class="mb-4">Summer can be stressful for plants. Consistent care is key.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Water Consistently</h3>
      <p class="mb-4">The most important summer task! Water deeply during the coolest parts of the day.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Mulch, Mulch, Mulch</h3>
      <p class="mb-4">A good layer of mulch helps retain soil moisture and keeps roots cool.</p>
    `,
    tags: ['summer', 'seasonal care', 'watering'],
    featured: false,
  },
  {
    slug: 'fall',
    title: 'Prepping Your Garden for Winter',
    description: 'A guide to fall cleanup and preparing your garden for the cold months ahead.',
    image: 'https://placehold.co/600x400.png',
    category: 'Seasonal Guides',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Winding Down in the Fall</h2>
      <p class="mb-4">Fall is the time to clean up and prepare for winter's rest.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Plant Spring Bulbs</h3>
      <p class="mb-4">Fall is the time to plant tulips, daffodils, and other spring-blooming bulbs.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Clean Up Beds</h3>
      <p class="mb-4">Remove spent annuals and diseased plants to prevent problems next year.</p>
    `,
    tags: ['fall', 'seasonal care', 'winter prep'],
    featured: false,
  },
  {
    slug: 'winter',
    title: 'Caring For Your Garden in Winter',
    description: 'Protect your plants and prepare for next spring during the coldest months.',
    image: 'https://placehold.co/600x400.png',
    category: 'Seasonal Guides',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Winter Garden Care</h2>
      <p class="mb-4">Even in winter, there are things to do to care for your garden and get a head start on spring.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Protect Plants from Frost</h3>
      <p class="mb-4">Use frost cloths or blankets to protect tender plants during cold snaps. Applying a thick layer of mulch can also insulate roots.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Plan for Next Year</h3>
      <p class="mb-4">Winter is the perfect time to browse seed catalogs and plan your garden layout for the upcoming season.</p>
    `,
    tags: ['winter', 'seasonal-care', 'protection', 'planning'],
    featured: true,
  },
  {
    slug: 'late-summer',
    title: 'Late Summer Garden Tasks',
    description: 'Keep your garden looking fresh and extend the blooming season into autumn.',
    image: 'https://placehold.co/600x400.png',
    category: 'Seasonal Guides',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">The Transition to Autumn</h2>
      <p class="mb-4">Late summer is a bridge between the peak of summer and the beginning of fall. A little care now can keep your garden vibrant.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Refresh and Tidy Up</h3>
      <p class="mb-4">Deadhead annuals and perennials to encourage a final flush of blooms. Trim back any leggy or overgrown plants.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Plant for Fall Color</h3>
      <p class="mb-4">Now is a great time to plant fall-blooming flowers like chrysanthemums and asters for a colorful autumn display.</p>
    `,
    tags: ['late-summer', 'autumn-prep', 'seasonal-care'],
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

    
