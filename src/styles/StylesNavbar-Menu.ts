import styled from "styled-components";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { corPrimaria, corSecundaria } from "./GlobalStyles";

export const Section = styled.section`
  width: 100%;
  z-index: 5;
`;
export const Container = styled.section`
  margin: 40px auto;
`;
// Inicio Faixa superior
export const FaixaSuperior = styled.div`
  width: 100%;
  margin: 0;
  background: #000;
  height: 45px;
`;
export const FaixaSuperiorContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FaixaSuperiorImg = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const IconImage = styled.img`
  width: 30px;
  margin: 8px;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

// Inicio faixa de dentro
export const FaixaDentro = styled.div`
  width: 100%;
  background: #222;
  height: 110px;
`;
export const FaixaDentroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FaixaDentroLogo = styled.img`
  width: 150px;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const InputContainer = styled.div`
  position: relative;
  width: 50%;
  margin-top: 30px;
  margin-left: 125px;
`;
export const FaixaDentroImput = styled.input`
  width: 100%;
  padding-right: 30px;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  &::placeholder {
    color: ${corSecundaria};
    font-weight: 500;
    font-size: 1rem;
  }
`;
export const IcomSearch = styled(FiSearch)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: ${corPrimaria};
  cursor: pointer;
`;
export const IconsContent = styled.div`
  display: flex;
`;

export const ConteinerLogin = styled.div`
  margin-top: 30px;
`;
// Inicio do menu
export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 65px;
  z-index: 5;
`;
export const MenuNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuLinkDiv = styled.div`
  position: absolute;
  display: flex;
  margin-top: 20px;
  margin-left: -80px;
`;
export const MotionDiv = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  width: max-content;
  height: 100%;
  padding: 1rem;
  position: relative;
  z-index: 5;
`;

export const MenuLink = styled(Link)`
  display: block;
  width: auto;
  padding: 10px;
  text-decoration: none;
  color: ${corSecundaria};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  &:hover {
    color: ${corPrimaria};
    transition: 0.3s ease-in-out;
  }
`;

export const MenuItemNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuItemNavLink = styled.p`
  margin: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  &:hover {
    color: ${corPrimaria};
    transition: 0.3s ease-in-out;
  }
`;

export const MenuNavBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
`;
export const MenuNavBarLogin = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 1fr);
`;
export const MenuNavBarCard = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(1, 1fr);
`;
export const NewImage = styled.img`
  width: 100%;
`;

// Banner Carrousel

export const Seta1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: ${corSecundaria};
  width: 50px;
  height: 50px;
  font-size: 2rem;
`;
export const Seta2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: ${corSecundaria};
  width: 50px;
  height: 50px;
  font-size: 2rem;
`;

//  Card Carrousel
export const SetaCard1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: -220px;
  color: ${corPrimaria};
  width: 50px;
  height: 50px;
  font-size: 2rem;
`;
export const SetaCard2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: -220px;
  color: ${corPrimaria};
  width: 50px;
  height: 50px;
  font-size: 2rem;
`;

export const SetaDetalhesEsquerda = styled(BsChevronLeft)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${corSecundaria};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
`;
export const SetaDetalhesDireito = styled(BsChevronRight)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${corSecundaria};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.8rem;
`;
export const NewLink = styled(Link)`
  text-decoration: none;
  color: ${corSecundaria};
`;
//  Titulos

export const Titulos = styled.h2`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  font-family: "Roboto", sans-serif;
  background-image: linear-gradient(to right, ${corPrimaria}, #da1b60);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
