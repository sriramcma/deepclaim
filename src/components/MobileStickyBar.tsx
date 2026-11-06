import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  onBookAuditClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookAuditClick }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi DeepClaim team, I would like to learn more about the free hospital claim audit.");
    window.open(`https://wa.me/919840000000?text=${text}`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF] border-t border-[#E3DED3] px-3 py-2 shadow-2xl flex items-center gap-2">
      <button
        onClick={onBookAuditClick}
        className="flex-1 py-2.5 px-3 bg-[#0B6E5F] hover:bg-[#085549] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-98 transition-all"
      >
        <span>Book Claim Audit</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={openWhatsApp}
        className="py-2.5 px-3.5 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-lg shadow-xs flex items-center justify-center gap-1.5 cursor-pointer text-xs font-semibold shrink-0 active:scale-98 transition-all"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="hidden xs:inline">WhatsApp</span>
      </button>
    </div>
  );
};
