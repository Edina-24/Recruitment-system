import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    // In real app: send data to backend API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <img
  src="/recruitlogo.png"
  alt="App logo"
  className="logo"
/>
      </header>

      <div className="signup-box">
        {submitted ? (
          <div className="success-message">
            <h2>Welcome, {formData.name} 🎉</h2>
            <p>You’ve successfully signed up with: {formData.email}</p>
          </div>
        ) : (
          <>
            <h1>
              Sign-up and apply <span className="underline">for free</span>
            </h1>
            <p className="subtitle">3,00,000+ companies hiring on Internshala</p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Create Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" className="email-btn">
                ✉️ Sign up with Email
              </button>
            </form>

            <p className="terms">
              By signing up, you agree to our{" "}
              <a href="#">Terms and Conditions</a>.
            </p>

            <p className="login-text">
              Already registered? <a href="#">Login</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
