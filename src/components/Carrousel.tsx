import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import Carousel from "react-bootstrap/Carousel";
import { NewImage, Seta1, Seta2, Container } from "@/styles/StylesNavbar-Menu";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  setBanner,
  setErro,
  setSucesso,
  setLoading,
  setImagem,
  setNome,
} from "@/redux/bannerPrincipalSlice ";

interface Banner {
  id: number;
  nome: string;
  imagem: string;
  erro: string;
  sucesso: boolean;
  ativo: string;
  status: string;
}
const API_BANNER = process.env.NEXT_PUBLIC_BANNERS_PRINCIPAL || "";

const CustomPrevArrow = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <Seta2 onClick={onClick} className="custom-prev-arrow">
    <BsChevronLeft className="custom-arrow-icon" />
  </Seta2>
);

const CustomNextArrow = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <Seta1 onClick={onClick} className="custom-next-arrow">
    <BsChevronRight className="custom-arrow-icon" />
  </Seta1>
);

const Carrousel: React.FC = () => {
  const dispatch = useDispatch();
  const { banner, loading, erro, sucesso, nome, imagem } = useSelector(
    (state: RootState) => state.bannerPrincipal
  );
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_BANNER);
        dispatch(setBanner(response.data));
      } catch (error) {
        dispatch(
          setErro(
            "Erro ao buscar banner. Verifique sua conexão de internet e tente novamente."
          )
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const groupedBanners = banner.reduce(
    (acc: Banner[][], item: Banner, index: number) => {
      if (index % 4 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(item);
      return acc;
    },
    []
  );

  return (
    <Container>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={<CustomPrevArrow />}
        nextIcon={<CustomNextArrow />}
      >
        {banner.map((BannerItem: Banner) => (
          <Carousel.Item key={BannerItem.id}>
            <NewImage
              src={BannerItem.imagem}
              className="d-block container"
              alt={`Banner ${BannerItem.nome}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Carrousel;
