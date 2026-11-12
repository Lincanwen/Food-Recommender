import React, { useState } from 'react';
import { Restaurant } from '../types';
import { X, Star, MapPin, Clock, Tag, Gift, ThumbsUp, Sparkles, Check, Share2, Compass, AlertCircle } from 'lucide-react';

interface RestaurantDetailModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
  onClaimPoints: (amount: number, restaurantName: string) => void;
}

export const RestaurantDetailModal: React.FC<RestaurantDetailModalProps> = ({
  restaurant,
  onClose,
  onClaimPoints,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [claimedCheckIn, setClaimedCheckIn] = useState(false);
  const [likedTips, setLikedTips] = useState<Record<number, boolean>>({});
  const [showShareToast, setShowShareToast] = useState(false);

  if (!restaurant) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleCheckIn = () => {
    if (claimedCheckIn) return;
    setClaimedCheckIn(true);
    onClaimPoints(restaurant.rewardPoints, restaurant.name);
  };

  const toggleTipLike = (index: number) => {
    setLikedTips((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-stone-200 shadow-2xl overflow-hidden my-6 animate-fadeIn max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-stone-900 shrink-0 overflow-hidden">
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.className = `relative aspect-16/9 sm:aspect-21/9 w-full bg-gradient-to-br ${restaurant.fallbackGradient} flex items-center justify-center p-6 text-white`;
              }
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />

          {/* Close & Share Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={handleShare}
              className="w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-stone-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-stone-700"
              title="Share restaurant link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-stone-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-stone-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overlay Info Header */}
          <div className="absolute bottom-4 inset-x-6 text-white">
            <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-medium mb-1">
              <span>{restaurant.cuisine}</span>
              <span aria-hidden="true">·</span>
              <span>{restaurant.priceLevel}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-white">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {restaurant.rating} ({restaurant.reviewCount} local reviews)
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              {restaurant.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl line-clamp-2">
              {restaurant.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Share Toast */}
          {showShareToast && (
            <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-700" />
              <span>Link copied to clipboard! Share this secret gem with your friends.</span>
            </div>
          )}

          {/* Location & Access Details */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-semibold text-stone-900 flex items-center gap-1.5 mb-1">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Secret Location & Entry Guide</span>
              </div>
              <p className="text-stone-700 font-medium">{restaurant.address}</p>
              <p className="text-stone-500 mt-0.5">{restaurant.hiddenGemFactor}</p>
            </div>

            <div>
              <div className="font-semibold text-stone-900 flex items-center gap-1.5 mb-1">
                <Clock className="w-4 h-4 text-stone-600" />
                <span>Operating Hours</span>
              </div>
              <p className="text-stone-700">{restaurant.hours}</p>
              <div className="mt-1 flex items-center gap-1 text-stone-500">
                <span>Ideal for:</span>
                <span className="font-medium text-stone-800">{restaurant.idealFor.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Exclusive Offer Box (Key Proposition: Discounts & Exclusive Offers) */}
          {restaurant.exclusiveOffer && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      {restaurant.exclusiveOffer.badge}
                    </span>
                    <span className="text-[11px] text-stone-500">({restaurant.exclusiveOffer.expiresIn})</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900 mt-1">
                    {restaurant.exclusiveOffer.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {restaurant.exclusiveOffer.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-white border border-stone-300 rounded-lg font-mono text-xs font-bold text-stone-900 select-all">
                    {restaurant.exclusiveOffer.code}
                  </div>
                  <button
                    onClick={() => handleCopyCode(restaurant.exclusiveOffer!.code)}
                    className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                    <span>{copiedCode ? 'Claimed!' : 'Claim Code'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Curated Food Catalogue: Dishes & Secret Off-Menu Items */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Curated Menu Highlights
                </h3>
                <p className="text-xs text-stone-500">
                  Including off-menu secret items revealed exclusively to CraveGems diners
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Verified Catalogue
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {restaurant.dishes.map((dish) => (
                <div
                  key={dish.id}
                  className={`p-3 rounded-xl border text-xs flex flex-col justify-between ${
                    dish.isOffMenuSecret
                      ? 'bg-amber-50/60 border-amber-300/80 shadow-2xs'
                      : 'bg-white border-stone-200'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                        {dish.isOffMenuSecret && (
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        )}
                        <span>{dish.name}</span>
                      </div>
                      <span className="font-mono font-bold text-stone-700 shrink-0">
                        ${dish.price}
                      </span>
                    </div>

                    <p className="text-stone-600 mt-1 leading-relaxed text-[11px]">
                      {dish.description}
                    </p>
                  </div>

                  {/* Clean unboxed metadata indicators (§1.A Zero-Pill) */}
                  <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500">
                    {dish.isOffMenuSecret && (
                      <span className="text-amber-800 font-medium">Off-Menu Secret</span>
                    )}
                    {dish.isSignature && (
                      <span className="text-stone-800 font-medium">Signature Item</span>
                    )}
                    {dish.dietary && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{dish.dietary.join(', ')}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Tips & Peer Recommendations (Proposition: Recommendations to other users) */}
          <div>
            <div className="pb-3 border-b border-stone-200 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Community Insider Tips
                </h3>
                <p className="text-xs text-stone-500">
                  Recommendations shared by verified local diners and neighborhood scouts
                </p>
              </div>
            </div>

            <div className="mt-3 space-y-3">
              {restaurant.communityTips.map((tip, idx) => {
                const isLiked = likedTips[idx];
                const likeCount = tip.likes + (isLiked ? 1 : 0);

                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-900">{tip.author}</span>
                        <span className="text-stone-400">·</span>
                        <span className="text-stone-500">{tip.badge}</span>
                      </div>
                      <button
                        onClick={() => toggleTipLike(idx)}
                        className={`flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer px-2 py-0.5 rounded ${
                          isLiked ? 'text-amber-700 bg-amber-100' : 'text-stone-500 hover:text-stone-900'
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>{likeCount} helpful</span>
                      </button>
                    </div>

                    <p className="text-stone-700 italic">"{tip.text}"</p>

                    <div className="mt-2 text-[11px] text-amber-800 font-medium">
                      Must-try dish: <span className="text-stone-900 font-semibold">{tip.dishRecommended}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Check-in & Points Claiming (Proposition: Reward points for dining) */}
          <div className="p-4 rounded-xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-stone-100">
                  Log Your Visit to {restaurant.name}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Earn +{restaurant.rewardPoints} loyalty points towards dining vouchers & secret perks.
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckIn}
              disabled={claimedCheckIn}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                claimedCheckIn
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950'
              }`}
            >
              {claimedCheckIn ? 'Visit Logged (+50 pts)' : `Check In (+${restaurant.rewardPoints} pts)`}
            </button>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>Remember to mention CraveGems for off-menu availability.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-stone-700 hover:text-stone-900 font-medium cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
