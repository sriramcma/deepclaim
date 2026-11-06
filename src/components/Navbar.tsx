import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onBookAuditClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onBookAuditClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: string) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E3DED3] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-left cursor-pointer group whitespace-nowrap shrink-0"
        >
          {/* Logo Mark: Folded claim document with deeper ledger layer */}
          <div className="w-8 h-8 rounded-lg bg-[#0B1F33] flex items-center justify-center text-white relative overflow-hidden shadow-xs">
            <span className="font-serif font-black text-sm text-[#2BB59A]">D</span>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#0B6E5F] rotate-45 transform translate-x-1.5 translate-y-1.5" />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0B1F33] group-hover:text-[#0B6E5F] transition-colors">
            DeepClaim<span className="text-[#0B6E5F]">.ai</span>
          </span>
        </button>

        {/* Zone 2: 5 Concise Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5B6B7A]">
          <button
            onClick={() => handleNav('how-it-works')}
            className={`transition-colors hover:text-[#0B1F33] cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'how-it-works' ? 'text-[#0B1F33] font-semibold underline underline-offset-8 decoration-[#0B6E5F] decoration-2' : ''
            }`}
          >
            How it works
          </button>
          <button
            onClick={() => handleNav('solutions')}
            className={`transition-colors hover:text-[#0B1F33] cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'solutions' ? 'text-[#0B1F33] font-semibold underline underline-offset-8 decoration-[#0B6E5F] decoration-2' : ''
            }`}
          >
            Solutions
          </button>
          <button
            onClick={() => handleNav('insights')}
            className={`transition-colors hover:text-[#0B1F33] cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'insights' ? 'text-[#0B1F33] font-semibold underline underline-offset-8 decoration-[#0B6E5F] decoration-2' : ''
            }`}
          >
            Insights
          </button>
          <button
            onClick={() => handleNav('security')}
            className={`transition-colors hover:text-[#0B1F33] cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'security' ? 'text-[#0B1F33] font-semibold underline underline-offset-8 decoration-[#0B6E5F] decoration-2' : ''
            }`}
          >
            Security
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`transition-colors hover:text-[#0B1F33] cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'about' ? 'text-[#0B1F33] font-semibold underline underline-offset-8 decoration-[#0B6E5F] decoration-2' : ''
            }`}
          >
            About
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onBookAuditClick}
            className="px-4.5 py-2 text-xs font-semibold text-white bg-[#0B6E5F] hover:bg-[#085549] rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Book a free claim audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0B1F33] hover:text-[#0B6E5F] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E3DED3] bg-white px-5 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#5B6B7A]">
            <button
              onClick={() => handleNav('how-it-works')}
              className="text-left py-2 hover:text-[#0B1F33] border-b border-slate-100"
            >
              How it works
            </button>
            <button
              onClick={() => handleNav('solutions')}
              className="text-left py-2 hover:text-[#0B1F33] border-b border-slate-100"
            >
              Solutions (Mid-size, Large chains, Insurance desk)
            </button>
            <button
              onClick={() => handleNav('insights')}
              className="text-left py-2 hover:text-[#0B1F33] border-b border-slate-100"
            >
              Insights & Claim Gap Calculator
            </button>
            <button
              onClick={() => handleNav('security')}
              className="text-left py-2 hover:text-[#0B1F33] border-b border-slate-100"
            >
              Security & Privacy
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-left py-2 hover:text-[#0B1F33] border-b border-slate-100"
            >
              About & Founder Story
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookAuditClick();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#0B6E5F] hover:bg-[#085549] rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book a free claim audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
