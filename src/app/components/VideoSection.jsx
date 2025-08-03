export function VideoSection() {
    return (
        <div className="px-2 mb-6">
        <div className="bg-black border-4 border-red-500 aspect-video w-full flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-white z-10">
            <div className="mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors shadow-lg">
                <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300">{"ভিডিও দেখতে প্লে বাটনে ক্লিক করুন"}</p>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black"></div>
          </div>
        </div>
      </div>
    );
  }