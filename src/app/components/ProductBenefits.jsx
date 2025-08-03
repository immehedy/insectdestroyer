
function ProductBenefits() {
  return (
    <div>
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-3 px-4 mb-4">
          <h2 className="text-xl md:text-2xl font-bold">{"কাজ হবে কেন ???"}</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <p className="text-gray-700">
                    {"এই স্প্রেটি তিনটি কার্যকর উপাদান দিয়ে তৈরি, যেগুলো হার পোকা দূর করতে খুবই কার্যকর এবং নিরাপদ।"}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <p className="text-gray-700">{"সিডার অয়েল হারপোকা মারতে খুবই কার্যকর এবং মানুষের জন্য নিরাপদ।"}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <p className="text-gray-700">{"পেপারমিন্ট অয়েল এর গন্ধে হারপোকা পালিয়ে যায় এবং মানুষ ভাল লাগে।"}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <p className="text-gray-700">{"ল্যাভেন্ডার অয়েল ৯৯% হারপোকা মেরে ফেলে এবং ভবিষ্যতে আসতে বাধা দেয়।"}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <p className="text-gray-700">{"তিনটি অয়েল একসাথে মিশিয়ে স্প্রে করলে ১০০% কার্যকর ফলাফল পাবেন।"}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">{"১০০% কার্যকরী"}</div>
                <div className="text-sm text-gray-600 mb-4">{"হারপোকার ১০০% সমাধান"}</div>
                <div className="w-32 h-32 mx-auto bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🧴</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductBenefits