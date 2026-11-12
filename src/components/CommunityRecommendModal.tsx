import React, { useState } from 'react';
import { CommunitySubmission } from '../types';
import { X, Sparkles, Check, Gift, MapPin, Utensils } from 'lucide-react';

interface CommunityRecommendModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (submission: CommunitySubmission) => void;
}

export const CommunityRecommendModal: React.FC<CommunityRecommendModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<CommunitySubmission>({
    restaurantName: '',
    neighborhood: '',
    cuisine: '',
    signatureDish: '',
    secretTip: '',
    whyHiddenGem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.restaurantName || !formData.neighborhood || !formData.cuisine) return;

    onSubmit(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden my-6 animate-fadeIn">
        {/* Header */}
        <div className="px-6 py-5 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Recommend a Hidden Gem
              </h3>
              <p className="text-xs text-stone-300">
                Earn +100 CraveGems points while supporting independent kitchens
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

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-stone-900">
              Gem Submitted & +100 Points Credited!
            </h4>
            <p className="text-xs text-stone-600 max-w-md mx-auto">
              Thank you for sharing <strong>{formData.restaurantName}</strong> with the CraveGems community. 
              Our editorial taste scouts will review and catalog it into the live recommendation engine.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Spot / Restaurant Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tacos El Güero"
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Neighborhood or District *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. South End Alleyway"
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Cuisine or Food Category *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sichuan Hand-Pulled Noodles"
                  value={formData.cuisine}
                  onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Must-Try Signature Dish
                </label>
                <input
                  type="text"
                  placeholder="e.g. Twice-cooked pork belly"
                  value={formData.signatureDish}
                  onChange={(e) => setFormData({ ...formData, signatureDish: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Why is it a Hidden Gem?
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Unmarked green door next to the dry cleaners, grandmother makes everything from scratch, no English menu..."
                value={formData.whyHiddenGem}
                onChange={(e) => setFormData({ ...formData, whyHiddenGem: e.target.value })}
                className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Insider Secret or Ordering Tip
              </label>
              <input
                type="text"
                placeholder="e.g. Ask for the homemade pickled mustard greens and chili crunch on the side"
                value={formData.secretTip}
                onChange={(e) => setFormData({ ...formData, secretTip: e.target.value })}
                className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <Gift className="w-3.5 h-3.5 text-amber-600" />
                <span>+100 loyalty points will be added to your profile immediately</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 text-stone-600 hover:text-stone-900 font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Submit & Earn 100 Pts
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
