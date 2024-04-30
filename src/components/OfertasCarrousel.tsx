import React from "react";
import { CardCarrouselOfertas } from "./CardCarrouselOfertas";
import { Titulos, Container } from "@/styles/StylesNavbar-Menu";

export const OfertasCarrousel: React.FC = () => {
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
