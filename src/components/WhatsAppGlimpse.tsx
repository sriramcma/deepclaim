import React, { useState } from 'react';
import { Play, Pause, FileText, CheckCircle2, ChevronRight, X, ExternalLink, ShieldAlert, Sparkles, Volume2 } from 'lucide-react';
import { WHATSAPP_DEMOS } from '../data/content';
import { formatExactINR } from '../utils/formatters';

interface AppealItem {
  id: string;
  claimId: string;
  patientInitials: string;
  procedure: string;
  payer: string;
  disallowedAmount: number;
  reason: string;
  rebuttalGrounds: string;
  evidenceAttached: string;
}

const SAMPLE_APPEALS: AppealItem[] = [
  {
    id: 'app-1',
    claimId: 'CLM-78291',
    patientInitials: 'R. K.',
    procedure: 'Laparoscopic Cholecystectomy',
    payer: 'Insurer Alpha (TPA 1)',
    disallowedAmount: 24500,
    reason: 'Tariff Capping Overcharge',
    rebuttalGrounds: 'Schedule Annexure B Clause 3.1 excludes emergency conversion from general package ceiling. Full surgical notes attached.',
    evidenceAttached: 'OT Note, Pre-auth Auth #PA-901, Empanelment Tariff Schedule 2025'
  },
  {
    id: 'app-2',
    claimId: 'CLM-78403',
    patientInitials: 'S. M.',
    procedure: 'Total Hip Replacement',
    payer: 'Insurer Beta (TPA 2)',
    disallowedAmount: 32000,
    reason: 'Post-discharge short remittance',
    rebuttalGrounds: 'Final discharge authorization issued for ₹2,45,000 on 14-Oct. Remittance received for ₹2,13,000 with zero disallowance query raised within 72 hrs.',
    evidenceAttached: 'Final Discharge Auth Sheet, Bank Remittance Advice #UTR-9912'
  },
  {
    id: 'app-3',
    claimId: 'CLM-78519',
    patientInitials: 'A. P.',
    procedure: 'Coronary Angioplasty (Single Stent)',
    payer: 'Government Health Scheme',
    disallowedAmount: 18000,
    reason: 'Code standardisation deduction',
    rebuttalGrounds: 'Secondary post-dilatation balloon coded under procedural standard PM-JAY tariff line 14.8. Validated by treating cardiologist.',
    evidenceAttached: 'Angiography CD log, Stent Barcode Verification, Discharge Summary'
  }
];

export const WhatsAppGlimpse: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<'en' | 'ta' | 'hi'>('en');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioSeconds, setAudioSeconds] = useState<number>(0);
  const [showBillsModal, setShowBillsModal] = useState<boolean>(false);

  const currentCopy = WHATSAPP_DEMOS[selectedLang];

  const toggleAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      setAudioSeconds(0);
    } else {
      setIsPlayingAudio(true);
      let sec = 0;
      const interval = setInterval(() => {
        sec += 1;
        setAudioSeconds(sec);
        if (sec >= 6) {
          clearInterval(interval);
          setIsPlayingAudio(false);
          setAudioSeconds(0);
        }
      }, 1000);
    }
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E3DED3] rounded-2xl shadow-xl overflow-hidden font-sans">
      {/* Top Banner with Language Selector */}
      <div className="bg-[#0B1F33] text-white px-5 py-3.5 border-b border-[#233547] flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-[11px] uppercase tracking-wider font-mono text-[#2BB59A] font-semibold block">
            Plain-Language Interface
          </span>
          <h4 className="font-serif text-base font-semibold text-white">
            Ask DeepClaim on WhatsApp
          </h4>
        </div>

        {/* Language Tabs */}
        <div className="flex items-center gap-1 bg-[#16324F] p-1 rounded-lg text-xs">
          <button
            onClick={() => setSelectedLang('en')}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedLang === 'en'
                ? 'bg-white text-[#0B1F33] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setSelectedLang('ta')}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedLang === 'ta'
                ? 'bg-white text-[#0B1F33] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            தமிழ் (Tamil)
          </button>
          <button
            onClick={() => setSelectedLang('hi')}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedLang === 'hi'
                ? 'bg-white text-[#0B1F33] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            हिंदी (Hindi)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* WhatsApp Chat Frame (7 cols) */}
        <div className="lg:col-span-7 bg-[#EFEAE2] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#E3DED3] flex flex-col justify-between min-h-[460px]">
          {/* Chat Window Header */}
          <div className="bg-[#075E54] text-white -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 px-4 py-3 flex items-center justify-between shadow-xs mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0B6E5F] border-2 border-white/40 flex items-center justify-center text-white font-serif font-bold text-sm">
                DC
              </div>
              <div>
                <div className="text-sm font-semibold flex items-center gap-1.5 leading-tight">
                  <span>DeepClaim Hospital Agent</span>
                  <span className="w-2 h-2 rounded-full bg-[#2BB59A]" title="Active verified service" />
                </div>
                <span className="text-[11px] text-emerald-100 block">Verified Business · End-to-end encrypted</span>
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-200">
              Today
            </div>
          </div>

          {/* Chat Message Bubble: Owner */}
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="max-w-[85%] sm:max-w-[75%] bg-[#E7FFDB] text-[#0B1F33] rounded-2xl rounded-tr-xs p-3.5 shadow-xs border border-[#D0EDBC]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B6E5F]">
                    Hospital MD / Finance Head
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">09:14 AM</span>
                </div>

                {/* Voice Note Simulation Bar */}
                <div className="flex items-center gap-3 bg-white/70 p-2 rounded-xl mb-2">
                  <button
                    onClick={toggleAudio}
                    className="w-8 h-8 rounded-full bg-[#075E54] hover:bg-[#0B6E5F] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer"
                  >
                    {isPlayingAudio ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5 ml-0.5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 h-4">
                      {[40, 70, 90, 60, 30, 80, 100, 50, 40, 75, 85, 30, 60, 40].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-1 rounded-full transition-colors ${
                            isPlayingAudio && i < (audioSeconds * 2.5)
                              ? 'bg-[#075E54]'
                              : 'bg-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>{isPlayingAudio ? `0:0${audioSeconds}` : 'Voice Note'}</span>
                      <span>{currentCopy.ownerAudioDuration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed font-sans font-medium text-[#0B1F33]">
                  "{currentCopy.ownerMessage}"
                </p>
              </div>
            </div>

            {/* Chat Message Bubble: DeepClaim Agent */}
            <div className="flex justify-start">
              <div className="max-w-[90%] sm:max-w-[85%] bg-white text-[#0B1F33] rounded-2xl rounded-tl-xs p-4 shadow-sm border border-[#E3DED3]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0B6E5F]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B6E5F]">
                      DeepClaim Agent
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">09:14 AM</span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-[#0B1F33] font-medium">
                  {currentCopy.deepclaimReply}
                </p>

                {/* Interactive Action Button inside chat */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setShowBillsModal(true)}
                    className="w-full flex items-center justify-between px-3.5 py-2 bg-[#E6F3F0] hover:bg-[#D4EBE6] text-[#0B6E5F] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Tap to see the 38 bills & 22 appeal drafts</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="mt-2 text-[10px] text-slate-400 italic">
                  {currentCopy.tagline}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500 pt-4">
            Available 24/7 on WhatsApp for hospital leadership · English, Tamil, and Hindi
          </div>
        </div>

        {/* Right Column: Procedure Margin Insight Card (5 cols) */}
        <div className="lg:col-span-5 p-6 bg-[#FFFFFF] flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-xs uppercase tracking-wider font-mono text-[#0B6E5F] font-bold">
                Procedure Margin View
              </span>
              <span className="text-[10px] font-mono text-slate-400">· Illustrative</span>
            </div>
            <h4 className="font-serif text-xl font-bold text-[#0B1F33] tracking-tight">
              Knee Replacement Margin by Payer
            </h4>
            <p className="text-xs text-[#5B6B7A] mt-1">
              Using the hospital's actual operational and clinical costs, DeepClaim calculates net margin per procedure across payers.
            </p>

            {/* Margin Comparison Bars */}
            <div className="space-y-4 mt-6">
              {/* Insurer A: Negative Margin */}
              <div className="p-3.5 rounded-xl border border-red-200 bg-[#FDEDE9]/40 space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-bold text-[#0B1F33] block">Insurer A (TPA Schedule)</span>
                    <span className="text-[11px] text-[#5B6B7A]">Fixed package cap vs actual OT & implant costs</span>
                  </div>
                  <span className="text-base font-mono font-bold text-[#E4572E] tabular-nums">
                    −6.0% Margin
                  </span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#E4572E] h-2 rounded-full" style={{ width: '35%' }} />
                </div>
                <div className="text-[10px] text-[#E4572E] font-medium">
                  Losing ₹9,200 per surgery after factoring post-discharge deductions
                </div>
              </div>

              {/* Insurer B: Moderate Margin */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-bold text-[#0B1F33] block">Insurer B (Private Payer)</span>
                    <span className="text-[11px] text-[#5B6B7A]">Updated tariff schedule with separate implant billing</span>
                  </div>
                  <span className="text-base font-mono font-bold text-[#0B6E5F] tabular-nums">
                    +14.0% Margin
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#0B6E5F] h-2 rounded-full" style={{ width: '65%' }} />
                </div>
                <div className="text-[10px] text-[#5B6B7A]">
                  Healthy contribution margin; steady 38-day settlement cycle
                </div>
              </div>

              {/* Cash: Benchmark Margin */}
              <div className="p-3.5 rounded-xl border border-emerald-200 bg-[#E6F3F0]/40 space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-bold text-[#0B1F33] block">Cash / Self-Pay Benchmark</span>
                    <span className="text-[11px] text-[#5B6B7A]">Direct billing without third-party deductions</span>
                  </div>
                  <span className="text-base font-mono font-bold text-[#0B6E5F] tabular-nums">
                    +22.0% Margin
                  </span>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#0B6E5F] h-2 rounded-full" style={{ width: '85%' }} />
                </div>
                <div className="text-[10px] text-[#0B6E5F] font-medium">
                  Zero deduction risk, 100% upfront realization at discharge
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] text-xs text-[#5B6B7A]">
            <p>
              <strong className="text-[#0B1F33]">Walk into renewals with evidence:</strong> Hospital CEOs use these exact margin comparisons during annual tariff renegotiations.
            </p>
          </div>
        </div>
      </div>

      {/* Drafted Appeals Modal Simulator */}
      {showBillsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-[#E3DED3]">
            {/* Modal Header */}
            <div className="bg-[#0B1F33] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#2BB59A] uppercase tracking-wider block">
                  Reconciliation Worklist & Appeals
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  38 Billed Claims · 22 Appeal Drafts Prepared
                </h4>
              </div>
              <button
                onClick={() => setShowBillsModal(false)}
                className="w-8 h-8 rounded-lg bg-[#16324F] hover:bg-[#233547] flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 overflow-y-auto space-y-4">
              <p className="text-xs text-[#5B6B7A]">
                DeepClaim does not contact insurers automatically. We flag contractually recoverable disallowances and prepare substantiated draft appeals for your TPA desk team to review and dispatch.
              </p>

              <div className="space-y-3">
                {SAMPLE_APPEALS.map((app) => (
                  <div key={app.id} className="p-4 border border-[#E3DED3] rounded-xl bg-[#F7F5F0]/40 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-[#0B1F33]">
                            {app.claimId} ({app.patientInitials})
                          </span>
                          <span className="text-[11px] text-slate-500">· {app.procedure}</span>
                        </div>
                        <div className="text-xs text-slate-600 font-medium">{app.payer}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-[#E4572E]">
                          {formatExactINR(app.disallowedAmount)} Cut
                        </span>
                        <span className="block text-[10px] text-slate-400 font-sans">{app.reason}</span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-[#E3DED3] text-xs space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#0B6E5F] block font-mono">
                        Drafted Rebuttal Grounds
                      </span>
                      <p className="text-[#0B1F33] leading-relaxed text-[11px]">
                        {app.rebuttalGrounds}
                      </p>
                      <div className="text-[10px] text-slate-500 pt-1 font-mono">
                        Attachments: {app.evidenceAttached}
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <span className="text-[11px] text-[#0B6E5F] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Ready for Desk Sign-Off
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#F7F5F0] border-t border-[#E3DED3] flex justify-between items-center text-xs">
              <span className="text-[#5B6B7A] text-[11px]">
                Showing 3 of 22 drafted appeals (Illustrative preview)
              </span>
              <button
                onClick={() => setShowBillsModal(false)}
                className="px-4 py-2 bg-[#0B1F33] hover:bg-[#16324F] text-white font-medium rounded-lg transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
