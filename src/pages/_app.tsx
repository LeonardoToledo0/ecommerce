// pages/_app.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/configureStore";
import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
