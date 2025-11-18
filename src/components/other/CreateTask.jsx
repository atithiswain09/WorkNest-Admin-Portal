import React from 'react'

function CreateTask() {
  return (
    <div>
        
      {/* MAIN AREA */}
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-6">

        {/* CARD */}
        <div className="bg-gray-900  border-gray-800 rounded-xl p-6 sm:p-8 w-full max-w-5xl">

          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <img
              src="/Logo1.png"
              alt="WorkNest Logo"
              className="w-20 h-20 rounded-xl"
            />
          </div>

          {/* GRID FORM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT SIDE FIELDS */}
            <div className="flex flex-col gap-5">

              {/* Task Title */}
              <div>
                <label className="text-gray-300 text-sm">Task Title</label>
                <input
                  type="text"
                  placeholder="Make a UI design"
                  className="w-full mt-1 bg-[#1c1f24] border border-gray-700 
                  text-gray-200 px-3 py-2 rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 placeholder-gray-500"
                />
              </div>

              {/* Date */}
              <div>
                <label className="text-gray-300 text-sm">Date</label>
                <input
                  type="date"
                  className="w-full mt-1 bg-[#1c1f24] border border-gray-700 
                  text-gray-200 px-3 py-2 rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Assign To */}
              <div>
                <label className="text-gray-300 text-sm">Assign To</label>
                <input
                  type="text"
                  placeholder="employee name"
                  className="w-full mt-1 bg-[#1c1f24] border border-gray-700 
                  text-gray-200 px-3 py-2 rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 placeholder-gray-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-gray-300 text-sm">Category</label>
                <input
                  type="text"
                  placeholder="design, dev, etc"
                  className="w-full mt-1 bg-[#1c1f24] border border-gray-700 
                  text-gray-200 px-3 py-2 rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 placeholder-gray-500"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-4">

              {/* Description */}
              <div>
                <label className="text-gray-300 text-sm">Description</label>
                <textarea
                  rows="8"
                  className="w-full mt-1 bg-[#1c1f24] border border-gray-700 
                  text-gray-200 px-3 py-2 rounded-lg outline-none resize-none 
                  focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>

              {/* Create Button */}
              <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold transition">
                Create Task
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTask