// pages/_app.tsx
import React from "react";
import dotenv from "dotenv";
dotenv.config();

import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default App;
