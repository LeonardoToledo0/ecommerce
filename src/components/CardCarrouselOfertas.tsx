import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import {
  BsChevronLeft,
  BsChevronRight,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from "react-icons/bs";
import { SetaCard1, SetaCard2 } from "@/styles/StylesNavbar-Menu";
import { Loader } from "./Loader";

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

export const CardCarrouselOfertas: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container className="mt-4">
      <Carousel
        indicators={false}
        interval={null}
        prevIcon={<CustomPrevArrow />}
        nextIcon={<CustomNextArrow />}
      >
        {products.map((product, index) => (
          <Carousel.Item key={index}>
            <Link href={`/detalhes-produto/${product.id}`}>
              {" "}
              {/* Link dinâmico para detalhes do produto */}
              <Row>
                <Col lg={3} md={6} sm={12}>
                  <div className="card">
                    <img
                      src={product.imagem_principal}
                      className="card-img-top"
                      alt="Imagem do Produto"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.nome}</h5>
                      <div className="d-flex align-items-center">
                        <span className="me-2 mt-1">
                          Avaliação: ({product.avaliacao})
                        </span>
                        <div className="rating">
                          {renderStars(product.avaliacao)}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="text-muted text-decoration-line-through">
                          R$ {Number(product.valor_antigo).toFixed(2)}
                        </span>

                        <span className="h5">
                          R$ {Number(product.valor).toFixed(2)}
                        </span>
                        <p>
                          no Pix{" "}
                          <span className="text-success">
                            (<b>{product.desconto_percentual.slice(0, -3)}</b>%
                            de desconto)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
