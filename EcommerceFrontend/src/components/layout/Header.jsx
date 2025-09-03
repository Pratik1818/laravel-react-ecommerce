import React from "react";
import "../../assets/styles/header.css";
function Header()
{
    return(
        <header className="header shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand logo" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav mx-auto">
                                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Deals</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                          </ul>
                          <div className="header-icons">
                               <i className="bi bi-search"></i>
                               <i className="bi bi-heart mx-3"></i>
                               <i className="bi bi-cart-fill position-relative">
                                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">2</span>
                               </i>
                          </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;