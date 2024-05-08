import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import classNames from "classnames";

import logo from "../../public/img/plaza.png";
import info1 from "../../public/img/Frete-Gratis.png";
import info2 from "../../public/img/Ofertas.png";
import info3 from "../../public/img/Cupon.png";
import icon1 from "../../public/img/cart.png";
import icon2 from "../../public/img/coracao.png";

import {
  Content,
  Section,
  FaixaSuperior,
  FaixaDentro,
  FaixaSuperiorContent,
  FaixaDentroContent,
  FaixaDentroLogo,
  FaixaDentroImput,
  IcomSearch,
  InputContainer,
  IconsContent,
  FaixaSuperiorImg,
  IconImage,
  ConteinerLogin,
  MenuNavBarLogin,
  MenuNavBarCard,
  MenuNavBar,
} from "@/styles/StylesNavbar-Menu";
import { MenuItem, HoveredLink, Menu, ProductItem } from "./navbar-menu";
import Loader from "./Loader";
const API_CATEGORIAS = process.env.NEXT_PUBLIC_CATEGORIAS_BUSCAR;

const Navbar: React.FC = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [categorias, setCategorias] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          API_CATEGORIAS || ""
        );
        setCategorias(response.data);
      } catch (error) {
        setError(
          "Erro ao buscar categorias. Verifique sua conexão de internet e tente novamente."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <Section>
      <FaixaSuperior>
        <FaixaSuperiorContent className="container">
          <FaixaSuperiorImg src={info1.src} />
          <FaixaSuperiorImg src={info2.src} />
          <FaixaSuperiorImg src={info3.src} />
        </FaixaSuperiorContent>
        <FaixaDentro>
          <FaixaDentroContent>
            <Link href="/">
              <FaixaDentroLogo src={logo.src} />
            </Link>
            <InputContainer>
              <FaixaDentroImput placeholder="Pesquisa na Plaza Eletro" />
              <IcomSearch />
            </InputContainer>
            <ConteinerLogin>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Entre ou Cadastre"
              >
                <MenuNavBarLogin>
                  <HoveredLink href="#">Login</HoveredLink>
                  <HoveredLink href="/web-dev">Cadastro</HoveredLink>
                </MenuNavBarLogin>
              </MenuItem>
            </ConteinerLogin>
            <IconsContent>
              <IconImage src={icon2.src} />
              <IconImage src={icon1.src} />
            </IconsContent>
          </FaixaDentroContent>
        </FaixaDentro>
      </FaixaSuperior>
      <Content
        className={classNames(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Departamentos">
            <MenuNavBar>
              {categorias.map((categoria, index) => (
                <HoveredLink key={index} href={`/categoria/${categoria.id}`}>
                  {categoria.nome}
                </HoveredLink>
              ))}
            </MenuNavBar>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Ofertas">
            <MenuNavBar>
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </MenuNavBar>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Produtos">
            <MenuNavBar>
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </MenuNavBar>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Cartão Plaza Eletro"
          >
            <MenuNavBarCard>
              <ProductItem
                title="Cartão"
                href="#"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Clique e faça seu cartão"
              />
            </MenuNavBarCard>
          </MenuItem>
        </Menu>
      </Content>
    </Section>
  );
};
export default Navbar;
