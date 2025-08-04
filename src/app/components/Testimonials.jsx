import React from "react";

function Testimonials() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-3 px-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">
          {"আমাদের কাস্টমারদের রিভিউ সমূহ"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-black border-2 border-gray-300 aspect-video flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-12 h-12 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm">{"কাস্টমার রিভিউ ১"}</p>
          </div>
        </div>
        <div className="bg-black border-2 border-gray-300 aspect-video flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-12 h-12 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm">{"কাস্টমার রিভিউ ২"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
