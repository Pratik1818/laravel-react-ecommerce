import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Banner from "./components/home/Banner.jsx";
import FeaturedCategories from "./components/home/FeaturedCategories";
import TrendingProducts from "./components/home/TrendingProducts";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <FeaturedCategories />
        <TrendingProducts />
      </main>
      <Footer />
    </>
  );
}

export default App;
