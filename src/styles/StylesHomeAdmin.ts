import Link from "next/link";
import styled from "styled-components";
import { corPrimaria, corSecundaria } from "./GlobalStyles";

export const SectionAdmin = styled.section``;

export const SectionProdutos = styled.section`
  margin: 50px auto;
`;

export const MenuAdmin = styled.aside`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: auto;
  width: auto;
  gap: 5px;
`;
export const MenuContent = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
  }
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 40px;
  border-radius: 8px;
  color: ${corPrimaria};
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${corPrimaria};
  }
`;

export const ConteudoTotal = styled.div`
  max-width: 1200px;
`;

export const ButtonModel = styled.button`
  padding: 8px 30px;
  background: #ccc;
  border: none;
  border-radius: 8px;
  color: ${corSecundaria};
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${corPrimaria};
    transform: scale(1.1);
  }
`;
