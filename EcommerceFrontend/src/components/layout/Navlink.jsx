import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/navbar.css";

const categories = [
  {
    name: "BREAKROOM",
    subcategories: [
      {
        name: "Appliances",
        subcategories: [],
      },
      {
        name: "Beverage Supplies",
        subcategories: [
          { name: "Ice Buckets" },
          { name: "Stirrers" },
          { name: "Straws" },
          { name: "Water Dispensers & Filters" },
        ],
      },
      { name: "Beverages" },
      { name: "Coffee & Coffee Supplies" },
      { name: "Food & Condiments" },
      { name: "Foodservice Supplies" },
      { name: "Tableware" },
    ],
  },
  {
    name: "JANITORIAL & FACILITY SUPPLIES",
    subcategories: [],
  },
  {
    name: "SAFETY & PPE",
    subcategories: [],
  },
  {
    name: "FURNITURE & INTERIORS",
    subcategories: [],
  },
  {
    name: "OFFICE SUPPLIES",
    subcategories: [],
  },
  {
    name: "TECHNOLOGY",
    subcategories: [],
  },
  {
    name: "SCHOOL SUPPLIES",
    subcategories: [],
  },
];

function Navlink() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  return (
    <div className="navbar-container">
      <ul className="main-menu">
        {categories.map((cat, i) => (
          <li
            key={i}
            className={`menu-item ${activeCategory === i ? "active" : ""}`}
            onMouseEnter={() => setActiveCategory(i)}
            onMouseLeave={() => {
              setActiveCategory(null);
              setActiveSub(null);
            }}
          >
            <span>{cat.name}</span>

            {cat.subcategories.length > 0 && (
              <ul className="submenu">
                {cat.subcategories.map((sub, j) => (
                  <li
                    key={j}
                    className={`submenu-item ${
                      activeSub === j ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSub(j)}
                    onMouseLeave={() => setActiveSub(null)}
                  >
                    <span>{sub.name}</span>

                    {sub.subcategories && sub.subcategories.length > 0 && (
                      <ul className="nested-submenu">
                        {sub.subcategories.map((nested, k) => (
                          <li key={k}>
                            <Link to="#">{nested.name}</Link>
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
