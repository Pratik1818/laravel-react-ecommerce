import React, { useState } from "react";
import { Card } from "react-bootstrap";

function Register() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", form);
    // TODO: call your backend API
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
              id="first_name"
              name="first_name"
              className="form-control"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
            <label htmlFor="first_name">First Name</label>
          </div>

          {/* Last Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="form-control"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              required
            />
            <label htmlFor="last_name">Last Name</label>
          </div>

          {/* Email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          {/* Mobile */}
          <div className="form-floating mb-3">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="form-control"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              value={form.mobile}
              onChange={handleChange}
              required
            />
            <label htmlFor="mobile">Mobile Number</label>
          </div>

          {/* Password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* Confirm Password */}
          <div className="form-floating mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
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
