import React from 'react';
import { X, CheckCircle, ExternalLink, ArrowRight, Layers } from 'lucide-react';

interface StrategyCanvasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const StrategyCanvasModal: React.FC<StrategyCanvasModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
}) => {
  if (!isOpen) return null;

  const stickyMappings = [
    {
      category: 'Key Propositions',
      color: 'bg-amber-100 text-amber-900 border-amber-300',
      items: [
        { note: 'Discounts', implemented: '15-20% off table bills, off-peak promos, code vouchers', target: 'catalogue' },
        { note: 'Hidden gems', implemented: 'Unmarked doors, basement hearths, 3rd-generation family recipes', target: 'catalogue' },
        { note: 'Exclusive offers', implemented: 'Off-menu tastings, welcome cocktails, chef test skewers', target: 'catalogue' },
        { note: 'Recommendations to other users', implemented: 'Community foodie tips, dish upvoting, Recommend a Gem form', target: 'catalogue' },
        { note: 'Reward points for dining', implemented: '50-100 pts per visit, gamified levels & voucher store', target: 'loyalty' },
        { note: 'Maintaining food catalogue', implemented: 'Detailed verified menus, dietary tags, ambiance, price tiers', target: 'catalogue' },
      ]
    },
    {
      category: 'Customer Relationships',
      color: 'bg-orange-100 text-orange-900 border-orange-300',
      items: [
        { note: 'Daily updates/offers', implemented: 'Smart time-of-day mealtime nudge banner (Breakfast, Lunch, Dinner, Late Night)', target: 'nudges' },
        { note: 'Seasonal offers', implemented: 'Winter matsutake, seasonal black truffle pizza, seasonal specials', target: 'catalogue' },
        { note: 'Loyalty programs', implemented: 'Explorer tiers, streak tracking, redeemable vouchers', target: 'loyalty' },
        { note: 'Feedback / recommendations', implemented: 'Interactive Craving Matcher & AI engine based on mood/flavor', target: 'recommendations' },
        { note: 'Daily around mealtimes cadence', implemented: 'Useful opt-in lunch/dinner alerts avoiding spam', target: 'nudges' },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-stone-200 shadow-2xl overflow-hidden my-6 animate-fadeIn max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Food Recommendation App — Strategy Canvas Blueprint
              </h3>
              <p className="text-xs text-stone-300">
                Traceability view mapping each sticky note from your canvas directly to working app features
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

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Canvas Image Embed */}
          <div className="rounded-xl border border-stone-300 overflow-hidden bg-stone-100 shadow-xs">
            <div className="px-4 py-2 bg-stone-200/80 border-b border-stone-300 flex items-center justify-between text-xs text-stone-700">
              <span className="font-semibold">Original Canvas Attachment</span>
              <span className="font-mono text-[11px] text-stone-500">Food_recommendation_app__1__ef546c13.png</span>
            </div>
            <div className="p-2 bg-stone-100 flex items-center justify-center">
              <img
                src="/assets/aistudio/Food_recommendation_app__1__ef546c13.png"
                alt="Original Food Recommendation App Strategy Canvas"
                className="max-h-72 w-auto object-contain rounded shadow-xs"
              />
            </div>
          </div>

          {/* Sticky Notes Traceability Matrix */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-3">
              Canvas Traceability & Live Implementation Status
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stickyMappings.map((group) => (
                <div key={group.category} className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-800 pb-1.5 border-b border-stone-200">
                    {group.category}
                  </div>

                  <div className="space-y-2.5">
                    {group.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className={`px-2 py-0.5 rounded font-medium border text-[11px] ${group.color}`}>
                            Sticky Note: {item.note}
                          </span>
                          <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Live
                          </span>
                        </div>

                        <div className="mt-2 text-stone-700">
                          {item.implemented}
                        </div>

                        <div className="mt-2 pt-2 border-t border-stone-200/60 flex justify-end">
                          <button
                            onClick={() => {
                              onClose();
                              onNavigateSection(item.target);
                            }}
                            className="text-[11px] text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1 cursor-pointer"
                          >
                            <span>Jump to Feature</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Back to Application
          </button>
        </div>
      </div>
    </div>
  );
};
