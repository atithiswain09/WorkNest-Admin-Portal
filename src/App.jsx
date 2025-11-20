// importing Login component from the Auth folder
import Login from "./components/Auth/Login";

// importing Signup component from the Auth folder
import Signup from "./components/Auth/Signup";

// importing React hooks: useContext (to read Context Data),
// useEffect (to run code once when component loads), useState (to store values)
import { useContext, useEffect, useState } from "react";

// importing Routes and Route from react-router-dom so that we can create multiple pages
import { Routes, Route } from "react-router-dom";

// importing Employee Dashboard page
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

// importing Admin Dashboard page
import AdminDashboards from "./components/Dashboard/AdminDashboards";

// importing AuthProvider (which provides data to all components)
// NOT using it here directly but it is used in index.js to wrap App
import AuthProvider from "./context/AuthProvider";

// importing AuthContext to get stored employees/admin data
import AuthContext from "./context/AuthContext";

// starting our App component
function App() {

  // useState to store which user is currently logged in (admin / employee / null)
  // `null` means nobody is logged in yet
  const [user, setUser] = useState(null);

  //* why we created setUser?
  //* ➤ Because based on user type (admin/employee), we will show different dashboard

  // get all data stored inside AuthContext (employees, admin data etc.)
  const AuthData = useContext(AuthContext);

  // just printing the AuthData to check in browser console
  console.log(AuthData);

  // useEffect → runs when AuthData changes.
  // Purpose: If a user already logged in earlier, we don't want login again.
  useEffect(() => {

    // If AuthData is available (not null)
    if (AuthData) {

      // read "loggedInUser" from localStorage (saved logged-in info)
      const loggedInUser = localStorage.getItem("loggedInUser");

      // if something was stored in localStorage
      if (loggedInUser) {

        // convert it back from string to object and update user type
        setUser(JSON.parse(loggedInUser).role);
      }
    }
  }, [AuthData]);
  // means this effect runs only when AuthData changes

  // -------- Creating a login function -------- //
  // runs when user clicks Login Button
  const handleLogin = (email, password) => {

    // if email and password matches admin login
    if (email == "admin@me.com" && password == "123") {
      setUser("admin"); // set logged in user type admin

      // store admin user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));

    } 
    // else if email & password matches any employee record inside AuthData
    else if (
      AuthData &&
      AuthData.employees?.find(
        (e) => e.email === email && e.password === password
      )
    ) {
      // valid employee login
      setUser("employee");

      // store employee login details
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));

    } else {
      // login failed
      alert("Invalid UserName, password!!!");
    }
  };

  return (
    <div>

      {/* If no user is logged in, show login/signup pages */}
      {!user ? (
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        // If logged-in user is admin → show Admin Dashboard
      ) : user === "admin" ? (
        <AdminDashboards />

        // Otherwise show Employee Dashboard
      ) : (
        <EmployeeDashboard />
      )}
    </div>
  );
}

// exporting App so we can use it in index.js
export default App;
