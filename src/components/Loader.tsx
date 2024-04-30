import { SpinnerHome, Spinner, SpinnerText } from "@/styles/LoaderStyles";
import React from "react";

export const Loader: React.FC = () => {
  return (
    <SpinnerHome>
      <Spinner />
      <SpinnerText>Carregando</SpinnerText>
    </SpinnerHome>
  );
};
