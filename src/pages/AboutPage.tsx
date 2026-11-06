import React from 'react';
import { ArrowRight, ShieldCheck, Award, Building, MessageSquare, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { FOUNDER_NOTE } from '../data/content';

interface AboutPageProps {
  onBookAuditClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookAuditClick }) => {
  return (
    <div className="font-sans text-[#0B1F33]">
      {/* Header */}
      <section className="bg-[#0B1F33] text-white py-20 border-b border-[#233547]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-semibold block">
            About DeepClaim.AI
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Indian hospitals carry more of the country's insurance load every year.
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
            They deserve to know exactly what that insurance pays them, and to keep what they've earned.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E3DED3] p-8 sm:p-12 shadow-lg space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Founder Avatar & Bio Card */}
              <div className="md:col-span-4 space-y-3 text-center md:text-left">
                <div className="w-24 h-24 rounded-2xl bg-[#0B1F33] text-[#2BB59A] flex items-center justify-center font-serif text-3xl font-bold shadow-md mx-auto md:mx-0">
                  PJ
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0B1F33]">
                    Padmini Janaki
                  </h3>
                  <div className="text-xs font-medium text-[#0B6E5F] font-mono mt-0.5">
                    Founder, DeepClaim.AI
                  </div>
                </div>
                <div className="text-xs text-[#5B6B7A] space-y-1.5 pt-2 border-t border-[#E3DED3]">
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Founder, LIVF.Women (6 yrs)</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Ex-PayPal India Disputes & Fraud</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    <HeartHandshake className="w-3.5 h-3.5 text-slate-400" />
                    <span>Ex-Change Healthcare Sr PM</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    <Award className="w-3.5 h-3.5 text-slate-400" />
                    <span>WEF Young Global Leader</span>
                  </div>
                </div>
              </div>

              {/* Founder Note Prose */}
              <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block">
                  The Founder's Note
                </span>
                <p className="font-serif text-lg text-[#0B1F33] italic leading-relaxed">
                  "I've run a clinic network from the owner's chair. Before that, I built dispute and fraud products at PayPal and was a Senior Product Manager at Change Healthcare. DeepClaim is the tool hospital owners need: one that tells you, plainly, which part of every insurance cut is yours."
                </p>
                <p>
                  Running a multi-facility clinic network in Chennai taught me first-hand how hospital finances actually bleed: not from bad medicine, but from opaque reconciliation. When a claim settlement advice arrives weeks after a patient has walked out the door, the deductions are quietly absorbed.
                </p>
                <p>
                  At PayPal and Change Healthcare, resolving high-volume transaction disputes was standard engineering. Indian hospital revenue cycle desks deserve the exact same precision: an AI agent that knows your contractual rate cards, reads your discharge bills, and shows you the exact money left on the table.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      const text = encodeURIComponent("Hi Padmini, I would love to connect about DeepClaim.AI.");
                      window.open(`https://wa.me/919840000000?text=${text}`, '_blank');
                    }}
                    className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Talk to Founder on WhatsApp</span>
                  </button>
                  <button
                    onClick={onBookAuditClick}
                    className="px-5 py-2.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer"
                  >
                    Book a Free Claim Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy & Rigor Rules */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Our Editorial & Commercial Constitution
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B1F33]">
              The Accuracy Rules We Live By
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              These protect our credibility with hospital finance teams who examine our numbers.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-[#0B1F33] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-sm font-serif text-[#0B1F33] block">Never conflate total industry deductions with hospital loss</strong>
                <p className="text-xs text-[#5B6B7A] mt-0.5">
                  Industry figures for 'disallowed' claims (e.g., IRDAI's ₹15,100 crore in FY24) include legitimate cuts paid by patients at discharge. We always clarify that part falls on patients, and part falls on hospitals.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-[#0B1F33] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-sm font-serif text-[#0B1F33] block">Never promise guaranteed recovery or fixed savings percentages</strong>
                <p className="text-xs text-[#5B6B7A] mt-0.5">
                  We use words like "find", "flag", "help recover", and "estimate". Every claim dispute depends on clinical documentation and underlying insurer contract terms.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-[#0B1F33] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">3</span>
              <div>
                <strong className="text-sm font-serif text-[#0B1F33] block">Label every example and product view as illustrative</strong>
                <p className="text-xs text-[#5B6B7A] mt-0.5">
                  No misleading mock dashboards or fabricated case studies. All sample screens and margin tables are explicitly marked illustrative until client pilots agree to public disclosure in writing.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-[#0B1F33] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">4</span>
              <div>
                <strong className="text-sm font-serif text-[#0B1F33] block">Every statistic carries a transparent, verifiable citation</strong>
                <p className="text-xs text-[#5B6B7A] mt-0.5">
                  Every metric on DeepClaim derives from verified sources: IRDAI Annual Reports, the Ministry of Health & Family Welfare, or clearly marked consultant estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B1F33] text-white text-center">
        <div className="max-w-[700px] mx-auto px-4 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Ready to meet with our clinical finance team?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Start with a free, confidential claim audit based on your hospital's last 6 months of data.
          </p>
          <div className="pt-2">
            <button
              onClick={onBookAuditClick}
              className="px-6 py-3 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Book a free claim audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
