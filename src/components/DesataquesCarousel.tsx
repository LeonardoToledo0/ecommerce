import React from "react";
import { Titulos, Container } from "@/styles/StylesNavbar-Menu";
import Destaques from "./Destaques";

const DestaquesCarousel: React.FC = () => {
  return (
    <>
      <Container className="container bg-light mt-5 ">
        <Titulos>Destaques</Titulos>
        <Destaques />
        <div className="mt-5" style={{ height: "5px" }}></div>
      </Container>
    </>
  );
};

export default DestaquesCarousel;
