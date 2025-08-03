import React from "react";

function WhyChoose() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-3 px-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">
          {"আমাদের উপর কেন আস্থা রাখবেন"}
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {
                "৫টি ১০০% প্রাকৃতিক উপাদান দিয়ে তৈরি এই স্প্রে মানুষের জন্য নিরাপদ।"
              }
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">{"কোনরকম রাসায়নিক নেই।"}</p>
          </div>
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {"বাচ্চা কিংবা বয়স্ক সবার জন্য নিরাপদ।"}
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {"ঘরে বাচ্চা থাকলেও নিশ্চিন্তে ব্যবহার করতে পারবেন।"}
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {"কাজ না হলে সম্পূর্ণ টাকা ফেরত পাবেন।"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
