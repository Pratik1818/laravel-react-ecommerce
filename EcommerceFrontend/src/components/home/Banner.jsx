import React from "react";
import "../../assets/styles/home.css";

function Banner() {
  return (
     <section className="banner text-center">
       <div className="banner-content">
         <h1>Discover the Best Deals Today</h1>
         <p>Shop the latest trends at unbeatable prices</p>
        <button className="btn btn-danger">Shop Now</button>
       </div>
     </section>
  );
}

export default Banner;
