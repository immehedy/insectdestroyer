import React from "react";

function Pricing() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-red-200">
          <div className="text-2xl font-bold text-red-600 mb-2">
            {"500ml রেগুলার প্রাইস ৯০০ টাকা"}
          </div>
          <div className="text-lg text-gray-600">{"বিশেষ ছাড়ে"}</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-green-200">
          <div className="text-2xl font-bold text-green-600 mb-2">
            {"500ml অফার প্রাইস ৬৯০ টাকা"}
          </div>
          <div className="text-lg text-gray-600">{"সীমিত সময়ের জন্য"}</div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
