import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      toast.error("Passwords do not match!", {
        position: "top-center",
        autoClose: 900,
        style: { background: "black", color: "white" },
      });
      return;
    }

    toast.success("Account Created Successfully!", {
      position: "top-center",
      autoClose: 900,
      theme: "dark",
    });

    setEmail("");
    setPhone("");
    setPassword("");
    setCPassword("");
  };

  return (
    <>
      <ToastContainer />

      {/* 🌟 FULL PAGE CENTER (Responsive padding) */}
      <div className="flex items-center justify-center min-h-screen w-full bg-black px-4">

        {/* 🌟 Responsive Box */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8 w-full max-w-sm flex flex-col items-center">

          <img
            src="/Logo1.png"
            alt="WorkNest Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl mb-4"
          />

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-1 text-center">
            Create Account
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mb-6 text-center">
            Signup to continue
          </p>

          {/* 🌟 Form */}
          <form onSubmit={handleSignup} className="flex flex-col gap-4 w-full">

            <input
              required
              type="email"
              placeholder="Enter your email"
              className="border border-gray-700 bg-gray-800 text-white text-sm sm:text-base rounded-lg py-2.5 px-4 
              focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              required
              type="tel"
              placeholder="Enter your phone number"
              className="border border-gray-700 bg-gray-800 text-white text-sm sm:text-base rounded-lg py-2.5 px-4 
              focus:ring-2 focus:ring-blue-500 outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              required
              type="password"
              placeholder="Create password"
              className="border border-gray-700 bg-gray-800 text-white text-sm sm:text-base rounded-lg py-2.5 px-4 
              focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              required
              type="password"
              placeholder="Confirm password"
              className="border border-gray-700 bg-gray-800 text-white text-sm sm:text-base rounded-lg py-2.5 px-4 
              focus:ring-2 focus:ring-blue-500 outline-none"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />

            {/* Signup button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-base py-2.5 
              rounded-lg transition"
            >
              Create Account
            </button>
          </form>

          {/* Go to login */}
          <button
            onClick={() => navigate("/Login")}
            className="text-blue-400 mt-4 hover:underline text-sm sm:text-base"
          >
            Already have an account? Login
          </button>

        </div>
      </div>
    </>
  );
}

export default Signup;
