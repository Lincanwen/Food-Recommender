import { Restaurant, RewardVoucher } from '../types';

export const INITIAL_RESTAURANTS: Restaurant[] = [
  {
    id: 'gem-1',
    name: 'Komorebi Izakaya & Charcoal Hearth',
    tagline: 'Subterranean 12-seat robata counter tucked beneath an unmarked doorway',
    cuisine: 'Japanese Robatayaki',
    neighborhood: 'Old Town District',
    address: '422 Mercer Passage, Basement Floor',
    distance: '0.4 mi',
    priceLevel: '$$$',
    rating: 4.9,
    reviewCount: 312,
    hiddenGemFactor: 'No street sign; entry via a brass door buzzer labeled "KMRB". Only 12 counter seats around Kishu binchotan coals.',
    exclusiveOffer: {
      title: 'Chef Special Yakitori Skewer + Yuzu Highball',
      description: 'Complimentary off-menu A5 Wagyu Tsukune skewer and house-carbonated citrus highball on orders over $45.',
      discountPercent: 15,
      badge: 'Exclusive Member Perk',
      code: 'GEM-KOBE15',
      expiresIn: 'Ends this Sunday',
    },
    rewardPoints: 65,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-900 to-stone-900',
    idealFor: ['Romantic Date', 'Foodie Adventure', 'Late Night Solace'],
    flavorProfiles: ['Smoky', 'Umami', 'Crispy', 'Savory'],
    mealTimes: ['dinner', 'latenight'],
    hours: '5:30 PM - 12:30 AM (Tue-Sun)',
    isSeasonal: true,
    seasonalNotes: 'Winter matsutake mushroom skewers and smoked dashi broth specials this month.',
    dishes: [
      { id: 'd1', name: 'Bincho-Smoked Duck Breast with Sansho', price: 24, description: 'Slow-charred over white oak charcoal, glazed with aged tare.', isSignature: true },
      { id: 'd2', name: 'Charred Miso Black Cod', price: 28, description: 'Marinated 72 hours in sweet saikyo miso, caramelized skin.' },
      { id: 'd3', name: 'Off-Menu Truffle Uni Chawanmushi', price: 18, description: 'Silky egg custard topped with fresh Hokkaido sea urchin and shaved black truffle.', isOffMenuSecret: true },
      { id: 'd4', name: 'Crispy Rice Cake with Spicy Bluefin Tartare', price: 16, description: 'Pan-seared sushi rice cakes, sesame chili emulsion.', isSignature: true, dietary: ['gluten-free'] }
    ],
    communityTips: [
      {
        author: 'Elena Vance',
        badge: 'Top 1% Local Foodie',
        text: 'Ask Kenji behind the grill for the secret handwritten sake pairing list. The unpasteurized Junmai Daiginjo is unmatched.',
        dishRecommended: 'Off-Menu Truffle Uni Chawanmushi',
        likes: 47,
      },
      {
        author: 'Marcus Chen',
        badge: 'Night Owl Diner',
        text: 'Come after 10 PM on Thursdays for the late-night chef test skewers. Half the price and always mind-blowing.',
        dishRecommended: 'Bincho-Smoked Duck Breast',
        likes: 31,
      }
    ]
  },
  {
    id: 'gem-2',
    name: 'Casa Mole & Masa Madre',
    tagline: 'Heirloom Oaxacan corn nixtamalization and 40-ingredient mole negro',
    cuisine: 'Oaxacan Heritage',
    neighborhood: 'Mission Arts Quarter',
    address: '819 14th St, Courtyard Suite B',
    distance: '0.8 mi',
    priceLevel: '$$',
    rating: 4.95,
    reviewCount: 428,
    hiddenGemFactor: 'Tucked inside an overgrown artist courtyard. Third-generation abuela recipes using direct-trade pink cónico corn from Oaxaca.',
    exclusiveOffer: {
      title: '20% Off Weekend Lunch + Free Mezcalitas',
      description: 'Enjoy 20% off your full table bill plus welcome artisan mezcalitas when you check in through CraveGems.',
      discountPercent: 20,
      badge: 'Weekend Lunch Promo',
      code: 'OAXACA20',
      expiresIn: 'Active Today',
    },
    rewardPoints: 50,
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-orange-950 to-stone-900',
    idealFor: ['Foodie Adventure', 'Casual Dining', 'Quick Lunch'],
    flavorProfiles: ['Spicy', 'Smoky', 'Umami', 'Earthy'],
    mealTimes: ['lunch', 'dinner'],
    hours: '11:30 AM - 9:30 PM (Wed-Mon)',
    dishes: [
      { id: 'd21', name: 'Mole Negro Confit Duck Leg', price: 26, description: '40-ingredient simmered sauce with roasted chilhuacle chiles and Mexican dark cacao.', isSignature: true, dietary: ['gluten-free'] },
      { id: 'd22', name: 'Fresh Nixtamal Tlayuda Grande', price: 19, description: 'Crisp hand-pressed 14-inch tortilla with asiento, black bean purée, quesillo, and tasajo.', isSignature: true },
      { id: 'd23', name: 'Secret Off-Menu Roasted Bone Marrow Tacos', price: 18, description: 'Wood-fired marrow canoes with salsa macha and pickled shallots.', isOffMenuSecret: true },
      { id: 'd24', name: 'Oyster Mushroom & Epazote Quesadilla', price: 14, description: 'Wild local mushrooms sauteed with fragrant epazote in heirloom blue corn masa.', dietary: ['vegetarian', 'gluten-free'] }
    ],
    communityTips: [
      {
        author: 'Sofia Morales',
        badge: 'Chef & Culinary Columnist',
        text: 'The mole has a depth you only find in Oaxaca mountain towns. Don\'t skip ordering extra freshly puffed tortillas.',
        dishRecommended: 'Mole Negro Confit Duck Leg',
        likes: 62,
      }
    ]
  },
  {
    id: 'gem-3',
    name: 'Fauve & Ferment Micro-Bakery',
    tagline: '72-hour sourdough viennoiserie and naturally leavened savory pastries',
    cuisine: 'Artisanal Bakery & Cafe',
    neighborhood: 'Greenwood Mews',
    address: '14 Elmwood Alley',
    distance: '1.1 mi',
    priceLevel: '$',
    rating: 4.88,
    reviewCount: 289,
    hiddenGemFactor: 'Opens at 7:30 AM, sells out by noon. Stone-ground heritage grains milled in-house every morning.',
    exclusiveOffer: {
      title: 'Free Salted Pistachio Cardamom Knot',
      description: 'Receive a freshly baked knot pastry with any hand-drip filter coffee or batch brew purchase before 10 AM.',
      discountPercent: 100,
      badge: 'Morning Perk',
      code: 'FAUVE-AM',
      expiresIn: 'Every Weekday',
    },
    rewardPoints: 35,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-800 to-yellow-950',
    idealFor: ['Quick Breakfast', 'Solo Escape', 'Cozy Mornings'],
    flavorProfiles: ['Crispy', 'Herbaceous', 'Sweet', 'Flaky'],
    mealTimes: ['breakfast', 'lunch'],
    hours: '7:30 AM - 1:00 PM (Thu-Sun)',
    dishes: [
      { id: 'd31', name: 'Cardamom & Meyer Lemon Morning Bun', price: 5.5, description: 'Laminated croissant dough rolled in demerara sugar and freshly ground Guatemalan green cardamom.', isSignature: true, dietary: ['vegetarian'] },
      { id: 'd32', name: 'Caramelized Leek & Gruyère Brioche Tart', price: 7.5, description: 'Slow-swept leeks, cultured normandy butter, aged Alpine gruyère on sourdough brioche.', isSignature: true, dietary: ['vegetarian'] },
      { id: 'd33', name: 'Off-Menu Black Sesame Kouign-Amann', price: 6, description: 'Dark toasted sesame paste caramelized within crispy salted layers.', isOffMenuSecret: true },
      { id: 'd34', name: 'Single-Origin Geisha Pour-Over', price: 6.5, description: 'Notes of jasmine, bergamot, and white peach from Huila, Colombia.' }
    ],
    communityTips: [
      {
        author: 'Liam Henderson',
        badge: 'Bakery Connoisseur',
        text: 'Queue up at 7:45 AM if you want the savory tarts warm straight from the deck oven. They sell out within 45 minutes.',
        dishRecommended: 'Caramelized Leek & Gruyère Brioche Tart',
        likes: 54,
      }
    ]
  },
  {
    id: 'gem-4',
    name: 'Lao Zhang Biang Biang Hand-Pulled Noodles',
    tagline: 'Wide belt noodles slapped live, drenched in searing hot chili oil & Sichuan peppercorns',
    cuisine: 'Shaanxi Chinese',
    neighborhood: 'Chinatown North Arches',
    address: '67 Lantern Way, Unit 4',
    distance: '0.6 mi',
    priceLevel: '$',
    rating: 4.92,
    reviewCount: 560,
    hiddenGemFactor: 'Hidden at the end of a nondescript indoor strip mall. Master Zhang has been hand-pulling noodles for 34 years.',
    exclusiveOffer: {
      title: 'Free Crispy Scallion Pancake & Spiced Egg',
      description: 'Members receive a complimentary flaky scallion pancake and five-spice tea egg with any biang biang noodle order.',
      discountPercent: 25,
      badge: 'Secret Appetizer Freebie',
      code: 'BIANG25',
      expiresIn: 'Valid All Week',
    },
    rewardPoints: 45,
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-red-950 to-stone-900',
    idealFor: ['Comfort Food', 'Fast & Energizing', 'Foodie Adventure'],
    flavorProfiles: ['Spicy', 'Umami', 'Savory', 'Pungent'],
    mealTimes: ['lunch', 'dinner', 'latenight'],
    hours: '11:00 AM - 10:30 PM (Daily)',
    dishes: [
      { id: 'd41', name: 'Sizzling Hot Oil Seared Biang Biang Noodles', price: 13.5, description: 'Wide handmade ribbon noodles flash-doused in boiling chili-garlic oil with bok choy and aged black vinegar.', isSignature: true, dietary: ['vegan'] },
      { id: 'd42', name: 'Slow-Braised Cumin Lamb Noodles', price: 15.5, description: 'Tender northwest pasture lamb simmered with roasted whole cumin seeds and garlic scapes.', isSignature: true },
      { id: 'd43', name: 'Off-Menu Crispy Chili Tripe & Daikon', price: 11, description: 'Flash-fried honeycomb tripe tossed in toasted numbing peppercorn oil.', isOffMenuSecret: true },
      { id: 'd44', name: 'Shaanxi Pork Roujiamo (Chinese Burger)', price: 6.5, description: 'Crisp flaky bread stuffed with 12-hour braised pork belly and cilantro.' }
    ],
    communityTips: [
      {
        author: 'David Tan',
        badge: 'Spice Seeker',
        text: 'Tell them "Zhong La" (medium spicy) if you love heat, and be sure to splash an extra spoonful of black vinegar to cut the rich chili oil.',
        dishRecommended: 'Sizzling Hot Oil Seared Biang Biang Noodles',
        likes: 89,
      }
    ]
  },
  {
    id: 'gem-5',
    name: 'Il Piccolo Forno al Legno',
    tagline: 'Rustic Neapolitan pizzeria utilizing wild mountain sourdough & San Marzano D.O.P.',
    cuisine: 'Southern Italian & Hearth',
    neighborhood: 'Cobblestone Wharf',
    address: '21 Harbor Steps',
    distance: '1.4 mi',
    priceLevel: '$$',
    rating: 4.87,
    reviewCount: 374,
    hiddenGemFactor: 'Steep cobblestone steps down to the water. 900-degree Stefano Ferrara wood oven imported from Naples.',
    exclusiveOffer: {
      title: '15% Off Your Entire Check + House Limoncello',
      description: 'Exclusive CraveGems dining pass unlocks 15% discount plus chilled digestive limoncello shots for the whole table.',
      discountPercent: 15,
      badge: 'Dinner Table Discount',
      code: 'LEGNO15',
      expiresIn: 'Wednesday - Sunday',
    },
    rewardPoints: 50,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-900 to-stone-900',
    idealFor: ['Romantic Date', 'Group Celebration', 'Comfort Food'],
    flavorProfiles: ['Crispy', 'Umami', 'Savory', 'Herbaceous'],
    mealTimes: ['lunch', 'dinner'],
    hours: '12:00 PM - 10:00 PM (Tue-Sun)',
    isSeasonal: true,
    seasonalNotes: 'Seasonal winter black truffle pizza with fontina val d\'aosta and farm egg yolk.',
    dishes: [
      { id: 'd51', name: 'Diavola Fumante with Calabrian Nduja', price: 21, description: 'Spicy spreadable salumi, fior di latte, hot honey drizzle, fresh basil.', isSignature: true },
      { id: 'd52', name: 'Margherita Verace D.O.P.', price: 18, description: 'San Marzano tomatoes, buffalo mozzarella from Caserta, extra virgin olive oil.', isSignature: true, dietary: ['vegetarian'] },
      { id: 'd53', name: 'Secret Off-Menu Burrata & Pistachio Pesto Calzone', price: 22, description: 'Stuffed folded crust bursting with whole Pugliese burrata and Bronte pistachio pesto.', isOffMenuSecret: true, dietary: ['vegetarian'] },
      { id: 'd54', name: 'Wood-Roasted Broccolini with Anchovy Breadcrumbs', price: 12, description: 'Charred over applewood with lemon zest and garlic crunch.' }
    ],
    communityTips: [
      {
        author: 'Chiara Rossi',
        badge: 'Italian Gastronomy Specialist',
        text: 'The leopard-spotting on the crust is textbook perfection. Ask for table 4 overlooking the wharf lights.',
        dishRecommended: 'Diavola Fumante with Calabrian Nduja',
        likes: 41,
      }
    ]
  },
  {
    id: 'gem-6',
    name: 'Sari-Sari Botanical Kitchen',
    tagline: 'Modern Southeast Asian bistro celebrating wild calamansi, tamarind, and coconut hearth curries',
    cuisine: 'Filipino & Southeast Asian',
    neighborhood: 'Southbank Waterfront',
    address: '94 Maritime Lane, Pier 7',
    distance: '1.2 mi',
    priceLevel: '$$',
    rating: 4.91,
    reviewCount: 305,
    hiddenGemFactor: 'Hidden behind a specialty spice greenhouse. You walk through living kaffir lime trees to reach the dining room.',
    exclusiveOffer: {
      title: 'Free Calamansi Pandan Sorbet with Tasting',
      description: 'Order any 2 main dishes and receive an exclusive house-churned pandan leaf and wild calamansi sorbet.',
      discountPercent: 20,
      badge: 'Secret Dessert Freebie',
      code: 'SARI-TREAT',
      expiresIn: 'This Weekend Only',
    },
    rewardPoints: 55,
    imageUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-emerald-950 to-stone-900',
    idealFor: ['Adventurous Foodie', 'Romantic Date', 'Fresh & Herbaceous'],
    flavorProfiles: ['Fresh', 'Spicy', 'Umami', 'Herbaceous', 'Tangy'],
    mealTimes: ['lunch', 'dinner'],
    hours: '12:00 PM - 9:30 PM (Wed-Sun)',
    dishes: [
      { id: 'd61', name: 'Crispy Pork Belly Kare-Kare', price: 25, description: '12-hour roasted pork belly in rich toasted peanut and achiote sauce with baby bok choy and bagoong.', isSignature: true },
      { id: 'd62', name: 'Tamarind Sinigang Glazed Black Bass', price: 27, description: 'Crispy whole fillet basted with sour tamarind reduction, water spinach, and finger chilis.', isSignature: true, dietary: ['gluten-free'] },
      { id: 'd63', name: 'Off-Menu Smoked Bone Marrow Sisig', price: 20, description: 'Sizzling cast-iron skillet with citrus chili calamansi juice and runny quail eggs.', isOffMenuSecret: true },
      { id: 'd64', name: 'Roasted Kabocha Squash in Turmeric Coconut Cream', price: 18, description: 'Silky coconut milk, wild ginger, lemongrass, and thai sweet basil.', dietary: ['vegan', 'gluten-free'] }
    ],
    communityTips: [
      {
        author: 'Maya Lin',
        badge: 'Local Taste Scout',
        text: 'The aroma when you walk through the botanical greenhouse sets the stage. Their Sinigang glaze will stay in your memory for weeks.',
        dishRecommended: 'Tamarind Sinigang Glazed Black Bass',
        likes: 38,
      }
    ]
  },
  {
    id: 'gem-7',
    name: 'Midnight Mazemen & Highball Den',
    tagline: 'Brothless ramen tossed in concentrated dashi reduction & slow-cooked duck yolk',
    cuisine: 'Modern Tokyo Mazesoba',
    neighborhood: 'East Rail Yard',
    address: '108 Industrial Siding Rd',
    distance: '1.7 mi',
    priceLevel: '$$',
    rating: 4.89,
    reviewCount: 412,
    hiddenGemFactor: 'Located inside a repurposed 1940s rail freight office with moody red neon and jazz vinyl playing continuously.',
    exclusiveOffer: {
      title: 'Free Chashu Bomb Add-on & Japanese Beer',
      description: 'CraveGems diners get double torch-seared pork belly cubes plus a chilled draft lager with any Mazemen bowl.',
      discountPercent: 18,
      badge: 'Late Night Fuel',
      code: 'MIDNIGHT18',
      expiresIn: 'After 8 PM Daily',
    },
    rewardPoints: 60,
    imageUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-stone-900 to-amber-950',
    idealFor: ['Late Night Solace', 'Solo Dining', 'Comfort Food'],
    flavorProfiles: ['Umami', 'Savory', 'Crispy', 'Rich'],
    mealTimes: ['dinner', 'latenight'],
    hours: '6:00 PM - 2:00 AM (Wed-Sun)',
    dishes: [
      { id: 'd71', name: 'Tokyo Truffle & Garlic Mazemen', price: 17.5, description: 'Chewy thick noodles, garlic chips, spring onions, nori, spicy minced pork, raw egg yolk, house dashi tare.', isSignature: true },
      { id: 'd72', name: 'Smoked Mackerel & Sudachi Cold Noodle', price: 16, description: 'Chilled spring noodles with citrus sudachi broth, pickled cucumbers, and house-cured mackerel.', dietary: ['dairy-free'] },
      { id: 'd73', name: 'Off-Menu Spicy Curry Karaage Nuggets', price: 11, description: 'Double-fried thigh meat dusted with 16-spice Japanese curry powder and served with spicy yuzu mayo.', isOffMenuSecret: true },
      { id: 'd74', name: 'Seasonal Koji Mushroom Mazemen', price: 16.5, description: 'King oyster & maitake mushrooms sauteed in shio koji and burnt scallion butter.', dietary: ['vegetarian'] }
    ],
    communityTips: [
      {
        author: 'Ryu Takahashi',
        badge: 'Ramen Enthusiast',
        text: 'Save a spoonful of noodles and ask the chef for "Oimeshi" (complimentary scoop of warm rice) to mix with the remaining sauce at the end!',
        dishRecommended: 'Tokyo Truffle & Garlic Mazemen',
        likes: 95,
      }
    ]
  },
  {
    id: 'gem-8',
    name: 'Bosphorus Claypot & Meze Cellar',
    tagline: 'Claypot slow-baked stews sealed with bread dough and cracked open tableside',
    cuisine: 'Anatolian & Levantine',
    neighborhood: 'Old Stone Quarter',
    address: '33 Minaret Lane',
    distance: '0.9 mi',
    priceLevel: '$$',
    rating: 4.94,
    reviewCount: 341,
    hiddenGemFactor: 'Subterranean brick cellar built in 1890 with hand-woven kilim seating and live oud music on Friday evenings.',
    exclusiveOffer: {
      title: 'Free Meze Tasting Platter with Any Claypot',
      description: 'Receive 4 artisan mezes (smoked eggplant mutabbal, spicy muhammara, labneh, warm pita) complimentary with 2 mains.',
      discountPercent: 22,
      badge: 'Meze Feast Offer',
      code: 'CLAYPOT22',
      expiresIn: 'Tue - Sun',
    },
    rewardPoints: 50,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-950 to-stone-900',
    idealFor: ['Group Celebration', 'Romantic Date', 'Foodie Adventure'],
    flavorProfiles: ['Smoky', 'Earthy', 'Spicy', 'Rich', 'Herbaceous'],
    mealTimes: ['lunch', 'dinner'],
    hours: '12:00 PM - 10:30 PM (Tue-Sun)',
    isSeasonal: true,
    seasonalNotes: 'Winter braised lamb shank with quince, pomegranates, and dried Turkish figs.',
    dishes: [
      { id: 'd81', name: 'Testi Kebabı (Ceramic Pot Braised Lamb)', price: 29, description: 'Tender lamb cubes slow-baked inside a sealed Anatolian clay pot with shallots, tomatoes, and garlic. Cracked open tableside.', isSignature: true, dietary: ['halal', 'gluten-free'] },
      { id: 'd82', name: 'Smoked Eggplant & Walnut Muhammara', price: 13, description: 'Charred over coals, blended with roasted red peppers, Aleppo pepper, and wild pomegranate molasses.', isSignature: true, dietary: ['vegan'] },
      { id: 'd83', name: 'Off-Menu Duck Pide with Kashkaval Cheese', price: 18, description: 'Boat-shaped flatbread filled with shredded duck confit, sheep\'s milk kashkaval, and sunny egg.', isOffMenuSecret: true },
      { id: 'd84', name: 'Pistachio Kunefe with Clotted Kaymak', price: 12, description: 'Shredded phyllo pastry soaked in light sugar syrup, melted cheese interior, Antep pistachio crust.', dietary: ['vegetarian'] }
    ],
    communityTips: [
      {
        author: 'Tariq Al-Mansoor',
        badge: 'Levantine Food Scholar',
        text: 'The table ceremony of cracking the Testi Kebab pot releases an aroma that will make you gasp. Absolutely unforgettable.',
        dishRecommended: 'Testi Kebabı',
        likes: 51,
      }
    ]
  }
];

export const REWARD_VOUCHERS: RewardVoucher[] = [
  {
    id: 'v1',
    title: '$15 Off Your Next Hidden Gem Check',
    pointsCost: 150,
    category: 'Discount',
    description: 'Direct deduction from your total bill at any partner restaurant in the CraveGems network.',
    isAvailable: true,
  },
  {
    id: 'v2',
    title: 'Chef\'s Off-Menu Dish Unlock',
    pointsCost: 200,
    category: 'Secret Dish',
    description: 'Unlock exclusive off-menu dishes usually reserved only for chefs and VIP culinary insiders.',
    isAvailable: true,
  },
  {
    id: 'v3',
    title: 'Artisan Dessert & Digestif Flight',
    pointsCost: 280,
    category: 'Tasting Flight',
    description: 'Two complimentary house desserts plus curated wine/digestif pairings at participating restaurants.',
    isAvailable: true,
  },
  {
    id: 'v4',
    title: 'Priority Counter Seating Pass',
    pointsCost: 350,
    category: 'VIP Access',
    description: 'Skip standard waitlists with priority counter seating at high-demand gems on busy weekend evenings.',
    isAvailable: true,
  }
];

export const MEALTIME_NUDGE_CONFIG = {
  breakfast: {
    slot: 'breakfast',
    label: 'Morning Awakening (7:00 - 11:00 AM)',
    kicker: 'Start Your Morning Right',
    title: 'Flaky Viennoiserie & Precision Pour-Overs',
    description: 'Freshly milled sourdough knots, cardamom morning buns, and artisan batch brews before they sell out.',
    recommendedCuisines: ['Artisanal Bakery & Cafe', 'Breakfast Sandwiches', 'Specialty Coffee'],
    idealGems: ['gem-3']
  },
  lunch: {
    slot: 'lunch',
    label: 'Midday Fuel (11:30 AM - 2:30 PM)',
    kicker: 'Smart Lunch Nudge',
    title: 'Speedy Belt Noodles & Heritage Corn Tacos',
    description: 'Zero food-coma lunches packed with flavor: hot oil biang biang, Oaxacan tlayudas, and crispy rice power sets.',
    recommendedCuisines: ['Shaanxi Chinese', 'Oaxacan Heritage', 'Wood-Fired Pizza'],
    idealGems: ['gem-4', 'gem-2', 'gem-5']
  },
  dinner: {
    slot: 'dinner',
    label: 'Evening Hearth (5:30 - 9:30 PM)',
    kicker: 'Dinner Discovery',
    title: 'Binchotan Coals, Anatolian Claypots & Candlelight',
    description: 'Intimate dinner counters, smoky yakitori, cracked-open lamb claypots, and slow-leavened sourdough pizzas.',
    recommendedCuisines: ['Japanese Robatayaki', 'Anatolian & Levantine', 'Southern Italian & Hearth', 'Filipino & Southeast Asian'],
    idealGems: ['gem-1', 'gem-8', 'gem-5', 'gem-6']
  },
  latenight: {
    slot: 'latenight',
    label: 'Midnight Solace (9:30 PM - 2:00 AM)',
    kicker: 'Late-Night Craving Alert',
    title: 'Brothless Mazemen & Underground Izakaya Counters',
    description: 'Rich garlic tare noodles, crispy karaage nuggets, and chilled highballs tucked away from noisy main streets.',
    recommendedCuisines: ['Modern Tokyo Mazesoba', 'Japanese Robatayaki', 'Shaanxi Chinese'],
    idealGems: ['gem-7', 'gem-1', 'gem-4']
  }
} as const;
