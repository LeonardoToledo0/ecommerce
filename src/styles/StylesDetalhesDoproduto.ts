import styled from "styled-components";
import { Carousel, Col } from "react-bootstrap";
import { corPrimaria, corSecundaria } from "./GlobalStyles";
import Link from "next/link";

// Produtos
export const CarouselCuston = styled(Carousel)`
  border: 1px solid ${corSecundaria};
  border-radius: 8px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ColCuston = styled(Col)`
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 10px;
  border: 1px solid ${corSecundaria};
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease-in-out;
    border: 1px solid ${corPrimaria};
    border-radius: 8px;
    transform: scale(1.1);
  }
`;

export const ImagemProduto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Preço de produtos
export const ColCuston2 = styled(Col)``;
export const TituloProduto = styled.h2`
  color: ${corSecundaria};
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  border-bottom: 1px dashed ${corSecundaria};
`;

export const DetalhesContent = styled.div`
  border-bottom: 1px dashed ${corSecundaria};
`;

export const Paragrafo = styled.p``;

export const ParagrafoB = styled.b`
  color: ${corSecundaria};
  font-size: 1.1rem;
`;
export const PrecoContent = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 10px;
`;
export const Preco = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  font-family: "Roboto", sans-serif;
`;
export const PrecoAntigo = styled.p`
  font-family: "Roboto", sans-serif;
`;
export const Avaliacao = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 2px;
`;

export const Pix = styled.p``;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const ButtonLink = styled(Link)`
  text-decoration: none;
  width: 45%;
  text-align: center;
  color: ${corSecundaria};
  font-weight: 500;
  margin: 5px;
  padding: 10px;
  background: ${corPrimaria};
  border: 1px solid ${corPrimaria};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: ${corPrimaria};
    background: ${corSecundaria};
    border: 1px solid ${corSecundaria};
  }
`;
export const ButtonLink2 = styled(Link)`
  text-decoration: none;
  width: 45%;
  text-align: center;
  color: ${corSecundaria};
  background: #999;
  font-weight: 500;
  margin: 5px;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    color: ${corPrimaria};
    background: ${corSecundaria};
  }
`;
export const IconButton = styled.img`
  width: 25px;
  padding: 2px;
  background-size: cover;
`;
