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
import InfoSection from "../Blog/TopSellerBurgers";
import SupportPage from "../Help/Help";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <HeroSection></HeroSection>
      <HomeCard></HomeCard>
      <section id="upcoming">
        <ResturentData></ResturentData>
      </section>
      <InfoSection></InfoSection>3
      <section id="about">
        <AboutUs></AboutUs>
      </section>
      <Services></Services>
      <FloatingContact></FloatingContact>
      <section id="more-info">
        <NewsletterSection></NewsletterSection>
      </section>
      <StatsSection></StatsSection>
      <section id="contact">
        <SupportPage></SupportPage>
      </section>
    </div>
  );
};

export default Home;
