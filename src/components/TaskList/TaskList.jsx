import React from "react";

function TaskList() {
  return (
    <div
      id="tasklist"
      className="w-full h-auto cursor-pointer overflow-x-auto flex gap-6 py-6 px-4 mt-10"
    >

      {/* HIGH PRIORITY */}
      <div className="min-w-[300px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#fff1f0] to-[#ffe3e3] border border-red-200">
        <div className="flex items-center justify-between p-4">
          <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">
            High
          </span>
          <span className="text-sm text-gray-600 font-medium">17 Nov 2025</span>
        </div>
        <h2 className="px-4 text-lg font-bold text-gray-900">
          Make A Youtube Video
        </h2>
        <p className="text-sm px-4 pb-4 mt-1 text-gray-700 leading-relaxed">
          Create a detailed video explaining how to build logic in React.
        </p>
      </div>

      {/* MEDIUM PRIORITY */}
      <div className="min-w-[300px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#fff7e6] to-[#ffedcc] border border-amber-200">
        <div className="flex items-center justify-between p-4">
          <span className="text-xs bg-amber-500 text-white px-3 py-1 rounded-lg font-semibold">
            Medium
          </span>
          <span className="text-sm text-gray-700 font-medium">20 Nov 2025</span>
        </div>
        <h2 className="px-4 text-lg font-bold text-gray-900">
          Revise React Hooks
        </h2>
        <p className="text-sm px-4 pb-4 mt-1 text-gray-700 leading-relaxed">
          Practice useEffect, useContext, and custom hooks deeply.
        </p>
      </div>

      {/* LOW PRIORITY */}
      <div className="min-w-[300px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#e6fff4] to-[#ccffea] border border-green-200">
        <div className="flex items-center justify-between p-4">
          <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-lg font-semibold">
            Low
          </span>
          <span className="text-sm text-gray-700 font-medium">25 Nov 2025</span>
        </div>
        <h2 className="px-4 text-lg font-bold text-gray-900">
          Plan Next Project
        </h2>
        <p className="text-sm px-4 pb-4 mt-1 text-gray-700 leading-relaxed">
          Decide next project with MERN stack features.
        </p>
      </div>

    </div>
  );
}

export default TaskList;
