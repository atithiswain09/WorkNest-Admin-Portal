  // import Login from "./components/Auth/Login"
  // import Signup from "./components/Auth/Signup"
  // import { Routes, Route } from "react-router-dom";
  //  import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
  import AdminDashboards from "./components/Dashboard/AdminDashboards"
function App() {
  return (
    <div>
       {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>  */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboards/>
    </div>
  )
}

export default App