import React from 'react';
import { Shield, Lock, FileText, ArrowUp, MessageSquare } from 'lucide-react';
import { FOUNDER_NOTE } from '../data/content';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSecurity: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenSecurity
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] text-white pt-16 pb-24 md:pb-12 border-t border-[#233547] font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Quote Card Strip */}
        <div className="mb-14 p-6 sm:p-8 bg-[#16324F]/70 border border-[#233547] rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-[11px] font-mono text-[#2BB59A] uppercase tracking-wider font-semibold block">
                From the Founder
              </span>
              <p className="font-serif text-lg sm:text-xl text-white italic leading-relaxed">
                "{FOUNDER_NOTE.quote}"
              </p>
              <div className="pt-2 text-xs text-slate-300">
                <strong className="text-white">{FOUNDER_NOTE.author}</strong> · {FOUNDER_NOTE.title}
                <span className="block text-slate-400 text-[11px] mt-0.5">{FOUNDER_NOTE.credentials}</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onNavigate('about')}
                className="px-4 py-2.5 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center"
              >
                Read Padmini's Story & Mission
              </button>
              <button
                onClick={() => {
                  const text = encodeURIComponent("Hi Padmini, I read your note on DeepClaim.AI and would like to connect.");
                  window.open(`https://wa.me/919840000000?text=${text}`, '_blank');
                }}
                className="px-4 py-2.5 bg-[#16324F] hover:bg-[#233547] border border-[#233547] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Talk to Founder</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Column Sitemap & Legal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#233547] text-xs">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#0B6E5F] flex items-center justify-center text-white font-serif font-bold text-xs">
                D
              </div>
              <span className="font-serif text-lg font-bold text-white">DeepClaim.ai</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              AI agent for Indian hospitals that reveals absorbed claim cuts, tracks procedure profitability, and audits claims.
            </p>
            <div className="text-[11px] text-slate-400 font-mono">
              Hosted in Mumbai & Pune, India
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-2.5">
            <span className="font-mono uppercase text-[11px] tracking-wider text-slate-400 font-semibold block">
              Solutions
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mid-Size Hospitals (50–200 beds)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Large Hospitals & Multi-Site Chains
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Insurance & TPA Desks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Onboarding & Reconciled Timeline
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Tools */}
          <div className="space-y-2.5">
            <span className="font-mono uppercase text-[11px] tracking-wider text-slate-400 font-semibold block">
              Research & Tools
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Claim Gap Data Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Claim Gap Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Who Pays Each Cut Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  IRDAI & NHCX Regulatory Benchmarks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div className="space-y-2.5">
            <span className="font-mono uppercase text-[11px] tracking-wider text-slate-400 font-semibold block">
              Trust & Security
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('security')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-[#2BB59A]" />
                  <span>DPDP Compliance Architecture</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy (India Sovereignty)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service & DPA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ethical & Accuracy Guidelines
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} DeepClaim.AI · All rights reserved · Read-only access · Humans approve every appeal.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
