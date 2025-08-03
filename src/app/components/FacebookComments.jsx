import React from "react";

function FacebookComments() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="font-semibold text-sm">Shamol...</p>
                <p className="text-sm text-gray-600">
                  {"খুবই ভাল প্রোডাক্ট। কাজ করেছে।"}
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                <span>Like</span>
                <span>Reply</span>
                <span>2h</span>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              R
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="font-semibold text-sm">Rashid Ahmed</p>
                <p className="text-sm text-gray-600">
                  {"অসাধারণ! সত্যিই কাজ করে।"}
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                <span>Like</span>
                <span>Reply</span>
                <span>5h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookComments;
