import React, { useState } from 'react';
import { RewardVoucher, UserRewardProfile } from '../types';
import { Award, Flame, Gift, Sparkles, Check, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';

interface LoyaltyRewardsSectionProps {
  userProfile: UserRewardProfile;
  vouchers: RewardVoucher[];
  onRedeemVoucher: (voucher: RewardVoucher) => boolean;
  onOpenRecommendModal: () => void;
}

export const LoyaltyRewardsSection: React.FC<LoyaltyRewardsSectionProps> = ({
  userProfile,
  vouchers,
  onRedeemVoucher,
  onOpenRecommendModal,
}) => {
  const [redeemedCode, setRedeemedCode] = useState<{ title: string; code: string } | null>(null);
  const [insufficientError, setInsufficientError] = useState<string | null>(null);

  const handleRedeem = (voucher: RewardVoucher) => {
    setInsufficientError(null);
    if (userProfile.points < voucher.pointsCost) {
      setInsufficientError(`You need ${voucher.pointsCost - userProfile.points} more points to redeem ${voucher.title}.`);
      return;
    }

    const success = onRedeemVoucher(voucher);
    if (success) {
      const code = `REWARD-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      setRedeemedCode({ title: voucher.title, code });
    }
  };

  return (
    <section id="loyalty" className="bg-white border-b border-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-6 border-b border-stone-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Key Proposition & Relationship: Loyalty Programs & Reward Points</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            CraveGems Diner Rewards & Taste Streaks
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Earn points every time you explore an unmarked gem, leave verified dish tips, or recommend secret spots.
            Redeem points for real check deductions, off-menu dishes, and VIP access.
          </p>
        </div>

        {/* User Status Bar & Gamified Taste Streak */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Member Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-2xl p-6 shadow-md border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-mono text-amber-400">
                  {userProfile.tier} Status
                </span>
                <span className="flex items-center gap-1 text-xs text-stone-300 font-mono">
                  <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                  {userProfile.streakDays}-Day Foodie Streak
                </span>
              </div>

              <div className="mt-4">
                <div className="text-xs text-stone-400">Available Points Balance</div>
                <div className="font-mono text-3xl font-bold text-white tracking-tight mt-0.5">
                  {userProfile.points} <span className="text-sm font-sans font-normal text-amber-400">pts</span>
                </div>
              </div>

              {/* Progress to next tier */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-stone-300 mb-1.5">
                  <span>Progress to Master Epicurean</span>
                  <span className="font-mono text-stone-400">{userProfile.points}/1,000 pts</span>
                </div>
                <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((userProfile.points / 1000) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Badges unlocked */}
            <div className="mt-6 pt-5 border-t border-stone-800/80">
              <div className="text-[11px] uppercase tracking-wider font-medium text-stone-400 mb-2">
                Unlocked Explorer Badges
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-stone-800/80 rounded-md border border-stone-700 text-stone-200">
                  🏮 Alleyway Pioneer
                </span>
                <span className="px-2.5 py-1 bg-stone-800/80 rounded-md border border-stone-700 text-stone-200">
                  🌶️ Spice Trail Connoisseur
                </span>
                <span className="px-2.5 py-1 bg-stone-800/80 rounded-md border border-stone-700 text-stone-200">
                  🥖 Sourdough Aficionado
                </span>
              </div>
            </div>
          </div>

          {/* How to Earn Points Strip */}
          <div className="md:col-span-7 bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                How to Multiply Your Rewards
              </h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                As detailed in our community canvas, rewards keep local dining active and celebrate hidden culinary craftsmanship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 flex items-center justify-between">
                    <span>Visit Any Gem</span>
                    <span className="font-mono text-amber-700">+50 pts</span>
                  </div>
                  <p className="text-stone-500 mt-1 text-[11px]">Check in at partner counters to earn instant points.</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 flex items-center justify-between">
                    <span>Recommend a Hidden Gem</span>
                    <span className="font-mono text-amber-700">+100 pts</span>
                  </div>
                  <p className="text-stone-500 mt-1 text-[11px]">Submit an unlisted spot for community editorial review.</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 flex items-center justify-between">
                    <span>Verified Dish Review</span>
                    <span className="font-mono text-amber-700">+30 pts</span>
                  </div>
                  <p className="text-stone-500 mt-1 text-[11px]">Leave a tip helping fellow diners pick what to order.</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 flex items-center justify-between">
                    <span>Maintain 4-Week Streak</span>
                    <span className="font-mono text-amber-700">+150 pts</span>
                  </div>
                  <p className="text-stone-500 mt-1 text-[11px]">Dine at a new neighborhood spot every week.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500">Know a spot missing from our catalogue?</span>
              <button
                onClick={onOpenRecommendModal}
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Submit a Gem (+100 pts)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Voucher Store Header */}
        <div className="mt-10 pt-8 border-t border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Redeemable Member Dining Vouchers
            </h3>
            <span className="text-xs text-stone-500">
              Points deducted immediately upon redemption
            </span>
          </div>

          {/* Insufficient points alert */}
          {insufficientError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-lg flex items-center gap-2">
              <span>{insufficientError}</span>
            </div>
          )}

          {/* Success Redeemed Modal/Callout */}
          {redeemedCode && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-3">
                <Ticket className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <strong>Successfully Redeemed:</strong> {redeemedCode.title}
                  <div className="text-stone-600 mt-0.5">
                    Show voucher code <code className="font-mono font-bold text-stone-900 bg-white px-2 py-0.5 rounded border border-emerald-300">{redeemedCode.code}</code> at participating counters.
                  </div>
                </div>
              </div>
              <button
                onClick={() => setRedeemedCode(null)}
                className="text-xs font-semibold text-emerald-800 hover:underline shrink-0"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Voucher Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vouchers.map((voucher) => {
              const canAfford = userProfile.points >= voucher.pointsCost;

              return (
                <div
                  key={voucher.id}
                  className="p-4 rounded-xl border border-stone-200 bg-white hover:border-amber-300 shadow-2xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                      <span className="font-medium text-amber-700">{voucher.category}</span>
                      <span className="font-mono font-bold text-stone-900">{voucher.pointsCost} pts</span>
                    </div>

                    <h4 className="font-serif font-bold text-sm text-stone-900 line-clamp-1">
                      {voucher.title}
                    </h4>

                    <p className="mt-1 text-xs text-stone-600 line-clamp-2">
                      {voucher.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <button
                      onClick={() => handleRedeem(voucher)}
                      disabled={!canAfford}
                      className={`w-full py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                        canAfford
                          ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                      }`}
                    >
                      <Gift className="w-3.5 h-3.5" />
                      <span>{canAfford ? 'Redeem Voucher' : `Need ${voucher.pointsCost} pts`}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
