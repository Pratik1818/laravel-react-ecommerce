import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api"; // your axios instance
import "../assets/styles/categoryPreview.css";

function CategoryPreviewPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await API.get(`/category-products/${id}`);
        setProducts(res.data.data);
        if (res.data.data[0]) {
          setCategoryName(res.data.data[0].subcategory_name);
        }
      } catch (err) {
        console.error("Error fetching category products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryProducts();
  }, [id]);

  if (loading) return <p>Loading category...</p>;

  return (
    <div className="category-preview-page mt-5 mb-5">
     

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.subcategory_id} className="product-card">
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
    </div>
  );
}

export default CategoryPreviewPage;
