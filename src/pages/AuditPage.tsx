import React from 'react';
import { AuditModalOrForm } from '../components/AuditModalOrForm';
import { FAQS } from '../data/content';
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';

interface AuditPageProps {
  prefilledAbsorbed?: number;
  onOpenPrivacy: () => void;
}

export const AuditPage: React.FC<AuditPageProps> = ({ prefilledAbsorbed, onOpenPrivacy }) => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="font-sans text-[#0B1F33] py-12 bg-[#F7F5F0]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Form Container */}
        <AuditModalOrForm
          prefilledAbsorbed={prefilledAbsorbed}
          onOpenPrivacy={onOpenPrivacy}
        />

        {/* Audit FAQ Section */}
        <div className="bg-white rounded-2xl border border-[#E3DED3] p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block mb-1">
              Audit Process Details
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1F33]">
              What to Expect From Your Audit
            </h3>
          </div>

          <div className="divide-y divide-[#E3DED3] border-y border-[#E3DED3]">
            {FAQS.slice(0, 5).map((faq, idx) => (
              <div key={idx} className="py-3.5">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#0B1F33]">
                    {faq.q}
                  </span>
                  <span className="text-slate-400">
                    {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="mt-2 text-xs text-[#5B6B7A] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
