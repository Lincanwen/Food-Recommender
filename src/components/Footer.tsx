import React from 'react';

interface FooterProps {
  onOpenCanvasModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCanvasModal,
  onNavigateSection,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-700 text-amber-400 flex items-center justify-center font-serif text-base font-bold">
                CG
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                CraveGems
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An independent food intelligence & recommendation network. We champion neighborhood
              culinary craftsmanship, unlisted gems, and fair dining perks with zero pay-to-play rankings.
            </p>
          </div>

          {/* Direct Navigation Links (§1.A Zero-Pill) */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="font-semibold uppercase tracking-wider text-stone-200">
              Platform Pillars
            </div>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button
                  onClick={() => onNavigateSection('catalogue')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hidden Gems Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('nudges')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mealtime Nudge Cadence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('loyalty')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Loyalty Points & Dining Vouchers
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCanvasModal}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-amber-400/90"
                >
                  Product Strategy Blueprint
                </button>
              </li>
            </ul>
          </div>

          {/* Culinary Standard */}
          <div className="md:col-span-3 space-y-2 text-xs text-stone-400">
            <div className="font-semibold uppercase tracking-wider text-stone-200">
              Curatorial Standard
            </div>
            <p className="text-[11px] leading-relaxed">
              Every spot is physically audited by local culinary scouts. We verify kitchen cleanliness, ingredient authenticity, and member offer honoring.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Clean unboxed metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} CraveGems. Built for honest food discovery.
          </div>
          <div className="flex items-center gap-4">
            <span>Verified Neighborhood Network</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Spam Mealtime Policy</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenCanvasModal}
              className="text-stone-400 hover:text-white underline underline-offset-2 cursor-pointer"
            >
              Canvas Blueprint
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
