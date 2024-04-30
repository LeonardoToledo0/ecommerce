import React, { useState, useEffect } from "react";

import { ButtonModel, SectionProdutos } from "@/styles/StylesHomeAdmin";
import { Titulos } from "@/styles/StylesNavbar-Menu";

const AdicionarProdutos: React.FC = () => {
  // Função para lidar com as mudanças nos campos do formulário

  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Produtos</Titulos>
      <form>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="sku" className="mt-1">
            SKU:
          </label>
          <input
            type="text"
            className="form-control"
            id="sku"
            name="sku"
            value=""
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="marca_id" className="mt-1">
            Marca:
          </label>
          <select
            className="form-control"
            id="marca_id"
            name="marca_id"
            value=""
          >
            <option value="">Selecione a marca</option>

            <option>opcao1</option>
          </select>
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="categoria_id" className="mt-1">
            Categoria:
          </label>
          <select
            className="form-control"
            id="categoria_id"
            name="categoria_id"
            value=""
          >
            <option value="">Selecione a Categoria</option>

            <option>opcao1</option>
          </select>
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="modelo" className="mt-1">
            Modelo do Produto:
          </label>
          <input
            type="text"
            className="form-control"
            id="modelo"
            name="modelo"
            value=""
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="nome" className="mt-1">
            Nome do Produto:
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value=""
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="descricao" className="mt-1">
            Descrição do Produto:
          </label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            rows={7}
            style={{ resize: "none" }}
            value=""
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="valor" className="mt-1">
            Valor:
          </label>
          <input
            type="number"
            className="form-control"
            id="valor"
            name="valor"
            value=""
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="valor_antigo" className="mt-1">
            Valor Antigo:
          </label>
          <input
            type="number"
            className="form-control"
            id="valor_antigo"
            name="valor_antigo"
            value=""
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="estoque" className="mt-1">
            Estoque:
          </label>
          <input
            type="number"
            className="form-control"
            id="estoque"
            name="estoque"
            value=""
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_principal" className="mt-1">
            Imagem Principal:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem_principal"
            name="imagem_principal"
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_miniatura1" className="mt-1">
            Imagem:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem_miniatura1"
            name="imagem_miniatura1"
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_miniatura2" className="mt-1">
            Imagem:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem_miniatura2"
            name="imagem_miniatura2"
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_miniatura3" className="mt-1">
            Imagem:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem_miniatura3"
            name="imagem_miniatura3"
          />
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
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="avaliacao" className="mt-1">
            Avaliação:
          </label>
          <input
            type="number"
            className="form-control"
            id="avaliacao"
            name="avaliacao"
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="desconto" className="mt-1">
            Desconto:
          </label>
          <input
            type="text"
            className="form-control"
            id="desconto"
            name="desconto"
          />
        </div>
        <ButtonModel type="submit" className=" mt-3">
          Adicionar
        </ButtonModel>
      </form>
    </SectionProdutos>
  );
};
export default AdicionarProdutos;
