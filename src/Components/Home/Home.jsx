import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import ResturentData from "../Resturent/ResturentData/ResturentData";
import HeroSection from "./Herosection/HeroSection";
import TopSlider from "./TopSlider/TopSlider ";
import FloatingContact from "../FloatingContact/FloatingContact ";
import AboutUs from "../../Pages/About Us/AboutUs";
import Services from "../../Pages/Services/Services";
import NewsletterSection from "../../Pages/NewsletterSection/NewsletterSection";
import StatsSection from "../../Pages/StatsSection/StatsSection";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <HeroSection></HeroSection>
      <HomeCard></HomeCard>
      <ResturentData></ResturentData>
      <AboutUs></AboutUs>
      <Services></Services>
      <FloatingContact></FloatingContact>
      <NewsletterSection></NewsletterSection>
      <StatsSection></StatsSection>
    </div>
  );
};

export default Home;
