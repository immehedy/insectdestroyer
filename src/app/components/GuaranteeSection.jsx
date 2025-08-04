
function GuaranteeSection() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-3 px-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">{"গ্যারান্টিবিধি"}</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {"প্রোডাক্ট হাতে পেয়ে সন্তুষ্ট না হলে ফেরত দিন।"}
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {"৭ দিনের মধ্যে কাজ না করলে সম্পূর্ণ টাকা ফেরত পাবেন।"}
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {"সারা বাংলাদেশে হোম ডেলিভারি সুবিধা আছে।"}
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-orange-500 mr-3 text-xl">✓</span>
            <p className="text-gray-700">
              {"কোন লুকানো চার্জ নেই। শুধু প্রোডাক্ট এর দাম + ডেলিভারি চার্জ।"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeSection;
