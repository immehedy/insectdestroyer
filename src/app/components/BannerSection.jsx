export function BannerSection({ data }) {
  const colors = [
    "from-blue-600 to-blue-700",
    "from-amber-500 to-orange-600",
    "from-teal-600 to-emerald-700",
  ];
  return (
    <div className="space-y-1 mb-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 px-4">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold">
          {"ছারপোকার কামড়ে রাতে ঘুমাতে পারছেন না ?"}
        </h2>
      </div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-4 px-4">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold">
          {"ছারপোকা থেকে স্থায়ী সমাধান ও মুক্তি চান ?"}
        </h2>
      </div>
      <div className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white text-center py-4 px-4">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold">
          {"টাকা ফেরত গ্যারান্টি মাত্র ২৪ ঘন্টায় ফলাফল ।"}
        </h2>
      </div>
    </div>
  );
}
