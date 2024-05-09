import React from "react";
import Carrousel from "@/components/Carrousel";
import Navbar from "@/components/NavBar";
import OfertasCarrousel from "@/components/OfertasCarousel";
import BannerOfertas from "@/components/BannerOfertas";
import DestaquesCarousel from "@/components/DesataquesCarousel";
import BannerDestaques from "@/components/BannerDestaques";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <Carrousel />
      <OfertasCarrousel />
      <BannerOfertas />
      <DestaquesCarousel />
      <BannerDestaques />
    </>
  );
};

export default Index;
