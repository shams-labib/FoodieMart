import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import ResturentData from "../Resturent/ResturentData/ResturentData";
import HeroSection from "./Herosection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeCard></HomeCard>
      <ResturentData></ResturentData>
    </div>
  );
};

export default Home;
