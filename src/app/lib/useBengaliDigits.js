// useBengaliDigits.js
import { useCallback } from "react";

// Custom hook
export function useBengaliDigits() {
  const convert = useCallback((numberString) => {
    const enToBn = {
      "0": "০",
      "1": "১",
      "2": "২",
      "3": "৩",
      "4": "৪",
      "5": "৫",
      "6": "৬",
      "7": "৭",
      "8": "৮",
      "9": "৯",
    };

    return numberString.replace(/[0-9]/g, (digit) => enToBn[digit]);
  }, []);

  return { toBengaliDigits: convert };
}
