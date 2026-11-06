import React from 'react';
import { X, Shield, Lock, FileCheck, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'security' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-[#E3DED3]">
        {/* Modal Header */}
        <div className="bg-[#0B1F33] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#2BB59A]" />
            <h4 className="font-serif text-lg font-bold text-white">
              {type === 'privacy' && 'Privacy Policy & Data Sovereignty'}
              {type === 'terms' && 'Terms of Service & Hospital DPA'}
              {type === 'security' && 'Security Architecture Overview'}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#16324F] hover:bg-[#233547] flex items-center justify-center text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-[#5B6B7A] leading-relaxed">
          {type === 'privacy' && (
            <div className="space-y-4">
              <div className="p-3 bg-[#E6F3F0] rounded-xl text-[#0B6E5F] font-semibold text-[11px] font-mono">
                Compliant with Digital Personal Data Protection (DPDP) Act 2023 & Indian Health Data Norms
              </div>
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">1. Sovereign Indian Hosting</h5>
              <p>
                DeepClaim.AI hosts and processes 100% of hospital and claim data on enterprise-grade cloud facilities located exclusively in Mumbai and Pune, India. No clinical or financial data ever traverses international boundaries.
              </p>
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">2. Patient Identifier Pseudonymisation</h5>
              <p>
                Patient Names, Aadhaar numbers, and personal identifiers from discharge bills are pseudonymised using cryptographic salting on arrival into the DeepClaim processing queue. Only synthetic patient initials (e.g. "R. K.") are visible in working analysis decks.
              </p>
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">3. Read-Only Ingestion</h5>
              <p>
                DeepClaim functions strictly on read-only exports (CSV, XLSX, PDF billing summaries). DeepClaim never requests write permissions or database modification rights to your primary Hospital Information System (HIS).
              </p>
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">4. Non-Disclosure & Third-Party Protection</h5>
              <p>
                DeepClaim acts exclusively on behalf of the empanelled hospital. Under no circumstances is hospital-specific tariff data, financial performance, or settlement cuts disclosed to health insurance companies or external aggregators.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-4">
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">1. Scope of the Free Claim Audit</h5>
              <p>
                The DeepClaim Initial Claim Audit is provided on a complimentary, confidential basis to accredited private hospitals. Participation in the audit entails zero financial obligation or long-term software commitment.
              </p>
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">2. Human Sign-Off and Agency</h5>
              <p>
                DeepClaim is an assistive intelligence agent. All appeal drafts, tariff rebuttal letters, and communication dispatched to Third Party Administrators (TPAs) or insurance underwriters require explicit review and authorized sign-off by hospital personnel.
              </p>
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">3. Mutual Data Processing Agreement (DPA)</h5>
              <p>
                Prior to ingestion of raw export dumps, DeepClaim executes a bilateral DPA outlining data retention, encryption standards, and complete data deletion protocols upon termination of pilot or commercial agreement.
              </p>
            </div>
          )}

          {type === 'security' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                <div className="p-3 bg-[#F7F5F0] rounded-lg border border-[#E3DED3]">
                  <strong className="text-[#0B1F33] block">Encryption at Rest</strong>
                  <span>AES-256 with KMS</span>
                </div>
                <div className="p-3 bg-[#F7F5F0] rounded-lg border border-[#E3DED3]">
                  <strong className="text-[#0B1F33] block">Transit Security</strong>
                  <span>TLS 1.3 Strict</span>
                </div>
                <div className="p-3 bg-[#F7F5F0] rounded-lg border border-[#E3DED3]">
                  <strong className="text-[#0B1F33] block">Access Control</strong>
                  <span>Role-Based (RBAC)</span>
                </div>
                <div className="p-3 bg-[#F7F5F0] rounded-lg border border-[#E3DED3]">
                  <strong className="text-[#0B1F33] block">Audit Logging</strong>
                  <span>Tamper-evident logs</span>
                </div>
              </div>
              <h5 className="font-serif text-sm font-bold text-[#0B1F33]">Data Segregation & Retention</h5>
              <p>
                Each hospital tenant operates in a logically isolated partition. Database backups undergo automated daily encryption. At any point, the hospital finance controller may request full cryptographic purge of all uploaded records.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F7F5F0] border-t border-[#E3DED3] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0B1F33] hover:bg-[#16324F] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
