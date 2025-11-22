import React from "react";

function TaskListNumber({data}) {
  console.log(data)
  return (
    <div className="grid cursor-pointer  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      
      {/* New Task */}
      <div className="bg-gradient-to-br from-[#2b2f36] to-[#1c1f24] border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-lg">
        <h2 className="font-extrabold text-5xl text-red-400 drop-shadow-sm">{data.taskCounts
.active}</h2>
        <h3 className="font-semibold text-lg text-gray-200 mt-2 tracking-wide">New Task</h3>
      </div>

      {/* Completed */}
      <div className="bg-gradient-to-br from-[#2b2f36] to-[#1c1f24] border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-lg">
        <h2 className="font-extrabold text-5xl text-green-400 drop-shadow-sm">{data.taskCounts
.newTask}</h2>
        <h3 className="font-semibold text-lg text-gray-200 mt-2 tracking-wide">Completed</h3>
      </div>

      {/* Accepted */}
      <div className="bg-gradient-to-br from-[#2b2f36] to-[#1c1f24] border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-lg">
        <h2 className="font-extrabold text-5xl text-yellow-400 drop-shadow-sm">{data.taskCounts
.completed}</h2>
        <h3 className="font-semibold text-lg text-gray-200 mt-2 tracking-wide">NewTask</h3>
      </div>

      {/* Failed */}  
      <div className="bg-gradient-to-br from-[#2b2f36] to-[#1c1f24] border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-lg">
        <h2 className="font-extrabold text-5xl text-blue-400 drop-shadow-sm">{data.taskCounts
.failed}</h2>
        <h3 className="font-semibold text-lg text-gray-200 mt-2 tracking-wide">Failed</h3>
      </div>

    </div>
  );
}

export default TaskListNumber;
