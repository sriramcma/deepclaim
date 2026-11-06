import React from 'react';
import { Database, FileSpreadsheet, Building2, CreditCard, Layers, ArrowRight, MessageSquare, CheckSquare, Sparkles, Shield, BarChart3 } from 'lucide-react';

export const DataFlowDiagram: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] border border-[#E3DED3] rounded-2xl p-6 sm:p-8 shadow-lg font-sans">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-semibold block mb-1">
          Zero Software Disruption
        </span>
        <h3 className="font-serif text-2xl font-bold text-[#0B1F33]">
          How Data Flows Through DeepClaim
        </h3>
        <p className="text-xs sm:text-sm text-[#5B6B7A] mt-1">
          No new software for your billing desk. We read the reports and dumps your hospital already exports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Input Sources (4 cols) */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#5B6B7A] pb-1 border-b border-[#E3DED3] flex justify-between">
            <span>Hospital Data Sources</span>
            <span className="text-[#0B6E5F]">Read-Only Exports</span>
          </div>

          <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E3DED3] flex items-center justify-center text-[#0B6E5F] shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0B1F33]">Hospital HIS & Billing Exports</div>
              <div className="text-[11px] text-[#5B6B7A]">Discharge bills, itemized charges</div>
            </div>
          </div>

          <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E3DED3] flex items-center justify-center text-[#0B6E5F] shrink-0">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0B1F33]">TPA & Scheme Statements</div>
              <div className="text-[11px] text-[#5B6B7A]">Approval sheets, deductions, PM-JAY</div>
            </div>
          </div>

          <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E3DED3] flex items-center justify-center text-[#0B6E5F] shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0B1F33]">Bank Remittances & Credits</div>
              <div className="text-[11px] text-[#5B6B7A]">Actual payment UTRs and settlement dates</div>
            </div>
          </div>

          <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E3DED3] flex items-center justify-center text-[#0B6E5F] shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0B1F33]">Empanelled Tariffs & Cost Sheets</div>
              <div className="text-[11px] text-[#5B6B7A]">Agreed rate cards & departmental costs</div>
            </div>
          </div>
        </div>

        {/* Center: DeepClaim AI Engine (4 cols) */}
        <div className="md:col-span-4 p-5 bg-[#0B1F33] text-white rounded-2xl border border-[#233547] shadow-xl text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16324F] text-[#2BB59A] text-[10px] font-mono uppercase tracking-wider font-semibold">
            <Shield className="w-3 h-3" />
            <span>Hosted In India · DPDP Compliant</span>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-[#0B6E5F] mx-auto flex items-center justify-center shadow-md">
            <Sparkles className="w-7 h-7 text-white" />
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-white">
              DeepClaim Engine
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Deterministic reconciliation matching 100% of claims to bills and empanelment rate schedules.
            </p>
          </div>

          <div className="text-left text-[11px] space-y-2 bg-[#071524] p-3 rounded-xl border border-[#233547] font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BB59A]" />
              <span>Pseudonymise patient identifiers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BB59A]" />
              <span>Separate patient-paid vs hospital loss</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BB59A]" />
              <span>Audit tariff ceilings prior to dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BB59A]" />
              <span>Draft contract-substantiated appeals</span>
            </div>
          </div>
        </div>

        {/* Right: Hospital Outputs (4 cols) */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#5B6B7A] pb-1 border-b border-[#E3DED3] flex justify-between">
            <span>Actionable Outputs</span>
            <span className="text-[#0B6E5F]">Human Approval</span>
          </div>

          <div className="p-3 bg-[#E6F3F0] rounded-xl border border-[#0B6E5F]/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#0B6E5F]/30 flex items-center justify-center text-[#0B6E5F] shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0B1F33]">WhatsApp Plain Answers</div>
              <div className="text-[11px] text-[#5B6B7A]">Voice or text in English, Tamil, Hindi</div>
            </div>
          </div>

          <div className="p-3 bg-[#E6F3F0] rounded-xl border border-[#0B6E5F]/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#0B6E5F]/30 flex items-center justify-center text-[#0B6E5F] shrink-0">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0B1F33]">Daily TPA Desk Worklist</div>
              <div className="text-[11px] text-[#5B6B7A]">Ranked short settlements with appeal drafts</div>
            </div>
          </div>

          <div className="p-3 bg-[#E6F3F0] rounded-xl border border-[#0B6E5F]/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#0B6E5F]/30 flex items-center justify-center text-[#0B6E5F] shrink-0">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0B1F33]">Annual Renewal Evidence Packs</div>
              <div className="text-[11px] text-[#5B6B7A]">Loss-making procedures & volume leverage</div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E3DED3] text-[11px] text-center text-[#5B6B7A]">
            <span className="font-semibold text-[#0B1F33]">Audit Trail:</span> Every output links back to the source bill.
          </div>
        </div>
      </div>
    </div>
  );
};
