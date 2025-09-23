import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../assets/styles/navbar.css";

function Navlink() {
  const [categories, setCategories] = useState([]);
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
            <span>{cat.category_name}</span>

            {/* Show submenu only when hovering main category */}
            {activeCategory === i && cat.subcategories?.length > 0 && (
              <ul className="submenu">
                {cat.subcategories.map((sub, j) => (
                  <li
                    key={sub.id}
                    className={`submenu-item ${
                      activeSub === j ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSub(j)}
                    onMouseLeave={() => setActiveSub(null)}
                  >
                    <span>{sub.category_name}</span>

                    {/* Show nested submenu only when hovering subcategory */}
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
    </div>
  );
}

export default Navlink;
