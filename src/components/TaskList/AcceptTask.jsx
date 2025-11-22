import React from "react";

function AcceptTask() {
  return (
    <div className="max-w-[330px] mx-auto mt-6">

      <div className="min-w-[300px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#ffe8e8] to-[#ffdcdc] border border-red-300">

        {/* 🔺 Priority + Date */}
        <div className="flex items-center justify-between p-4">
          <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">
            High
          </span>
          <span className="text-sm text-gray-700 font-medium">17 Nov 2025</span>
        </div>

        {/* 📌 Title */}
        <h2 className="px-4 text-lg font-bold text-gray-900">
          Make A Youtube Video
        </h2>

        {/* 📖 Description */}
        <p className="text-sm px-4 pb-4 mt-1 text-gray-700 leading-relaxed">
          Create a detailed video explaining how to build logic in React.
        </p>

        {/* 🎯 Action Buttons */}
        <div className="flex justify-center gap-3 pb-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-3 py-2 rounded-lg shadow-sm transition-all duration-200">
            Mark As Completed
          </button>

          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
            Mark As Failed
          </button>
        </div>
      </div>

    </div>
  );
}

export default AcceptTask;
