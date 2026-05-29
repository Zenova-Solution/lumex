export const categories = [
  {
    id: "cat-1",
    name: "Clothing",
    slug: "clothing",
    description: "Premium apparel for every occasion",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    productCount: 48,
  },
  {
    id: "cat-2",
    name: "Accessories",
    slug: "accessories",
    description: "Complete your look with our accessories",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    productCount: 36,
  },
  {
    id: "cat-3",
    name: "Home & Living",
    slug: "home-living",
    description: "Beautiful objects for your space",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    productCount: 24,
  },
  {
    id: "cat-4",
    name: "Footwear",
    slug: "footwear",
    description: "Step out in style",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    productCount: 30,
  },
  {
    id: "cat-5",
    name: "Bags",
    slug: "bags",
    description: "Carry your essentials with elegance",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    productCount: 18,
  },
  {
    id: "cat-6",
    name: "Jewelry",
    slug: "jewelry",
    description: "Timeless pieces for every moment",
    image:
      "https://images.unsplash.com/photo-1515562141589-491e5bf25e96?w=600&q=80",
    productCount: 42,
  },
];

export const featuredProducts = [
  {
    id: "prod-1",
    name: "Premium Cotton Tee",
    slug: "premium-cotton-tee",
    description:
      "Crafted from the finest organic cotton, this timeless tee offers exceptional comfort and durability. Features a relaxed fit with reinforced seams.",
    price: 68,
    comparePrice: 89,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    ],
    rating: 4.8,
    reviewCount: 156,
    category: "clothing",
    brand: "LUXE",
    tags: ["cotton", "organic", "basics"],
    isNew: true,
    isTrending: true,
  },
  {
    id: "prod-2",
    name: "Wool Blend Blazer",
    slug: "wool-blend-blazer",
    description:
      "A sophisticated blazer crafted from a luxurious wool blend. Perfect for both formal occasions and smart casual wear.",
    price: 295,
    comparePrice: 395,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80",
    ],
    rating: 4.9,
    reviewCount: 89,
    category: "clothing",
    brand: "LUXE",
    tags: ["wool", "blazer", "formal"],
    isNew: false,
    isTrending: true,
  },
  {
    id: "prod-3",
    name: "Leather Crossbody Bag",
    slug: "leather-crossbody-bag",
    description:
      "Handcrafted from full-grain Italian leather, this crossbody bag ages beautifully and develops a unique patina over time.",
    price: 189,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
    ],
    rating: 4.7,
    reviewCount: 234,
    category: "bags",
    brand: "Artisan",
    tags: ["leather", "crossbody", "handcrafted"],
    isNew: true,
    isTrending: true,
  },
  {
    id: "prod-4",
    name: "Minimalist Watch",
    slug: "minimalist-watch",
    description:
      "A refined timepiece with a clean dial and premium Japanese movement. The sapphire crystal and Italian leather strap ensure lasting quality.",
    price: 249,
    comparePrice: 299,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80",
    ],
    rating: 4.6,
    reviewCount: 312,
    category: "accessories",
    brand: "Nordic",
    tags: ["watch", "minimalist", "leather"],
    isNew: false,
    isTrending: true,
  },
  {
    id: "prod-5",
    name: "Cashmere Crew Neck",
    slug: "cashmere-crew-neck",
    description:
      "Luxuriously soft cashmere sweater sourced from Inner Mongolia. Lightweight yet warm, perfect for layering.",
    price: 198,
    comparePrice: 250,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    ],
    rating: 4.9,
    reviewCount: 178,
    category: "clothing",
    brand: "LUXE",
    tags: ["cashmere", "sweater", "luxury"],
    isNew: false,
    isTrending: false,
  },
  {
    id: "prod-6",
    name: "Ceramic Pour-Over Set",
    slug: "ceramic-pour-over-set",
    description:
      "Artisan-crafted ceramic pour-over coffee set. Each piece is hand-thrown and glazed, making every set unique.",
    price: 85,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    ],
    rating: 4.5,
    reviewCount: 67,
    category: "home-living",
    brand: "Artisan",
    tags: ["ceramic", "coffee", "handmade"],
    isNew: true,
    isTrending: false,
  },
  {
    id: "prod-7",
    name: "Italian Leather Sneakers",
    slug: "italian-leather-sneakers",
    description:
      "Handcrafted in Italy from the finest calfskin leather. These minimalist sneakers combine comfort with understated elegance.",
    price: 345,
    comparePrice: 420,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    ],
    rating: 4.7,
    reviewCount: 145,
    category: "footwear",
    brand: "Nordic",
    tags: ["leather", "sneakers", "italian"],
    isNew: false,
    isTrending: true,
  },
  {
    id: "prod-8",
    name: "Silk Scarf",
    slug: "silk-scarf",
    description:
      "Hand-rolled edges and digitally printed patterns on the finest mulberry silk. A versatile accessory that elevates any outfit.",
    price: 95,
    comparePrice: 125,
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    ],
    rating: 4.4,
    reviewCount: 89,
    category: "accessories",
    brand: "LUXE",
    tags: ["silk", "scarf", "accessory"],
    isNew: true,
    isTrending: false,
  },
  {
    id: "prod-9",
    name: "Linen Button-Down Shirt",
    slug: "linen-button-down-shirt",
    description:
      "Breathable linen button-down shirt, perfect for warm weather. Features a classic collar and mother-of-pearl buttons.",
    price: 88,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=600&q=80",
    ],
    rating: 4.6,
    reviewCount: 124,
    category: "clothing",
    brand: "LUXE",
    tags: ["linen", "shirt", "summer"],
    isNew: true,
    isTrending: false,
  },
  {
    id: "prod-10",
    name: "Wool Fedora Hat",
    slug: "wool-fedora-hat",
    description:
      "Classic wool fedora with a subtle pinch crown and satin lining. A timeless addition to any wardrobe.",
    price: 65,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80",
    ],
    rating: 4.3,
    reviewCount: 56,
    category: "accessories",
    brand: "Nordic",
    tags: ["wool", "hat", "fedora"],
    isNew: false,
    isTrending: false,
  },
  {
    id: "prod-11",
    name: "Canvas Tote Bag",
    slug: "canvas-tote-bag",
    description:
      "Heavy-duty canvas tote with reinforced stitching and vegetable-tanned leather handles. Built for daily use.",
    price: 128,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=600&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
    ],
    rating: 4.5,
    reviewCount: 98,
    category: "bags",
    brand: "Artisan",
    tags: ["canvas", "tote", "everyday"],
    isNew: false,
    isTrending: true,
  },
  {
    id: "prod-12",
    name: "Performance Running Shoes",
    slug: "performance-running-shoes",
    description:
      "Lightweight performance runners with responsive cushioning and a breathable knit upper. Engineered for speed.",
    price: 165,
    comparePrice: 195,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    ],
    rating: 4.4,
    reviewCount: 203,
    category: "footwear",
    brand: "Nordic",
    tags: ["running", "performance", "athletic"],
    isNew: true,
    isTrending: true,
  },
  {
    id: "prod-13",
    name: "Scented Soy Candle Trio",
    slug: "scented-soy-candle-trio",
    description:
      "Hand-poured soy wax candles in three signature scents: amber, sandalwood, and bergamot. Each burns for 45+ hours.",
    price: 45,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1602523961358-f9f03b3a8d23?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1602523961358-f9f03b3a8d23?w=600&q=80",
    ],
    rating: 4.7,
    reviewCount: 312,
    category: "home-living",
    brand: "Artisan",
    tags: ["candle", "soy", "scented"],
    isNew: false,
    isTrending: true,
  },
  {
    id: "prod-14",
    name: "Gold Pendant Necklace",
    slug: "gold-pendant-necklace",
    description:
      "14k gold vermeil necklace with a delicate circular pendant. Ethically sourced and hand-finished.",
    price: 320,
    comparePrice: 380,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    ],
    rating: 4.8,
    reviewCount: 67,
    category: "jewelry",
    brand: "Nordic",
    tags: ["gold", "pendant", "necklace"],
    isNew: true,
    isTrending: true,
  },
  {
    id: "prod-15",
    name: "Classic Denim Jacket",
    slug: "classic-denim-jacket",
    description:
      "A timeless denim jacket cut from premium Japanese selvedge denim. Features brass hardware and a comfortable broken-in feel.",
    price: 175,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    ],
    rating: 4.5,
    reviewCount: 189,
    category: "clothing",
    brand: "LUXE",
    tags: ["denim", "jacket", "classic"],
    isNew: false,
    isTrending: true,
  },
  {
    id: "prod-16",
    name: "Italian Leather Belt",
    slug: "italian-leather-belt",
    description:
      "Full-grain Italian leather belt with a brushed stainless steel buckle. Ages beautifully with a rich patina.",
    price: 85,
    comparePrice: 110,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
    rating: 4.6,
    reviewCount: 145,
    category: "accessories",
    brand: "Artisan",
    tags: ["leather", "belt", "italian"],
    isNew: false,
    isTrending: false,
  },
  {
    id: "prod-17",
    name: "Marble Serving Board",
    slug: "marble-serving-board",
    description:
      "Hand-polished natural marble serving board with solid brass handles. Perfect for charcuterie and entertaining.",
    price: 55,
    comparePrice: null,
    image:
      "https://images.unsplash.com/photo-1611070874776-0556cab20a08?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611070874776-0556cab20a08?w=600&q=80",
    ],
    rating: 4.3,
    reviewCount: 42,
    category: "home-living",
    brand: "Artisan",
    tags: ["marble", "serving", "board"],
    isNew: true,
    isTrending: false,
  },
  {
    id: "prod-18",
    name: "Trail Running Shoes",
    slug: "trail-running-shoes",
    description:
      "Rugged trail runners with Vibram outsoles and waterproof membrane. Tackle any terrain with confidence.",
    price: 140,
    comparePrice: 170,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    ],
    rating: 4.2,
    reviewCount: 78,
    category: "footwear",
    brand: "LUXE",
    tags: ["trail", "running", "waterproof"],
    isNew: false,
    isTrending: false,
  },
];
