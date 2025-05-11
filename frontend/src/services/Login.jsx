import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [esewaId, setEsewaId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        { esewaId }, // send esewaId as body
        { withCredentials: true }
      );

      const sessionToken = res.data.sessionToken;

      if (sessionToken) {
        localStorage.setItem("sessionToken", sessionToken); // Store token locally
        alert("Login successful!");
        navigate("/"); // redirect to dashboard or home
      } else {
        setMessage("Session token not received.");
      }
    } catch (err) {
      console.error("Login error", err);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          name="esewaId"
          placeholder="Enter your eSewa ID"
          value={esewaId}
          onChange={(e) => setEsewaId(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-red-500">{message}</p>
      )}
    </div>
  );
};

export default Login;
