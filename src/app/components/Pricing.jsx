import React from "react";

function Pricing({ productPrices }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {productPrices?.plans?.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-lg shadow-md p-6 text-center border-2 border-${item.style.borderColor}`}
          >
            <div
              className={`text-2xl font-bold text-${item.style.textColor} mb-2`}
            >
              {item.name}
            </div>
            <div className="text-lg text-gray-600">{item.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
