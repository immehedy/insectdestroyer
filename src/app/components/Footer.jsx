import React from "react";
import { useBengaliDigits } from "../lib/useBengaliDigits";

function Footer({helpLine}) {
  const { toBengaliDigits } = useBengaliDigits();
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-4 px-4 mt-6">
      <h2 className="text-xl md:text-2xl font-bold">
      {`হেল্পলাইন নম্বরঃ ${toBengaliDigits(helpLine)}`}
      </h2>
    </div>
  );
}

export default Footer;
