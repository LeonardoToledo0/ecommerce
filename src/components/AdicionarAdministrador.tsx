import { ButtonModel, SectionProdutos } from "@/styles/StylesHomeAdmin";
import { Titulos } from "@/styles/StylesNavbar-Menu";
import React from "react";

const AdicionarAdministrador: React.FC = () => {
  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Administrador</Titulos>
      <form action="/submit" method="post">
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="nome" className="mt-1">
            Nome :
          </label>
          <input type="text" className="form-control" id="nome" name="nome" />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="nome" className="mt-1">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="nome" className="mt-1">
            Senha:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>

        <div className="form-group form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="ativo"
            name="ativo"
          />
          <label className="form-check-label" htmlFor="ativo">
            Ativo
          </label>
        </div>
        <ButtonModel type="submit" className=" mt-3">
          Adicionar
        </ButtonModel>
      </form>
    </SectionProdutos>
  );
};
export default AdicionarAdministrador;
