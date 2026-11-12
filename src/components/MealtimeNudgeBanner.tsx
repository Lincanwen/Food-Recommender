import React, { useState } from 'react';
import { MealTimeSlot } from '../types';
import { MEALTIME_NUDGE_CONFIG } from '../data/mockData';
import { Bell, BellRing, Clock, Sparkles, Check, ChevronRight } from 'lucide-react';

interface MealtimeNudgeBannerProps {
  currentSlot: MealTimeSlot;
  onSelectSlot: (slot: MealTimeSlot) => void;
  onFilterByMealTime: (slot: MealTimeSlot) => void;
}

export const MealtimeNudgeBanner: React.FC<MealtimeNudgeBannerProps> = ({
  currentSlot,
  onSelectSlot,
  onFilterByMealTime,
}) => {
  const [optedIn, setOptedIn] = useState(true);
  const [showNotificationToast, setShowNotificationToast] = useState(false);

  const activeConfig = MEALTIME_NUDGE_CONFIG[currentSlot];

  const handleToggleOptIn = () => {
    const newState = !optedIn;
    setOptedIn(newState);
    if (newState) {
      setShowNotificationToast(true);
      setTimeout(() => setShowNotificationToast(false), 4000);
    }
  };

  return (
    <section id="nudges" className="bg-stone-100 border-b border-stone-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header strip with Time Slots */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <Clock className="w-3.5 h-3.5" />
              <span>Smart Mealtime Nudge Engine</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-500 font-normal">Customer Relationships Cadence</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              {activeConfig.title}
            </h2>
          </div>

          {/* Time Slot Selectors (Interactive Tabs) */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-stone-200 shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            {(['breakfast', 'lunch', 'dinner', 'latenight'] as MealTimeSlot[]).map((slot) => {
              const isActive = currentSlot === slot;
              const labels: Record<MealTimeSlot, string> = {
                breakfast: 'Breakfast (7-11a)',
                lunch: 'Lunch (11:30-2:30p)',
                dinner: 'Dinner (5:30-9:30p)',
                latenight: 'Late Night (9:30p+)'
              };

              return (
                <button
                  key={slot}
                  onClick={() => onSelectSlot(slot)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  {labels[slot]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Nudge Content Card */}
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <p className="text-sm text-stone-700 leading-relaxed">
              {activeConfig.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-stone-600">
              <span className="font-medium text-stone-900">Recommended Cuisines:</span>
              {activeConfig.recommendedCuisines.map((cuisine) => (
                <span
                  key={cuisine}
                  className="px-2.5 py-1 bg-white rounded-md border border-stone-200 text-stone-800"
                >
                  {cuisine}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={() => onFilterByMealTime(currentSlot)}
              className="w-full sm:w-auto px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Show {activeConfig.slot.charAt(0).toUpperCase() + activeConfig.slot.slice(1)} Gems</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleToggleOptIn}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                optedIn
                  ? 'bg-white border-emerald-300 text-emerald-800 hover:bg-emerald-50'
                  : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {optedIn ? (
                <>
                  <BellRing className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mealtime Nudges: Active (Opted-in)</span>
                </>
              ) : (
                <>
                  <Bell className="w-3.5 h-3.5 text-stone-500" />
                  <span>Turn on Mealtime Alerts</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Realtime Toast Feedback when opting in */}
        {showNotificationToast && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Smart Mealtime Cadence Configured:</strong> You will receive a non-spammy taste nudge at 11:45 AM (Lunch) and 6:15 PM (Dinner) matched strictly to your taste preferences.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
