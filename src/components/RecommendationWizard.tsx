import React, { useState, useMemo } from 'react';
import { Restaurant } from '../types';
import { Sparkles, X, Check, ArrowRight, Tag, Star, MapPin } from 'lucide-react';

interface RecommendationWizardProps {
  isOpen: boolean;
  onClose: () => void;
  restaurants: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
}

export const RecommendationWizard: React.FC<RecommendationWizardProps> = ({
  isOpen,
  onClose,
  restaurants,
  onSelectRestaurant,
}) => {
  const [selectedMood, setSelectedMood] = useState<string>('Adventurous Foodie');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Savory Umami');
  const [selectedDietary, setSelectedDietary] = useState<string>('Any');
  const [selectedBudget, setSelectedBudget] = useState<string>('Any');

  const moods = [
    { id: 'Adventurous Foodie', label: 'Adventurous Foodie', desc: 'Off-menu items & authentic heritage cooking' },
    { id: 'Romantic Date', label: 'Romantic Date Night', desc: 'Intimate ambiance, candlelight, wine & sake' },
    { id: 'Comfort Food', label: 'Cozy & Comforting', desc: 'Soul-warming broths, claypots, and carbs' },
    { id: 'Fast & Energizing', label: 'Quick Midday Fuel', desc: 'Under 20-min turnaround with massive flavor' },
    { id: 'Late Night Solace', label: 'Late Night Solace', desc: 'Midnight noodles, skewers & jazz beats' },
  ];

  const flavorOptions = [
    { id: 'Savory Umami', label: 'Deep Umami', icon: '🍲' },
    { id: 'Spicy', label: 'Fiery & Peppery', icon: '🌶️' },
    { id: 'Crispy', label: 'Crispy & Crunchy', icon: '🥢' },
    { id: 'Smoky', label: 'Charcoal & Smoky', icon: '🔥' },
    { id: 'Fresh', label: 'Fresh & Herbaceous', icon: '🌿' },
  ];

  const dietaryOptions = ['Any', 'Vegetarian Friendly', 'Vegan Friendly', 'Gluten-Free Friendly', 'Halal Certified'];
  const budgetOptions = ['Any', '$', '$$', '$$$'];

  // Smart matching algorithm
  const matches = useMemo(() => {
    return restaurants
      .map((r) => {
        let score = 70;
        const reasons: string[] = [];

        // Check mood
        const moodMatch = r.idealFor.some(
          (m) => m.toLowerCase().includes(selectedMood.toLowerCase().slice(0, 5))
        );
        if (moodMatch) {
          score += 15;
          reasons.push(`Curated specifically for ${selectedMood}`);
        }

        // Check flavor
        const flavorMatch = r.flavorProfiles.some(
          (f) => f.toLowerCase() === selectedFlavor.toLowerCase() ||
                 (selectedFlavor === 'Savory Umami' && f === 'Umami')
        );
        if (flavorMatch) {
          score += 10;
          reasons.push(`Celebrates prominent ${selectedFlavor} notes`);
        }

        // Check dietary
        if (selectedDietary !== 'Any') {
          const key = selectedDietary.toLowerCase().split(' ')[0]; // vegan, vegetarian, gluten-free, halal
          const hasDish = r.dishes.some((d) => d.dietary?.includes(key as any));
          if (hasDish) {
            score += 5;
            reasons.push(`Features verified ${selectedDietary} specialty dishes`);
          } else {
            score -= 20;
          }
        }

        // Check budget
        if (selectedBudget !== 'Any') {
          if (r.priceLevel === selectedBudget) {
            score += 5;
          } else {
            score -= 5;
          }
        }

        // Hidden gem bonus
        if (r.rating >= 4.9) {
          score += 3;
        }

        const normalizedScore = Math.min(Math.max(score, 50), 99);

        return {
          restaurant: r,
          matchScore: normalizedScore,
          reasons,
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);
  }, [restaurants, selectedMood, selectedFlavor, selectedDietary, selectedBudget]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-stone-200 shadow-2xl overflow-hidden my-8 animate-fadeIn">
        {/* Wizard Header */}
        <div className="px-6 py-5 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Interactive Craving Matcher & AI Recommendation Engine
              </h3>
              <p className="text-xs text-stone-300">
                Personalized discovery based on your mood, craving, and dietary preferences
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Step 1: Mood */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                1. What is your dining mood?
              </label>
              <div className="space-y-1.5">
                {moods.map((m) => {
                  const isSelected = selectedMood === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMood(m.id)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/70 text-stone-900 ring-1 ring-amber-500 font-medium'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50/50 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{m.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-600" />}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5">{m.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Flavor Craving */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                2. What flavor are you craving?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {flavorOptions.map((f) => {
                  const isSelected = selectedFlavor === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFlavor(f.id)}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/70 text-stone-900 font-medium ring-1 ring-amber-500'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50/50 text-stone-700'
                      }`}
                    >
                      <span className="text-sm">{f.icon}</span>
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Dietary & Budget */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-stone-200">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">Dietary</label>
                <select
                  value={selectedDietary}
                  onChange={(e) => setSelectedDietary(e.target.value)}
                  className="w-full text-xs p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {dietaryOptions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">Price Level</label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full text-xs p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b === 'Any' ? 'Any Budget' : `${b} Tier`}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Column (Right) */}
          <div className="lg:col-span-7 bg-stone-50/70 p-4 sm:p-5 rounded-xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                  Top 3 Curated Matches
                </span>
                <span className="text-xs text-amber-700 font-medium">
                  Live Match Scoring
                </span>
              </div>

              <div className="space-y-4">
                {matches.map(({ restaurant, matchScore, reasons }, idx) => (
                  <div
                    key={restaurant.id}
                    className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-300 transition-all cursor-pointer group"
                    onClick={() => {
                      onSelectRestaurant(restaurant);
                      onClose();
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                            #{idx + 1}
                          </span>
                          <h4 className="font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                            {restaurant.name}
                          </h4>
                        </div>
                        <div className="text-xs text-stone-500 flex items-center gap-2 mt-1">
                          <span>{restaurant.cuisine}</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-stone-400" />
                            {restaurant.neighborhood} ({restaurant.distance})
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-stone-700">{restaurant.priceLevel}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold font-mono text-amber-600">
                          {matchScore}% Match
                        </div>
                        <div className="text-[11px] text-stone-500 flex items-center justify-end gap-1">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{restaurant.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Why this spot fits */}
                    <div className="mt-2.5 pt-2.5 border-t border-stone-100 text-xs text-stone-600">
                      <span className="font-semibold text-stone-800">Why you'll love it: </span>
                      {reasons.join(', ')}.
                    </div>

                    {/* Exclusive offer preview */}
                    {restaurant.exclusiveOffer && (
                      <div className="mt-2 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                        <Tag className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">
                          <strong>{restaurant.exclusiveOffer.badge}:</strong> {restaurant.exclusiveOffer.title}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span>Click any card to inspect full secret menu & claim discount.</span>
              <button
                onClick={onClose}
                className="text-stone-900 font-semibold hover:underline"
              >
                Close & Browse All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
