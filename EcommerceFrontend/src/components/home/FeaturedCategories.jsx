import React from "react";
import "../../assets/styles/category.css";

import electronicsImg from "../../assets/images/categories/electronics.jpg";
import fashionImg from "../../assets/images/categories/fashion.jpg";
import homeKitchenImg from "../../assets/images/categories/home_kitchen.jpg";
import beautyImg from "../../assets/images/categories/beauty.jpg";

function FeaturedCategories() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Featured Categories</h2>
      <div className="row text-center">
        
        {/* Electronics */}
        <div className="col-md-3">
          <div className="category-card">
            <img src={electronicsImg} alt="Electronics" className="img-fluid" />
            <p>Electronics</p>
          </div>
        </div>

        {/* Fashion */}
        <div className="col-md-3">
          <div className="category-card">
            <img src={fashionImg} alt="Fashion" className="img-fluid" />
            <p>Fashion</p>
          </div>
        </div>

        {/* Home & Kitchen */}
        <div className="col-md-3">
          <div className="category-card">
            <img src={homeKitchenImg} alt="Home & Kitchen" className="img-fluid" />
            <p>Home & Kitchen</p>
          </div>
        </div>

        {/* Beauty */}
        <div className="col-md-3">
          <div className="category-card">
            <img src={beautyImg} alt="Beauty" className="img-fluid" />
            <p>Beauty</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedCategories;
