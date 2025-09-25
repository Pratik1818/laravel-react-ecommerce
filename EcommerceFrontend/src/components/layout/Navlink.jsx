import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../assets/styles/navbar.css";

function Navlink() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [viewType, setViewType] = useState(null); // 'category_preview' or 'product_listing'
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryId) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/category-products/${categoryId}`
      );
      setViewType(res.data.type);
      setProducts(res.data.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  if (loading) {
    return (
      <div className="navbar-container">
        <ul className="main-menu">
          <li className="menu-item">Loading categories...</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="navbar-container">
      <ul className="main-menu">
        {categories.map((cat, i) => (
          <li
            key={cat.category_id}
            className={`menu-item ${activeCategory === i ? "active" : ""}`}
            onMouseEnter={() => setActiveCategory(i)}
            onMouseLeave={() => {
              setActiveCategory(null);
              setActiveSub(null);
            }}
          >
            <span onClick={() => handleCategoryClick(cat.category_id)}>
              {cat.category_name}
            </span>

            {activeCategory === i && cat.subcategories?.length > 0 && (
              <ul className="submenu">
                {cat.subcategories.map((sub, j) => (
                  <li
                    key={sub.id}
                    className={`submenu-item ${activeSub === j ? "active" : ""}`}
                    onMouseEnter={() => setActiveSub(j)}
                    onMouseLeave={() => setActiveSub(null)}
                  >
                    <span>{sub.category_name}</span>
                    {activeSub === j && sub.subcategories?.length > 0 && (
                      <ul className="nested-submenu">
                        {sub.subcategories.map((nested) => (
                          <li key={nested.id}>
                            <Link to="#">{nested.category_name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Category Preview */}
{viewType === "category_preview" && (
  <div className="product-display">
    {products.map((item) => (
      <div key={item.subcategory_id} className="product-card">
        {item.product.images?.[0] && (
          <img
            src={item.product.images[0].image_url}
            alt={item.product.product_name}
            className="product-image"
          />
        )}
        <p className="subcategory-name">{item.subcategory_name}</p>
        <p className="product-name">{item.product.product_name}</p>
      </div>
    ))}
  </div>
)}

{/* Product Listing */}
{viewType === "product_listing" && (
  <div className="product-display">
    {products.map((product) => (
      <div key={product.product_id} className="product-card">
        {product.images?.[0] && (
          <img
            src={product.images[0].image_url}
            alt={product.product_name}
            className="product-image"
          />
        )}
        <p className="product-name">{product.product_name}</p>
        <p className="price">₹{product.price}</p>
      </div>
    ))}
  </div>
)}
</div>
  );
}

export default Navlink;
