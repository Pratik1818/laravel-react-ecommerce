import React from "react";
import "../../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container d-flex justify-content-between">
        <div>
          <h4 className="mb-3">LOGO</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Newsletter</h5>
          <div className="d-flex">
            <input type="email" placeholder="Email" className="form-control me-2" />
            <button className="btn btn-danger">Subscribe</button>
          </div>
          <div className="mt-3">
            <i className="bi bi-facebook me-3"></i>
            <i className="bi bi-twitter me-3"></i>
            <i className="bi bi-instagram me-3"></i>
            <i className="bi bi-google"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
