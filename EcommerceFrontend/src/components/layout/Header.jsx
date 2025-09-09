import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/header.css";


function Header() {
  return (
    <header className="header shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">

          {/* Logo */}
          <Link to="/" className="navbar-brand logo fw-bold">LOGO</Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarNav">

            {/* Search bar */}
<div className="d-flex flex-grow-1 justify-content-center my-2 my-lg-0">
  <div className="search-container">
    <input
      type="text"
      className="search-input form-control"
      placeholder="Search"
    />
    <i className="bi bi-search search-icon"></i>
  </div>
</div>


            {/* Right section */}
            <div className="d-flex align-items-center ms-lg-auto mt-2 mt-lg-0">
              
              <a href="#" className="btn btn-dark me-2">EN</a>

              {/* Login / Register Buttons*/}
              <Link to="/login" className="btn btn-dark me-2" >Login</Link>
              <Link to="/register" className="btn btn-dark me-2">Register</Link>
              {/* Heart Icon */}
              <i className="bi bi-heart mx-2 fs-5"></i>

              {/* Cart Icon with badge */}
              <div className="position-relative mx-2">
                <i className="bi bi-cart-fill fs-5"></i>
                <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">
                  2
                </span>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
