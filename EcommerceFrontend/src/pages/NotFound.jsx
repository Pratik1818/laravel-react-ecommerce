import React from 'react';
import "../assets/styles/notfound.css";

const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-header">Ohh</div>
      <div className="error-content">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/13/13/cartoon-2026518_1280.png"
          alt="404 cartoon"
          className="error-image"
        />
        <h1>404</h1>
        <h2>This Page Not Available</h2>
        <p>Ohh.....You requested the page that is no longer there.</p>
        <a href="/" className="error-button">Back to Home</a>
      </div>
      <div className="error-footer">
        © 2025 Ohh. All Rights Reserved | Design by <a href="https://w3layouts.com" target="_blank" rel="noopener noreferrer">W3Layouts</a>
      </div>
    </div>
  );
};

export default NotFound;
