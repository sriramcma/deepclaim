import React, { useState } from 'react';
import { ShieldCheck, Cookie, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(false); // Non-essential off by default!

  if (dismissed) return null;

  return (
    <div className="fixed bottom-16 md:bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-40 bg-[#FFFFFF] border border-[#E3DED3] rounded-xl p-4 shadow-2xl font-sans text-xs">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-[#E6F3F0] text-[#0B6E5F] rounded-lg shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-[#0B1F33]">Privacy & Cookie Preferences</h4>
            <span className="text-[10px] font-mono text-[#0B6E5F] font-bold">DPDP Ready</span>
          </div>
          <p className="text-[#5B6B7A] text-[11px] leading-relaxed">
            We use strictly essential cookies for site security and calculator operations. Non-essential analytical telemetry is disabled by default.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer text-[11px] text-slate-700">
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="w-3.5 h-3.5 text-[#0B6E5F] rounded border-[#E3DED3] focus:ring-[#0B6E5F]"
              />
              <span>Allow anonymous usage statistics</span>
            </label>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setDismissed(true)}
              className="px-3 py-1.5 bg-[#0B1F33] hover:bg-[#16324F] text-white rounded-md text-[11px] font-medium transition-colors cursor-pointer"
            >
              Save Preferences
            </button>
            <button
              onClick={() => {
                setAnalyticsEnabled(false);
                setDismissed(true);
              }}
              className="px-3 py-1.5 text-slate-600 hover:text-[#0B1F33] text-[11px] cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
