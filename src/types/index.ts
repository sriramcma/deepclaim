export interface ClaimLineItem {
  id: string;
  category: string;
  description: string;
  billedAmount: number;
  paidAmount: number;
  patientPaidCut: number;
  hospitalAbsorbedCut: number;
  status: 'paid' | 'patient_cut' | 'hospital_absorbed';
  reason?: string;
  code?: string;
}

export interface CalculatorInputs {
  amountClaimed: number; // A
  monthsInPeriod: number; // 3 or 6
  amountSettled: number; // B
  patientCollected: number; // C
  avgDaysToSettlement: number; // D
  annualBorrowingRate: number; // E (%)
  recoveryScenarioPercent: number; // slider 10 - 40%
}

export interface CalculatorOutputs {
  absorbedAmount: number; // A - B - C
  absorbedSharePercent: number; // (A - B - C) / A * 100
  annualizedAbsorbed: number; // (A - B - C) * 12 / months
  recoveryScenarioAnnual: number; // annualized * (slider / 100)
  costOfWaitingAnnual: number; // (A / months) * (D / 30) * (E / 100)
}

export interface LeadFormData {
  fullName: string;
  role: string;
  hospitalName: string;
  city: string;
  bedCount: string;
  siteCount: string;
  whatsappPhone: string;
  workEmail: string;
  insurers?: string;
  hospitalSoftware?: string;
  agreedToContact: boolean;
  prefilledCalculatedAbsorbed?: number;
}
