
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
    featured: false,
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
    featured: false,
  },
  {
    slug: 'sunflowers',
    title: 'Growing Cheerful Sunflowers',
    description: 'Brighten your garden with the sunny faces of sunflowers. Easy to grow and great for all ages.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">A Touch of Sunshine</h2>
      <p class="mb-4">Sunflowers are the epitome of summer joy. They are incredibly easy to grow from seed and come in a variety of sizes and colors.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Planting Seeds</h3>
      <p class="mb-4">Plant seeds directly in the garden after the last frost. Choose a spot that gets 6-8 hours of direct sunlight. Plant them about 1 inch deep and 6 inches apart.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Support for Tall Varieties</h3>
      <p class="mb-4">Some sunflower varieties can grow over 10 feet tall! They may need staking to protect them from strong winds.</p>
    `,
    tags: ['sunflowers', 'easy-to-grow', 'summer-flowers', 'seeds'],
    featured: false,
  },
  {
    slug: 'dahlias',
    title: 'Dahlias: Dazzling Stars of the Late Summer Garden',
    description: 'Learn to grow dahlias for an explosion of color and form in your garden from mid-summer until frost.',
    image: 'https://placehold.co/600x400.png',
    category: 'Flower Types',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">The Diversity of Dahlias</h2>
      <p class="mb-4">Dahlias offer an incredible range of colors, shapes, and sizes. From small, single-petal flowers to giant "dinner-plate" blooms, there's a dahlia for every garden.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Planting Tubers</h3>
      <p class="mb-4">Plant dahlia tubers in the spring after the danger of frost has passed. Plant them in a sunny location in well-drained soil, about 4-6 inches deep.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Digging and Storing</h3>
      <p class="mb-4">In colder climates, dahlia tubers need to be dug up after the first frost and stored in a cool, dry place over winter to be replanted the following spring.</p>
    `,
    tags: ['dahlias', 'tubers', 'summer-flowers', 'cut-flowers'],
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
    featured: false,
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
    featured: false,
  },
  {
    slug: 'companion-planting',
    title: 'Companion Planting for a Healthier Flower Garden',
    description: 'Discover how planting certain flowers together can deter pests, attract pollinators, and improve growth.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Plants Helping Plants</h2>
      <p class="mb-4">Companion planting is a strategic way to create a balanced and healthy garden ecosystem. Some plants can help others thrive by repelling pests or enriching the soil.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Marigolds for Pest Control</h3>
      <p class="mb-4">The scent of marigolds is known to repel many garden pests, including nematodes in the soil. Plant them around roses and vegetable gardens.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Nasturtiums as a Trap Crop</h3>
      <p class="mb-4">Aphids love nasturtiums. Planting them near more valuable plants can lure aphids away, acting as a "trap crop". Plus, their flowers are edible!</p>
    `,
    tags: ['companion-planting', 'organic-gardening', 'pest-control', 'pollinators'],
    featured: false,
  },
  {
    slug: 'mulching',
    title: 'The Benefits of Mulching Your Garden',
    description: 'Learn why mulching is one of the best things you can do for your garden beds.',
    image: 'https://placehold.co/600x400.png',
    category: 'Gardening Tips',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Your Garden's Best Friend</h2>
      <p class="mb-4">Mulch is a layer of material applied to the surface of soil. It offers numerous benefits, from conserving water to suppressing weeds.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Types of Mulch</h3>
      <p class="mb-4">Organic mulches like shredded bark, wood chips, or straw break down over time, enriching the soil. Inorganic mulches like pebbles can also be used.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. How to Apply</h3>
      <p class="mb-4">Apply a 2-3 inch layer of mulch around your plants, but be careful not to pile it directly against the stems, which can cause rot.</p>
    `,
    tags: ['mulching', 'soil-health', 'water-conservation', 'weed-control'],
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
    featured: false,
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
    featured: false,
  },
  {
    slug: 'early-spring-flowers',
    title: 'First Flowers of Spring',
    description: 'Discover the earliest blooming flowers that signal the end of winter, such as crocuses and snowdrops.',
    image: 'https://placehold.co/600x400.png',
    category: 'Seasonal Guides',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">Harbingers of Spring</h2>
      <p class="mb-4">Long before the tulips and daffodils, a few brave flowers push through the cold ground to announce that spring is on its way.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Crocuses</h3>
      <p class="mb-4">These small, jewel-like flowers often bloom right through the snow. They come in shades of purple, yellow, and white and are a vital early food source for bees.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Snowdrops (Galanthus)</h3>
      <p class="mb-4">With their delicate, drooping white heads, snowdrops are a classic sign that winter's grip is weakening. They naturalize well, creating beautiful carpets of white over time.</p>
    `,
    tags: ['early-spring', 'bulbs', 'crocus', 'snowdrops'],
    featured: false,
  },
  {
    slug: 'attracting-winter-birds',
    title: 'Gardening for Winter Birds',
    description: 'Provide food and shelter for birds in your garden during the harsh winter months.',
    image: 'https://placehold.co/600x400.png',
    category: 'Seasonal Guides',
    content: `
      <h2 class="font-headline text-2xl font-bold mb-4">A Winter Haven for Birds</h2>
      <p class="mb-4">Your garden can be a crucial resource for birds in winter. By providing food, water, and shelter, you can help them survive the cold and bring life and color to your winter landscape.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Leave Seed Heads Standing</h3>
      <p class="mb-4">Don't be too tidy in the fall. The seed heads of plants like coneflowers, black-eyed susans, and ornamental grasses provide a natural food source for finches and other seed-eating birds.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Plant Berry-Producing Shrubs</h3>
      <p class="mb-4">Shrubs like holly, winterberry, and crabapple provide nutritious berries that persist into winter, offering a feast for birds like cedar waxwings and robins.</p>
    `,
    tags: ['winter-interest', 'wildlife', 'birds', 'shrubs'],
    featured: false,
  },
  {
    "slug": "hydrangeas",
    "title": "Hydrangeas: Color-Changing Showstoppers",
    "description": "Master pH tweaks, pruning windows, and watering routines for unforgettable hydrangea blooms.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Hydrangea Basics</h2>\n<p class='mb-4'>Hydrangeas are beloved for their generous clusters of flowers and their rare party trick: changing color with soil chemistry. To set yourself up for success, start with siting. Morning sun and afternoon shade keeps leaves turgid and prevents flower scorch, especially in hotter regions. In cooler zones, they can tolerate more sun, but steady moisture is non-negotiable. Hydrangeas prefer deep, even watering that soaks the root zone; a weekly schedule is a good baseline, adjusted for heat waves and rainfall. Mulch two to three inches with shredded bark to hold moisture and buffer temperature swings.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Soil pH and Bloom Color</h3>\n<p class='mb-4'>For bigleaf hydrangea (Hydrangea macrophylla), aluminum availability drives color. In acidic soils (pH ~5.0–5.5), aluminum is more available, yielding blue tones. In alkaline soils (pH ~6.5–7.0+), aluminum binds and flowers shift pink. To nudge blue, incorporate elemental sulfur over several months and water with aluminum sulfate according to label rates. For pink, top-dress with garden lime gradually, retesting every 6–8 weeks to avoid overshooting.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Pruning Without Losing Blooms</h3>\n<p class='mb-4'>Know your type. Bigleaf and oakleaf hydrangeas bloom on old wood; prune right after flowering by thinning a few oldest canes at the base and removing spent heads back to a strong pair of buds. Smooth (arborescens) and panicle (paniculata) hydrangeas bloom on new wood; prune in late winter to shape and invigorate, then feed in spring.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>3. Nutrition and Troubleshooting</h3>\n<p class='mb-4'>A balanced slow-release fertilizer in early spring, followed by a light top-up after first bloom, supports repeat flowering cultivars. Watch for wilt during hot afternoons; if plants recover by evening, the soil is fine—avoid overwatering. Yellow leaves with green veins can signal iron chlorosis from high pH; correct pH rather than piling on nutrients. With the right pH, pruning timing, and moisture, hydrangeas deliver season-spanning drama.</p>",
    "tags": ["hydrangea", "color-change", "pruning", "pH"]
    },
    {
    "slug": "lilies",
    "title": "Elegant Lilies: From Bulb to Bloom",
    "description": "Planting depth, staking, and deadhead strategy for Asiatic, Oriental, and trumpet lilies.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Why Gardeners Love Lilies</h2>\n<p class='mb-4'>True lilies (genus Lilium) bring vertical elegance and a spectrum of fragrance to borders and cutting gardens. Start with firm, unblemished bulbs and plant them promptly; lilies dislike drying out. Choose a spot with full sun to light shade and well-drained, fertile soil. Work in compost to improve structure, then plant bulbs 15–20 cm deep, pointy end up, spacing according to mature size. Deep planting stabilizes tall stems and encourages stem roots, improving drought tolerance and anchorage.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Watering and Feeding</h3>\n<p class='mb-4'>Lilies appreciate consistent moisture during active growth, but soggy soil invites rot. Water deeply and allow the top layer to dry between waterings. A balanced, slow-release fertilizer at planting and a light side-dress as buds form keeps stems sturdy and bloom count high. Mulch to keep the root zone cool, especially for Oriental and trumpet types that resent heat at their feet.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Support and Hygiene</h3>\n<p class='mb-4'>Stake tall cultivars early to prevent wind damage. Remove spent blooms (deadhead) promptly so the plant channels energy to bulbs, not seeds, but keep foliage until it yellows naturally—those leaves are solar panels for next year’s display. Watch for red lily beetles; hand-pick adults and inspect for clusters of orange eggs beneath leaves. Rotate planting areas every few years to reduce pest pressure.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>3. Extending the Show</h3>\n<p class='mb-4'>Combine Asiatic (early), Oriental (mid-to-late), and trumpet or OT hybrids for a long season. In containers, use free-draining mix and shelter pots from scorching afternoon sun. With good hygiene, thoughtful feeding, and smart siting, lilies deliver reliable, architectural beauty.</p>",
    "tags": ["lilies", "bulbs", "fragrance"]
    },
    {
    "slug": "irises",
    "title": "Bearded & Beardless Irises Demystified",
    "description": "Rhizome division, sunlight rules, and bloom-boosting soil prep for irises.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Iris Essentials</h2>\n<p class='mb-4'>Irises are study in form, from frilled standards to waterfall falls, and they reward gardeners who respect airflow and light. Bearded irises grow from shallow rhizomes that must bask at the soil surface; bury them, and rot follows. Choose a spot with at least six hours of sun and free-draining soil. Mix in grit or coarse sand if your bed holds water. Space rhizomes like spokes of a wheel, leaves pointing the same direction, to encourage outward expansion and easy division later.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Division and Renewal</h3>\n<p class='mb-4'>Divide clumps every three to four years, ideally four to six weeks after bloom. Lift the clump, trim foliage to 15 cm fans, and keep only firm, young rhizomes with several leaf fans and healthy roots. Replant at grade, water in, and avoid heavy mulch over rhizomes. Beardless types (Siberian, Japanese, Louisiana) prefer richer, moisture-retentive soils and can be mulched more generously.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Feeding and Disease</h3>\n<p class='mb-4'>A low-nitrogen fertilizer in early spring and just after bloom supports buds without lush, floppy foliage. Ensure strong airflow to reduce leaf spot. Remove and discard any soft, foul-smelling rhizomes—the hallmark of bacterial rot—and sanitize tools between cuts. With the right balance of sun, drainage, and periodic division, irises will parade color year after year.</p>",
    "tags": ["iris", "division", "rhizomes"]
    },
    {
    "slug": "chrysanthemums",
    "title": "Chrysanthemums: Fall’s Fireworks",
    "description": "Pinching schedules, feeding, and overwintering mums for dense, colorful domes.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Getting Bushy Blooms</h2>\n<p class='mb-4'>Chrysanthemums, or mums, are the backbone of late-season color. To get that tight dome of flowers, start with pinching. When plants reach 15 cm, pinch out the growing tips to two to three sets of leaves; repeat every three to four weeks until early July. This branching builds a dense framework that supports hundreds of buds. Provide full sun, consistent moisture, and fertile but well-drained soil. Mulch to keep roots cool and conserve water.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Feeding and Timing</h3>\n<p class='mb-4'>Feed lightly but regularly through mid-summer with a balanced fertilizer, then switch to a bloom-forward analysis as buds set. Avoid heavy nitrogen late; it encourages leaves over flowers. For florist mums, plan on staking or ring supports to prevent flopping in rain.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Overwintering</h3>\n<p class='mb-4'>Hardy garden mums benefit from fall planting in milder regions or spring planting in colder zones to establish roots. After frost blackens foliage, cut stems back to 10–15 cm and mulch with straw or shredded leaves. In very cold climates, pot up your favorite cultivars and overwinter them in a cool, bright space. With disciplined pinching and steady care, mums explode into a finale of saturated color just when gardens need it most.</p>",
    "tags": ["chrysanthemum", "fall-flowers", "pinching"]
    },
    {
    "slug": "zinnias",
    "title": "Zinnias for Nonstop Color",
    "description": "Direct-sowing, spacing, and mildew avoidance for cut-and-come-again zinnias.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Seed to Bouquet</h2>\n<p class='mb-4'>Few annuals earn their keep like zinnias. They germinate quickly, bloom hard, and refill the vase all summer. Direct-sow after frost in full sun, or start indoors for a head start. Thin aggressively—crowding invites powdery mildew. Wider spacing improves airflow and yields stronger stems for cutting. Water at the base to keep foliage dry, and mulch to reduce splash that spreads disease. Choose mildew-resistant series for humid regions.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Harvesting Right</h3>\n<p class='mb-4'>Use the wiggle test: if the stem near the bloom no longer flops side to side, it’s ready. Cut deep above a set of leaves to encourage branching. Strip lower foliage, place stems into clean water with a floral preservative, and condition in a cool room.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Succession Planting</h3>\n<p class='mb-4'>Sow a fresh row every two to three weeks for a rolling display. Deadhead relentlessly in landscape beds to keep flowers coming. With sun, space, and sanitation, zinnias deliver eye-popping color from early summer to frost.</p>",
    "tags": ["zinnia", "cut-flowers", "annuals"]
    },
    {
    "slug": "camellias",
    "title": "Camellias: Winter Jewels",
    "description": "Shade-loving shrubs with rose-like blooms—learn siting, soil, and sasanqua vs japonica care.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Choosing Varieties</h2>\n<p class='mb-4'>Camellias bridge the color gap from autumn through spring. Sasanqua camellias bloom in fall with smaller leaves and better sun tolerance; japonica types flower in late winter to spring and prefer bright shade. Both appreciate acidic, well-drained soil rich in organic matter. Plant slightly high to avoid waterlogged crowns, and mulch to keep roots cool. Water deeply during dry spells—evergreens transpire even in cool weather.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Pruning and Feeding</h3>\n<p class='mb-4'>Prune immediately after flowering to shape and remove deadwood. Avoid heavy cuts late in the season or you’ll sacrifice next year’s buds. Feed lightly with an acid-formulating fertilizer in spring and early summer. Yellowing between leaf veins may indicate high pH; correct soil chemistry before adding more nutrients.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Bud Drop and Frost</h3>\n<p class='mb-4'>Sudden cold snaps or drought stress can cause buds to drop. Maintain even moisture and protect buds from radiational frost with a breathable cover on extreme nights. With thoughtful siting and gentle care, camellias repay you with glossy foliage and elegant blooms when little else is flowering.</p>",
    "tags": ["camellia", "evergreen", "shade"]
    },
    {
    "slug": "gladiolus",
    "title": "Gladiolus Spikes for Summer Drama",
    "description": "Staggered planting, corm care, and staking for towering floral spears.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Succession Planting</h2>\n<p class='mb-4'>Gladiolus deliver vertical color and excel in cutting gardens. Plant corms after frost in full sun, four times the corm’s height deep, and space for airflow. To extend bloom season, plant small batches every two weeks for six to eight weeks. Water regularly during sprout and bud formation, but avoid soggy soil. A light, balanced fertilizer at planting and as spikes emerge supports sturdy stems.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Support and Cutting</h3>\n<p class='mb-4'>Tall spikes benefit from grid supports or discrete staking. Cut when the lowest one to two florets just open; the rest will unfurl in the vase. Leave several leaves behind to recharge the corm. In cold climates, lift corms after foliage yellows, cure in a dry, airy space, then store cool and dark.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Pests and Rot</h3>\n<p class='mb-4'>Thrips can scar blooms—use sticky cards for monitoring and rotate controls as needed. Ensure drainage and sanitation to prevent rot. With rhythmical planting and simple care, glads keep bouquets coming all summer.</p>",
    "tags": ["gladiolus", "corms", "succession"]
    },
    {
    "slug": "hibiscus",
    "title": "Hardy vs Tropical Hibiscus",
    "description": "Water, fertilization, and wintering differences for giant dinner-plate hibiscus vs tropical types.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Know Your Hibiscus</h2>\n<p class='mb-4'>Hibiscus spans hardy, herbaceous perennials with enormous dinner-plate blooms and tropical shrubs that thrive in heat. Hardy hibiscus (H. moscheutos hybrids) die back to the ground and return late in spring; be patient before declaring them dead. They love sun, rich soil, and steady water. Tropical hibiscus (H. rosa-sinensis) are evergreen shrubs in warm climates or container showpieces elsewhere; they demand warmth, high light, and regular feeding to bloom continuously.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Water and Food</h3>\n<p class='mb-4'>Hardy types appreciate moisture and benefit from thick mulch. Tropical forms in pots need free-draining mix and frequent watering in summer. Feed tropicals with a bloom-oriented fertilizer every two weeks during peak growth; hardy forms prefer slow-release in spring.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Winter Strategy</h3>\n<p class='mb-4'>Overwinter tropical hibiscus indoors in a bright, warm spot; prune lightly before bringing them in and watch for pests. Hardy hibiscus stems can be cut after frost; mulch crowns in colder zones. With clear expectations for each type, hibiscus reward you with outsized, tropical flair.</p>",
    "tags": ["hibiscus", "tropical", "hardy"]
    },
    {
    "slug": "gerberas",
    "title": "Gerbera Daisies Indoors & Out",
    "description": "Potting mixes, light levels, and bloom cycling for vibrant gerberas.",
    "image": "https://placehold.co/600x400.png",
    "category": "Flower Types",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Bright Faces, Simple Needs</h2>\n<p class='mb-4'>Gerbera daisies win hearts with saturated petals and crisp centers, but they can sulk if crowns stay wet. Plant in bright light—full sun outdoors, the sunniest window or supplemental LEDs indoors—and use a very airy potting mix with perlite or bark. Set crowns slightly above the soil line to discourage rot. Water deeply and let the top inch dry before repeating. Feed lightly but consistently during active growth.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Flower Cycling</h3>\n<p class='mb-4'>Gerberas often bloom in flushes. Deadhead at the base of the stem to keep new peduncles coming. If flowering slows, check for cramped roots and repot one size up in spring. Watch for spider mites in dry indoor air; increase humidity and rinse foliage periodically.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Outdoor Use</h3>\n<p class='mb-4'>In warm climates, treat as short-lived perennials; elsewhere, enjoy as high-impact annuals or container plants you can shift to shelter during bad weather. With good airflow and disciplined watering, gerberas deliver color blocks that read from across the garden.</p>",
    "tags": ["gerbera", "pots", "houseplant"]
    },
    {
    "slug": "drip-irrigation",
    "title": "Set Up Drip Irrigation in a Weekend",
    "description": "Design, parts list, emitters, and timers for water-wise beds and borders.",
    "image": "https://placehold.co/600x400.png",
    "category": "Gardening Tips",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Why Drip Wins</h2>\n<p class='mb-4'>Drip irrigation delivers water where it counts—the root zone—cutting evaporation, runoff, and disease. Start by sketching your beds and measuring runs. A typical small system uses a pressure regulator, filter, 1/2 inch mainline, and 1/4 inch feeder lines. Use barbed fittings for easy assembly, and secure tubing with stakes. Place emitters near plant root balls; 1 gph (gallon per hour) is standard for perennials, while larger shrubs may need 2 gph. Keep lines out of direct mower paths and shield from UV with mulch.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Zoning and Scheduling</h3>\n<p class='mb-4'>Group plants with similar water needs on the same zone. Install an automatic timer and start conservative: deep, infrequent sessions build resilient roots. Adjust runtime seasonally—longer in heat, shorter in cool spells. Check emitters monthly; a clogged dripper is invisible until a plant wilts.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Maintenance</h3>\n<p class='mb-4'>Flush lines at caps each season, replace brittle sections, and winterize where freezing occurs. Drip pays for itself quickly in healthier plants and lower water bills, while keeping foliage dry and reducing fungal issues.</p>",
    "tags": ["irrigation", "water-saving", "hardware"]
    },
    {
    "slug": "seed-starting-indoors",
    "title": "Seed Starting Indoors, Zero Guesswork",
    "description": "Lights, heat mats, sterile media, and up-potting for sturdy transplants.",
    "image": "https://placehold.co/600x400.png",
    "category": "Gardening Tips",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Start Strong</h2>\n<p class='mb-4'>Consistent conditions are the secret to robust seedlings. Use a sterile, fine-textured seed-starting mix in clean trays and label every cell. Heat mats set to the crop’s ideal germination temperature speed emergence; remove once most seeds sprout. Provide bright light—full-spectrum LEDs 5–10 cm above leaves for 14–16 hours daily—and brush your hand across tops or run a fan gently to encourage sturdy stems.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Water and Nutrition</h3>\n<p class='mb-4'>Bottom-water until the mix is evenly moist, then drain to avoid damping-off. Begin a dilute, balanced fertilizer once true leaves appear. Up-pot crowded seedlings before roots circle; handle by leaves, not stems. Harden off gradually over 7–10 days: shade first, then increasing sun and breeze, reducing water slightly to toughen tissues.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Timing</h3>\n<p class='mb-4'>Back-plan from your last frost date and each crop’s transplant age. Keep notes so next year’s timeline gets easier. With cleanliness, light, and patience, you’ll raise transplants that blast off when set outside.</p>",
    "tags": ["seeds", "indoors", "lighting"]
    },
    {
    "slug": "raised-beds",
    "title": "Build Indestructible Raised Beds",
    "description": "Materials, dimensions, and fill strategies (lasagna, hugelkultur, classic mix).",
    "image": "https://placehold.co/600x400.png",
    "category": "Gardening Tips",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Design for Decades</h2>\n<p class='mb-4'>Raised beds concentrate fertility, improve drainage, and save your back. Aim for 1.2 m width so you can reach the center from either side; height of 30–45 cm suits most flowers, while deeper beds excel for tap-rooted perennials. Use rot-resistant materials like cedar, composite, or galvanized steel; avoid railroad ties. Anchor corners with brackets and exterior-grade screws to prevent bowing. Line bottoms with hardware cloth if burrowing pests are a problem, then add cardboard to suppress weeds.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Filling Strategies</h3>\n<p class='mb-4'>Classic blends use one-third compost, one-third peat or coir, and one-third mineral topsoil. For new builds on a budget, try a lasagna approach: coarse sticks and prunings at the base, then leaves, compost, and finished mix on top. Water thoroughly to settle, then top up after a week. Mulch after planting to reduce evaporation and compaction.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Rotation and Renewal</h3>\n<p class='mb-4'>Refresh annually with a layer of compost and periodic mineral amendments based on soil tests. Rotate plant families to reduce disease buildup. Sturdy beds plus rich soil equals plants that leap out of the ground.</p>",
    "tags": ["raised-beds", "construction", "soil-mix"]
    },
    {
    "slug": "vermicomposting",
    "title": "Vermicomposting That Doesn’t Smell",
    "description": "Bin setups, bedding, feed rates, and harvesting worm castings the clean way.",
    "image": "https://placehold.co/600x400.png",
    "category": "Gardening Tips",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Happy Worms, Rich Castings</h2>\n<p class='mb-4'>A well-run worm bin turns kitchen scraps into black gold with minimal fuss. Choose a ventilated, opaque bin with a tight lid and drainage. Add bedding—shredded cardboard, coco coir, and a handful of garden soil for grit—moistened to a wrung-out sponge. Introduce red wigglers (Eisenia fetida), not nightcrawlers. Feed small amounts of chopped veg, coffee grounds, and crushed eggshells weekly, burying food under bedding and rotating the feeding zone. Avoid meat, dairy, and oily foods that cause odor.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Balance and Troubleshooting</h3>\n<p class='mb-4'>If the bin smells, you’re overfeeding or too wet—add dry bedding and pause feeding. Fruit flies? Freeze scraps first or cover the surface with a sheet of damp newspaper. Maintain 15–27°C for optimal worm activity; extreme cold or heat slows them down.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Harvesting</h3>\n<p class='mb-4'>After a few months, migrate worms by feeding on one side only; harvest finished castings from the other. Use castings to top-dress containers and beds for a gentle nutrient boost and microbial life. Clean, odorless, and efficient—vermicomposting is indoor-friendly soil alchemy.</p>",
    "tags": ["compost", "worms", "soil-health"]
    },
    {
    "slug": "rainwater-harvesting",
    "title": "Rain Barrels & Beyond",
    "description": "Catchment sizing, first-flush diverters, and safe storage to irrigate for free.",
    "image": "https://placehold.co/600x400.png",
    "category": "Gardening Tips",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Design Your System</h2>\n<p class='mb-4'>Turning roof runoff into irrigation water makes ecological and economic sense. Start by estimating yield: roof area (m²) × rainfall (mm) ≈ liters captured, minus losses. Install gutters that slope correctly, add leaf screens, and route downspouts to barrels or tanks set on sturdy, level bases. Include a first-flush diverter to shunt the dirtiest initial water, and a screened inlet to block mosquitoes. Link multiple barrels with bulkhead fittings for capacity and add an overflow returning to a swale or infiltration area.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Distribution</h3>\n<p class='mb-4'>Gravity feed works if tanks are elevated; otherwise, use a small pump and filter to supply drip lines. Keep a spigot low on the barrel, and a cleanout at the bottom for sediment. Label non-potable and keep lids sealed for safety.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Maintenance</h3>\n<p class='mb-4'>Empty and rinse tanks annually, check seals after temperature swings, and winterize where freezing occurs. With a modest investment, rainwater becomes your garden’s most reliable summer resource.</p>",
    "tags": ["water-conservation", "infrastructure", "DIY"]
    },
    {
    "slug": "soil-ph-adjustment",
    "title": "Dial In Soil pH the Right Way",
    "description": "Testing, elemental sulfur, and lime—how much to add and when.",
    "image": "https://placehold.co/600x400.png",
    "category": "Gardening Tips",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Test, Then Treat</h2>\n<p class='mb-4'>Soil pH governs nutrient availability; chase numbers blindly and you’ll lock out essentials. Begin with a lab test or a calibrated meter to learn current pH and buffering capacity. If you need to raise pH, apply lime—dolomitic if magnesium is also low, calcitic otherwise—incorporated into the top 15–20 cm of soil. To lower pH, elemental sulfur is the slow, steady option; acid-forming fertilizers and peat can assist, but go gradually. Retest every 6–8 weeks before reapplying.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Material Rates and Timing</h3>\n<p class='mb-4'>Coarse rules of thumb are just that—soil texture and organic matter change the dose. Always follow local extension tables for your soil type. Apply in fall for changes by spring, or in split spring/fall doses for gentler swings. Water after application to start reactions and prevent dust.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Plant Signals</h3>\n<p class='mb-4'>Interveinal chlorosis may hint at high pH; purple leaves can indicate phosphorus lockout in low pH and cold. Correcting pH often solves mysterious deficiencies without extra fertilizer. Precision here pays off in stronger plants and better blooms.</p>",
    "tags": ["pH", "soil", "amendments"]
    },
    {
    "slug": "trellising-climbers",
    "title": "Trellising Climbers Like a Pro",
    "description": "Supports for sweet peas, clematis, and morning glories without tangles or breakage.",
    "image": "https://placehold.co/600x400.png",
    "category": "Gardening Tips",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Match Support to Growth Habit</h2>\n<p class='mb-4'>Climbers use different strategies to ascend. Tendril users (sweet peas) need thin mesh or strings to grip. Twiners (morning glory) spiral around cords or poles. Petiole-clingers (clematis) appreciate narrow supports they can clasp. Build the right ladder and growth is effortless. Install trellises before planting to avoid root disturbance, anchor them securely against wind, and consider the ultimate mass of foliage when engineering strength.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Training and Pruning</h3>\n<p class='mb-4'>Gently tie young stems with soft ties, fanning them to fill the support evenly. For clematis, know your pruning group: some bloom on old wood and need only light tidying, others on new wood and benefit from a hard cut in late winter. Remove spent blooms on annual climbers to extend the show.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Airflow and Health</h3>\n<p class='mb-4'>Good spacing and vertical training boost airflow, cutting fungal pressure. Water at the base and mulch to keep roots cool. With appropriate supports and steady guidance, climbers transform blank walls into living tapestries.</p>",
    "tags": ["trellis", "vines", "support"]
    },
    {
    "slug": "monsoon-gardening",
    "title": "Monsoon Gardening: Thriving Through Heavy Rains",
    "description": "Drainage, windbreaks, and disease prevention during sustained downpours.",
    "image": "https://placehold.co/600x400.png",
    "category": "Seasonal Guides",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Design for Water</h2>\n<p class='mb-4'>Monsoon months test garden resilience. Start with drainage: elevate beds, contour paths to shed water, and carve shallow swales along contours to slow and soak excess runoff. Integrate rain gardens planted with moisture-tolerant species in low spots. Install windbreaks—temporary mesh fencing or planted hedges—to reduce stem breakage during squalls. Keep mulch thick around root zones but pull it back from stems to avoid rot.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Disease Management</h3>\n<p class='mb-4'>Persistent leaf wetness accelerates fungal diseases. Increase plant spacing, prune for airflow, and water only at the base during dry windows. Remove infected leaves promptly and clean tools between cuts. Consider prophylactic applications of bio-fungicides where pressure is predictable.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Soil and Nutrition</h3>\n<p class='mb-4'>Heavy rains leach nutrients; side-dress with slow-release organic fertilizers to sustain growth. Add compost after storms to rebuild structure. Stake tall perennials early, and check ties weekly. With smart hydrology and vigilant hygiene, monsoon gardens can flourish rather than merely survive.</p>",
    "tags": ["monsoon", "rain", "drainage"]
    },
    {
    "slug": "heatwave-survival",
    "title": "Heatwave Survival for Flower Gardens",
    "description": "Shade cloths, deep-watering cadence, and anti-stress tactics during extreme heat.",
    "image": "https://placehold.co/600x400.png",
    "category": "Seasonal Guides",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Cool the Canopy</h2>\n<p class='mb-4'>Extreme heat stresses plants by spiking transpiration and cooking roots. Deploy 30–50% shade cloth over frames during the hottest part of the day, ensuring good airflow beneath. Water at dawn with long, deep sessions to charge the soil profile; avoid frequent, shallow sprinkles that steam foliage. Refresh mulch to 5–7 cm to insulate roots. In containers, group pots together to create a cooler microclimate and move them out of late-day sun.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Anti-Stress Care</h3>\n<p class='mb-4'>Pause heavy pruning and fertilizing during heat spikes; tender growth scorches easily. Foliar feeds are tempting, but droplets can amplify scorch—skip them. Prioritize rescue watering for new transplants and shallow-rooted annuals; deep-rooted perennials typically ride out short heatwaves with less help.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. After the Wave</h3>\n<p class='mb-4'>Once temperatures normalize, tidy crisped leaves, resume moderate feeding, and reassess plant placement for next year. Thoughtful temporary shade and disciplined irrigation keep gardens intact through punishing spells.</p>",
    "tags": ["summer-heat", "shade", "watering"]
    },
    {
    "slug": "early-autumn-perennials",
    "title": "Planting Perennials in Early Autumn",
    "description": "Why fall-rooting beats spring rush, plus move & divide tactics before frost.",
    "image": "https://placehold.co/600x400.png",
    "category": "Seasonal Guides",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Roots Before Shoots</h2>\n<p class='mb-4'>Early autumn offers warm soil, gentler sun, and more reliable rainfall—ideal for establishing perennials. Roots can grow until soil cools to ~4–7°C, giving plants a head start on spring. Choose healthy divisions or container stock, water deeply before planting, and set crowns at the correct depth. Top-dress with compost and mulch to buffer freeze–thaw cycles, but keep mulch off crowns to prevent rot.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Dividing and Moving</h3>\n<p class='mb-4'>Lift overcrowded clumps with a fork, split into vigorous pieces, and replant promptly. Trim tops to reduce transpiration and water deeply to settle soil. Label new placements; autumn gardens can look sparse once foliage dies back.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Aftercare</h3>\n<p class='mb-4'>Keep soil evenly moist for several weeks, then taper as rains arrive. In colder zones, apply an extra mulch blanket after the first hard frost. Come spring, your perennials will surge while spring-planted neighbors are still waking.</p>",
    "tags": ["autumn", "perennials", "transplanting"]
    },
    {
    "slug": "late-winter-pruning",
    "title": "Late-Winter Pruning Checklist",
    "description": "What to cut now and what to leave—timing that sets up huge spring performance.",
    "image": "https://placehold.co/600x400.png",
    "category": "Seasonal Guides",
    "content": "<h2 class='font-headline text-2xl font-bold mb-4'>Cut Smart</h2>\n<p class='mb-4'>Late winter, when plants are still dormant, is prime time to shape many shrubs and invigorate new growth. Focus on species that bloom on new wood—panicle hydrangea, summer-blooming spireas, and many roses—while avoiding spring bloomers that set buds last year. Start with sanitation: remove dead, damaged, or diseased wood first, cutting to healthy tissue at a slight angle above outward-facing buds. Thin crowded interiors to improve airflow and light penetration.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>1. Tools and Technique</h3>\n<p class='mb-4'>Sharp bypass pruners, loppers, and a clean folding saw make safer cuts. Disinfect blades between plants to prevent disease spread. Step back often to assess structure; the goal is balanced, natural form, not a hedge-trimmer box.</p>\n<h3 class='font-headline text-xl font-bold mt-6 mb-2'>2. Finishing Touches</h3>\n<p class='mb-4'>After pruning, apply compost, refresh mulch, and water if soils are dry. As buds swell, a light spring feeding supports vigorous break. Resist the urge to prune if a warm spell is followed by severe cold—fresh cuts can be vulnerable. Smart timing now equals explosive growth and flowers later.</p>",
    "tags": ["winter", "pruning", "timing"]
    }
];

export const getArticles = () => articles;

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (category: string) => articles.filter((a) => a.category === category);

export const getFeaturedArticles = () => articles.filter((a) => a.featured);

export const getRelatedArticles = (currentArticle: Article) => {
  return articles.filter(a => a.slug !== currentArticle.slug && (a.category === currentArticle.category || a.tags.some(tag => currentArticle.tags.includes(tag)))).slice(0, 3);
}

export const getCategories = () => [
  { name: 'Flower Types', description: 'Guides for specific flowers like roses and orchids.', href: '/flower-types', icon: RoseIcon },
  { name: 'Gardening Tips', description: 'Learn techniques for soil, pest control, and more.', href: '/gardening-tips', icon: GardeningToolsIcon },
  { name: 'Seasonal Guides', description: 'What to do in your garden each season.', href: '/seasonal-guides', icon: Flower },
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

    
