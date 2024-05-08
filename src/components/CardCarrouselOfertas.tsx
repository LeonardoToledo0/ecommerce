import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../redux/configureStore";
import {
  setLoading,
  setErro,
  setProduto,
  setSucesso,
} from "@/redux/carouselOfertasSlice";

import { Carousel, Container, Row, Col } from "react-bootstrap";
import {
  BsChevronLeft,
  BsChevronRight,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from "react-icons/bs";
import {
  NewImage,
  NewLink,
  SetaCard1,
  SetaCard2,
} from "@/styles/StylesNavbar-Menu";
import Loader from "./Loader";

const CustomPrevArrow = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <SetaCard2 onClick={onClick} className="custom-prev-arrow">
    <BsChevronLeft className="custom-arrow-icon" />
  </SetaCard2>
);

const CustomNextArrow = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <SetaCard1 onClick={onClick} className="custom-next-arrow">
    <BsChevronRight className="custom-arrow-icon" />
  </SetaCard1>
);

const API_PRODUTOS = process.env.NEXT_PUBLIC_PRODUTOS_OFERTAS || "";

const CardCarrouselOfertas: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleProdutoDetalhes = (productId: number) => {
    router.push(`/produtos_detalhes?id=${productId}`);
  };
  const { produto, loading, erro, sucesso } = useSelector(
    (state: RootState) => state.carouselOfertas
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_PRODUTOS);
        dispatch(setProduto(response.data));
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
  }, [dispatch]);

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

  if (loading) {
    return <Loader />;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <Container className="mt-4">
      <Carousel
        indicators={false}
        interval={null}
        prevIcon={<CustomPrevArrow />}
        nextIcon={<CustomNextArrow />}
      >
        {produto.map((produto, index) => (
          <Carousel.Item key={index}>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className="card">
                  <a onClick={() => handleProdutoDetalhes(produto.id)}>
                    <NewImage
                      src={produto.imagem_principal}
                      className="card-img-top"
                      alt={produto.nome}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{produto.nome}</h5>

                      <div className="d-flex align-items-center">
                        <span className="me-2 mt-1">
                          Avaliação: ({produto.avaliacao})
                        </span>
                        <div className="rating">
                          {renderStars(produto.avaliacao)}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="text-muted text-decoration-line-through">
                          R$ {Number(produto.valor_antigo).toFixed(2)}
                        </span>
                        <span className="h5">
                          R$ {Number(produto.valor).toFixed(2)}
                        </span>
                        <p>
                          no Pix{" "}
                          <span className="text-success">
                            (<b>{produto.desconto.slice(0, -3)}</b>% de
                            desconto)
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
export default CardCarrouselOfertas;
