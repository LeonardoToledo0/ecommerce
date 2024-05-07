import React from "react";
import { Titulos, Container } from "@/styles/StylesNavbar-Menu";
import CardCarrouselOfertas from "./CardCarrouselOfertas";

const OfertasCarrousel: React.FC = () => {
  return (
    <>
      <Container className="container bg-light mt-5 ">
        <Titulos>As melhores ofertas</Titulos>
        <CardCarrouselOfertas />
        <div className="mt-5" style={{ height: "5px" }}></div>
      </Container>
    </>
  );
};

export default OfertasCarrousel;
