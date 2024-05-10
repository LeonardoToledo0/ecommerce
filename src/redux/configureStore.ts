import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from "./produtoSlice";
import categoriaReducer from "./categoriaSlice";
import marcaReducer from "./marcaSlice";
import bannerOfertasReducer from "./bannersOfertasSlice";
import carouselOfertasReducer from "./carouselOfertasSlice";
import produtoDetalhesReducer from "./produtoDetalhesSlice";
import bannerReducer from "./bannerSlice";
import carouselDestaquesReducer from "./carouselDestaquesSlice";
import banner2Reducer from "./banner2Slice";
import bannerPrincipalReducer from "./bannerPrincipalSlice ";

export const store = configureStore({
  reducer: {
    produto: produtoReducer,
    categoria: categoriaReducer,
    banner: bannerReducer,
    banner2: banner2Reducer,
    bannerPrincipal: bannerPrincipalReducer,
    marca: marcaReducer,
    bannerOfertas: bannerOfertasReducer,
    carouselOfertas: carouselOfertasReducer,
    carouselDestaques: carouselDestaquesReducer,
    produtoDetalhes: produtoDetalhesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
