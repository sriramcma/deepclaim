import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, ShieldCheck, Database, CheckCircle, FileText, Building2, Layers, PhoneCall } from 'lucide-react';
import { ClaimBillVisual } from '../components/ClaimBillVisual';
import { WhatsAppGlimpse } from '../components/WhatsAppGlimpse';
import { DATA_BANK_STATS, PROBLEM_CARDS, HOW_IT_WORKS_STEPS, FAQS } from '../data/content';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onBookAuditClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onBookAuditClick }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-[#0B1F33]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F7F5F0] pt-12 pb-20 border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0B6E5F] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0B6E5F]" />
                <span>AI Agent for Indian Private Hospitals</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#0B1F33] leading-[1.12] tracking-tight text-balance">
                Find the money insurance leaves on your table.
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7A] leading-relaxed max-w-xl">
                DeepClaim reads your bills, claims and settlements, shows which insurers and procedures make or lose you money, and helps your team stop and recover the cuts your hospital absorbs. Just ask on WhatsApp.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onBookAuditClick}
                  className="px-6 py-3.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Book a free claim audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('insights')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0B1F33] border border-[#E3DED3] text-sm font-semibold rounded-lg shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Calculate your claim gap</span>
                  <span className="text-[#0B6E5F]">→</span>
                </button>
              </div>

              {/* Small Line Under Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#5B6B7A]">
                <span>Read-only access</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Hosted in India</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Your team approves every action</span>
              </div>
            </div>

            {/* Right Column: Signature Animated Claim Bill Visual */}
            <div className="lg:col-span-6">
              <ClaimBillVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. NUMBERS BAND (Ink Navy Background) */}
      <section className="bg-[#0B1F33] text-white py-16 border-b border-[#233547]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DATA_BANK_STATS.map((stat, i) => (
              <div key={i} className="space-y-2 border-l border-[#233547] pl-5">
                <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  {stat.label}
                </p>
                <div className="text-[11px] font-mono text-[#2BB59A] pt-1">
                  Source: {stat.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM ("Where the money slips away") */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E4572E] font-bold block mb-2">
              Where the Money Slips Away
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B1F33] leading-tight text-balance">
              Not every insurance cut is your loss. Some are, and nobody is tracking them.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-3">
              When an insurer cuts an inpatient bill, hospital revenue cycle systems often blur patient co-pays with hospital-absorbed write-offs. Here is where your cash flow silently leaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROBLEM_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E3DED3] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E4572E] font-semibold bg-[#FDEDE9] px-2 py-0.5 rounded">
                      Loss Point
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                    {card.body}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#F7F5F0] text-[11px] text-slate-500 italic">
                  {card.context}
                </div>
              </div>
            ))}

            {/* 6th Card: Discovery Callout */}
            <div className="bg-[#0B1F33] text-white rounded-2xl p-6 border border-[#233547] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-semibold block">
                  The Discovery
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Stop absorbing losses you never agreed to.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  DeepClaim isolates the specific line items your hospital contractually should never have absorbed—empowering your finance desk to appeal with precise evidence.
                </p>
              </div>
              <div className="mt-4 pt-4">
                <button
                  onClick={onBookAuditClick}
                  className="w-full py-2.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>See your loss baseline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (Four Steps) */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Four Deliberate Steps
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              From your exports to clear answers, in two weeks
            </h2>
            <p className="text-sm text-[#5B6B7A] mt-2">
              No new billing software. No manual spreadsheet maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED3] flex flex-col justify-between space-y-4 hover:border-[#0B6E5F]/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-[#0B6E5F]">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold bg-white px-2 py-0.5 rounded border border-[#E3DED3]">
                      {step.timeline}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#0B1F33] block">
                    {step.name}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#0B1F33]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5B6B7A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-[#E6F3F0]/60 rounded-xl border border-[#0B6E5F]/20 text-center max-w-3xl mx-auto text-xs text-[#0B6E5F] font-medium">
            <strong>Audit Trail Guarantee:</strong> Every number DeepClaim shows can be traced back to the bill it came from. Your finance head signs off on how each number is calculated.
          </div>
        </div>
      </section>

      {/* 5. PRODUCT GLIMPSE (WhatsApp & Insight Card) */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Product Glimpse
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              Ask, don't dig. One WhatsApp question replaces days of Excel.
            </h2>
            <p className="text-sm text-[#5B6B7A] mt-2">
              Hospital owners and finance controllers get plain-language answers in seconds, backed by bill-level evidence.
            </p>
          </div>

          <WhatsAppGlimpse />
        </div>
      </section>

      {/* 6. BUILT FOR (Three Audience Tiles) */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Tailored Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              Built for the People Running Indian Hospitals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mid-size hospitals */}
            <div
              onClick={() => onNavigate('solutions')}
              className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED3] hover:border-[#0B6E5F] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-[#0B6E5F] font-bold uppercase tracking-wider">
                  50–200 Beds
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1F33] group-hover:text-[#0B6E5F] transition-colors">
                  Mid-Size Hospitals
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                  "See, for the first time, which insurers and procedures actually make you money." No need to hire an expensive in-house analytics team.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-[#0B6E5F]">
                <span>Explore Mid-Size View</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Large hospitals and chains */}
            <div
              onClick={() => onNavigate('solutions')}
              className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED3] hover:border-[#0B6E5F] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-[#0B6E5F] font-bold uppercase tracking-wider">
                  200+ Beds · Multi-Site
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1F33] group-hover:text-[#0B6E5F] transition-colors">
                  Large Hospitals & Chains
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                  "Compare every payer across every site, and walk into renewals with evidence." Gives your revenue cycle leadership empirical leverage.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-[#0B6E5F]">
                <span>Explore Multi-Site View</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Insurance & TPA desk */}
            <div
              onClick={() => onNavigate('solutions')}
              className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED3] hover:border-[#0B6E5F] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-[#0B6E5F] font-bold uppercase tracking-wider">
                  Operational Desk
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1F33] group-hover:text-[#0B6E5F] transition-colors">
                  Insurance / TPA Desk
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                  "Less firefighting, fewer write-offs." One daily ranked list of short settlements and scheme deductions with substantiated appeals already drafted.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-[#0B6E5F]">
                <span>Explore Desk Workflows</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUST STRIP (Paper Light Strip) */}
      <section className="py-12 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#5B6B7A]">
            <div className="space-y-1">
              <strong className="text-[#0B1F33] block font-semibold">Read-only</strong>
              <span>Your billing software stays exactly as it is.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#0B1F33] block font-semibold">Hosted in India</strong>
              <span>Patient data never leaves sovereign borders.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#0B1F33] block font-semibold">DPDP-ready</strong>
              <span>Identifiers pseudonymised, role-based access, full audit trail.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#0B1F33] block font-semibold">Humans approve</strong>
              <span>We never contact insurers or patients on our own.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Accordion) */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B1F33]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Direct, transparent answers for hospital owners and finance directors.
            </p>
          </div>

          <div className="divide-y divide-[#E3DED3] border-y border-[#E3DED3]">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-sm font-semibold text-[#0B1F33] group-hover:text-[#0B6E5F] transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-slate-400 group-hover:text-[#0B1F33] shrink-0">
                    {openFaqIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="mt-3 text-xs sm:text-sm text-[#5B6B7A] leading-relaxed pr-6">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="py-20 bg-[#0B1F33] text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-semibold block">
            Begin With Evidence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            What are your claims really worth?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Share 6 months of claim and settlement data. In two weeks, we'll show you which cuts you absorbed, which were avoidable, and which insurers and procedures pay you below cost. Free, no obligation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookAuditClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#0B6E5F] hover:bg-[#085549] text-white text-sm font-semibold rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book a free claim audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('insights')}
              className="w-full sm:w-auto px-6 py-4 bg-[#16324F] hover:bg-[#1E4369] text-white border border-[#233547] text-sm font-medium rounded-lg transition-all cursor-pointer"
            >
              Calculate your claim gap first →
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400 pt-2">
            No credit card · Read-only files · Mutual DPA signed prior to ingestion
          </div>
        </div>
      </section>
    </div>
  );
};
