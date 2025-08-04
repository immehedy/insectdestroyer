export function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
        <a href="#order-form" className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          {"🛒 অর্ডার করুন এখনি অর্ডার"}
        </a>
        <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          {"📞 আমাদের হটলাইন কল করুন"}
        </button>
      </div>
    );
  }