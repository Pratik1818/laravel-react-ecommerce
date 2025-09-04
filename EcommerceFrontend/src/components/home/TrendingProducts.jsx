import React from "react";

const products = [
  { name: "Smartwatch", price: "$199.99", img: "/images/watch.jpg" },
  { name: "Sneaker", price: "$79.99", img: "/images/sneaker.jpg" },
  { name: "Handbag", price: "$129.99", img: "/images/handbag.jpg" },
  { name: "Wireless On", price: "$99.99", img: "/images/headphone.jpg" },
];

function TrendingProducts() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Trending Products</h2>
      <div className="row text-center">
        {products.map((product, index) => (
          <div className="col-md-3" key={index}>
            <div className="card p-3">
              <img src={product.img} alt={product.name} className="img-fluid" />
              <h5 className="mt-3">{product.name}</h5>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
