import React from 'react';
import { Sparkles, Compass, Gift, Bookmark, Award, HelpCircle } from 'lucide-react';

interface NavbarProps {
  points: number;
  savedCount: number;
  onOpenRecommendModal: () => void;
  onOpenCanvasModal: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeFilter: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  points,
  savedCount,
  onOpenRecommendModal,
  onOpenCanvasModal,
  onNavigateSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
            CG
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-stone-900 block leading-none">
              CraveGems
            </span>
            <span className="text-[11px] font-sans text-stone-500 tracking-wide">
              Neighborhood Food Intelligence
            </span>
          </div>
        </button>

        {/* Zone 2: 4–5 single-line clean text links with subtle hover states */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigateSection('catalogue')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            Hidden Gems
          </button>
          <button
            onClick={() => onNavigateSection('recommendations')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Craving Matcher
          </button>
          <button
            onClick={() => onNavigateSection('nudges')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            Mealtime Nudges
          </button>
          <button
            onClick={() => onNavigateSection('loyalty')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Award className="w-3.5 h-3.5 text-stone-500" />
            Loyalty Club
          </button>
          <button
            onClick={onOpenCanvasModal}
            className="hover:text-amber-700 text-stone-600 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1"
            title="View the Product Strategy Canvas blueprint"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Product Blueprint
          </button>
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Saved count badge indicator */}
          <button
            onClick={() => onNavigateSection('catalogue-saved')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 text-xs font-medium hover:bg-stone-50 transition-colors cursor-pointer"
            title="View saved restaurants"
          >
            <Bookmark className="w-3.5 h-3.5 text-stone-500" />
            <span className="whitespace-nowrap">Saved ({savedCount})</span>
          </button>

          {/* Member reward points counter */}
          <button
            onClick={() => onNavigateSection('loyalty')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium hover:bg-amber-100 transition-colors cursor-pointer"
            title="View rewards and points"
          >
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-mono tabular-nums font-semibold">{points}</span>
            <span className="hidden md:inline text-amber-800">pts</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenRecommendModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>Recommend a Gem</span>
          </button>
        </div>
      </div>
    </header>
  );
};
