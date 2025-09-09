import React, { useState } from "react";
import { Card } from "react-bootstrap";
import API from "../api/api.jsx"; 

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error for this field while typing
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
      const newErrors = {};

      if (!form.firstName.trim()) newErrors.firstName = "First name is required";
      if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

      if (!form.email.trim()) newErrors.email = "Email is required";
      else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(form.email))
          newErrors.email = "Invalid email address";
      }

      if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
      else if (!/^\d{10}$/.test(form.mobile))
        newErrors.mobile = "Mobile number must be 10 digits";

      if (!form.password) newErrors.password = "Password is required";
      else if (form.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";

      if (!form.confirmPassword)
        newErrors.confirmPassword = "Please confirm your password";
      else if (form.password !== form.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";

      return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
  
      const response = await API.post("/register", form);
      console.log("Registration successful:", response.data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center px-3"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #eef2f3, #d9e4ec)",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Card
        className="p-4 shadow border-0 w-100"
        style={{ maxWidth: "500px", borderRadius: "12px" }}
      >
        <h2 className="mb-3 text-center fw-bold text-dark">Create Account</h2>
        <p className="text-center text-muted mb-4">
          Fill in your details below to register
        </p>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName}</div>
            )}
          </div>

          {/* Email */}
          <div className="form-floating mb-3">
            <input
              type="text"
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Mobile */}
          <div className="form-floating mb-3">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
            />
            <label htmlFor="mobile">Mobile Number</label>
            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
          </div>

          {/* Password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-floating mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            {errors.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            )}
          </div>

          {/* Submit */}
          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-dark btn-lg">
              Register
            </button>
          </div>

          <p className="text-center mt-3 text-muted">
            Already have an account?{" "}
            <a href="/login" className="fw-semibold text-dark">
              Login here
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Register;
