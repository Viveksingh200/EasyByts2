import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Optional styling


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/login", formData);
      setSuccess(res.data.message);
      setError("");
      setFormData({ email: "", password: "" });

      window.location.href = "https://viveksingh200.github.io/ZerodhaClone/";

    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
      setSuccess("");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}
    </div>
  );
};

export default Login;
