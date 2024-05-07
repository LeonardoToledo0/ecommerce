// AdicionarMarcas.tsx

import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import {
  setNome,
  setAtivo,
  setSucesso,
  setErro,
  resetMarcaState,
} from "../redux/marcaSlice";
import { SectionProdutos, ButtonModel } from "@/styles/StylesHomeAdmin";
import { Titulos } from "@/styles/StylesNavbar-Menu";

const API_MARCAS = process.env.NEXT_PUBLIC_MARCAS_ADICIONAR || "";
interface AdicionarMarcasProps {}

const AdicionarMarcas: React.FC<AdicionarMarcasProps> = () => {
  const { nome, ativo, sucesso, erro } = useSelector(
    (state: RootState) => state.marca
  );
  const dispatch = useDispatch();

  const SUCCESS_MESSAGE = "Marca adicionada com sucesso! ";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_MARCAS, {
        nome,
        ativo,
      });

      if (response.status !== 200) {
        throw new Error("Erro ao enviar marca");
      }

      dispatch(resetMarcaState());
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar marca:", error);
      dispatch(setErro("Erro ao enviar marca"));
      dispatch(setSucesso(false));
    }
  };

  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos>Adicionar Marcas</Titulos>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="nome" className="mt-1">
            Marca:
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

export default AdicionarMarcas;
