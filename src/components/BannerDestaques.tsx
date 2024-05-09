import React, { useEffect } from "react";
import { Container, NewImage } from "@/styles/StylesNavbar-Menu";
import axios from "axios";
import {
  setBanner,
  setErro,
  setSucesso,
  setLoading,
  setImagem,
  setNome,
} from "@/redux/banner2Slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";

const API_BANNER = process.env.NEXT_PUBLIC_BANNERS_DESTAQUES || "";
const BannerDestaques: React.FC = () => {
  const dispatch = useDispatch();
  const { banner, loading, erro, sucesso, nome, imagem } = useSelector(
    (state: RootState) => state.banner2
  );
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
  return (
    <Container className="container">
      {Array.isArray(banner) && banner.length > 0 && (
        <NewImage src={banner[0].imagem} alt={`Banner ${banner[0].nome}`} />
      )}
    </Container>
  );
};

export default BannerDestaques;
