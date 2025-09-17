import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../assets/styles/header.css";
import { isLoggedIn, logout } from "../../util/auth"; // import helper
import CartIcon from "../cart/CartIcon";


function Header() {

  const loggedIn = isLoggedIn();

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

              {/* Heart Icon */}
              {/* <i className="bi bi-heart mx-2 fs-5"></i> */}

              <CartIcon />
              <a href="#" className="btn btn-dark me-2">EN</a>

               {/* If NOT logged in → show Login + Register */}
               {!loggedIn ? (
                <>
                  <Link to="/login" className="btn btn-dark me-2">Login</Link>
                  <Link to="/register" className="btn btn-dark me-2">Register</Link>
                </>
              ) : (
             <Dropdown align="end">
                <Dropdown.Toggle variant="dark" id="accountMenu">
                  👋 Welcome, User
                </Dropdown.Toggle>

                <Dropdown.Menu className="py-2">
                  {/* Account Section */}
                  <Dropdown.Item as={Link} to="/account">
                    <i className="bi bi-person-circle me-2"></i> Edit Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/addresses">
                    <i className="bi bi-geo-alt me-2"></i> Shipping Addresses
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/payment-methods">
                    <i className="bi bi-credit-card me-2"></i> Payment Methods
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  {/* Shopping Section */}
                  <Dropdown.Item as={Link} to="/orders">
                    <i className="bi bi-bag-check me-2"></i> My Orders
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/wishlist">
                    <i className="bi bi-heart me-2"></i> Wishlist
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/cart">
                    <i className="bi bi-cart3 me-2"></i> My Cart
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/returns">
                    <i className="bi bi-arrow-counterclockwise me-2"></i> Returns & Refunds
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  {/* Support Section */}
                  <Dropdown.Item as={Link} to="/support">
                    <i className="bi bi-headset me-2"></i> Help Center
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/track-order">
                    <i className="bi bi-truck me-2"></i> Track Order
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/faq">
                    <i className="bi bi-question-circle me-2"></i> FAQ
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  {/* Logout */}
                  <Dropdown.Item onClick={logout} className="text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
