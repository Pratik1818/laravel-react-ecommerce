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
    <div className="d-flex justify-content-center bg-light py-5 px-3">
      <Card
        className="p-4 shadow-lg border-0 w-100"
        style={{ maxWidth: "700px", borderRadius: "15px" }}
      >
        {/* Title */}
        <h2 className="mb-3 text-center fw-bold text-primary">Create Account</h2>
        <p className="text-center text-muted mb-4">
          Join us today! Please fill in the details below.
        </p>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="row mb-3 align-items-center">
            <label
              htmlFor="first_name"
              className="col-sm-3 col-form-label fw-semibold"
            >
              First Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
                placeholder="Enter first name"
                value={form.first_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="row mb-3 align-items-center">
            <label
              htmlFor="last_name"
              className="col-sm-3 col-form-label fw-semibold"
            >
              Last Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
                placeholder="Enter last name"
                value={form.last_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="row mb-3 align-items-center">
            <label
              htmlFor="email"
              className="col-sm-3 col-form-label fw-semibold"
            >
              Email
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="row mb-3 align-items-center">
            <label
              htmlFor="mobile"
              className="col-sm-3 col-form-label fw-semibold"
            >
              Mobile
            </label>
            <div className="col-sm-9">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="form-control"
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                value={form.mobile}
                onChange={handleChange}
                required
              />
              <small className="text-muted">Example: 9876543210</small>
            </div>
          </div>

          {/* Password */}
          <div className="row mb-3 align-items-center">
            <label
              htmlFor="password"
              className="col-sm-3 col-form-label fw-semibold"
            >
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="row mb-4 align-items-center">
            <label
              htmlFor="confirmPassword"
              className="col-sm-3 col-form-label fw-semibold"
            >
              Confirm
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                placeholder="Re-enter password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Register
            </button>
          </div>

          {/* Already have account */}
          <p className="text-center mt-3 text-muted">
            Already have an account?{" "}
            <a href="/login" className="text-primary fw-semibold">
              Login here
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Register;
