import React from "react";
import HeroSection from "./hero/HeroSection";
import BestDeals from "./bestdeals/BestDeals";
import RecDeals from "./recommended/RecDeals";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BestDeals />
      <RecDeals />
    </div>
  );
};

export default Home;
