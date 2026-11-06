import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Database, FileSpreadsheet, Layers, MessageSquare, Clock, FileCheck } from 'lucide-react';
import { DataFlowDiagram } from '../components/DataFlowDiagram';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface HowItWorksPageProps {
  onBookAuditClick: () => void;
  onNavigate: (tab: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBookAuditClick, onNavigate }) => {
  return (
    <div className="font-sans text-[#0B1F33]">
      {/* Header */}
      <section className="bg-[#0B1F33] text-white py-20 border-b border-[#233547]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-semibold block">
              Transparent Methodology
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              From your exports to clear answers, in two weeks
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every number DeepClaim shows can be traced back to the bill it came from. Your finance head signs off on how each number is calculated before any action is recommended.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookAuditClick}
                className="px-6 py-3 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book a free claim audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('insights')}
                className="px-6 py-3 bg-[#16324F] hover:bg-[#1E4369] text-white text-xs font-medium rounded-lg border border-[#233547] cursor-pointer"
              >
                Explore The Claim Gap Data →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Data Flow */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <DataFlowDiagram />
        </div>
      </section>

      {/* Onboarding Timeline Section */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Structured Deployment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              The Two-Week Onboarding Timeline
            </h2>
            <p className="text-sm text-[#5B6B7A] mt-2">
              A light, predictable cadence that respects your hospital's operational tempo.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#E3DED3] rounded-2xl flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#0B1F33] text-[#2BB59A] flex flex-col items-center justify-center shrink-0 font-mono">
                <span className="text-xs font-bold uppercase">Days</span>
                <span className="text-xl font-bold leading-none">1–5</span>
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#0B6E5F] font-bold uppercase tracking-wider">
                    Phase 1 · Ingestion & Column Mapping
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B1F33]">
                  Data Agreement Signed, Exports Shared & Normalized
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                  We sign our mutual DPDP-compliant data processing agreement. Your finance or IT desk provides standard tabular exports (CSV/XLSX) from the past 6 months: billing reports, TPA settlement statements, and your current insurer tariff schedule. Our pipeline maps hospital-specific column names and pseudonymises patient identifiers on arrival.
                </p>
                <div className="pt-2 text-xs font-mono text-[#0B6E5F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Zero installation on your servers · Read-only files</span>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#E3DED3] rounded-2xl flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#0B6E5F] text-white flex flex-col items-center justify-center shrink-0 font-mono">
                <span className="text-xs font-bold uppercase">Week</span>
                <span className="text-xl font-bold leading-none">02</span>
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#0B6E5F] font-bold uppercase tracking-wider">
                    Phase 2 · Collaborative Reconciliation
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B1F33]">
                  Numbers Reconciled With Your Finance Team & First Findings Delivered
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                  Our clinical finance analysts conduct a joint reconciliation session with your CFO or billing controller. We verify the mathematical mechanics: isolating patient co-pays from hospital-absorbed disallowances. You receive the executive Claim Gap Report detailing exact procedure margins by insurer.
                </p>
                <div className="pt-2 text-xs font-mono text-[#0B6E5F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Finance head signs off on the calculation baseline</span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#E3DED3] rounded-2xl flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#16324F] text-white flex flex-col items-center justify-center shrink-0 font-mono">
                <span className="text-xs font-bold uppercase">Week</span>
                <span className="text-xl font-bold leading-none">03+</span>
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#0B6E5F] font-bold uppercase tracking-wider">
                    Phase 3 · Ongoing Assistive Operation
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B1F33]">
                  WhatsApp Answers, Daily Worklists & Renewal Evidence Packs
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                  DeepClaim goes live for hospital leadership and the TPA desk. Ask questions anytime on WhatsApp in English, Tamil, or Hindi. The insurance desk receives a prioritized morning worklist of short settlements with substantiated appeals already drafted. At renewal time, walk into insurer meetings with comprehensive volume and cost evidence.
                </p>
                <div className="pt-2 text-xs font-mono text-[#0B6E5F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Humans review and dispatch all communications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Jobs Deep Dive */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Comprehensive Capability
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0B1F33]">
              The Five Jobs DeepClaim Does
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Every job delivers concrete, verifiable leverage back to hospital leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-2">
              <span className="text-xs font-mono font-bold text-[#0B6E5F] uppercase tracking-wider">
                Job 1 · SEE
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Profit per procedure, per payer
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Profit for each procedure, for each payer (each insurer, government scheme and cash), calculated using the hospital's own departmental costs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-2">
              <span className="text-xs font-mono font-bold text-[#0B6E5F] uppercase tracking-wider">
                Job 2 · STOP
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Prevent billing above agreed tariff
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Every bill is checked against the rate agreed with that insurer before it is dispatched, so cuts the hospital cannot pass on to patients are avoided upfront.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-2">
              <span className="text-xs font-mono font-bold text-[#0B6E5F] uppercase tracking-wider">
                Job 3 · RECOVER
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Flag short settlements & draft appeals
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Cuts the hospital absorbs (short settlements after discharge, scheme deductions) are flagged, and a substantiated appeal is drafted for staff to review and send.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-2">
              <span className="text-xs font-mono font-bold text-[#0B6E5F] uppercase tracking-wider">
                Job 4 · NEGOTIATE
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Renewal evidence packs
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Before each insurer renewal, get a ready evidence pack: which procedures lose money with that insurer, clinical volumes sent, and an empirical proposed rate card.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-2">
              <span className="text-xs font-mono font-bold text-[#0B6E5F] uppercase tracking-wider">
                Job 5 · ASK
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Plain-language WhatsApp answers
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Plain-language answers on WhatsApp in English, Tamil or Hindi, plus a daily morning summary. Every number links directly back to the source bills.
              </p>
            </div>

            <div className="p-6 bg-[#0B1F33] text-white rounded-2xl border border-[#233547] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#2BB59A] uppercase tracking-wider">
                  Ready to Start?
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Size your hospital's claim gap
                </h3>
                <p className="text-xs text-slate-300">
                  Begin with a confidential, zero-obligation claim audit based on your last 6 months of data.
                </p>
              </div>
              <button
                onClick={onBookAuditClick}
                className="mt-4 py-2.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#0B1F33] text-white text-center">
        <div className="max-w-[700px] mx-auto px-4 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Start with your 6-month claim audit
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Within two weeks, see your reconciled loss baseline and procedure margins.
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
