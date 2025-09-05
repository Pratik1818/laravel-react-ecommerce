import React from "react";
import "../../assets/styles/card.css"; // use the same CSS as products

import electronicsImg from "../../assets/images/categories/electronics.jpg";
import fashionImg from "../../assets/images/categories/fashion.jpg";
import homeKitchenImg from "../../assets/images/categories/home_kitchen.jpg";
import beautyImg from "../../assets/images/categories/beauty.jpg";

function FeaturedCategories() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Featured Categories</h2>
      <div className="row">

        {/* Electronics */}
        <div className="col-md-3">
          <div className="custom-card">
            <img src={electronicsImg} alt="Electronics" className="custom-img" />
            <p className="mt-2 fw-bold">Electronics</p>
          </div>
        </div>

        {/* Fashion */}
        <div className="col-md-3">
          <div className="custom-card">
            <img src={fashionImg} alt="Fashion" className="custom-img" />
            <p className="mt-2 fw-bold">Fashion</p>
          </div>
        </div>

        {/* Home & Kitchen */}
        <div className="col-md-3">
          <div className="custom-card">
            <img src={homeKitchenImg} alt="Home & Kitchen" className="custom-img" />
            <p className="mt-2 fw-bold">Home & Kitchen</p>
          </div>
        </div>

        {/* Beauty */}
        <div className="col-md-3">
          <div className="custom-card">
            <img src={beautyImg} alt="Beauty" className="custom-img" />
            <p className="mt-2 fw-bold">Beauty</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedCategories;
