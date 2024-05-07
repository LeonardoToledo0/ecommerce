import React from "react";
import Carrousel from "@/components/Carrousel";
import Navbar from "@/components/NavBar";
import OfertasCarrousel from "@/components/OfertasCarrousel";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <Carrousel />
      <OfertasCarrousel />
    </>
  );
};

export default Index;
