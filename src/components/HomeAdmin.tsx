import React, { useState } from "react";

import {
  ConteudoTotal,
  MenuAdmin,
  MenuContent,
  MenuLink,
  SectionAdmin,
} from "@/styles/StylesHomeAdmin";
import ContextAdmin from "./ContextAdmin";

const HomeAdmin: React.FC = () => {
  const { Mudanca, Renderizar } = ContextAdmin();
  const [selectedButton, setSelectedButton] = useState("AdicionarCategoria");

  const handleClick = (content: string) => {
    Mudanca(content);
    setSelectedButton(content);
  };

  return (
    <>
      <SectionAdmin className="d-flex flex-nowrap lg-3 mt-5">
        <MenuAdmin>
          <h3>Olá Nome</h3>
          <hr />
          <MenuContent>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <MenuLink
                  href="#"
                  className={
                    selectedButton === "AdicionarAdministrador"
                      ? "selecionado"
                      : ""
                  }
                  onClick={() => handleClick("AdicionarAdministrador")}
                >
                  Administrador
                </MenuLink>
              </li>
            </ul>
          </MenuContent>
          <div className="mt-4"></div>

          <MenuContent>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <MenuLink
                  href="#"
                  className={
                    selectedButton === "AdicionarCategoria" ? "selecionado" : ""
                  }
                  onClick={() => handleClick("AdicionarCategoria")}
                >
                  Adicionar Categoria
                </MenuLink>
              </li>
            </ul>
          </MenuContent>
          <div className="mt-4"></div>
          <MenuContent>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <MenuLink
                  href="#"
                  className={
                    selectedButton === "AdicionarMarca" ? "selecionado" : ""
                  }
                  onClick={() => handleClick("AdicionarMarca")}
                >
                  Adicionar Marca
                </MenuLink>
              </li>
            </ul>
          </MenuContent>
          <div className="mt-4"></div>
          <MenuContent>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <MenuLink
                  href="#"
                  className={
                    selectedButton === "AdicionarProdutos" ? "selecionado" : ""
                  }
                  onClick={() => handleClick("AdicionarProdutos")}
                >
                  Adicionar Produtos
                </MenuLink>
              </li>
            </ul>
          </MenuContent>
          <div className="mt-4"></div>
          <MenuContent>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <MenuLink
                  href="#"
                  className={
                    selectedButton === "AdicionarBannerPrincipal"
                      ? "selecionado"
                      : ""
                  }
                  onClick={() => handleClick("AdicionarBannerPrincipal")}
                >
                  Banner Principal
                </MenuLink>
              </li>
            </ul>
          </MenuContent>
          <div className="mt-4"></div>
          <MenuContent>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <MenuLink
                  href="#"
                  className={
                    selectedButton === "AdicionarBannerPromocao"
                      ? "selecionado"
                      : ""
                  }
                  onClick={() => handleClick("AdicionarBannerPromocao")}
                >
                  Banner Promoção
                </MenuLink>
              </li>
            </ul>
          </MenuContent>
          <div className="mt-4"></div>
        </MenuAdmin>
        <ConteudoTotal className="container-fluid">
          {Renderizar()}
        </ConteudoTotal>
      </SectionAdmin>
    </>
  );
};
export default HomeAdmin;
