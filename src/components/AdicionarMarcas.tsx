import React from "react";
import { ButtonModel, SectionProdutos } from "@/styles/StylesHomeAdmin";
import { Titulos } from "@/styles/StylesNavbar-Menu";

const AdicionarMarcas: React.FC = () => {
  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Marcas</Titulos>
      <form action="/submit" method="post">
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="sku" className="mt-1">
            Marca:
          </label>
          <input type="text" className="form-control" id="sku" name="sku" />
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
export default AdicionarMarcas;
