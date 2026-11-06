import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, PhoneCall, FileText, Lock, Building, Bed, Mail, User, Phone, MapPin } from 'lucide-react';
import { LeadFormData } from '../types';
import { formatINR, formatExactINR } from '../utils/formatters';

interface AuditFormProps {
  prefilledAbsorbed?: number;
  onOpenPrivacy?: () => void;
}

export const AuditModalOrForm: React.FC<AuditFormProps> = ({ prefilledAbsorbed, onOpenPrivacy }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    role: 'Managing Director / Owner',
    hospitalName: '',
    city: '',
    bedCount: '50–100',
    siteCount: '1 site',
    whatsappPhone: '',
    workEmail: '',
    insurers: '',
    hospitalSoftware: '',
    agreedToContact: true,
    prefilledCalculatedAbsorbed: prefilledAbsorbed
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.hospitalName.trim() || !formData.whatsappPhone.trim() || !formData.workEmail.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.agreedToContact) {
      setErrorMsg('Please accept the contact agreement to proceed.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="audit-form" className="bg-[#FFFFFF] border border-[#E3DED3] rounded-2xl p-8 sm:p-12 shadow-xl text-center max-w-2xl mx-auto font-sans">
        <div className="w-16 h-16 rounded-full bg-[#E6F3F0] text-[#0B6E5F] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0B1F33]">
          Claim Audit Request Received
        </h3>
        <p className="text-sm text-[#5B6B7A] mt-2 max-w-lg mx-auto">
          Thank you, <strong className="text-[#0B1F33]">{formData.fullName}</strong>. We've registered your request for{' '}
          <strong className="text-[#0B1F33]">{formData.hospitalName}</strong> ({formData.city}).
        </p>

        {prefilledAbsorbed && prefilledAbsorbed > 0 && (
          <div className="my-4 p-4 bg-[#FDEDE9]/50 border border-[#E4572E]/30 rounded-xl text-left max-w-md mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#E4572E] font-bold block">
              Reference Calculation Attached
            </span>
            <div className="text-sm font-semibold text-[#0B1F33]">
              Estimated Absorbed Cut: {formatExactINR(prefilledAbsorbed)}
            </div>
            <p className="text-[11px] text-[#5B6B7A] mt-0.5">
              Our clinical finance auditors will verify this baseline using your actual remittance files.
            </p>
          </div>
        )}

        <div className="mt-8 p-6 bg-[#F7F5F0] rounded-xl border border-[#E3DED3] text-left space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#0B1F33]">
            What happens next
          </h4>
          <div className="space-y-3 text-xs text-[#5B6B7A]">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0B6E5F] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-[#0B1F33] block">We call you within one working day</strong>
                <span>Our founder or head of hospital audits will reach out on WhatsApp/phone to confirm scope.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0B6E5F] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-[#0B1F33] block">We sign a mutual data agreement & you share exports</strong>
                <span>Standard DPDP-compliant DPA signed. Share 6 months of billing and settlement dumps (no software change).</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0B6E5F] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
              <div>
                <strong className="text-[#0B1F33] block">In about two weeks, we walk you through your claim gap</strong>
                <span>A confidential executive presentation showing every cut absorbed and procedural margins by payer.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              const text = encodeURIComponent(`Hi Padmini, I just booked a claim audit on DeepClaim for ${formData.hospitalName}. My email is ${formData.workEmail}.`);
              window.open(`https://wa.me/919840000000?text=${text}`, '_blank');
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Notify Padmini on WhatsApp</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0B1F33] text-xs font-medium rounded-lg cursor-pointer"
          >
            Submit Another Hospital
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="audit-form" className="bg-[#FFFFFF] border border-[#E3DED3] rounded-2xl shadow-xl overflow-hidden font-sans">
      <div className="p-6 sm:p-8 bg-[#0B1F33] text-white border-b border-[#233547]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider font-mono text-[#2BB59A] font-semibold">
            Confidential · Zero Obligation
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Book a Free Claim Audit
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
          Share 6 months of claim and settlement data. In two weeks, we'll show you which cuts you absorbed,
          which were avoidable, and which insurers and procedures pay you below cost. Free, no obligation.
        </p>

        {prefilledAbsorbed && prefilledAbsorbed > 0 && (
          <div className="mt-4 p-3 bg-[#16324F] border border-[#233547] rounded-xl flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">Prefilled Absorbed Loss from Calculator:</span>
            <span className="text-[#E4572E] font-bold">{formatExactINR(prefilledAbsorbed)}</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
            {errorMsg}
          </div>
        )}

        {/* Section 1: Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. K. Ramanathan"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33]">
              Role in Hospital *
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] bg-white"
            >
              <option value="Managing Director / Owner">Managing Director / Owner / CEO</option>
              <option value="CFO / Finance Head">CFO / Finance Head / Controller</option>
              <option value="TPA & Insurance Desk Head">TPA / Insurance Desk Head</option>
              <option value="Chief Operating Officer">Chief Operating Officer (COO)</option>
              <option value="Investor / Board Member">Investor / Board Member</option>
            </select>
          </div>
        </div>

        {/* Section 2: Hospital Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33] flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-slate-400" />
              <span>Hospital Name *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Kaveri Memorial Hospital"
              value={formData.hospitalName}
              onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>City / Location *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Chennai, Madurai, Coimbatore"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F]"
            />
          </div>
        </div>

        {/* Section 3: Beds & Sites */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33] flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-slate-400" />
              <span>Number of Beds *</span>
            </label>
            <select
              value={formData.bedCount}
              onChange={(e) => setFormData({ ...formData, bedCount: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] bg-white"
            >
              <option value="under 50">Under 50 beds</option>
              <option value="50–100">50–100 beds</option>
              <option value="100–200">100–200 beds</option>
              <option value="200–500">200–500 beds</option>
              <option value="500+">500+ beds (Multi-specialty / Tertiary)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33]">
              Number of Sites
            </label>
            <select
              value={formData.siteCount}
              onChange={(e) => setFormData({ ...formData, siteCount: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] bg-white"
            >
              <option value="1 site">1 standalone facility</option>
              <option value="2–4 sites">2–4 facilities / chain</option>
              <option value="5+ sites">5+ facilities (Multi-city network)</option>
            </select>
          </div>
        </div>

        {/* Section 4: Communication channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Phone (WhatsApp preferred) *</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98400 12345"
              value={formData.whatsappPhone}
              onChange={(e) => setFormData({ ...formData, whatsappPhone: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F]"
            />
            <span className="text-[10px] text-[#5B6B7A] block">We share audit updates & voice note samples here</span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33] flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Work Email *</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g. director@hospitalname.com"
              value={formData.workEmail}
              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F] focus:ring-1 focus:ring-[#0B6E5F]"
            />
            <span className="text-[10px] text-[#5B6B7A] block">Formal DPA & executive audit deck sent here</span>
          </div>
        </div>

        {/* Section 5: Optional context */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33]">
              Main Insurers & Schemes (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Star Health, Medi Assist, PM-JAY, CMCHIS"
              value={formData.insurers}
              onChange={(e) => setFormData({ ...formData, insurers: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0B1F33]">
              Hospital Billing / HIS Software (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Akhil Systems, Insta, KareXpert, MocDoc, Tally"
              value={formData.hospitalSoftware}
              onChange={(e) => setFormData({ ...formData, hospitalSoftware: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-[#E3DED3] rounded-lg focus:border-[#0B6E5F]"
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.agreedToContact}
              onChange={(e) => setFormData({ ...formData, agreedToContact: e.target.checked })}
              className="mt-1 w-4 h-4 text-[#0B6E5F] rounded border-[#E3DED3] focus:ring-[#0B6E5F]"
            />
            <span className="text-xs text-[#5B6B7A] leading-relaxed">
              I agree to be contacted about DeepClaim. We respect your privacy: patient identifiers are pseudonymized and hospital financial data is protected under a non-disclosure agreement.{' '}
              {onOpenPrivacy && (
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-[#0B6E5F] underline hover:text-[#085549] font-medium"
                >
                  Read privacy policy
                </button>
              )}
            </span>
          </label>
        </div>

        {/* Submit Button & Trust Note */}
        <div className="pt-4 border-t border-[#E3DED3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#5B6B7A]">
            <ShieldCheck className="w-4 h-4 text-[#0B6E5F]" />
            <span>Hosted in India · Read-only access · DPDP compliant</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-[#0B6E5F] hover:bg-[#085549] text-white text-sm font-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Submit Claim Audit Request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* What happens next bar */}
      <div className="bg-[#F7F5F0] p-6 border-t border-[#E3DED3] text-xs">
        <span className="font-mono uppercase font-bold text-slate-500 block mb-2">
          Audit Process Timeline:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[#5B6B7A]">
          <div>
            <strong className="text-[#0B1F33] block">1. Intro Call (24 hrs)</strong>
            <span>We confirm scope and share our standard data agreement.</span>
          </div>
          <div>
            <strong className="text-[#0B1F33] block">2. Share 6 Mos Exports</strong>
            <span>You export standard billing & TPA dumps. No software changes.</span>
          </div>
          <div>
            <strong className="text-[#0B1F33] block">3. Two-Week Walkthrough</strong>
            <span>Detailed review of absorbed cuts and procedure profitability.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
