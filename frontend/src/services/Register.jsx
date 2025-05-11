import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    esewaId: "",
    electricityId: "",
    waterId: "",
    wifiId: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        formData,
        { withCredentials: true }
      );
      alert("Registered successfully!");
      console.log(res.data);
    } catch (err) {
      console.log("registration error", err);
      setMessage(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-md border mt-10">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="esewaId"
          placeholder="eSewa ID"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <hr className="my-2" />

        <input
          type="text"
          name="electricityId"
          placeholder="Electricity ID"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="waterId"
          placeholder="Water ID"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="wifiId"
          placeholder="WiFi ID"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default Register;
