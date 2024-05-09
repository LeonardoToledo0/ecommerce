import React from "react";
import { Titulos, Container } from "@/styles/StylesNavbar-Menu";
import Ofertas from "./Ofertas";

const OfertasCarrousel: React.FC = () => {
  return (
    <>
      <Container className="container bg-light mt-5 ">
        <Titulos>As melhores ofertas</Titulos>
        <Ofertas />
        <div className="mt-5" style={{ height: "5px" }}></div>
      </Container>
    </>
  );
};

export default OfertasCarrousel;
