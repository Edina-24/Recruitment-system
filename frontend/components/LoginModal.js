// LoginModal.js
import React, { useState } from "react";
import "./LoginModal.css";
import { useNavigate } from "react-router-dom";

function LoginModal() {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={() => navigate(-1)}>×</button>

        <div className="tab-header">
          <button
            className={activeTab === "student" ? "tab active" : "tab"}
            onClick={() => setActiveTab("student")}
          >
            Student
          </button>
          <button
            className={activeTab === "employer" ? "tab active" : "tab"}
            onClick={() => setActiveTab("employer")}
          >
            Employer / T&P
          </button>
        </div>

        <button className="google-login-btn">
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="google"
          />
          Login with Google
        </button>

        <div className="or-divider">OR</div>

        <input
          type="email"
          placeholder="john@example.com"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Must be at least 6 characters"
          className="login-input"
        />
        <a href="#" className="forgot-password">Forgot password?</a>

        <button className="blue-login-btn">Login</button>

        <p className="bottom-register-text">
          New to Internshala? Register (
          <a href="#">Student</a> / <a href="#">Company</a>)
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
