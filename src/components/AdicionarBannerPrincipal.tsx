import React from "react";
import axios from "axios";
import { Titulos } from "@/styles/StylesNavbar-Menu";
import { SectionProdutos, ButtonModel } from "@/styles/StylesHomeAdmin";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import {
  setNome,
  setAtivo,
  setErro,
  setImagem,
  setStatus,
  setSucesso,
  resetBannerState,
} from "@/redux/bannersSlice";

interface AdicionarBannersProps {}

const API_BANNERS = process.env.NEXT_PUBLIC_BANNERS_ADICIONAR || "";

const AdicionarBannerPrincipal: React.FC<AdicionarBannersProps> = () => {
  const dispatch = useDispatch();
  const { nome, ativo, erro, sucesso, imagem, status } = useSelector(
    (state: RootState) => state.banner
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("ativo", ativo);
      formData.append("status", status);
      if (imagem) formData.append("imagem", imagem);
      const response = await axios.post(API_BANNERS, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });
      if (response.status !== 200) {
        console.error("Erro ao adicionar Banner. Status", response.status);
        throw new Error("Erro ao adicionar Banner");
      }
      dispatch(resetBannerState());
      window.location.reload();
    } catch (error) {
      console.error("Erroa ao enviar Banner", error);
      dispatch(setErro("Erro ao enviar Banner"));
      dispatch(setSucesso(false));
    }
  };
  const SUCCESS_MESSAGE = "Banner adicionado com sucesso!";
  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Banners </Titulos>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="nome" className="mt-1">
            Nome do Banner:
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => dispatch(setNome(e.target.value))}
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="banner" className="mt-1">
            Banner :
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem"
            name="imagem"
            onChange={(e) =>
              dispatch(setImagem(e.target.files ? e.target.files[0] : null))
            }
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="ativo" className="mt-1">
            Ativo:
          </label>
          <select
            className="form-control"
            id="ativo"
            name="ativo"
            value={ativo}
            onChange={(e) => dispatch(setAtivo(e.target.value))}
          >
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="status" className="mt-1">
            Status:
          </label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={status}
            onChange={(e) => dispatch(setStatus(e.target.value))}
          >
            <option value="">Selecione</option>
            <option value="Principal">Principal: 1200x350 pixels</option>
            <option value="Oferta">Oferta: 1200x240 pixels</option>
            <option value="Destaques">Destaques: 1200x240 pixels</option>
            <option value="Informacao">Informação: 1200x120 pixels</option>
          </select>
        </div>
        {sucesso && (
          <div className="alert alert-success mt-3" role="alert">
            {SUCCESS_MESSAGE}
          </div>
        )}
        {erro && (
          <div className="alert alert-danger mt-3" role="alert">
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
export default AdicionarBannerPrincipal;
