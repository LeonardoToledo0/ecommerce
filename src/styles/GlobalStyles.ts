import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F0F0F0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter 0.3s;
  }

  
`;
export const corPrimaria = "#ffba00";
export const corSecundaria = "#333";
export const corTerciaria = "#1c7eff";
