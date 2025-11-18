import React from "react";

function TaskListNumber() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

      {/* New Task */}
      <div className="bg-[#1c1f24] border border-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition">
        <h2 className="font-bold text-5xl text-red-400">0</h2>
        <h3 className="font-semibold text-xl text-white mt-2">New Task</h3>
      </div>

      {/* Completed */}
      <div className="bg-[#1c1f24] border border-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition">
        <h2 className="font-bold text-5xl text-green-400">0</h2>
        <h3 className="font-semibold text-xl text-white mt-2">Completed</h3>
      </div>

      {/* Accepted */}
      <div className="bg-[#1c1f24] border border-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition">
        <h2 className="font-bold text-5xl text-yellow-400">0</h2>
        <h3 className="font-semibold text-xl text-white mt-2">Accepted</h3>
      </div>

      {/* Failed */}
      <div className="bg-[#1c1f24] border border-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition">
        <h2 className="font-bold text-5xl text-blue-400">0</h2>
        <h3 className="font-semibold text-xl text-white mt-2">Failed</h3>
      </div>

    </div>
  );
}

export default TaskListNumber;
