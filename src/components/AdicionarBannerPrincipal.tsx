import React from "react";
import { Titulos } from "@/styles/StylesNavbar-Menu";
import { SectionProdutos, ButtonModel } from "@/styles/StylesHomeAdmin";
const AdicionarBannerPrincipal: React.FC = () => {
  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Banners </Titulos>
      <form action="/submit" method="post">
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_principal" className="mt-1">
            Banner :
          </label>
          <input
            type="file"
            className="form-control"
            id="banner_principal"
            name="banner_principal"
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="ativo" className="mt-1">
            Ativo:
          </label>
          <select className="form-control" id="ativo" name="ativo" value="">
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="ativo" className="mt-1">
            Status:
          </label>
          <select className="form-control" id="ativo" name="ativo" value="">
            <option value="">Selecione</option>
            <option value="Principal">Principal: 1200x350 pixels</option>
            <option value="Oferta">Oferta: 1200x240 pixels</option>
            <option value="Destaques">Destaques: 1200x240 pixels</option>
            <option value="Informacao">Informação: 1200x120 pixels</option>
          </select>
        </div>

        <ButtonModel type="submit" className=" mt-3">
          Adicionar
        </ButtonModel>
      </form>
    </SectionProdutos>
  );
};
export default AdicionarBannerPrincipal;
