export type MealTimeSlot = 'breakfast' | 'lunch' | 'dinner' | 'latenight';

export type PriceLevel = '$' | '$$' | '$$$' | '$$$$';

export interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  isSignature?: boolean;
  isOffMenuSecret?: boolean;
  dietary?: ('vegan' | 'vegetarian' | 'gluten-free' | 'halal' | 'dairy-free')[];
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  neighborhood: string;
  address: string;
  distance: string;
  priceLevel: PriceLevel;
  rating: number;
  reviewCount: number;
  hiddenGemFactor: string; // The reason it's a hidden gem
  exclusiveOffer?: {
    title: string;
    description: string;
    discountPercent?: number;
    badge: string;
    code: string;
    expiresIn: string;
  };
  rewardPoints: number;
  imageUrl: string;
  fallbackGradient: string;
  idealFor: string[]; // e.g. "Solo Dining", "Romantic Date", "Quick Lunch", "Foodie Adventure"
  flavorProfiles: string[]; // e.g. "Spicy", "Umami", "Crispy", "Smoky", "Herbaceous"
  mealTimes: MealTimeSlot[];
  dishes: Dish[];
  communityTips: {
    author: string;
    badge: string;
    text: string;
    dishRecommended: string;
    likes: number;
  }[];
  hours: string;
  isSeasonal?: boolean;
  seasonalNotes?: string;
}

export interface UserRewardProfile {
  name: string;
  points: number;
  tier: 'Silver Spoon' | 'Golden Fork' | 'Master Epicurean';
  streakDays: number;
  savedGemsCount: number;
  redeemedVouchers: number;
}

export interface RewardVoucher {
  id: string;
  title: string;
  pointsCost: number;
  category: 'Discount' | 'Secret Dish' | 'Tasting Flight' | 'VIP Access';
  description: string;
  partnerRestaurant?: string;
  isAvailable: boolean;
}

export interface CommunitySubmission {
  restaurantName: string;
  neighborhood: string;
  cuisine: string;
  signatureDish: string;
  secretTip: string;
  whyHiddenGem: string;
}
