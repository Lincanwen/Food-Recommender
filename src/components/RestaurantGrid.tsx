import React from 'react';
import { Restaurant } from '../types';
import { Star, MapPin, Tag, Gift, Bookmark, ArrowUpRight, Sparkles, Utensils } from 'lucide-react';

interface RestaurantGridProps {
  restaurants: Restaurant[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  savedIds: string[];
  onToggleSave: (id: string, e: React.MouseEvent) => void;
  onSelectRestaurant: (restaurant: Restaurant) => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
}

export const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  restaurants,
  activeCategory,
  onSelectCategory,
  savedIds,
  onToggleSave,
  onSelectRestaurant,
  sortBy,
  onSelectSort,
}) => {
  const categories = [
    { id: 'all', label: 'All Curated Spots' },
    { id: 'gems', label: 'Hidden Gems & Unmarked' },
    { id: 'offers', label: 'Exclusive Dining Offers' },
    { id: 'seasonal', label: 'Seasonal Specials' },
    { id: 'saved', label: `Saved (${savedIds.length})` },
  ];

  return (
    <section id="catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header & Strategy Proposition Callout */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Proposition: Maintaining Food Catalogue & Hidden Gems
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Curated Neighborhood Food Catalogue
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Independently verified kitchens, secret recipes, off-menu dishes, and member check discounts.
          </p>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-xs text-stone-500 font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSelectSort(e.target.value)}
            className="text-xs font-medium bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer shadow-2xs"
          >
            <option value="rating">Highest Rated</option>
            <option value="distance">Nearest Distance</option>
            <option value="points">Highest Reward Points</option>
            <option value="price-asc">Price (Low to High)</option>
          </select>
        </div>
      </div>

      {/* Filter Tabs (Interactive Segmented Control adhering to §1.A) */}
      <div className="mt-6 flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl overflow-x-auto max-w-full">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Restaurant Grid: 3-column desktop layout with generous whitespace */}
      {restaurants.length === 0 ? (
        <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200 mt-8">
          <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-stone-800">No matching culinary spots found</h3>
          <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query, mood preferences, or filter options to explore other neighborhood gems.
          </p>
          <button
            onClick={() => onSelectCategory('all')}
            className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => {
            const isSaved = savedIds.includes(restaurant.id);

            return (
              <article
                key={restaurant.id}
                onClick={() => onSelectRestaurant(restaurant)}
                className="group bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-amber-300/80 transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Image Slot with Fallback Container (§3.E Zero-Broken-Image Policy) */}
                  <div className="relative aspect-4/3 w-full bg-stone-900 overflow-hidden">
                    <img
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to styled CSS gradient container
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.className = `relative aspect-4/3 w-full bg-gradient-to-br ${restaurant.fallbackGradient} flex items-center justify-center p-6 text-white`;
                        }
                      }}
                    />

                    {/* Gradient Scrim for readable badges over image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Action Ribbon: Bookmark & Points */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      {/* Reward Points Tag (Proposition: Reward points) */}
                      <span className="px-2.5 py-1 rounded-md bg-stone-900/90 backdrop-blur-xs text-amber-300 font-mono text-[11px] font-semibold flex items-center gap-1 border border-stone-700">
                        <Gift className="w-3 h-3 text-amber-400" />
                        <span>+{restaurant.rewardPoints} pts on visit</span>
                      </span>

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => onToggleSave(restaurant.id, e)}
                        className={`w-8 h-8 rounded-md backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer ${
                          isSaved
                            ? 'bg-amber-500 text-stone-950 shadow-sm'
                            : 'bg-stone-900/80 text-white hover:bg-stone-900 hover:text-amber-300'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save this gem'}
                      >
                        <Bookmark className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>

                    {/* Bottom Image Info: Price & Rating */}
                    <div className="absolute bottom-3 inset-x-3 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-300 block">
                          {restaurant.cuisine}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-300">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          <span>{restaurant.neighborhood}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-stone-200">{restaurant.distance}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs font-semibold text-white">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{restaurant.rating}</span>
                          <span className="text-stone-400 text-[11px]">({restaurant.reviewCount})</span>
                        </div>
                        <div className="font-mono text-xs font-bold text-stone-300 tracking-wider">
                          {restaurant.priceLevel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                      {restaurant.name}
                    </h3>
                    
                    <p className="mt-1 text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {restaurant.tagline}
                    </p>

                    {/* The Hidden Gem Factor Callout */}
                    <div className="mt-3.5 p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                      <div className="flex items-start gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong className="text-stone-900">Why it's hidden:</strong> {restaurant.hiddenGemFactor}
                        </span>
                      </div>
                    </div>

                    {/* Exclusive Offer (Key Proposition: Discounts & Exclusive Offers) */}
                    {restaurant.exclusiveOffer && (
                      <div className="mt-3 p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-2">
                        <Tag className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block">{restaurant.exclusiveOffer.title}</span>
                          <span className="text-[11px] text-amber-800 line-clamp-1 mt-0.5">
                            {restaurant.exclusiveOffer.description}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Signature Dish Highlights */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 mb-1.5">
                        Signature Picks
                      </div>
                      <div className="space-y-1 text-xs text-stone-700">
                        {restaurant.dishes.slice(0, 2).map((dish) => (
                          <div key={dish.id} className="flex items-center justify-between">
                            <span className="truncate pr-2">{dish.name}</span>
                            <span className="font-mono text-stone-500 text-[11px] shrink-0">
                              ${dish.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-5 py-3 bg-stone-50/60 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700 group-hover:text-amber-900 group-hover:bg-amber-50/30 transition-colors">
                  <span>View Full Secret Menu & Perks</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
