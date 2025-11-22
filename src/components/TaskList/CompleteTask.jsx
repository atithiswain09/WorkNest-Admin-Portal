import React from "react";

function CompleteTask() {
  return (
    <div className="max-w-[330px] mx-auto mt-6">

      <div className="min-w-[300px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#e6fff4] to-[#ccffea] border border-green-200">

        {/* 🟢 Priority + Date */}
        <div className="flex items-center justify-between p-4">
          <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-lg font-semibold">
            Low
          </span>
          <span className="text-sm text-gray-700 font-medium">28 Nov 2025</span>
        </div>

        {/* 📌 Title */}
        <h2 className="px-4 text-lg font-bold text-gray-900">
          Completed Landing Page
        </h2>

        {/* 📖 Description */}
        <p className="text-sm px-4 pb-4 mt-1 text-gray-700 leading-relaxed">
          Successfully built a responsive landing page using React and Tailwind.
        </p>

        {/* 🎯 Completed Button */}
        <div className="flex justify-center pb-4">
          <button className="bg-gray-500 cursor-default text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-sm">
            Completed
          </button>
        </div>
      </div>

    </div>
  );
}

export default CompleteTask;
