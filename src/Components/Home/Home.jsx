import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import ResturentData from "../Resturent/ResturentData/ResturentData";
import HeroSection from "./Herosection/HeroSection";
import TopSlider from "./TopSlider/TopSlider ";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <HeroSection></HeroSection>
      <HomeCard></HomeCard>
      <ResturentData></ResturentData>
    </div>
  );
};

export default Home;
