/**
 * Formats a number into Indian Rupee notation (Crores, Lakhs, Thousands, or plain Rupee)
 */
export function formatINR(val: number, options?: { showDecimalForLakh?: boolean; exactRupee?: boolean }): string {
  if (val === 0) return '₹0';
  if (isNaN(val)) return '₹0';

  if (options?.exactRupee) {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  }

  const absVal = Math.abs(val);
  const sign = val < 0 ? '-' : '';

  if (absVal >= 10000000) {
    // 1 Crore = 10,000,000
    const cr = absVal / 10000000;
    const formatted = cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2);
    return `${sign}₹${formatted} crore`;
  } else if (absVal >= 100000) {
    // 1 Lakh = 100,000
    const lk = absVal / 100000;
    const formatted = lk % 1 === 0 ? lk.toFixed(0) : lk.toFixed(1);
    return `${sign}₹${formatted} lakh`;
  } else if (absVal >= 1000) {
    const k = absVal / 1000;
    const formatted = k % 1 === 0 ? k.toFixed(0) : k.toFixed(1);
    return `${sign}₹${formatted}k`;
  } else {
    return `${sign}₹${Math.round(absVal).toLocaleString('en-IN')}`;
  }
}

/**
 * Full Indian formatted currency e.g. ₹18,00,000
 */
export function formatExactINR(val: number): string {
  if (isNaN(val)) return '₹0';
  const sign = val < 0 ? '-' : '';
  return `${sign}₹${Math.round(Math.abs(val)).toLocaleString('en-IN')}`;
}

export function formatPercent(val: number, decimals: number = 1): string {
  if (isNaN(val)) return '0%';
  return `${val.toFixed(decimals)}%`;
}
