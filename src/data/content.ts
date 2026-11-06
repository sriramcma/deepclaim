export interface CutClassification {
  id: string;
  typeOfCut: string;
  whoBears: string;
  isHospitalLoss: boolean;
  category: 'patient' | 'hospital' | 'cashless_refusal';
  whatDeepClaimDoes: string;
  sourceNote?: string;
  exampleAmount: string;
}

export const WHO_PAYS_DATA: CutClassification[] = [
  {
    id: 'non_payable',
    typeOfCut: 'Non-payable items under the policy (some consumables, admin charges)',
    whoBears: 'Patient, collected at discharge',
    isHospitalLoss: false,
    category: 'patient',
    whatDeepClaimDoes: 'Shows and explains it; not counted as a hospital loss',
    exampleAmount: '₹3,500 – ₹8,000 per admission'
  },
  {
    id: 'copay_roomrent',
    typeOfCut: 'Co-pay, room-rent proportionate deduction',
    whoBears: 'Patient, collected at discharge',
    isHospitalLoss: false,
    category: 'patient',
    whatDeepClaimDoes: 'Shows it; helps staff set expectations before admission',
    exampleAmount: '₹12,000 – ₹35,000 per admission'
  },
  {
    id: 'tariff_excess',
    typeOfCut: 'Bill above the tariff agreed with the insurer',
    whoBears: 'Hospital. A network hospital may not collect more than the agreed package rate from the patient',
    isHospitalLoss: true,
    category: 'hospital',
    whatDeepClaimDoes: 'Checks each bill against the agreed tariff before it goes out',
    sourceNote: 'Zurich Kotak claim form',
    exampleAmount: '₹15,000 – ₹45,000 per surgical bill'
  },
  {
    id: 'short_settlement',
    typeOfCut: 'Insurer settles below the final approved amount, weeks after discharge',
    whoBears: 'Hospital, unless its deposit covers it or it recovers from a patient who has left. Hospitals hold 5–10% deposits for this reason',
    isHospitalLoss: true,
    category: 'hospital',
    whatDeepClaimDoes: 'Matches each settlement to its approval; flags short payments; drafts appeals',
    sourceNote: 'Breach Candy; RF Hospital',
    exampleAmount: '₹8,000 – ₹50,000 per claim'
  },
  {
    id: 'scheme_deductions',
    typeOfCut: 'Deductions on PM-JAY and other government-scheme claims',
    whoBears: "Hospital. Scheme patients can't be asked to pay",
    isHospitalLoss: true,
    category: 'hospital',
    whatDeepClaimDoes: 'Tracks deductions by reason; drafts appeals with documents',
    sourceNote: 'Punekar News',
    exampleAmount: '100% of deducted amount'
  },
  {
    id: 'late_payment',
    typeOfCut: 'Claims paid late',
    whoBears: 'Hospital (cash tied up for weeks / cost of working capital)',
    isHospitalLoss: true,
    category: 'hospital',
    whatDeepClaimDoes: 'Ageing by payer; daily follow-up list',
    exampleAmount: '35 to 90 days delay'
  },
  {
    id: 'cashless_refusal',
    typeOfCut: 'Cashless refused before discharge',
    whoBears: 'Patient pays, then claims reimbursement',
    isHospitalLoss: false,
    category: 'cashless_refusal',
    whatDeepClaimDoes: 'Not a hospital loss; noted for patient experience',
    exampleAmount: 'Full claim conversion to reimbursement'
  }
];

export const DATA_BANK_STATS = [
  {
    number: '3.26 crore',
    label: 'health insurance claims handled by insurers in a year',
    source: 'NewsBytes, citing IRDAI Annual Report 2024-25',
    detail: 'Insurers paid out about ₹94,248 crore across health claims in FY25.'
  },
  {
    number: '~58%',
    label: 'of them cashless: the hospital treats first, gets paid later',
    source: 'Ditto, summarising IRDAI Annual Report 2024-25',
    detail: 'Cashless claims require hospitals to finance patient care upfront.'
  },
  {
    number: '₹15,100 crore',
    label: "cut from health claims as 'disallowed' in FY24. Part falls on patients, part on hospitals",
    source: 'Business Standard, citing IRDAI Annual Report 2023-24',
    detail: 'Out of ₹1.17 lakh crore claimed. Paid 71.29%, disallowed 12.9%, repudiated 9.34%, outstanding 6.48%.'
  },
  {
    number: '600+',
    label: 'private hospitals have left PM-JAY since 2018, citing low rates and delayed dues',
    source: 'Union Health Ministry, via Business Standard',
    detail: 'Private hospitals handled 6.74 crore of the 11.69 crore PM-JAY admissions recorded by Feb 2026.'
  }
];

export const PROBLEM_CARDS = [
  {
    title: "Rates that don't cover cost",
    body: 'Package rates have barely moved while your costs rose. Some procedures may be losing money with some payers, and today nobody can tell you which.',
    context: 'Recent disputes between hospital networks and insurers highlight how legacy tariffs fail to reflect clinical inflation.'
  },
  {
    title: 'Cuts after the patient goes home',
    body: "Insurers can settle below the approved amount weeks after discharge. That's why some hospitals hold a 5–10% deposit. When the cut is bigger, you're chasing a patient who has already left.",
    context: 'Unreconciled short settlements silently accumulate in accounts receivable aging.'
  },
  {
    title: 'Bills above the agreed tariff',
    body: "If a bill crosses the rate you agreed with the insurer, the excess is cut and can't be charged to the patient. Usually it's a billing mistake that could have been caught.",
    context: 'Network hospital agreements strictly prohibit passing excess billed amounts to cashless policyholders.'
  },
  {
    title: 'Scheme deductions',
    body: "Under PM-JAY and other schemes, patients can't be asked to pay. Every rupee deducted is yours to absorb.",
    context: 'Empanelled hospitals bear 100% of procedural deductions and unappealed disallowances.'
  },
  {
    title: 'Money waiting',
    body: 'Cashless means you fund the treatment until the insurer pays. Every extra week of waiting is working capital you can\'t use.',
    context: 'Average settlement cycles stretch from 55 to 90 days, consuming bank credit lines.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    name: 'CONNECT',
    title: 'Share the exports you already have',
    description: 'Share bills, claim and settlement statements, bank credits, and your agreed tariffs. No new software for your staff and zero changes to your existing hospital management system.',
    timeline: 'Days 1–5'
  },
  {
    number: '02',
    name: 'UNDERSTAND',
    title: 'Match every claim to bill and approval',
    description: 'DeepClaim matches every claim to its bill, approval and settlement, separates patient-paid cuts from hospital-absorbed ones, and estimates profit per procedure for each payer.',
    timeline: 'Week 2'
  },
  {
    number: '03',
    name: 'ACT',
    title: 'Check tariffs before billing & draft appeals',
    description: 'Bills are checked against agreed tariffs before they go out. Short settlements get appeal drafts. Renewals get an evidence pack. Your team reviews and sends.',
    timeline: 'Week 3 onwards'
  },
  {
    number: '04',
    name: 'ASK',
    title: 'Plain-language answers on WhatsApp',
    description: '"How much did we absorb in cuts last month?" Send a voice note in English, Tamil or Hindi. Get the answer, and the bills behind it, in seconds.',
    timeline: 'Continuous'
  }
];

export const WHATSAPP_DEMOS = {
  en: {
    langLabel: 'English',
    ownerMessage: 'Last month, how much did insurers cut that we had to absorb?',
    ownerAudioDuration: '0:06',
    deepclaimReply: '₹4.6 lakh across 38 claims. Two payers account for 61%. 22 cuts look recoverable, and appeals are drafted for your TPA desk to review. Tap to see the bills.',
    tagline: 'Illustrative example · Traced to 38 underlying discharge bills'
  },
  ta: {
    langLabel: 'தமிழ் (Tamil)',
    ownerMessage: 'கடந்த மாதம் நாம் ஏற்க வேண்டிய காப்பீட்டுக் கழிவுகள் எவ்வளவு?',
    ownerAudioDuration: '0:07',
    deepclaimReply: '38 கோரிக்கைகளில் ₹4.6 லட்சம். இதில் இரண்டு நிறுவனங்கள் 61% பங்கு வகிக்கின்றன. 22 கழிவுகளை மேல்முறையீடு செய்யலாம்; உங்கள் TPA குழுவிற்கான ஆவணங்கள் தயாராக உள்ளன. பில்களைப் பார்க்க தட்டவும்.',
    tagline: 'விளக்க உதாரணம் · தமிழ் குரல் மற்றும் உரை ஆதரவு'
  },
  hi: {
    langLabel: 'हिंदी (Hindi)',
    ownerMessage: 'पिछले महीने बीमा कंपनियों ने कितना काटा जो हमें भुगतना पड़ा?',
    ownerAudioDuration: '0:07',
    deepclaimReply: '38 क्लेम में कुल ₹4.6 लाख। दो बीमाकर्ताओं का हिस्सा 61% है। 22 कटौती वापस मिल सकती हैं, जिनकी अपील आपके TPA डेस्क के लिए तैयार है। बिल देखने के लिए टैप करें।',
    tagline: 'उदाहरणात्मक विवरण · हिंदी वॉयस नोट और संदेश सपोर्ट'
  }
};

export const BENCHMARKS = [
  {
    metric: 'Claim Denials',
    typical: '12% – 18%',
    bestInClass: '5% – 8%',
    source: 'upGrowth consultant estimates',
    note: 'Initial rejection or short settlement rate before formal dispute.'
  },
  {
    metric: 'Collection Rate of Claimable Revenue',
    typical: '82% – 85%',
    bestInClass: '93% – 96%',
    source: 'upGrowth consultant estimates',
    note: 'Net revenue realized vs contractually reimbursable tariff amount.'
  },
  {
    metric: 'Payment Settlement Days',
    typical: '55 – 90 days',
    bestInClass: '35 – 45 days',
    source: 'upGrowth consultant estimates',
    note: 'Working capital days outstanding from patient discharge to bank credit.'
  }
];

export const REGULATORY_TIMELINE = [
  {
    date: 'May 2024',
    title: 'IRDAI Master Circular on Cashless',
    description: 'Mandates cashless decisions within one hour and discharge authorization within three hours. Extra charges arising from delays beyond three hours fall upon the insurer.',
    citation: 'Business Today on IRDAI master circular, May 2024'
  },
  {
    date: 'July 2024',
    title: 'National Health Claims Exchange (NHCX)',
    description: 'India transitions to a standardized digital health claims highway. 34 insurers/TPAs live and hundreds of hospitals integrating standard protocols.',
    citation: 'MoHFW Announcement'
  },
  {
    date: 'Nov 2026 – May 2027',
    title: 'DPDP Rules Implementation',
    description: 'Digital Personal Data Protection Act compliance requires Indian patient data to remain within sovereign borders with pseudonymized identifiers, strict audit trails, and DPAs.',
    citation: 'CivilsDaily / Gazette of India'
  }
];

export const FAQS = [
  {
    q: 'Does DeepClaim replace our hospital software?',
    a: 'No. It only reads exports from your existing systems (bills, claims, settlement dumps, tariffs). Nothing changes for your billing team or current Hospital Information System.'
  },
  {
    q: 'Will insurers see our data?',
    a: 'No. DeepClaim works exclusively for the hospital. Nothing is shared with insurers or third parties unless your authorized team explicitly chooses to review and send an appeal.'
  },
  {
    q: 'How is patient data protected?',
    a: 'Hosted in India, patient identifiers are pseudonymized on arrival, encrypted at rest and in transit, with role-based access controls and a tamper-evident audit log. We sign a formal Data Processing Agreement (DPA) with every hospital.'
  },
  {
    q: "Isn't every insurance cut a loss for the hospital?",
    a: 'No. Many cuts (non-payable consumables, room-rent co-pay) are legitimately paid by the patient at discharge. DeepClaim separates those and focuses exclusively on the cuts your hospital actually absorbs.'
  },
  {
    q: 'Do you guarantee a recovery amount?',
    a: 'No. We show you what is contractually recoverable under your empanelment agreements and help your staff appeal. The initial audit shows the exact size of your opportunity before you commit.'
  },
  {
    q: 'How long does it take to start?',
    a: 'Most hospitals can share 6 months of standard exports in a few days. You see the first reconciled findings in about two weeks.'
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on hospital size and bed volume. We recommend starting with our free claim audit to establish your hospital-absorbed baseline.'
  }
];

export const FOUNDER_NOTE = {
  quote:
    "I've run a clinic network from the owner's chair. Before that, I built dispute and fraud products at PayPal and was a Senior Product Manager at Change Healthcare. DeepClaim is the tool hospital owners need: one that tells you, plainly, which part of every insurance cut is yours.",
  author: 'Padmini Janaki',
  title: 'Founder, DeepClaim.AI',
  credentials:
    'Founder of LIVF.Women (6 yrs) · Ex-PayPal India Disputes & Fraud · Ex-Change Healthcare Sr PM · World Economic Forum Young Global Leader'
};
