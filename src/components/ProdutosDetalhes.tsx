import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import {
  SetaDetalhesDireito,
  SetaDetalhesEsquerda,
} from "@/styles/StylesNavbar-Menu";

import {
  ButtonContent,
  ButtonLink,
  CarouselCuston,
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

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image1: string;
  image2: string;
  image3: string;
  isOffer: boolean;
  star: number;
  empresa: string;
  desconto: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    price: 49.99,
    oldPrice: 99.99,
    image1: "../img/smartphone.webp",
    image2: "../img/shopping.webp",
    image3: "../img/shopping2.webp",
    isOffer: true,
    star: 2.5,
    empresa: "Plaza Eletro",
    desconto: "(5% de desconto)",
  },
];

const ProdutosDetalhes: React.FC = () => {
  const [imagemPrincipal, setImagemPrincipal] = React.useState(
    products[0].image1
  );
  const miniaturas = [
    products[0].image1,
    products[0].image2,
    products[0].image3,
  ];

  const trocarImagemPrincipal = (novaImagem: string) => {
    setImagemPrincipal(novaImagem);
  };

  const avancarImagem = () => {
    const indiceAtual = miniaturas.indexOf(imagemPrincipal);
    const proximoIndice = (indiceAtual + 1) % miniaturas.length;
    setImagemPrincipal(miniaturas[proximoIndice]);
  };

  const retrocederImagem = () => {
    const indiceAtual = miniaturas.indexOf(imagemPrincipal);
    const indiceAnterior =
      (indiceAtual - 1 + miniaturas.length) % miniaturas.length;
    setImagemPrincipal(miniaturas[indiceAnterior]);
  };

  const renderStars = (star: number) => {
    const fullStars = Math.floor(star); // Número inteiro de estrelas cheias
    const hasHalfStar = star % 1 >= 0.5; // Verifica se há uma meia estrela
    const starArray = [];

    // Adiciona estrelas cheias ao array
    for (let i = 0; i < fullStars; i++) {
      starArray.push(<BsStarFill key={i} className="text-warning" />);
    }

    // Adiciona uma meia estrela, se necessário
    if (hasHalfStar) {
      starArray.push(<BsStarHalf key="half" className="text-warning" />);
    } else if (fullStars < 4) {
      // Adiciona uma estrela vazia, se o total for menor que 4
      starArray.push(<BsStar key="empty" className="text-warning" />);
    }

    // Preenche com estrelas vazias restantes até o total de 5
    const totalStars = starArray.length;
    for (let i = 0; i < 5 - totalStars; i++) {
      starArray.push(<BsStar key={`empty-${i}`} className="text-warning" />);
    }

    return starArray;
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={1}>
          {miniaturas.map((miniatura, index) => (
            <Row key={index}>
              <ColCuston md={11} className="m-2">
                <ImagemProduto
                  src={miniatura}
                  alt={`Produto ${index + 1}`}
                  onClick={() => trocarImagemPrincipal(miniatura)}
                  onMouseOver={() => trocarImagemPrincipal(miniatura)}
                />
              </ColCuston>
            </Row>
          ))}
        </Col>
        <Col lg={5} md={6}>
          <CarouselCuston
            className="m-2"
            activeIndex={miniaturas.indexOf(imagemPrincipal)}
            interval={null}
            prevIcon={<SetaDetalhesEsquerda onClick={retrocederImagem} />}
            nextIcon={<SetaDetalhesDireito onClick={avancarImagem} />}
          >
            {miniaturas.map((miniatura, index) => (
              <Carousel.Item key={index}>
                <ImagemProduto src={miniatura} alt={`Produto ${index + 1}`} />
              </Carousel.Item>
            ))}
          </CarouselCuston>
        </Col>
        <ColCuston2 lg={5} md={6} className="mt-2">
          <TituloProduto>{products[0].name}</TituloProduto>
          <DetalhesContent>
            <Avaliacao>
              <Paragrafo>
                Vendido e entregue por:{" "}
                <ParagrafoB>{products[0].empresa}</ParagrafoB>
              </Paragrafo>
              <span className="me-2 mt-1">Avaliação: ({products[0].star})</span>
              <div className="rating">{renderStars(products[0].star)}</div>
            </Avaliacao>
            <PrecoContent>
              {products[0].oldPrice && (
                <PrecoAntigo className="text-muted text-decoration-line-through">
                  R$ {products[0].oldPrice.toFixed(2)}
                </PrecoAntigo>
              )}
              <Preco>R$ {products[0].price.toFixed(2)}</Preco>
              <Pix>
                no Pix{" "}
                <span className="text-success">
                  <b>{products[0].desconto}</b>
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
