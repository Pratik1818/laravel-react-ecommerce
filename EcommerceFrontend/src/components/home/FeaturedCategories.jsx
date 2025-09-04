import React from "react";
import "../../assets/styles/category.css";

const categories = [
  { name: "Electronics", img: "../../assets/images/categories/electronics.jpg" },
  { name: "Fashion", img: "../../assets/images/categories/fashion.jpg" },
  { name: "Home & Kitchen", img: "../../assets/images/categories/home&kitchen.jpg" },
  { name: "Beauty", img: "../../assets/images/categories/beauty.jpg" },
];

function FeaturedCategories() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Featured Categories</h2>
      <div className="row text-center">
        {categories.map((cat, index) => (
          <div className="col-md-3" key={index}>
            <div className="category-card">
              <img src={cat.img} alt={cat.name} className="img-fluid" />
              <p>{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategories;
