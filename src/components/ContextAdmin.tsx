import React, { useState } from "react";
import AdicionarCategoria from "./AdicionarCategoria";
import AdicionarMarcas from "./AdicionarMarcas";
import AdicionarProdutos from "./AdicionarProdutos";
import AdicionarBannerPrincipal from "./AdicionarBannerPrincipal";
import AdicionarAdministrador from "./AdicionarAdministrador";

const ContextAdmin = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  const Mudanca = (content: string) => {
    setActiveContent(content);
  };

  const Renderizar = () => {
    switch (activeContent) {
      case "AdicionarCategoria":
        return <AdicionarCategoria />;
      case "AdicionarMarca":
        return <AdicionarMarcas />;
      case "AdicionarProdutos":
        return <AdicionarProdutos />;
      case "AdicionarBannerPrincipal":
        return <AdicionarBannerPrincipal />;
      case "AdicionarAdministrador":
        return <AdicionarAdministrador />;
      default:
        return null;
    }
  };

  return { Mudanca, Renderizar };
};
export default ContextAdmin;
