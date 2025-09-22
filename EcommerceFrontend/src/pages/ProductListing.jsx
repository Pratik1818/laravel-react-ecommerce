import React, { useState } from "react";
import Sidebar from "../components/productlisting/Sidebar";

// Example ProductCard component for grid view
function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.image || "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text mb-2">${product.price}{" "}
          <span className="text-muted text-decoration-line-through">
            ${product.oldPrice}
          </span>
        </p>
        <button className="btn btn-primary mt-auto">Add to Cart</button>
      </div>
    </div>
  );
}

function ProductListing() {
  const [view, setView] = useState("grid"); // grid or list

  // Example product data (later fetch from API)
  const products = [
    { id: 1, name: "Product 1", price: 200, oldPrice: 300, description: "High-quality product 1" },
    { id: 2, name: "Product 2", price: 200, oldPrice: 390, description: "High-quality product 2" },
    { id: 3, name: "Product 3", price: 150, oldPrice: 200, description: "High-quality product 3" },
    { id: 4, name: "Product 4", price: 250, oldPrice: 300, description: "High-quality product 4" },
  ];

  return (
    <div className="container-fluid my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-lg-9">
          {/* Header with sort and view toggle */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            <h3>Shop</h3>
            <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
              {/* Sort dropdown */}
              <select className="form-select w-auto">
                <option>Price Low-High</option>
                <option>Price High-Low</option>
                <option>Newest</option>
              </select>

              {/* View toggle buttons */}
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-outline-secondary ${view === "grid" ? "active" : ""}`}
                  onClick={() => setView("grid")}
                >
                  Grid
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-secondary ${view === "list" ? "active" : ""}`}
                  onClick={() => setView("list")}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          {view === "grid" ? (
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-view">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="d-flex align-items-center mb-3 p-3 border rounded"
                >
                  <img
                    src={product.image || "https://via.placeholder.com/150"}
                    alt={product.name}
                    className="me-3"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                  <div>
                    <h5>{product.name}</h5>
                    <p className="mb-1">{product.description}</p>
                    <p className="mb-0">
                      <strong>${product.price}</strong>{" "}
                      <span className="text-muted text-decoration-line-through">
                        ${product.oldPrice}
                      </span>
                    </p>
                    <button className="btn btn-dark mt-2">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
