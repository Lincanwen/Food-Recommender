/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { INITIAL_RESTAURANTS, REWARD_VOUCHERS } from './data/mockData';
import { Restaurant, MealTimeSlot, UserRewardProfile, RewardVoucher, CommunitySubmission } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MealtimeNudgeBanner } from './components/MealtimeNudgeBanner';
import { RestaurantGrid } from './components/RestaurantGrid';
import { RestaurantDetailModal } from './components/RestaurantDetailModal';
import { RecommendationWizard } from './components/RecommendationWizard';
import { LoyaltyRewardsSection } from './components/LoyaltyRewardsSection';
import { CommunityRecommendModal } from './components/CommunityRecommendModal';
import { StrategyCanvasModal } from './components/StrategyCanvasModal';
import { Footer } from './components/Footer';

export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(INITIAL_RESTAURANTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [savedIds, setSavedIds] = useState<string[]>(['gem-1', 'gem-4']);

  // Detect initial mealtime slot from system clock
  const [currentSlot, setCurrentSlot] = useState<MealTimeSlot>(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 11) return 'breakfast';
    if (hour >= 11 && hour < 16) return 'lunch';
    if (hour >= 16 && hour < 21) return 'dinner';
    return 'latenight';
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isRecommendModalOpen, setIsRecommendModalOpen] = useState(false);
  const [isCanvasModalOpen, setIsCanvasModalOpen] = useState(false);

  // User loyalty profile
  const [userProfile, setUserProfile] = useState<UserRewardProfile>({
    name: 'Canwen',
    points: 680,
    tier: 'Golden Fork',
    streakDays: 4,
    savedGemsCount: 2,
    redeemedVouchers: 1,
  });

  const [vouchers] = useState<RewardVoucher[]>(REWARD_VOUCHERS);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setActiveToast(message);
    setTimeout(() => setActiveToast(null), 3500);
  };

  const handleToggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      showToast(exists ? 'Removed from saved gems' : 'Saved to your gem collection');
      setUserProfile((p) => ({ ...p, savedGemsCount: updated.length }));
      return updated;
    });
  };

  const handleClaimPoints = (amount: number, restaurantName: string) => {
    setUserProfile((prev) => {
      const newPoints = prev.points + amount;
      let newTier = prev.tier;
      if (newPoints >= 1000) newTier = 'Master Epicurean';
      else if (newPoints >= 500) newTier = 'Golden Fork';

      return {
        ...prev,
        points: newPoints,
        tier: newTier,
      };
    });
    showToast(`Earned +${amount} points for checking in at ${restaurantName}!`);
  };

  const handleRedeemVoucher = (voucher: RewardVoucher): boolean => {
    if (userProfile.points < voucher.pointsCost) return false;

    setUserProfile((prev) => ({
      ...prev,
      points: prev.points - voucher.pointsCost,
      redeemedVouchers: prev.redeemedVouchers + 1,
    }));
    showToast(`Redeemed "${voucher.title}" (-${voucher.pointsCost} pts)`);
    return true;
  };

  const handleSubmitCommunityGem = (submission: CommunitySubmission) => {
    const newGem: Restaurant = {
      id: `gem-user-${Date.now()}`,
      name: submission.restaurantName,
      tagline: submission.whyHiddenGem || 'Community recommended neighborhood secret',
      cuisine: submission.cuisine,
      neighborhood: submission.neighborhood,
      address: `${submission.neighborhood} District`,
      distance: '1.0 mi',
      priceLevel: '$$',
      rating: 5.0,
      reviewCount: 1,
      hiddenGemFactor: submission.whyHiddenGem || 'Submitted by community taste scout',
      rewardPoints: 50,
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      fallbackGradient: 'from-amber-900 to-stone-900',
      idealFor: ['Foodie Adventure', 'Casual Dining'],
      flavorProfiles: ['Savory', 'Umami'],
      mealTimes: ['lunch', 'dinner'],
      hours: '11:30 AM - 10:00 PM',
      dishes: [
        {
          id: `d-${Date.now()}`,
          name: submission.signatureDish || 'Chef Special',
          price: 15,
          description: submission.secretTip || 'Local secret favorite recommended by community',
          isSignature: true,
        }
      ],
      communityTips: [
        {
          author: `${userProfile.name} (Taste Scout)`,
          badge: 'Community Contributor',
          text: submission.secretTip || 'Discovered and verified by local neighborhood diner.',
          dishRecommended: submission.signatureDish || 'House Specialty',
          likes: 1,
        }
      ]
    };

    setRestaurants((prev) => [newGem, ...prev]);
    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + 100,
    }));
    showToast(`+100 Points Awarded! "${submission.restaurantName}" added to the catalogue.`);
  };

  const handleQuickFilter = (filter: string) => {
    if (filter === 'unmarked') {
      setActiveCategory('gems');
    } else if (filter === 'offers') {
      setActiveCategory('offers');
    } else if (filter === 'secret') {
      setActiveCategory('all');
      setSearchQuery('secret');
    } else if (filter === '$') {
      setActiveCategory('all');
      setSearchQuery('$');
    } else if (filter === 'latenight') {
      setCurrentSlot('latenight');
      setActiveCategory('all');
      const el = document.getElementById('nudges');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'catalogue-saved') {
      setActiveCategory('saved');
      const el = document.getElementById('catalogue');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (sectionId === 'recommendations') {
      setIsWizardOpen(true);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered & Sorted Restaurant list
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((r) => {
      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = r.name.toLowerCase().includes(q);
        const matchesCuisine = r.cuisine.toLowerCase().includes(q);
        const matchesNeighborhood = r.neighborhood.toLowerCase().includes(q);
        const matchesDish = r.dishes.some((d) => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q));
        const matchesFactor = r.hiddenGemFactor.toLowerCase().includes(q);
        const matchesPrice = q === '$' ? r.priceLevel === '$' : false;

        if (!matchesName && !matchesCuisine && !matchesNeighborhood && !matchesDish && !matchesFactor && !matchesPrice) {
          return false;
        }
      }

      // Category check
      if (activeCategory === 'gems') {
        return r.hiddenGemFactor.length > 0;
      }
      if (activeCategory === 'offers') {
        return !!r.exclusiveOffer;
      }
      if (activeCategory === 'seasonal') {
        return !!r.isSeasonal;
      }
      if (activeCategory === 'saved') {
        return savedIds.includes(r.id);
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'points') return b.rewardPoints - a.rewardPoints;
      if (sortBy === 'distance') {
        const distA = parseFloat(a.distance);
        const distB = parseFloat(b.distance);
        return distA - distB;
      }
      if (sortBy === 'price-asc') {
        return a.priceLevel.length - b.priceLevel.length;
      }
      return 0;
    });
  }, [restaurants, searchQuery, activeCategory, sortBy, savedIds]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Contract (§2) */}
      <Navbar
        points={userProfile.points}
        savedCount={savedIds.length}
        onOpenRecommendModal={() => setIsRecommendModalOpen(true)}
        onOpenCanvasModal={() => setIsCanvasModalOpen(true)}
        onNavigateSection={handleNavigateSection}
        activeFilter={activeCategory}
      />

      {/* Global Interactive Notification Toast */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-xl border border-stone-700 text-xs flex items-center gap-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>{activeToast}</span>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectQuickFilter={handleQuickFilter}
          onOpenCanvasModal={() => setIsCanvasModalOpen(true)}
          onOpenWizard={() => setIsWizardOpen(true)}
        />

        {/* Mealtime Nudge Banner (Customer Relationships Cadence) */}
        <MealtimeNudgeBanner
          currentSlot={currentSlot}
          onSelectSlot={setCurrentSlot}
          onFilterByMealTime={(slot) => {
            const matches = restaurants.filter((r) => r.mealTimes.includes(slot));
            setSearchQuery('');
            setActiveCategory('all');
            const el = document.getElementById('catalogue');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Curated Hidden Gem Food Catalogue */}
        <RestaurantGrid
          restaurants={filteredRestaurants}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSearchQuery('');
          }}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onSelectRestaurant={setSelectedRestaurant}
          sortBy={sortBy}
          onSelectSort={setSortBy}
        />

        {/* Loyalty Programs & Diner Rewards Section */}
        <LoyaltyRewardsSection
          userProfile={userProfile}
          vouchers={vouchers}
          onRedeemVoucher={handleRedeemVoucher}
          onOpenRecommendModal={() => setIsRecommendModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCanvasModal={() => setIsCanvasModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Modals & Drawers */}
      <RestaurantDetailModal
        restaurant={selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
        onClaimPoints={handleClaimPoints}
      />

      <RecommendationWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        restaurants={restaurants}
        onSelectRestaurant={(r) => setSelectedRestaurant(r)}
      />

      <CommunityRecommendModal
        isOpen={isRecommendModalOpen}
        onClose={() => setIsRecommendModalOpen(false)}
        onSubmit={handleSubmitCommunityGem}
      />

      <StrategyCanvasModal
        isOpen={isCanvasModalOpen}
        onClose={() => setIsCanvasModalOpen(false)}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
