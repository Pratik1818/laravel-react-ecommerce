import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api"; 
import "../assets/styles/categoryPreview.css";

function CategoryPreviewPage() {
  const { id } = useParams(); // gets id from route
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [breadcrumbs, setBreadcrumbs] = useState([{ name: "Home", id: null }]);

  // one reusable fetch function
  const fetchCategoryProducts = async ( ) => {
    try {
      setLoading(true);

      const targetId = id;
      const res = await API.get(`/category-products/${targetId}`);

      setProducts(res.data.data || []);

    } catch (err) {
      console.error("Error fetching category products:", err);
    } finally {
      setLoading(false);
    }
  };

  // initial load
  useEffect(() => {
    fetchCategoryProducts();
  }, [id]);

  if (loading) return <p>Loading category...</p>;

  return (
    <div className="category-preview-page mt-5 mb-5">
      {/* ✅ Breadcrumb
      <div className="breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <span key={index} className="breadcrumb-item">
            {crumb.id ? (
              <span
                onClick={() => {
                  // navigate + reset breadcrumbs up to this level
                  navigate(`/category/${crumb.id}`);
                  setBreadcrumbs(breadcrumbs.slice(0, index + 1));
                }}
              >
                {crumb.name}
              </span>
            ) : (
              <span onClick={() => navigate("/")}>{crumb.name}</span>
            )}
            {index < breadcrumbs.length - 1 && " > "}
          </span>
        ))}
      </div> */}

      {/* Products grid */}
      {products.length === 0 ? (
        <div className="no-products-card">
          <div className="no-products-icon">🛒</div>
          <h3>No Products Found</h3>
          <p>Looks like this category is empty. Check back later!</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((item) => (
            <div
              key={item.subcategory_id}
              className="product-card"
              onClick={() =>
                navigate(`/category/${item.subcategory_id}`)
              }
            >
              {item.product?.image_url && (
                <img
                  src={item.product.image_url}
                  alt={item.product.product_name}
                  className="product-image"
                />
              )}
              <p className="product-name">{item.product.product_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPreviewPage;
