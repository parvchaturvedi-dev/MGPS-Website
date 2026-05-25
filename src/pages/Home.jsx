import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Popup from "../components/Popup";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatWeOffer from "../components/WhatWeOffer";
import HorizontalScrollText from "../components/HorizontalScrollText";
import HomeGallery from "../components/HomeGallery";
import StatsSection from "../components/StatsSection";
import VoicesAndLegacy from "../components/VoicesAndLegacy";
import Marquee from "../components/Marquee";
import FullFooter from "../components/Footer";

const Home = () => {
  return (
    <>
      <Popup /> {/* 👈 ye sabse upar */}
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <WhatWeOffer />
      <HorizontalScrollText />
      <HomeGallery />
      <StatsSection />
      <VoicesAndLegacy />
      <Marquee />
      <FullFooter />
    </>
  );
};

export default Home;
