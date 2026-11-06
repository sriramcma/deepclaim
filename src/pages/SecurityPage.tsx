import React from 'react';
import { Shield, Lock, Server, FileText, CheckCircle2, UserCheck, EyeOff, KeyRound, Download, ArrowRight } from 'lucide-react';

interface SecurityPageProps {
  onBookAuditClick: () => void;
  onOpenPrivacyModal: () => void;
  onOpenSecurityModal: () => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({
  onBookAuditClick,
  onOpenPrivacyModal,
  onOpenSecurityModal
}) => {
  return (
    <div className="font-sans text-[#0B1F33]">
      {/* Header */}
      <section className="bg-[#0B1F33] text-white py-20 border-b border-[#233547]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-semibold block">
              Sovereign Indian Health Data Architecture
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Built to protect patient data from day one
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Designed specifically for the Digital Personal Data Protection (DPDP) Act and Rules, phasing in from November 2026 to May 2027. Your clinical data never leaves India.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSecurityModal}
                className="px-5 py-2.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Security Architecture Specification</span>
              </button>
              <button
                onClick={onOpenPrivacyModal}
                className="px-5 py-2.5 bg-[#16324F] hover:bg-[#1E4369] text-white text-xs font-medium rounded-lg border border-[#233547] cursor-pointer"
              >
                Data Processing Agreement Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main 7 Security Pillars */}
      <section className="py-20 bg-[#F7F5F0] border-b border-[#E3DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B6E5F] font-bold block mb-2">
              Foundational Safeguards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              Seven Commitments to Hospital Leadership
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B7A] mt-2">
              Every protection is legally enforceable under our mutual Data Processing Agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F3F0] text-[#0B6E5F] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Hosted and Processed in India
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                All cloud servers, persistent databases, and processing clusters are located in enterprise Tier-IV data centers in Mumbai and Pune. Patient data never leaves sovereign Indian jurisdiction.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F3F0] text-[#0B6E5F] flex items-center justify-center">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Patient Identifiers Pseudonymised on Arrival
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Direct identifiers (names, Aadhaar, contact details) are immediately stripped and pseudonymised using salted cryptographic hashing prior to algorithmic reconciliation.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F3F0] text-[#0B6E5F] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Encrypted at Rest and in Transit
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Files are secured using AES-256 encryption at rest with tenant-isolated customer managed keys, and enforced TLS 1.3 encryption across all communication networks.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F3F0] text-[#0B6E5F] flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Read-Only Ingestion Only
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                DeepClaim connects strictly via read-only file exports or read-only database replicas. We never request write permissions, preventing any risk of altering clinical patient charts.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F3F0] text-[#0B6E5F] flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Strict Role-Based Access (RBAC)
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Granular permission gates ensure operational TPA desk coordinators only see clinical rebuttal tasks, while procedural margins and hospital financial totals are restricted to C-suite leadership.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-6 bg-white rounded-2xl border border-[#E3DED3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F3F0] text-[#0B6E5F] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1F33]">
                Full Tamper-Evident Audit Log
              </h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Every query, export view, WhatsApp message, and appeal draft generated creates an immutable log with user timestamp and IP address, accessible by your hospital security officer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DPDP Rules Compliance Timeline */}
      <section className="py-20 bg-white border-b border-[#E3DED3]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-[#0B1F33] text-white rounded-2xl border border-[#233547] space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#2BB59A]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#2BB59A] font-bold">
                Regulatory Preparedness
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Built for the DPDP Act & Health Rules (Nov 2026 – May 2027)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              India's Digital Personal Data Protection Act establishes strict civil liabilities for healthcare fiduciaries. DeepClaim was architected under these exact specifications: bilateral Data Processing Agreements, prompt data return or cryptographic purging upon exit, and zero secondary commercial monetization of clinical records.
            </p>
            <div className="p-4 bg-[#071524] rounded-xl border border-[#233547] text-xs font-mono text-[#2BB59A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>DeepClaim signs a legally binding DPA with every hospital partner prior to pilot launch.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F5F0] text-center">
        <div className="max-w-[600px] mx-auto px-4 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#0B1F33]">
            Audit your claims with complete peace of mind
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6B7A]">
            Request our formal mutual NDA and DPA before sharing a single byte of test data.
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
