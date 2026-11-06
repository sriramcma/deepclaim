import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { formatINR, formatExactINR } from '../utils/formatters';

interface BillItem {
  id: string;
  item: string;
  billed: number;
  approved: number;
  cut: number;
  type: 'paid' | 'patient_cut' | 'hospital_absorbed';
  statusLabel: string;
  whoPays: string;
  note: string;
  colorHex: string;
}

const SAMPLE_BILL_ITEMS: BillItem[] = [
  {
    id: '1',
    item: 'Total Knee Joint Modular Implant (Titanium)',
    billed: 115000,
    approved: 115000,
    cut: 0,
    type: 'paid',
    statusLabel: 'Approved in Full',
    whoPays: 'Insurer settled',
    note: 'Matches agreed empanelled schedule rate',
    colorHex: '#0B6E5F' // Ledger Teal
  },
  {
    id: '2',
    item: 'Surgeon Fee & Intra-operative Navigation',
    billed: 65000,
    approved: 65000,
    cut: 0,
    type: 'paid',
    statusLabel: 'Approved in Full',
    whoPays: 'Insurer settled',
    note: 'NABH tertiary schedule verified',
    colorHex: '#0B6E5F' // Ledger Teal
  },
  {
    id: '3',
    item: 'Personal Protective Wear & Sanitization Pack',
    billed: 4200,
    approved: 0,
    cut: 4200,
    type: 'patient_cut',
    statusLabel: 'Policy Non-Payable',
    whoPays: 'Patient paid at discharge',
    note: 'Policy clause 4.2 excludes standard consumable packs',
    colorHex: '#E8A33D' // Signal Amber
  },
  {
    id: '4',
    item: 'Deluxe Room Differential & Co-Pay',
    billed: 16500,
    approved: 0,
    cut: 16500,
    type: 'patient_cut',
    statusLabel: 'Room Rent Proportionate',
    whoPays: 'Patient paid at discharge',
    note: 'Patient chose room above policy eligibility band',
    colorHex: '#E8A33D' // Signal Amber
  },
  {
    id: '5',
    item: 'Anaesthesia & OT Monitoring Packaged Cap',
    billed: 38000,
    approved: 22000,
    cut: 16000,
    type: 'hospital_absorbed',
    statusLabel: 'Tariff Ceiling Deduction',
    whoPays: 'Hospital absorbs (Cannot pass to patient)',
    note: 'Hospital exceeded tariff schedule; network clause forbids patient billing',
    colorHex: '#E4572E' // Leak Coral
  },
  {
    id: '6',
    item: 'Post-Discharge Short Settlement Remittance',
    billed: 45000,
    approved: 26500,
    cut: 18500,
    type: 'hospital_absorbed',
    statusLabel: 'Post-Discharge Deduction',
    whoPays: 'Hospital absorbs (Patient already left)',
    note: 'TPA re-audited and deducted ₹18,500 post-discharge without notice',
    colorHex: '#E4572E' // Leak Coral
  },
  {
    id: '7',
    item: 'Physiotherapy & CPM Protocol Package',
    billed: 12000,
    approved: 6000,
    cut: 6000,
    type: 'hospital_absorbed',
    statusLabel: 'Scheme/TPA Disallowance',
    whoPays: 'Hospital absorbs (Appealable with clinical notes)',
    note: 'Disallowed for lack of concurrent clinical notes; recoverable on appeal',
    colorHex: '#E4572E' // Leak Coral
  }
];

export const ClaimBillVisual: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hospital_absorbed' | 'paid' | 'patient_cut'>('all');
  const [highlightStep, setHighlightStep] = useState<number>(3); // 1 = paid, 2 = patient, 3 = hospital
  const [isScanning, setIsScanning] = useState<boolean>(false);

  // Totals calculation
  const totalBilled = SAMPLE_BILL_ITEMS.reduce((acc, item) => acc + item.billed, 0);
  const totalPaid = SAMPLE_BILL_ITEMS.filter((i) => i.type === 'paid').reduce((acc, i) => acc + i.approved, 0) +
    SAMPLE_BILL_ITEMS.filter((i) => i.type === 'hospital_absorbed').reduce((acc, i) => acc + i.approved, 0);
  const totalPatientPaid = SAMPLE_BILL_ITEMS.filter((i) => i.type === 'patient_cut').reduce((acc, i) => acc + i.cut, 0);
  const totalHospitalAbsorbed = SAMPLE_BILL_ITEMS.filter((i) => i.type === 'hospital_absorbed').reduce((acc, i) => acc + i.cut, 0);

  const runScanSimulation = () => {
    setIsScanning(true);
    setHighlightStep(1);
    setTimeout(() => setHighlightStep(2), 700);
    setTimeout(() => {
      setHighlightStep(3);
      setIsScanning(false);
    }, 1400);
  };

  const displayedItems = activeFilter === 'all'
    ? SAMPLE_BILL_ITEMS
    : SAMPLE_BILL_ITEMS.filter((item) => item.type === activeFilter);

  return (
    <div className="bg-[#FFFFFF] border border-[#E3DED3] rounded-2xl shadow-xl overflow-hidden font-sans">
      {/* Bill Header Bar */}
      <div className="bg-[#0B1F33] text-white px-5 py-4 border-b border-[#233547] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-mono text-[#2BB59A] font-semibold">
              Live Claim Ledger Visualizer
            </span>
            <span className="text-[11px] font-mono text-slate-400">· Claim #IP-26-89412</span>
          </div>
          <h4 className="font-serif text-lg font-semibold text-white tracking-tight mt-0.5">
            Total Knee Arthroplasty (Unilateral)
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={runScanSimulation}
            disabled={isScanning}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
            title="Simulate DeepClaim audit scan"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span>Re-run Audit</span>
          </button>
        </div>
      </div>

      {/* Hospital & Claim Details Strip */}
      <div className="bg-[#F7F5F0] px-5 py-2.5 border-b border-[#E3DED3] text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[#5B6B7A]">
        <div>
          <span className="block text-[10px] uppercase text-slate-500 font-sans">Payer</span>
          <span className="font-medium text-[#0B1F33]">Leading Private Insurer</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-slate-500 font-sans">Type</span>
          <span className="font-medium text-[#0B1F33]">Cashless Inpatient</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-slate-500 font-sans">Total Billed</span>
          <span className="font-semibold text-[#0B1F33]">{formatExactINR(totalBilled)}</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-slate-500 font-sans">Settled By Payer</span>
          <span className="font-semibold text-[#0B6E5F]">{formatExactINR(totalPaid)}</span>
        </div>
      </div>

      {/* Legend & Filter Controls */}
      <div className="px-5 py-3 border-b border-[#E3DED3] bg-white flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-slate-500 font-medium">Color classification:</span>
          <div className="flex items-center gap-1.5 text-xs text-[#0B6E5F] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B6E5F]" />
            <span>Paid by Payer</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#E8A33D] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
            <span>Patient-Paid Cut</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#E4572E] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4572E]" />
            <span>Hospital-Absorbed Cut</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 bg-[#F7F5F0] p-1 rounded-lg">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeFilter === 'all'
                ? 'bg-white text-[#0B1F33] font-semibold shadow-xs'
                : 'text-[#5B6B7A] hover:text-[#0B1F33]'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setActiveFilter('hospital_absorbed')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeFilter === 'hospital_absorbed'
                ? 'bg-[#E4572E] text-white font-semibold shadow-xs'
                : 'text-[#E4572E] hover:bg-red-50'
            }`}
          >
            Hospital Absorbed Only
          </button>
        </div>
      </div>

      {/* Bill Line Items Table */}
      <div className="divide-y divide-[#E3DED3] max-h-[380px] overflow-y-auto">
        {displayedItems.map((item) => {
          const isCoral = item.type === 'hospital_absorbed';
          const isAmber = item.type === 'patient_cut';
          const isTeal = item.type === 'paid';

          return (
            <div
              key={item.id}
              className={`p-4 transition-all duration-300 ${
                isCoral
                  ? 'bg-[#FDEDE9]/40 hover:bg-[#FDEDE9]/70'
                  : isAmber
                  ? 'bg-[#FEF6EB]/40 hover:bg-[#FEF6EB]/70'
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 max-w-[65%]">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isTeal ? 'bg-[#0B6E5F]' : isAmber ? 'bg-[#E8A33D]' : 'bg-[#E4572E]'
                      }`}
                    />
                    <h5 className="text-xs font-semibold text-[#0B1F33] leading-snug">
                      {item.item}
                    </h5>
                  </div>
                  <p className="text-[11px] text-[#5B6B7A] pl-4">{item.note}</p>
                  <div className="text-[11px] pl-4 flex items-center gap-2 font-mono">
                    <span className="text-slate-500">Who bears:</span>
                    <span
                      className={`font-semibold ${
                        isCoral ? 'text-[#E4572E]' : isAmber ? 'text-[#E8A33D]' : 'text-[#0B6E5F]'
                      }`}
                    >
                      {item.whoPays}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono text-slate-500 line-through">
                    {formatExactINR(item.billed)}
                  </div>
                  {item.cut > 0 ? (
                    <div
                      className={`text-sm font-mono font-bold ${
                        isCoral ? 'text-[#E4572E]' : 'text-[#E8A33D]'
                      }`}
                    >
                      Cut: -{formatExactINR(item.cut)}
                    </div>
                  ) : (
                    <div className="text-sm font-mono font-bold text-[#0B6E5F]">
                      Settled: {formatExactINR(item.approved)}
                    </div>
                  )}
                  <span
                    className={`inline-block mt-0.5 text-[10px] font-medium px-2 py-0.5 rounded ${
                      isCoral
                        ? 'bg-[#FDEDE9] text-[#E4572E] border border-[#E4572E]/20'
                        : isAmber
                        ? 'bg-[#FEF6EB] text-[#E8A33D] border border-[#E8A33D]/20'
                        : 'bg-[#E6F3F0] text-[#0B6E5F] border border-[#0B6E5F]/20'
                    }`}
                  >
                    {item.statusLabel}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Signature Counter at the Bottom */}
      <div className="bg-[#0B1F33] text-white p-4 border-t border-[#233547]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E4572E]" />
              <span className="text-xs uppercase tracking-wider font-mono text-[#E4572E] font-bold">
                Hospital Absorbed Loss Counter
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Only the coral lines add up to your hospital's unrecovered loss.
            </p>
          </div>
          <div className="text-right bg-[#071524] px-4 py-2 rounded-xl border border-[#233547]">
            <span className="block text-[10px] font-mono uppercase text-slate-400">Absorbed on this claim</span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-[#E4572E] tabular-nums">
              {formatExactINR(totalHospitalAbsorbed)}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F5F0] px-4 py-1.5 text-center text-[10px] text-[#5B6B7A] border-t border-[#E3DED3] italic">
        Illustrative claim view · DeepClaim separates patient co-pays ({formatExactINR(totalPatientPaid)}) from hospital loss ({formatExactINR(totalHospitalAbsorbed)})
      </div>
    </div>
  );
};
