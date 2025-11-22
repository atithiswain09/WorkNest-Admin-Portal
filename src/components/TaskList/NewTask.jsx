import React from "react";

function NewTask() {
  return (
    <div className="max-w-[330px] mx-auto mt-6">

      <div className="min-w-[300px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#fff7e6] to-[#ffedcc] border border-amber-200">

        {/* 🟡 Priority + Date */}
        <div className="flex items-center justify-between p-4">
          <span className="text-xs bg-amber-500 text-white px-3 py-1 rounded-lg font-semibold">
            Medium
          </span>
          <span className="text-sm text-gray-700 font-medium">20 Nov 2025</span>
        </div>

        {/* 📌 Title */}
        <h2 className="px-4 text-lg font-bold text-gray-900">
          Revise React Hooks
        </h2>

        {/* 📖 Description */}
        <p className="text-sm px-4 pb-4 mt-1 text-gray-700 leading-relaxed">
          Practice useEffect, useContext, and custom hooks deeply.
        </p>

        {/* 🎯 Action Button */}
        <div className="flex justify-center pb-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
            Accept Task
          </button>
        </div>
      </div>

    </div>
  );
}

export default NewTask;
