import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonModel, SectionProdutos } from "@/styles/StylesHomeAdmin";
import { Titulos } from "@/styles/StylesNavbar-Menu";

interface AdicionarProdutosProps {}

const API_CATEGORIAS = process.env.NEXT_PUBLIC_CATEGORIAS_BUSCAR || "";
const API_MARCAS = process.env.NEXT_PUBLIC_MARCAS_BUSCAR || "";
const API_PRODUTOS = process.env.NEXT_PUBLIC_PRODUTOS_ADICIONAR || "";

const AdicionarProdutos: React.FC<AdicionarProdutosProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [sucesso, setSucesso] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null);
  const [categorias, setCategorias] = useState<any[]>([]);
  const [marcas, setMarcas] = useState<any[]>([]);
  const [sku, setSku] = useState<string>("");
  const [marcas_id, setMarcas_id] = useState<number>(0);
  const [categorias_id, setCategorias_id] = useState<number>(0);
  const [valor_antigo, setValor_antigo] = useState<number>(0);
  const [estoque, setEstoque] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);
  const [desconto, setDesconto] = useState<number>(0);
  const [modelo, setModelo] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [imagem_principal, setImagem_principal] = useState<File | null>(null);
  const [imagem_miniatura_1, setImagem_miniatura_1] = useState<File | null>(
    null
  );
  const [imagem_miniatura_2, setImagem_miniatura_2] = useState<File | null>(
    null
  );
  const [imagem_miniatura_3, setImagem_miniatura_3] = useState<File | null>(
    null
  );
  const [ativo, setAtivo] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const SUCCESS_MESSAGE =
    "Produto adicionado com sucesso! Os campos foram limpos.";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Dados do produto a serem enviados:", {
        sku,
        nome,
        marcas_id,
        categorias_id,
        valor_antigo,
        valor,
        estoque,
        desconto,
        modelo,
        descricao,
        imagem_principal,
        imagem_miniatura_1,
        imagem_miniatura_2,
        imagem_miniatura_3,
        ativo,
        status,
      });
      const formData = new FormData();
      formData.append("sku", sku);
      formData.append("nome", nome);
      formData.append("marcas_id", marcas_id.toString());
      formData.append("categorias_id", categorias_id.toString());
      formData.append("valor_antigo", valor_antigo.toString());
      formData.append("valor", valor.toString());
      formData.append("estoque", estoque.toString());
      formData.append("desconto", desconto.toString());
      formData.append("modelo", modelo);
      formData.append("descricao", descricao);
      if (imagem_principal)
        formData.append("imagem_principal", imagem_principal);
      if (imagem_miniatura_1)
        formData.append("imagem_miniatura_1", imagem_miniatura_1);
      if (imagem_miniatura_2)
        formData.append("imagem_miniatura_2", imagem_miniatura_2);
      if (imagem_miniatura_3)
        formData.append("imagem_miniatura_3", imagem_miniatura_3);
      formData.append("ativo", ativo.toString());
      formData.append("status", status.toString());

      const response = await axios.post(API_PRODUTOS, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 200) {
        console.error("Erro ao adicionar Produtos. Status:", response.status);
        throw new Error("Erro ao adicionar Produtos");
      }

      setSku("");
      setNome("");
      setMarcas_id(0);
      setCategorias_id(0);
      setValor(0);
      setValor_antigo(0);
      setEstoque(0);
      setDesconto(0);
      setModelo("");
      setDescricao("");
      setImagem_principal(null);
      setImagem_miniatura_1(null);
      setImagem_miniatura_2(null);
      setImagem_miniatura_3(null);
      setAtivo("");
      setStatus("");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar o Produto:", error);
      setErro("Erro ao enviar o Produto");
      setSucesso(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_CATEGORIAS);
        setCategorias(response.data);
      } catch (error) {
        setErro(
          "Erro ao buscar categorias. Verifique sua conexão de internet e tente novamente."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_MARCAS);
        setMarcas(response.data);
      } catch (error) {
        setErro(
          "Erro ao buscar marcas. Verifique sua conexão de internet e tente novamente."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SectionProdutos className="container-fluid col-md-12">
      <Titulos className="">Adicionar Produtos</Titulos>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="sku" className="mt-1">
            SKU:
          </label>
          <input
            type="text"
            className="form-control"
            id="sku"
            name="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
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
            value={marcas_id}
            onChange={(e) => setMarcas_id(Number(e.target.value))}
          >
            <option value="">Selecione a marca</option>
            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nome}
              </option>
            ))}
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
            value={categorias_id}
            onChange={(e) => setCategorias_id(Number(e.target.value))}
          >
            <option value="">Selecione a Categoria</option>

            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
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
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
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
            value={valor_antigo}
            onChange={(e) => setValor_antigo(Number(e.target.value))}
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
            value={estoque}
            onChange={(e) => setEstoque(Number(e.target.value))}
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
            onChange={(e) =>
              setImagem_principal(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_miniatura_1" className="mt-1">
            Imagem:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem_miniatura_1"
            name="imagem_miniatura_1"
            onChange={(e) =>
              setImagem_miniatura_1(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_miniatura_2" className="mt-1">
            Imagem:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem_miniatura_2"
            name="imagem_miniatura_2"
            onChange={(e) =>
              setImagem_miniatura_2(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="imagem_miniatura_3" className="mt-1">
            Imagem:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagem_miniatura_3"
            name="imagem_miniatura_3"
            onChange={(e) =>
              setImagem_miniatura_3(e.target.files ? e.target.files[0] : null)
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
            onChange={(e) => setAtivo(e.target.value)}
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
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Oferta">Oferta</option>
            <option value="Destaque">Destaque</option>
          </select>
        </div>
        <div className="form-group col-md-8 mt-3">
          <label htmlFor="desconto" className="mt-1">
            Desconto:
          </label>
          <input
            type="number"
            className="form-control"
            id="desconto"
            name="desconto"
            value={desconto}
            onChange={(e) => setDesconto(Number(e.target.value))}
          />
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

export default AdicionarProdutos;
