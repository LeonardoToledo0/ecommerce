import React from "react";
import { Titulos } from "@/styles/StylesNavbar-Menu";
import { SectionProdutos, ButtonModel } from "@/styles/StylesHomeAdmin";
const AdicionarBannerPrincipal: React.FC = () => {
  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Banner Principal</Titulos>
      <form action="/submit" method="post">
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_principal" className="mt-1">
            Banner Principal:
          </label>
          <input
            type="file"
            className="form-control"
            id="banner_principal"
            name="banner_principal"
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="descricao" className="mt-1">
            Descrição do Banner:
          </label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            rows={7}
            style={{ resize: "none" }}
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
export default AdicionarBannerPrincipal;
