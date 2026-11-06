import React, { useState } from 'react';
import { WHO_PAYS_DATA, CutClassification } from '../data/content';
import { ShieldAlert, CheckCircle, HelpCircle, ArrowRight, Info, AlertTriangle } from 'lucide-react';

export const WhoPaysTable: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hospital' | 'patient'>('all');
  const [selectedCut, setSelectedCut] = useState<CutClassification | null>(WHO_PAYS_DATA[2]); // Default to tariff excess

  const filteredData = filter === 'all'
    ? WHO_PAYS_DATA
    : WHO_PAYS_DATA.filter((item) => {
        if (filter === 'hospital') return item.isHospitalLoss;
        if (filter === 'patient') return !item.isHospitalLoss && item.category === 'patient';
        return true;
      });

  return (
    <div className="bg-[#FFFFFF] border border-[#E3DED3] rounded-2xl shadow-xl overflow-hidden font-sans">
      {/* Table Header */}
      <div className="p-6 bg-[#0B1F33] text-white border-b border-[#233547]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-semibold block mb-1">
              Interactive Classification Matrix
            </span>
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              Who Pays Each Kind of Insurance Cut?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Not every insurance cut is your loss. Some are paid by patients at discharge.
              DeepClaim separates those and focuses only on what the hospital absorbs.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-[#16324F] p-1 rounded-lg text-xs self-start sm:self-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'all'
                  ? 'bg-white text-[#0B1F33] font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Types ({WHO_PAYS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('hospital')}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'hospital'
                  ? 'bg-[#E4572E] text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Hospital Absorbed
            </button>
            <button
              onClick={() => setFilter('patient')}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'patient'
                  ? 'bg-[#E8A33D] text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Patient Paid
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Table on Left, Deep Dive on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E3DED3]">
        {/* Left Column: The Interactive Table (7 cols) */}
        <div className="lg:col-span-7 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F7F5F0] border-b border-[#E3DED3] text-[#5B6B7A] font-mono uppercase text-[11px]">
                <th className="py-3 px-4 font-semibold">Type of Cut</th>
                <th className="py-3 px-4 font-semibold">Who Usually Bears It</th>
                <th className="py-3 px-4 font-semibold text-right">Hospital Loss?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E3DED3]">
              {filteredData.map((item) => {
                const isSelected = selectedCut?.id === item.id;
                return (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedCut(item)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#E6F3F0]'
                        : item.isHospitalLoss
                        ? 'hover:bg-[#FDEDE9]/40'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-start gap-2">
                        <span
                          className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                            item.isHospitalLoss ? 'bg-[#E4572E]' : 'bg-[#E8A33D]'
                          }`}
                        />
                        <div>
                          <div className="font-semibold text-[#0B1F33] leading-snug">
                            {item.typeOfCut}
                          </div>
                          <div className="text-[11px] text-[#5B6B7A] mt-0.5">
                            {item.exampleAmount}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[11px] ${
                          item.isHospitalLoss
                            ? 'bg-[#FDEDE9] text-[#E4572E] font-semibold border border-[#E4572E]/20'
                            : 'bg-[#FEF6EB] text-[#E8A33D] font-semibold border border-[#E8A33D]/20'
                        }`}
                      >
                        {item.whoBears.split('.')[0]}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {item.isHospitalLoss ? (
                        <span className="font-mono text-xs font-bold text-[#E4572E]">
                          YES (Absorbed)
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-slate-500">
                          NO (Patient)
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Right Column: Detail & DeepClaim Action Card (5 cols) */}
        <div className="lg:col-span-5 p-6 bg-[#F7F5F0] flex flex-col justify-between space-y-4">
          {selectedCut ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    selectedCut.isHospitalLoss
                      ? 'bg-[#FDEDE9] text-[#E4572E]'
                      : 'bg-[#FEF6EB] text-[#E8A33D]'
                  }`}
                >
                  {selectedCut.isHospitalLoss ? 'Hospital Absorbed' : 'Patient Borne Cut'}
                </span>
                {selectedCut.sourceNote && (
                  <span className="text-[11px] text-slate-500 font-mono">
                    Source: {selectedCut.sourceNote}
                  </span>
                )}
              </div>

              <h4 className="font-serif text-lg font-bold text-[#0B1F33] leading-tight">
                {selectedCut.typeOfCut}
              </h4>

              <div className="p-4 bg-white rounded-xl border border-[#E3DED3] space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block">
                  Commercial & Contractual Reality
                </span>
                <p className="text-xs text-[#0B1F33] leading-relaxed">
                  {selectedCut.whoBears}
                </p>
              </div>

              <div className="p-4 bg-[#E6F3F0] rounded-xl border border-[#0B6E5F]/30 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B6E5F]">
                  <CheckCircle className="w-4 h-4 text-[#0B6E5F]" />
                  <span>What DeepClaim Does</span>
                </div>
                <p className="text-xs text-[#0B1F33] font-medium leading-relaxed">
                  {selectedCut.whatDeepClaimDoes}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[#5B6B7A] text-xs">
              Select any cut type from the left table to explore contractual liability and DeepClaim's automated handling.
            </div>
          )}

          <div className="p-3 bg-white rounded-lg border border-[#E3DED3] text-[11px] text-[#5B6B7A]">
            <p>
              <strong className="text-[#0B1F33]">Industry Fact:</strong> IRDAI's ₹15,100 crore 'disallowed' figure is not the hospital's loss alone—it blends patient-paid deductibles with hospital-absorbed write-offs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
