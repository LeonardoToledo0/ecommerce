import { SpinnerHome, Spinner, SpinnerText } from "@/styles/LoaderStyles";
import React from "react";

const Loader: React.FC = () => {
  return (
    <SpinnerHome>
      <Spinner />
      <SpinnerText>Carregando</SpinnerText>
    </SpinnerHome>
  );
};
export default Loader;
