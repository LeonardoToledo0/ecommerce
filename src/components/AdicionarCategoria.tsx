import { SectionProdutos, ButtonModel } from "@/styles/StylesHomeAdmin";
import { Titulos } from "@/styles/StylesNavbar-Menu";
import React, { useState } from "react";

interface AdicionarCategoriaProps {}

const AdicionarCategoria: React.FC<AdicionarCategoriaProps> = () => {
  const [nome, setNome] = useState<string>("");
  const [ativo, setAtivo] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<boolean>(false);

  const SUCCESS_MESSAGE =
    "Categoria adicionada com sucesso! Os campos foram limpos.";

  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Categorias</Titulos>
      <form>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="nome" className="mt-1">
            Categoria:
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="ativo"
            name="ativo"
            checked={ativo}
            onChange={(e) => setAtivo(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="ativo">
            Ativo
          </label>
        </div>
        {sucesso && (
          <div className="alert alert-success" role="alert">
            {SUCCESS_MESSAGE}
          </div>
        )}
        {erro && (
          <div className="alert alert-danger" role="alert">
            {erro}
          </div>
        )}
        <ButtonModel type="submit" className=" mt-3">
          Adicionar
        </ButtonModel>
      </form>
    </SectionProdutos>
  );
};
export default AdicionarCategoria;
