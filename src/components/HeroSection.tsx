import React from 'react';
import { Search, Sparkles, MapPin, ArrowRight, ShieldCheck, Tag, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectQuickFilter: (filter: string) => void;
  onOpenCanvasModal: () => void;
  onOpenWizard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  onSelectQuickFilter,
  onOpenCanvasModal,
  onOpenWizard,
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100 pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-stone-800">
      {/* Background ambient texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-soft-light bg-cover bg-center"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Subtle blueprint provenance marker */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium text-amber-300/90 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Product Blueprint: Key Propositions & Customer Relationships</span>
            <button
              onClick={onOpenCanvasModal}
              className="ml-2 text-stone-400 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              View Canvas
            </button>
          </div>

          {/* Refined Display Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            Skip the Tourist Traps. Taste the Unmarked Secrets.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed font-sans max-w-2xl">
            A curated network of neighborhood hidden gems. Enjoy chef-exclusive off-menu tastings, 
            instant check discounts, and smart mealtime nudges delivered right when cravings strike.
          </p>

          {/* Search Bar & Primary Discovery Controls */}
          <div className="mt-8 bg-stone-800/90 p-2 sm:p-2.5 rounded-xl border border-stone-700/80 shadow-2xl flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1 flex items-center">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search biang biang noodles, Oaxacan mole, unmarked speakeasies..."
                className="w-full pl-10 pr-4 py-2.5 bg-stone-900/60 rounded-lg text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 border border-stone-700/50"
              />
            </div>

            <button
              onClick={onOpenWizard}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
            >
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>Smart Craving Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Quick Discovery Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-stone-400">
            <span className="text-stone-400 font-medium mr-1">Trending:</span>
            {[
              { label: 'Unmarked Doorways', filter: 'unmarked' },
              { label: 'Under $15 Quick Lunch', filter: '$' },
              { label: 'Secret Off-Menu Dishes', filter: 'secret' },
              { label: '15-20% Member Offers', filter: 'offers' },
              { label: 'Late Night Hearth', filter: 'latenight' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => onSelectQuickFilter(item.filter)}
                className="px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer border border-stone-700/60"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Bar (3 Pillars from Canvas) */}
        <div className="mt-12 pt-8 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-sm text-stone-100">Hidden Neighborhood Gems</div>
              <div className="text-xs text-stone-400 mt-0.5">
                Alleyway hearths, basement counters & 3rd-generation family recipes.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-sm text-stone-100">Discounts & Exclusive Offers</div>
              <div className="text-xs text-stone-400 mt-0.5">
                Up to 20% off table check, free welcome pours & off-menu tasting perks.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-sm text-stone-100">Loyalty Rewards & Streaks</div>
              <div className="text-xs text-stone-400 mt-0.5">
                Earn 50+ pts per meal, unlock vouchers, and share gems with fellow foodies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
