import React from "react";
import "../../assets/styles/product.css";

// Import the same images
import handbagsImg from "../../assets/images/products/handbags.jpg";
import smartwatchImg from "../../assets/images/products/smartwatch.jpg";
import sneakersImg from "../../assets/images/products/sneakers.jpg";
import wireless_onImg from "../../assets/images/products/wireless_on.jpg";

const RelatedProducts = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Related Products</h2>
      <div className="row text-center">
        {/* Smartwatch */}
        <div className="col-md-3">
          <div className="card p-3">
            <img src={smartwatchImg} alt="Smartwatch" className="product-img" />
            <h5 className="mt-3">Smartwatch</h5>
            <p>$199.99</p>
          </div>
        </div>

        {/* Sneakers */}
        <div className="col-md-3">
          <div className="card p-3">
            <img src={sneakersImg} alt="Sneakers" className="product-img" />
            <h5 className="mt-3">Sneaker</h5>
            <p>$79.99</p>
          </div>
        </div>

        {/* Handbags */}
        <div className="col-md-3">
          <div className="card p-3">
            <img src={handbagsImg} alt="Handbags" className="product-img" />
            <h5 className="mt-3">Handbag</h5>
            <p>$129.99</p>
          </div>
        </div>

        {/* Wireless On */}
        <div className="col-md-3">
          <div className="card p-3">
            <img src={wireless_onImg} alt="Wireless On" className="product-img" />
            <h5 className="mt-3">Wireless On</h5>
            <p>$99.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
