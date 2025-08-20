import React from "react";
import { useBengaliDigits } from "../lib/useBengaliDigits";

function Contact({helpLine}) {
  const { toBengaliDigits } = useBengaliDigits();
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-4 px-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold">
        {`হেল্পলাইন নম্বরঃ ${toBengaliDigits(helpLine)}`}
        </h2>
        <a href={`tel:+88${helpLine}`}>
          <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            📞 অর্ডার করতে কল করুন
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
