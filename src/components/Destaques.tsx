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
} from "@/redux/carouselDestaquesSlice";

import { Carousel, Container, Row, Col } from "react-bootstrap";
import {
  BsChevronLeft,
  BsChevronRight,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from "react-icons/bs";
import {
  Card,
  NewImage,
  SetaCard1,
  SetaCard2,
  SpanPix,
  ValorFixo,
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

const API_PRODUTOS_DESTAQUE = process.env.NEXT_PUBLIC_PRODUTOS_DESTAQUES || "";
interface Produto {
  id: number;
  sku: string;
  nome: string;
  ativo: string;
  valor: number;
  status: string;
  imagem_principal: string;
  avaliacao: number;
  valor_antigo: number;
}

const Destaques: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleProdutoDetalhes = (productId: number) => {
    router.push(`/produtos_detalhes?id=${productId}`);
  };
  const { produto, loading, erro, sucesso } = useSelector(
    (state: RootState) => state.carouselDestaques
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_PRODUTOS_DESTAQUE);
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

  // Agrupar os produtos em grupos de 4
  const groupedProducts = produto.reduce(
    (acc: Produto[][], item: Produto, index: number) => {
      if (index % 4 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(item);
      return acc;
    },
    []
  );
  return (
    <Container className="mt-4">
      <Carousel
        indicators={false}
        interval={null}
        prevIcon={<CustomPrevArrow />}
        nextIcon={<CustomNextArrow />}
      >
        {groupedProducts.map((group: Produto[], groupIndex: number) => (
          <Carousel.Item key={groupIndex}>
            <Row>
              {group.map((item: Produto) => (
                <Col key={item.id} lg={3} md={6} sm={12}>
                  <Card className="card h-100 shadow-md">
                    <div
                      className="badge bg-secondary text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      {item.status}
                    </div>
                    <a onClick={() => handleProdutoDetalhes(item.id)}>
                      <NewImage
                        src={item.imagem_principal}
                        className="card-img-top"
                        alt={item.nome}
                      />

                      <div className="card-body">
                        <h6 className="card-title">{item.nome}</h6>

                        <div className="d-flex align-items-center">
                          <span className="me-2 mt-1">
                            Avaliação: ({item.avaliacao})
                          </span>
                          <div className="rating">
                            {renderStars(item.avaliacao)}
                          </div>
                        </div>
                        <div className=" justify-content-between align-items-center ">
                          <p className="text-muted text-decoration-line-through ">
                            R$ {Number(item.valor_antigo).toFixed(2)}
                          </p>
                          <ValorFixo>
                            R$ {Number(item.valor).toFixed(2)}{" "}
                            <SpanPix>no pix</SpanPix>
                          </ValorFixo>
                        </div>
                      </div>
                    </a>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
export default Destaques;
