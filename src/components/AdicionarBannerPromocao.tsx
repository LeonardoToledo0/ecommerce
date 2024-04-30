import React from "react";
import { ButtonModel, SectionProdutos } from "@/styles/StylesHomeAdmin";
import { Titulos } from "@/styles/StylesNavbar-Menu";

const AdicionarBannerPromocao: React.FC = () => {
  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Banner Promoções</Titulos>
      <form action="/submit" method="post">
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_principal" className="mt-1">
            Banner Principal:
          </label>
          <input
            type="file"
            className="form-control"
            id="banner_promocao"
            name="banner_promocao"
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
        <div className="form-group form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="oferta"
            name="oferta"
          />
          <label className="form-check-label" htmlFor="oferta">
            Oferta
          </label>
        </div>
        <div className="form-group form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="destaque"
            name="destaque"
          />
          <label className="form-check-label" htmlFor="destaque">
            Destaque
          </label>
        </div>
        <ButtonModel type="submit" className=" mt-3">
          Adicionar
        </ButtonModel>
      </form>
    </SectionProdutos>
  );
};

export default AdicionarBannerPromocao;
