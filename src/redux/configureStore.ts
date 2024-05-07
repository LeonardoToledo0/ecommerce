import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from "./produtoSlice";
import categoriaReducer from "./categoriaSlice";
import marcaReducer from "./marcaSlice";

export const store = configureStore({
  reducer: {
    produto: produtoReducer,
    categoria: categoriaReducer,
    marca: marcaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
