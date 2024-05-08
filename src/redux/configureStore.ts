import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from "./produtoSlice";
import categoriaReducer from "./categoriaSlice";
import marcaReducer from "./marcaSlice";
import bannerReducer from "./bannersSlice";
import carouselOfertasReducer from "./carouselOfertasSlice";
import produtoDetalhesReducer from "./produtoDetalhesSlice";

export const store = configureStore({
  reducer: {
    produto: produtoReducer,
    categoria: categoriaReducer,
    marca: marcaReducer,
    banner: bannerReducer,
    carouselOfertas: carouselOfertasReducer,
    produtoDetalhes: produtoDetalhesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
