import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
function AdminDashboards() {
  return (
    <div className="min-h-screen w-full p-5 bg-black">
      <Header />
      <CreateTask />
      <AllTask/>
    </div>
  );
}

export default AdminDashboards;
