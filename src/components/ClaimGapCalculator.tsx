import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, RotateCcw, AlertCircle, TrendingUp, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import { formatINR, formatExactINR, formatPercent } from '../utils/formatters';

interface ClaimGapCalculatorProps {
  onSelectAuditWithResults?: (calculatedAbsorbed: number) => void;
}

export const ClaimGapCalculator: React.FC<ClaimGapCalculatorProps> = ({ onSelectAuditWithResults }) => {
  // State with default values matching the worked example from the brief
  const [months, setMonths] = useState<number>(3);
  const [amountClaimed, setAmountClaimed] = useState<number>(30000000); // ₹3 crore
  const [amountSettled, setAmountSettled] = useState<number>(25500000); // ₹2.55 crore
  const [patientCollected, setPatientCollected] = useState<number>(2700000); // ₹27 lakh
  const [avgDays, setAvgDays] = useState<number>(75); // 75 days
  const [borrowingRate, setBorrowingRate] = useState<number>(11); // 11%
  const [recoveryPercent, setRecoveryPercent] = useState<number>(25); // 25% default scenario slider
  const [activeTab, setActiveTab] = useState<'calculator' | 'formula'>('calculator');

  // Input element IDs for accessibility
  const claimedInputId = useId();
  const settledInputId = useId();
  const patientCollectedInputId = useId();
  const avgDaysInputId = useId();
  const borrowingRateInputId = useId();

  // Load worked example from brief
  const loadWorkedExample = () => {
    setMonths(3);
    setAmountClaimed(30000000);
    setAmountSettled(25500000);
    setPatientCollected(2700000);
    setAvgDays(75);
    setBorrowingRate(11);
    setRecoveryPercent(25);
  };

  const resetForm = () => {
    setMonths(3);
    setAmountClaimed(10000000);
    setAmountSettled(8500000);
    setPatientCollected(800000);
    setAvgDays(60);
    setBorrowingRate(10);
    setRecoveryPercent(20);
  };

  // Calculations
  const absorbedAmount = Math.max(0, amountClaimed - amountSettled - patientCollected);
  const absorbedSharePercent = amountClaimed > 0 ? (absorbedAmount / amountClaimed) * 100 : 0;
  const annualizedAbsorbed = months > 0 ? (absorbedAmount * 12) / months : 0;
  const recoveryScenarioAnnual = annualizedAbsorbed * (recoveryPercent / 100);

  // Cost of waiting formula: (A ÷ months) × (D ÷ 30) × E%
  const monthlyClaimed = months > 0 ? amountClaimed / months : 0;
  const waitingMonths = avgDays / 30;
  const costOfWaitingAnnual = monthlyClaimed * waitingMonths * (borrowingRate / 100);

  return (
    <div id="calculator" className="bg-[#FFFFFF] border border-[#E3DED3] rounded-2xl shadow-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-[#0B1F33] text-white p-6 border-b border-[#233547]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider font-mono text-[#2BB59A] font-semibold">
                Interactive Tool · Client-Side Only
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              Claim Gap Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Calculated using your hospital's own statement numbers, not an arbitrary industry percentage.
              Results run in your browser; nothing is stored.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadWorkedExample}
              className="px-3.5 py-2 text-xs font-medium bg-[#16324F] hover:bg-[#1E4369] text-white rounded-lg border border-[#233547] transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#2BB59A]" />
              <span>Load Worked Brief Example</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Inputs Column */}
        <div className="lg:col-span-6 p-6 lg:p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#E3DED3] space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-serif text-base font-semibold text-[#0B1F33]">
              Your Statement Figures
            </h4>
            {/* Period selector */}
            <div className="flex items-center gap-1 bg-[#F7F5F0] p-1 rounded-lg text-xs font-medium">
              <span className="text-slate-500 px-2">Period:</span>
              <button
                type="button"
                onClick={() => setMonths(3)}
                className={`px-3 py-1 rounded transition-colors ${
                  months === 3
                    ? 'bg-white text-[#0B1F33] font-semibold shadow-xs'
                    : 'text-[#5B6B7A] hover:text-[#0B1F33]'
                }`}
              >
                Last 3 Months
              </button>
              <button
                type="button"
                onClick={() => setMonths(6)}
                className={`px-3 py-1 rounded transition-colors ${
                  months === 6
                    ? 'bg-white text-[#0B1F33] font-semibold shadow-xs'
                    : 'text-[#5B6B7A] hover:text-[#0B1F33]'
                }`}
              >
                Last 6 Months
              </button>
            </div>
          </div>

          {/* Input A */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-baseline">
              <label htmlFor={claimedInputId} className="text-xs font-semibold text-[#0B1F33]">
                A. Amount claimed for settled claims (₹)
              </label>
              <span className="text-xs font-mono font-semibold text-[#0B6E5F]">
                {formatINR(amountClaimed)}
              </span>
            </div>
            <p className="text-[11px] text-[#5B6B7A]">
              Claims fully settled in the last {months} months. Exclude still-pending claims so pending amounts aren't counted as cuts.
            </p>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-sm font-mono text-slate-400">₹</span>
              <input
                id={claimedInputId}
                type="number"
                min="0"
                step="100000"
                value={amountClaimed}
                onChange={(e) => setAmountClaimed(Number(e.target.value) || 0)}
                className="w-full pl-8 pr-3 py-2 text-sm font-mono border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F] bg-[#F7F5F0]/30"
              />
            </div>
          </div>

          {/* Input B */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-baseline">
              <label htmlFor={settledInputId} className="text-xs font-semibold text-[#0B1F33]">
                B. Amount actually settled by insurers & schemes (₹)
              </label>
              <span className="text-xs font-mono font-semibold text-[#0B6E5F]">
                {formatINR(amountSettled)}
              </span>
            </div>
            <p className="text-[11px] text-[#5B6B7A]">
              Actual amount remitted into the hospital bank account for those specific claims.
            </p>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-sm font-mono text-slate-400">₹</span>
              <input
                id={settledInputId}
                type="number"
                min="0"
                step="100000"
                value={amountSettled}
                onChange={(e) => setAmountSettled(Number(e.target.value) || 0)}
                className="w-full pl-8 pr-3 py-2 text-sm font-mono border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F] bg-[#F7F5F0]/30"
              />
            </div>
          </div>

          {/* Input C */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-baseline">
              <label htmlFor={patientCollectedInputId} className="text-xs font-semibold text-[#0B1F33]">
                C. Amount collected from patients towards cuts (₹)
              </label>
              <span className="text-xs font-mono font-semibold text-[#E8A33D]">
                {formatINR(patientCollected)}
              </span>
            </div>
            <p className="text-[11px] text-[#5B6B7A]">
              Co-pays, non-payables, room rent differences, and deposit adjustments paid by patients. For schemes like PM-JAY, enter ₹0.
            </p>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-sm font-mono text-slate-400">₹</span>
              <input
                id={patientCollectedInputId}
                type="number"
                min="0"
                step="50000"
                value={patientCollected}
                onChange={(e) => setPatientCollected(Number(e.target.value) || 0)}
                className="w-full pl-8 pr-3 py-2 text-sm font-mono border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F] bg-[#F7F5F0]/30"
              />
            </div>
          </div>

          {/* Inputs D & E in two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <label htmlFor={avgDaysInputId} className="text-xs font-semibold text-[#0B1F33]">
                  D. Avg days to settlement
                </label>
                <span className="text-xs font-mono text-slate-600">{avgDays} days</span>
              </div>
              <input
                id={avgDaysInputId}
                type="number"
                min="1"
                max="365"
                value={avgDays}
                onChange={(e) => setAvgDays(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] bg-[#F7F5F0]/30"
              />
              <span className="text-[10px] text-[#5B6B7A] block">From discharge to bank credit</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <label htmlFor={borrowingRateInputId} className="text-xs font-semibold text-[#0B1F33]">
                  E. Cost of borrowing (%)
                </label>
                <span className="text-xs font-mono text-slate-600">{borrowingRate}%</span>
              </div>
              <input
                id={borrowingRateInputId}
                type="number"
                min="0"
                max="30"
                step="0.5"
                value={borrowingRate}
                onChange={(e) => setBorrowingRate(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] bg-[#F7F5F0]/30"
              />
              <span className="text-[10px] text-[#5B6B7A] block">Annual working capital interest</span>
            </div>
          </div>
        </div>

        {/* Right: Results Column */}
        <div className="lg:col-span-6 p-6 lg:p-8 bg-[#F7F5F0] flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E3DED3]">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#E4572E]">
                Calculated Claim Gap
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Formula: A − B − C
              </span>
            </div>

            {/* Main Result Card */}
            <div className="mt-4 p-5 bg-white border border-[#E3DED3] rounded-xl shadow-xs space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5B6B7A] block">
                Cuts your hospital absorbed
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#E4572E] tracking-tight tabular-nums">
                  {formatExactINR(absorbedAmount)}
                </span>
                <span className="text-sm font-mono font-semibold text-[#E4572E]">
                  ({formatPercent(absorbedSharePercent)} of claimed)
                </span>
              </div>
              <p className="text-xs text-[#5B6B7A] pt-1">
                In this {months}-month period, your hospital absorbed{' '}
                <strong className="text-[#0B1F33]">{formatINR(absorbedAmount)}</strong> in claim cuts.
                That's <strong className="text-[#0B1F33]">{formatPercent(absorbedSharePercent)}</strong> of what you claimed.
              </p>
            </div>

            {/* Annualized & Cost of Waiting Strips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="p-4 bg-white border border-[#E3DED3] rounded-xl">
                <div className="flex items-center gap-1.5 text-xs text-[#5B6B7A] mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#0B6E5F]" />
                  <span className="font-medium">Annualised Run-Rate</span>
                </div>
                <div className="text-xl font-mono font-bold text-[#0B1F33] tabular-nums">
                  {formatINR(annualizedAbsorbed)}
                </div>
                <span className="text-[11px] text-[#5B6B7A] block mt-0.5">
                  About {formatINR(annualizedAbsorbed)} a year at this rate
                </span>
              </div>

              <div className="p-4 bg-white border border-[#E3DED3] rounded-xl">
                <div className="flex items-center gap-1.5 text-xs text-[#5B6B7A] mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#E8A33D]" />
                  <span className="font-medium">Cost of Waiting</span>
                </div>
                <div className="text-xl font-mono font-bold text-[#0B1F33] tabular-nums">
                  {formatINR(costOfWaitingAnnual)}
                </div>
                <span className="text-[11px] text-[#5B6B7A] block mt-0.5">
                  Interest tied up in pending claims
                </span>
              </div>
            </div>

            {/* Recovery Scenario Slider */}
            <div className="mt-5 p-5 bg-[#E6F3F0]/60 border border-[#0B6E5F]/20 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#0B6E5F] uppercase tracking-wider block">
                    Recovery Scenario ({recoveryPercent}%)
                  </span>
                  <span className="text-[11px] text-[#5B6B7A]">
                    Illustrative scenario modeling — never a guaranteed promise
                  </span>
                </div>
                <span className="text-lg font-mono font-bold text-[#0B6E5F] tabular-nums">
                  {formatINR(recoveryScenarioAnnual)} / yr
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="40"
                step="5"
                value={recoveryPercent}
                onChange={(e) => setRecoveryPercent(Number(e.target.value))}
                className="w-full accent-[#0B6E5F] cursor-pointer"
              />

              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>10% conservative</span>
                <span>25% baseline</span>
                <span>40% upper bound</span>
              </div>

              <p className="text-xs text-[#0B6E5F] font-medium pt-1">
                Scenario: if your hospital recovered {recoveryPercent}% of absorbed cuts, you would regain{' '}
                <strong>{formatINR(recoveryScenarioAnnual)}</strong> a year.
              </p>
            </div>
          </div>

          {/* Audit CTA Box */}
          <div className="pt-4 border-t border-[#E3DED3]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                  Want us to calculate this precisely from your statements?
                </h5>
                <p className="text-[11px] text-[#5B6B7A]">
                  We reconcile your last 6 months of billing and remittance dumps for free.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onSelectAuditWithResults) {
                    onSelectAuditWithResults(absorbedAmount);
                  } else {
                    const el = document.getElementById('audit-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Book a free claim audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
