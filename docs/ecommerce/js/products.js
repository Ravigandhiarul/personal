// Sessions Cannabis Product Database
// Converted from VR Pumps structure to cannabis products

const cannabisProducts = [
  // FLOWER PRODUCTS
  {
    id: 1,
    name: "Blue Dream",
    category: "Flower",
    isBaseVariant: true,
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Blue+Dream",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 35.00,
    thc: "18-24%",
    cbd: "<1%",
    strainType: "Hybrid",
    weight: "3.5g",
    effects: ["Happy", "Relaxed", "Creative", "Euphoric"],
    description: "Balanced hybrid with sweet berry aroma and uplifting effects",
    terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
    rating: 5,
    reviews: 125
  },
  {
    id: 2,
    name: "Purple Kush",
    category: "Flower",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Purple+Kush",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 38.00,
    thc: "20-27%",
    cbd: "<1%",
    strainType: "Indica",
    weight: "3.5g",
    effects: ["Sleepy", "Relaxed", "Happy", "Hungry"],
    description: "Pure indica strain with earthy, grape-like aroma",
    terpenes: ["Myrcene", "Caryophyllene", "Pinene"],
    rating: 4,
    reviews: 89
  },
  {
    id: 3,
    name: "Sour Diesel",
    category: "Flower",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Sour+Diesel",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 40.00,
    thc: "22-26%",
    cbd: "<1%",
    strainType: "Sativa",
    weight: "3.5g",
    effects: ["Energetic", "Uplifted", "Creative", "Focused"],
    description: "Legendary sativa with pungent diesel aroma",
    terpenes: ["Limonene", "Caryophyllene", "Myrcene"],
    rating: 5,
    reviews: 203
  },
  {
    id: 4,
    name: "OG Kush",
    category: "Flower",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=OG+Kush",
    isFavourite: true,
    quantity: 1,
    isAddedtoCart: false,
    price: 42.00,
    thc: "23-27%",
    cbd: "<1%",
    strainType: "Hybrid",
    weight: "3.5g",
    effects: ["Euphoric", "Happy", "Relaxed", "Uplifted"],
    description: "Classic strain with complex aroma and potent effects",
    terpenes: ["Myrcene", "Limonene", "Caryophyllene"],
    rating: 5,
    reviews: 312
  },
  {
    id: 5,
    name: "Girl Scout Cookies",
    category: "Flower",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=GSC",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 45.00,
    thc: "25-28%",
    cbd: "<1%",
    strainType: "Hybrid",
    weight: "3.5g",
    effects: ["Euphoric", "Relaxed", "Happy", "Creative"],
    description: "Dessert-like aroma with powerful full-body effects",
    terpenes: ["Caryophyllene", "Limonene", "Humulene"],
    rating: 5,
    reviews: 267
  },
  {
    id: 6,
    name: "Granddaddy Purple",
    category: "Flower",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=GDP",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 39.00,
    thc: "17-24%",
    cbd: "<1%",
    strainType: "Indica",
    weight: "3.5g",
    effects: ["Sleepy", "Relaxed", "Euphoric", "Happy"],
    description: "Popular indica with grape and berry aroma",
    terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
    rating: 4,
    reviews: 156
  },
  {
    id: 7,
    name: "Jack Herer",
    category: "Flower",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Jack+Herer",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: true,
    price: 41.00,
    thc: "18-24%",
    cbd: "<1%",
    strainType: "Sativa",
    weight: "3.5g",
    effects: ["Energetic", "Creative", "Uplifted", "Focused"],
    description: "Award-winning sativa with spicy, pine-scented aroma",
    terpenes: ["Terpinolene", "Caryophyllene", "Pinene"],
    rating: 5,
    reviews: 189
  },
  {
    id: 8,
    name: "White Widow",
    category: "Flower",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=White+Widow",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 37.00,
    thc: "18-25%",
    cbd: "<1%",
    strainType: "Hybrid",
    weight: "3.5g",
    effects: ["Energetic", "Euphoric", "Creative", "Happy"],
    description: "Legendary hybrid covered in white crystal resin",
    terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
    rating: 4,
    reviews: 143
  },

  // EDIBLES
  {
    id: 9,
    name: "Cannabis Gummies - Mixed Fruit",
    category: "Edibles",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Gummies",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 25.00,
    thc: "10mg per piece",
    cbd: "N/A",
    strainType: "Hybrid",
    weight: "10 pieces",
    effects: ["Relaxed", "Happy", "Euphoric"],
    description: "Delicious fruit-flavored gummies, 10mg THC each",
    terpenes: ["Natural fruit flavors"],
    rating: 5,
    reviews: 234
  },
  {
    id: 10,
    name: "Chocolate Bar - Dark Chocolate",
    category: "Edibles",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Chocolate",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 28.00,
    thc: "100mg total",
    cbd: "N/A",
    strainType: "Indica",
    weight: "100g",
    effects: ["Sleepy", "Relaxed", "Happy"],
    description: "Premium dark chocolate infused with 100mg THC",
    terpenes: ["Cocoa terpenes"],
    rating: 5,
    reviews: 178
  },
  {
    id: 11,
    name: "Hard Candies - Assorted",
    category: "Edibles",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Candies",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 22.00,
    thc: "5mg per candy",
    cbd: "N/A",
    strainType: "Sativa",
    weight: "20 pieces",
    effects: ["Energetic", "Uplifted", "Creative"],
    description: "Long-lasting hard candies in assorted flavors",
    terpenes: ["Natural flavors"],
    rating: 4,
    reviews: 92
  },
  {
    id: 12,
    name: "Cookies - Double Chocolate",
    category: "Edibles",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Cookies",
    isFavourite: true,
    quantity: 1,
    isAddedtoCart: false,
    price: 30.00,
    thc: "50mg total",
    cbd: "N/A",
    strainType: "Hybrid",
    weight: "5 cookies",
    effects: ["Relaxed", "Happy", "Euphoric"],
    description: "Gourmet double chocolate cookies, 10mg THC each",
    terpenes: ["Chocolate, vanilla"],
    rating: 5,
    reviews: 156
  },

  // VAPES
  {
    id: 13,
    name: "Vape Cartridge - Blue Dream",
    category: "Vapes",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Vape+Cart",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 45.00,
    thc: "85-90%",
    cbd: "<1%",
    strainType: "Hybrid",
    weight: "1g",
    effects: ["Happy", "Relaxed", "Creative"],
    description: "Premium distillate vape cartridge, strain-specific terpenes",
    terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
    rating: 5,
    reviews: 289
  },
  {
    id: 14,
    name: "Disposable Vape - Sour Diesel",
    category: "Vapes",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Disposable",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 35.00,
    thc: "80-85%",
    cbd: "<1%",
    strainType: "Sativa",
    weight: "0.5g",
    effects: ["Energetic", "Uplifted", "Focused"],
    description: "All-in-one disposable vape pen, no charging needed",
    terpenes: ["Limonene", "Caryophyllene"],
    rating: 4,
    reviews: 167
  },
  {
    id: 15,
    name: "Live Resin Cart - Wedding Cake",
    category: "Vapes",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Live+Resin",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 55.00,
    thc: "88-93%",
    cbd: "<1%",
    strainType: "Hybrid",
    weight: "1g",
    effects: ["Euphoric", "Relaxed", "Happy"],
    description: "Premium live resin cartridge with full terpene profile",
    terpenes: ["Limonene", "Caryophyllene", "Linalool"],
    rating: 5,
    reviews: 234
  },

  // CONCENTRATES
  {
    id: 16,
    name: "Shatter - Lemon Haze",
    category: "Concentrates",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Shatter",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 40.00,
    thc: "85-92%",
    cbd: "<1%",
    strainType: "Sativa",
    weight: "1g",
    effects: ["Energetic", "Uplifted", "Creative"],
    description: "Crystal-clear shatter with citrus aroma",
    terpenes: ["Limonene", "Myrcene", "Pinene"],
    rating: 5,
    reviews: 145
  },
  {
    id: 17,
    name: "Wax - Purple Punch",
    category: "Concentrates",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Wax",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 42.00,
    thc: "82-88%",
    cbd: "<1%",
    strainType: "Indica",
    weight: "1g",
    effects: ["Sleepy", "Relaxed", "Happy"],
    description: "Creamy wax consistency with grape notes",
    terpenes: ["Caryophyllene", "Limonene"],
    rating: 4,
    reviews: 98
  },
  {
    id: 18,
    name: "Live Rosin - Zkittlez",
    category: "Concentrates",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Rosin",
    isFavourite: true,
    quantity: 1,
    isAddedtoCart: true,
    price: 65.00,
    thc: "75-82%",
    cbd: "<1%",
    strainType: "Indica",
    weight: "1g",
    effects: ["Euphoric", "Relaxed", "Happy"],
    description: "Solventless live rosin with fruity flavor profile",
    terpenes: ["Limonene", "Caryophyllene", "Humulene"],
    rating: 5,
    reviews: 267
  },

  // PRE-ROLLS
  {
    id: 19,
    name: "Pre-Roll - OG Kush",
    category: "Pre-Rolls",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Pre-Roll",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 12.00,
    thc: "23-27%",
    cbd: "<1%",
    strainType: "Hybrid",
    weight: "1g",
    effects: ["Euphoric", "Relaxed", "Happy"],
    description: "Premium pre-rolled joint, ready to enjoy",
    terpenes: ["Myrcene", "Limonene", "Caryophyllene"],
    rating: 5,
    reviews: 423
  },
  {
    id: 20,
    name: "Pre-Roll Pack - Sativa Mix",
    category: "Pre-Rolls",
    imageUrl: "https://via.placeholder.com/400x400/fef3e5/F18A00?text=Pre-Roll+Pack",
    isFavourite: false,
    quantity: 1,
    isAddedtoCart: false,
    price: 45.00,
    thc: "20-25%",
    cbd: "<1%",
    strainType: "Sativa",
    weight: "5 x 0.5g",
    effects: ["Energetic", "Uplifted", "Creative"],
    description: "Pack of 5 pre-rolls, mixed sativa strains",
    terpenes: ["Various"],
    rating: 4,
    reviews: 189
  }
];

// Get featured products (first 8)
function getFeaturedProducts() {
  return cannabisProducts.slice(0, 8);
}

// Get products by category
function getProductsByCategory(category) {
  if (!category || category === 'All') {
    return cannabisProducts;
  }
  return cannabisProducts.filter(p => p.category === category);
}

// Get product by ID
function getProductById(id) {
  return cannabisProducts.find(p => p.id === parseInt(id));
}

// Get all categories
function getCategories() {
  const categories = [...new Set(cannabisProducts.map(p => p.category))];
  return ['All', ...categories];
}

// Search products
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return cannabisProducts.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.strainType.toLowerCase().includes(lowerQuery)
  );
}

// Filter products by price range
function filterByPrice(min, max) {
  return cannabisProducts.filter(p => p.price >= min && p.price <= max);
}

// Filter by strain type
function filterByStrainType(strainType) {
  if (!strainType || strainType === 'All') {
    return cannabisProducts;
  }
  return cannabisProducts.filter(p => p.strainType === strainType);
}
