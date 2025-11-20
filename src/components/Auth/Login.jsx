import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({handleLogin}) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const HandelSubmit = (e) => {
    e.preventDefault();
      handleLogin(email,password)
    toast.success("Login Successful!", {
      position: "top-center",
      autoClose: 800,
      theme: "dark",
    });

    setemail("");
    setpassword("");
  };

  return (
    <>
      <ToastContainer />

      <div className="flex items-center justify-center min-h-screen w-full bg-black px-4">

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8 w-full max-w-sm flex flex-col items-center">

          <img
            src="/Logo1.png"
            alt="WorkNest Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl mb-4"
          />

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 text-center">
            WorkNest Admin
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 mb-6 text-center">
            Login to continue
          </p>

          <form onSubmit={HandelSubmit} className="flex flex-col gap-4 w-full">

            <input
              required
              className="border border-gray-700 bg-gray-800 text-white text-sm sm:text-base rounded-lg py-2.5 px-4 
              outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />

            <input
              required
              className="border border-gray-700 bg-gray-800 text-white text-sm sm:text-base rounded-lg py-2.5 px-4 
              outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-base py-2.5 
              rounded-lg cursor-pointer transition"
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-5 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;
