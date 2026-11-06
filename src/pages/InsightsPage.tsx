import React, { useState } from 'react';
import { ArrowRight, PieChart, BarChart2, TrendingUp, Calendar, Info, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';
import { WhoPaysTable } from '../components/WhoPaysTable';
import { ClaimGapCalculator } from '../components/ClaimGapCalculator';
import { BENCHMARKS, REGULATORY_TIMELINE } from '../data/content';

interface InsightsPageProps {
  onBookAuditClick: (prefilledAbsorbed?: number) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onBookAuditClick }) => {
  const [selectedRupeeSlice, setSelectedRupeeSlice] = useState<string>('disallowed');

  // FY24 Rupee breakdown data
  const rupeeBreakdown = [
    {
      id: 'paid',
      label: 'Paid to Hospitals & Patients',
      percent: 71.29,
      amountRupee: '₹83,410 cr',
      color: '#0B6E5F',
      detail: 'Settled by insurers towards approved in-patient and day-care procedures.'
    },
    {
      id: 'disallowed',
      label: 'Disallowed (Cuts)',
      percent: 12.9,
      amountRupee: '₹15,100 cr',
      color: '#E4572E',
      detail: "Disallowed from health claims in FY24. Part falls on patients (co-pays, non-payables), and part quietly becomes the hospital's loss."
    },
    {
      id: 'repudiated',
      label: 'Repudiated (Rejected)',
      percent: 9.34,
      amountRupee: '₹10,937 cr',
      color: '#5B6B7A',
      detail: 'Complete claim rejections on grounds of policy exclusions, non-disclosure, or non-covered conditions.'
    },
    {
      id: 'outstanding',
      label: 'Outstanding at Year End',
      percent: 6.48,
      amountRupee: '₹7,580 cr',
      color: '#E8A33D',
      detail: 'Pending claims waiting in insurer and TPA queues across financial year closures.'
    }
  ];

  // Settled by number 3 years data
  const settlementTrends = [
    { year: 'FY 2022–23', percent: 85.66, label: '85.66% settled' },
    { year: 'FY 2023–24', percent: 82.46, label: '82.46% settled' },
    { year: 'FY 2024–25', percent: 87.5, label: '87.50% settled' }
  ];

  return (
    <div className="font-sans text-[#0B1F33]">
      {/* Editorial Story Header */}
      <section className="bg-[#0B1F33] text-white py-20 border-b border-[#233547]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#2BB59A] uppercase tracking-wider font-semibold">
            <span>Special Editorial Report</span>
            <span>·</span>
            <span>IRDAI & Industry Data</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight tracking-tight text-balance">
            The Claim Gap: what India's hospitals absorb, and what they don't have to
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            India's insurers handle crores of health claims a year, and more than half are cashless. Between the bill and the bank credit, money is cut. Some of it is fair. Some is paid by patients. And some quietly becomes the hospital's loss. Here's how to tell them apart.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span>By DeepClaim Research</span>
            <span>·</span>
            <span>Grounded in IRDAI Annual Reports & Union Health Ministry Data</span>
          </div>
        </div>
      </section>

      {/* 1. WHERE THE CLAIMED RUPEE WENT (FY24) */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block mb-2">
              Section 01 · Macro Anatomy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B1F33]">
              Where the Claimed Rupee Went (FY 2023–24)
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Out of approximately ₹1.17 lakh crore claimed across all health insurance policies in India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-[#E3DED3] shadow-md">
            {/* Donut Chart Simulation (Left, 5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Paid 71.29% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#0B6E5F"
                    strokeWidth="16"
                    strokeDasharray="179.2 251.2"
                    strokeDashoffset="0"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedRupeeSlice('paid')}
                  />
                  {/* Disallowed 12.9% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#E4572E"
                    strokeWidth="16"
                    strokeDasharray="32.4 251.2"
                    strokeDashoffset="-179.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedRupeeSlice('disallowed')}
                  />
                  {/* Repudiated 9.34% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#5B6B7A"
                    strokeWidth="16"
                    strokeDasharray="23.5 251.2"
                    strokeDashoffset="-211.6"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedRupeeSlice('repudiated')}
                  />
                  {/* Outstanding 6.48% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#E8A33D"
                    strokeWidth="16"
                    strokeDasharray="16.3 251.2"
                    strokeDashoffset="-235.1"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedRupeeSlice('outstanding')}
                  />
                </svg>

                {/* Inner Donut Hub */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Total Claimed</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0B1F33]">
                    ₹1.17L Cr
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">FY 2023–24</span>
                </div>
              </div>
              <span className="text-[11px] text-[#5B6B7A] mt-4 font-mono text-center">
                Interactive: Click segments to inspect settlement breakdown
              </span>
            </div>

            {/* Breakdown Legend & Explanation (Right, 7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-3">
                {rupeeBreakdown.map((item) => {
                  const isSelected = selectedRupeeSlice === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedRupeeSlice(item.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#F7F5F0] border-[#0B1F33] shadow-xs'
                          : 'bg-white border-[#E3DED3] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-3.5 h-3.5 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-xs sm:text-sm font-bold text-[#0B1F33]">
                            {item.label}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-sm sm:text-base font-bold text-[#0B1F33] tabular-nums">
                            {item.percent}%
                          </span>
                          <span className="block text-[11px] font-mono text-slate-500">
                            {item.amountRupee}
                          </span>
                        </div>
                      </div>
                      {isSelected && (
                        <p className="text-xs text-[#5B6B7A] mt-2 pt-2 border-t border-[#E3DED3] leading-relaxed">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Crucial accuracy footnote from brief */}
              <div className="p-3.5 bg-[#FDEDE9]/60 rounded-xl border border-[#E4572E]/20 text-xs text-[#0B1F33]">
                <strong className="text-[#E4572E] block mb-1">
                  Essential Context for Hospital Finance Teams:
                </strong>
                The ₹15,100 crore 'disallowed' figure is not the hospitals' loss alone. It includes cuts the patient pays at discharge (non-payable items, co-pay, room-rent limits). Part of this falls on patients, part on hospitals.
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Source: IRDAI Annual Report 2023-24, reported via Business Standard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLAIMS SETTLED BY NUMBER (Three Years Bar Chart) */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block mb-2">
              Section 02 · Volume Perspective
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B1F33]">
              Claims Settled by Number Over Three Years
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Percentage of claims settled by health insurers in India, demonstrating continuous systemic friction.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-[#F7F5F0] rounded-2xl border border-[#E3DED3]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {settlementTrends.map((trend, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-[#E3DED3] space-y-3">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                    {trend.year}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-[#0B1F33] tabular-nums">
                      {trend.percent}%
                    </span>
                    <span className="text-xs text-slate-500">settled</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-[#0B6E5F] h-3 rounded-full transition-all duration-700"
                      style={{ width: `${trend.percent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-[#5B6B7A] leading-relaxed pt-1">
                    Remaining ~13–18% were either rejected (repudiated), short-settled with deductions, or delayed across fiscal quarters.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-[11px] text-slate-500 font-mono text-right">
              Source: TaxTMI, quoting official data tabled by the Ministry of Finance, Government of India
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO PAYS EACH CUT (Interactive Table from Section 3) */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block mb-2">
              Section 03 · Liability Mapping
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B1F33]">
              The Hospital-Absorbed Cut vs Patient-Paid Cut Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Explore how each cut type behaves under Indian healthcare contracts.
            </p>
          </div>

          <WhoPaysTable />
        </div>
      </section>

      {/* 4. WHAT GOOD LOOKS LIKE (Consultant Benchmarks) */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block mb-2">
              Section 04 · Performance Benchmarks
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0B1F33]">
              What Good Looks Like
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Directional benchmarks based on consultant audits of Indian hospital revenue cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENCHMARKS.map((bench, idx) => (
              <div key={idx} className="p-6 bg-[#F7F5F0] rounded-2xl border border-[#E3DED3] flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                    {bench.metric}
                  </h3>
                  <div className="space-y-2 pt-2">
                    <div className="p-3 bg-white rounded-lg border border-[#E3DED3] flex justify-between items-center">
                      <span className="text-xs text-slate-500">Typical Hospital</span>
                      <span className="font-mono text-sm font-bold text-[#E4572E] tabular-nums">
                        {bench.typical}
                      </span>
                    </div>
                    <div className="p-3 bg-[#E6F3F0] rounded-lg border border-[#0B6E5F]/30 flex justify-between items-center">
                      <span className="text-xs text-[#0B6E5F] font-medium">Best-in-Class</span>
                      <span className="font-mono text-sm font-bold text-[#0B6E5F] tabular-nums">
                        {bench.bestInClass}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#5B6B7A] leading-relaxed pt-1">
                    {bench.note}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-[#E3DED3]">
                  Source: {bench.source} (Directional estimate)
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE NEW RULES (Timeline) */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-2">
              Section 05 · Regulatory Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              The New Rules: Faster Discharge, Same Back Office
            </h2>
            <p className="text-sm text-[#5B6B7A] mt-2">
              Regulatory timelines impacting private hospital claims and discharge reconciliation in India.
            </p>
          </div>

          <div className="relative border-l-2 border-[#0B6E5F] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
            {REGULATORY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative space-y-2">
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#0B6E5F] border-4 border-[#F7F5F0]" />
                <span className="text-xs font-mono uppercase text-[#0B6E5F] font-bold block">
                  {item.date}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1F33]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                  {item.description}
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Source: {item.citation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALCULATE YOUR OWN CLAIM GAP (Interactive Calculator Section) */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block mb-2">
              Section 06 · Financial Calculator
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              Calculate Your Hospital's Claim Gap
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Input your actual figures from your billing and bank remittance statements.
            </p>
          </div>

          <ClaimGapCalculator
            onSelectAuditWithResults={(absorbed) => {
              onBookAuditClick(absorbed);
            }}
          />
        </div>
      </section>
    </div>
  );
};
