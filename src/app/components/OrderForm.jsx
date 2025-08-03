import React from "react";

function OrderForm() {
  return (
    <div>
      <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-6 border-4 border-orange-300">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            {"অর্ডার ফর্ম পূরণ করুন:"}
          </h3>

          {/* Product Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border-2 border-orange-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <input type="radio" name="product" className="mr-2" />
                <span className="font-semibold">
                  {"২ পিস হারপোকা মারার স্প্রে (৫০০ml)"}
                </span>
              </div>
              <div className="text-sm text-gray-600">{"পরিমাণ: ৫০০ml"}</div>
              <div className="text-lg font-bold text-green-600">{"৳ ৬৯০"}</div>
            </div>
            <div className="border-2 border-orange-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <input type="radio" name="product" className="mr-2" />
                <span className="font-semibold">
                  {"৩ পিস হারপোকা মারার স্প্রে (৫০০ml)"}
                </span>
              </div>
              <div className="text-sm text-gray-600">{"পরিমাণ: ৫০০ml"}</div>
              <div className="text-lg font-bold text-green-600">{"৳ ৯৯০"}</div>
            </div>
          </div>

          {/* Billing Details */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">
              {"Billing details"}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {"আপনার নাম লিখুন *"}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {"মোবাইল নম্বর লিখুন *"}
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="০১৭xxxxxxxx"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {"সম্পূর্ণ ঠিকানা লিখুন, বাড়ি, রোড, এলাকা *"}
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20"
                  placeholder="সম্পূর্ণ ঠিকানা লিখুন"></textarea>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-bold text-gray-800 mb-3">{"Your order"}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{"Product"}</span>
                <span>{"Subtotal"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>{"২ পিস হারপোকা মারার স্প্রে × 1"}</span>
                <span>{"৳ ৬৯০"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>{"Subtotal"}</span>
                <span>{"৳ ৬৯০"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>{"Shipping"}</span>
                <span>
                  {"ঢাকার বাইরে"}
                  <br />
                  {"৳ ১২০"}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>{"Total"}</span>
                <span>{"৳ ৮১০"}</span>
              </div>
              <div className="text-sm text-gray-600">{"Cash on Delivery"}</div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-4 rounded-lg text-lg font-bold hover:shadow-lg transition-all duration-200">
            {"অর্ডার করুন ৳ ৮১০"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
