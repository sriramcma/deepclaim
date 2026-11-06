import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building, Layers, CheckSquare, BarChart, ShieldCheck, FileText, TrendingUp, Sparkles } from 'lucide-react';

interface SolutionsPageProps {
  onBookAuditClick: () => void;
  onNavigate: (tab: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onBookAuditClick, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'midsize' | 'large' | 'desk'>('midsize');

  return (
    <div className="font-sans text-[#0B1F33]">
      {/* Header */}
      <section className="bg-[#0B1F33] text-white py-20 border-b border-[#233547]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-semibold block">
              Audience-Specific Solutions
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Tailored to the Job You Do
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you are an owner without an in-house analytics department, a group CFO managing multi-city sites, or heading a pressured insurance desk.
            </p>

            {/* Segmented Controller */}
            <div className="pt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('midsize')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'midsize'
                    ? 'bg-[#0B6E5F] text-white shadow-xs'
                    : 'bg-[#16324F] text-slate-300 hover:text-white'
                }`}
              >
                Mid-Size Hospitals (50–200 beds)
              </button>
              <button
                onClick={() => setActiveTab('large')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'large'
                    ? 'bg-[#0B6E5F] text-white shadow-xs'
                    : 'bg-[#16324F] text-slate-300 hover:text-white'
                }`}
              >
                Large Hospitals & Multi-Site Chains (200+ beds)
              </button>
              <button
                onClick={() => setActiveTab('desk')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'desk'
                    ? 'bg-[#0B6E5F] text-white shadow-xs'
                    : 'bg-[#16324F] text-slate-300 hover:text-white'
                }`}
              >
                Insurance & TPA Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Solution View */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB 1: MID-SIZE HOSPITALS */}
          {activeTab === 'midsize' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block">
                    Mid-Size Hospitals (50–200 Beds)
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33] leading-tight">
                    Your first clear view of what insurance really pays you
                  </h2>
                  <p className="text-sm sm:text-base text-[#5B6B7A] leading-relaxed">
                    Most 50–200 bed private hospitals do not have an in-house data analytics team. Your accounts team is busy generating daily discharge bills and following up on pending authorizations. DeepClaim gives the owner or Medical Director complete clarity on real profitability without adding administrative headcount.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onBookAuditClick}
                      className="px-6 py-3 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Book a free claim audit for your hospital</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E3DED3] shadow-md space-y-4">
                  <h3 className="font-serif text-base font-bold text-[#0B1F33] pb-2 border-b border-[#E3DED3]">
                    Key Deliverables for Mid-Size Owners
                  </h3>
                  <div className="space-y-3 text-xs text-[#5B6B7A]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">Profit by procedure and payer, from your own costs</strong>
                        <span>Know which surgical procedures make or lose money across Star Health, ICICI Lombard, Medi Assist, or PM-JAY.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">Bills checked against agreed tariffs before they go out</strong>
                        <span>Prevent billing above your contracted schedule ceiling so cuts your hospital cannot pass on to patients are stopped upfront.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">A free audit to size your claim gap before you commit</strong>
                        <span>Share 6 months of standard exports. See exactly how much your hospital absorbed before making any software decision.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working scenario banner */}
              <div className="p-6 bg-[#FFFFFF] rounded-2xl border border-[#E3DED3] text-xs">
                <span className="font-mono uppercase font-bold text-[#0B6E5F] text-[11px] block mb-1">
                  The Mid-Size Reality
                </span>
                <p className="text-[#5B6B7A] leading-relaxed">
                  "When package rates stay frozen for four years while nursing salaries and consumable costs increase by 25%, some procedures tip from profitable into net loss on insurance. DeepClaim pinpoints those loss-making procedures so you can re-negotiate or re-allocate OT capacity."
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: LARGE HOSPITALS AND CHAINS */}
          {activeTab === 'large' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block">
                    Large Hospitals & Multi-Site Chains (200+ Beds)
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33] leading-tight">
                    Every payer, every site, one view, and evidence for every renewal
                  </h2>
                  <p className="text-sm sm:text-base text-[#5B6B7A] leading-relaxed">
                    Tertiary hospitals and multi-city hospital groups already employ revenue cycle managers. Yet, leadership rarely has a normalized, payer-by-procedure profit view across all facility units. DeepClaim works alongside your existing RCM teams to give group CFOs empirical leverage.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onBookAuditClick}
                      className="px-6 py-3 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Request Multi-Site Group Audit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E3DED3] shadow-md space-y-4">
                  <h3 className="font-serif text-base font-bold text-[#0B1F33] pb-2 border-b border-[#E3DED3]">
                    Enterprise RCM Capabilities
                  </h3>
                  <div className="space-y-3 text-xs text-[#5B6B7A]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">Compare payer performance across sites</strong>
                        <span>Benchmark denial rates, average payment days, and short settlement deductions between your city units and peripheral branches.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">Renewal packs built from your volumes and costs</strong>
                        <span>Empirical evidence decks detailing actual procedure loss margins, clinical volume trends, and proposed sustainable tariffs.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">Works alongside your revenue cycle team & existing systems</strong>
                        <span>No IT migration, no API upheaval. Reads standard database exports across diverse HIS vendors effortlessly.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-site metrics card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 bg-white rounded-xl border border-[#E3DED3]">
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block">Cross-Site Benchmark</span>
                  <div className="text-xl font-mono font-bold text-[#0B1F33] mt-1">Normalized Margins</div>
                  <p className="text-xs text-[#5B6B7A] mt-1">See cardiology, orthopaedics, and oncology margins compared across all 4 group units.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-[#E3DED3]">
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block">Tariff Renegotiation</span>
                  <div className="text-xl font-mono font-bold text-[#0B1F33] mt-1">Evidence Packs</div>
                  <p className="text-xs text-[#5B6B7A] mt-1">Contractual data points replacing gut feel during annual underwriter meetings.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-[#E3DED3]">
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block">Working Capital</span>
                  <div className="text-xl font-mono font-bold text-[#0B1F33] mt-1">Payer Aging Radar</div>
                  <p className="text-xs text-[#5B6B7A] mt-1">Track overdue accounts receivable by TPA to eliminate unbudgeted borrowing interest.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INSURANCE / TPA DESK */}
          {activeTab === 'desk' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block">
                    Operations Desk
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33] leading-tight">
                    Less chasing, fewer write-offs
                  </h2>
                  <p className="text-sm sm:text-base text-[#5B6B7A] leading-relaxed">
                    TPA desk coordinators spend hours manually combing through insurer settlement sheets, matching claim remittance advices, and trying to draft appeals before the 30-day dispute window closes. DeepClaim equips them with a clear daily worklist and pre-drafted rebuttal letters.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onBookAuditClick}
                      className="px-6 py-3 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Empower Your TPA Desk</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E3DED3] shadow-md space-y-4">
                  <h3 className="font-serif text-base font-bold text-[#0B1F33] pb-2 border-b border-[#E3DED3]">
                    Daily Operational Advantages
                  </h3>
                  <div className="space-y-3 text-xs text-[#5B6B7A]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">One daily list of short settlements and deductions</strong>
                        <span>Ranked by recoverable amount and aging urgency so your staff tackles high-value recoveries first.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">Appeal drafts with bill, tariff & approval attached</strong>
                        <span>Contractual grounds written out with relevant clauses. Your team reviews, clicks approve, and dispatches.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E5F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0B1F33] block">Settlements matched to claims automatically</strong>
                        <span>No more cross-referencing bank UTR credits with multi-patient remittance advices in Excel.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desk workflow example */}
              <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] text-xs space-y-2">
                <span className="font-mono uppercase font-bold text-[#0B6E5F] text-[11px] block">
                  Human-in-the-Loop Philosophy
                </span>
                <p className="text-[#5B6B7A] leading-relaxed">
                  DeepClaim never contacts insurers or TPAs without explicit staff oversight. We serve as the analytical engine that prepares the paperwork, validates the empanelment tariff schedules, and drafts the arguments—allowing your team to maintain cordial, professional relationships with insurer representatives.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Cross-Persona Trust Strip */}
      <section className="py-16 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#0B1F33]">
            Start with your hospital's claim gap audit
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6B7A] max-w-xl mx-auto">
            Regardless of your hospital's size, the journey begins with an empirical discovery of what your claims are truly worth.
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
