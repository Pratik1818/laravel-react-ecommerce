import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../../assets/styles/home.css";

import Banner1 from "../../assets/images/banner/Banner1.jpg"; 
import Banner2 from "../../assets/images/banner/Banner2.jpg";
import Banner3 from "../../assets/images/banner/Banner3.jpg";

function Banner() {
  return (
    <section className="d-flex justify-content-center my-5">
      <div className="w-80 position-relative">
        <Carousel fade interval={4000}>
          {[Banner1, Banner2, Banner3].map((banner, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 rounded-3 vh-80 object-fit-cover"
                src={banner}
                alt={`Fashion Slide ${idx + 1}`}
              />
              <Carousel.Caption className="text-center bg-dark bg-opacity-50 p-4 rounded-3">
                <h1 className="fw-bold display-4">
                  {idx === 0
                    ? "Discover the Best Deals Today"
                    : idx === 1
                    ? "New Fashion Arrivals"
                    : "Exclusive Summer Collection"}
                </h1>
                <p className="lead">
                  {idx === 0
                    ? "Shop the latest trends at unbeatable prices"
                    : idx === 1
                    ? "Upgrade your wardrobe with trending styles"
                    : "Bright colors, stylish designs, limited stock!"}
                </p>
                <Button variant="danger" className="px-4 py-2">
                  Shop Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Banner;
