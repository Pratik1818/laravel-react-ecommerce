// src/pages/Home.jsx

import Banner from '../components/home/Banner';
import FeaturedCategories from '../components/home/FeaturedCategories';
import TrendingProducts from '../components/home/TrendingProducts';

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedCategories />
      <TrendingProducts />
    </div>
  );
}
