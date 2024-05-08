import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import Loader from "./Loader";
import {
  ButtonContent,
  CarouselCuston,
  ButtonLink,
  ColCuston,
  ColCuston2,
  ImagemProduto,
  ButtonLink2,
  TituloProduto,
  PrecoAntigo,
  Preco,
  Avaliacao,
  DetalhesContent,
  PrecoContent,
  Paragrafo,
  ParagrafoB,
  Pix,
} from "../styles/StylesDetalhesDoproduto";
import {
  setLoading,
  setProduto,
  setSucesso,
  setErro,
  setImagemPrincipal,
} from "@/redux/produtoDetalhesSlice";

const API_PRODUTOS = process.env.NEXT_PUBLIC_PRODUTOS_ID || "";

const ProdutosDetalhes: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const {
    produto,
    erro,
    imagem_principal,
    imagem_miniatura_1,
    imagem_miniatura_2,
    imagem_miniatura_3,
    loading,
  } = useSelector((state: RootState) => state.produtoDetalhes);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      dispatch(setLoading(true));
      try {
        const response = await axios.get(`${API_PRODUTOS}/${id}`);

        dispatch(setProduto(response.data));
        dispatch(setImagemPrincipal(response.data.imagem_principal));
      } catch (error) {
        dispatch(
          setErro(
            "Erro ao buscar produtos. Verifique sua conexão de internet e tente novamente."
          )
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [id, dispatch]);

  const trocarImagemPrincipal = (imagem: string) => {
    dispatch(setImagemPrincipal(imagem));
  };

  const imagensFiltradas = [
    produto?.imagem_principal,
    produto?.imagem_miniatura_1,
    produto?.imagem_miniatura_2,
    produto?.imagem_miniatura_3,
  ].filter((imagem) => imagem !== undefined) as string[];

  const renderStars = (star: number) => {
    const fullStars = Math.floor(star);
    const hasHalfStar = star % 1 >= 0.5;
    const starArray = [];

    for (let i = 0; i < fullStars; i++) {
      starArray.push(<BsStarFill key={i} className="text-warning" />);
    }

    if (hasHalfStar) {
      starArray.push(<BsStarHalf key="half" className="text-warning" />);
    } else if (fullStars < 4) {
      starArray.push(<BsStar key="empty" className="text-warning" />);
    }

    const totalStars = starArray.length;
    for (let i = 0; i < 5 - totalStars; i++) {
      starArray.push(<BsStar key={`empty-${i}`} className="text-warning" />);
    }

    return starArray;
  };

  if (loading) return <Loader />;
  if (erro) return <div>{erro}</div>;
  if (!produto) return null;

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={1}>
          {imagensFiltradas.map((imagem, index) => (
            <Row key={index}>
              <ColCuston md={11} className="m-2">
                {imagem && typeof imagem === "string" && (
                  <ImagemProduto
                    src={imagem}
                    alt={`Miniatura ${index + 1}`}
                    onClick={() => trocarImagemPrincipal(imagem)}
                    onMouseOver={() => trocarImagemPrincipal(imagem)}
                  />
                )}
              </ColCuston>
            </Row>
          ))}
        </Col>
        <Col lg={5} md={6}>
          <CarouselCuston
            className="m-2"
            activeIndex={imagensFiltradas.indexOf(imagem_principal as string)}
            interval={null}
            nextIcon={null}
            prevIcon={null}
            indicators={false}
          >
            {imagensFiltradas.map((imagem, index) => (
              <Carousel.Item key={index}>
                {typeof imagem === "string" && (
                  <ImagemProduto
                    src={imagem}
                    alt={`Miniatura ${index + 1}`}
                    onClick={() => trocarImagemPrincipal(imagem)}
                    onMouseOver={() => trocarImagemPrincipal(imagem)}
                  />
                )}
              </Carousel.Item>
            ))}
          </CarouselCuston>
        </Col>
        <ColCuston2 lg={5} md={6} className="mt-2">
          <TituloProduto>{produto.nome}</TituloProduto>
          <DetalhesContent>
            <Avaliacao>
              <Paragrafo>
                Vendido e entregue por: <ParagrafoB>Plaza</ParagrafoB>
              </Paragrafo>
              <span className="me-2 mt-1">
                Avaliação: ({produto.avaliacao})
              </span>
              <div className="rating">{renderStars(produto.avaliacao)}</div>
            </Avaliacao>
            <PrecoContent>
              {produto.valor_antigo && (
                <PrecoAntigo className="text-muted text-decoration-line-through">
                  R$ {produto.valor_antigo}
                </PrecoAntigo>
              )}
              <Preco>R$ {produto.valor}</Preco>
              <Pix>
                no Pix{" "}
                <span className="text-success">
                  <b>{produto.desconto}</b>
                </span>
              </Pix>
            </PrecoContent>
          </DetalhesContent>

          <ButtonContent>
            <ButtonLink2 href="#">Adicionar ao Carrinho</ButtonLink2>
            <ButtonLink href="#">Comprar Agora</ButtonLink>
          </ButtonContent>
        </ColCuston2>
      </Row>
    </Container>
  );
};

export default ProdutosDetalhes;
