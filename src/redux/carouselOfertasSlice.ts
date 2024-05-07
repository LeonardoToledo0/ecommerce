import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarouselOfertasState {
  produto: any[];
  loading: boolean;
  sucesso: boolean;
  erro: string | null;
}

const initialState: CarouselOfertasState = {
  produto: [],
  loading: true,
  sucesso: false,
  erro: null,
};

const carouselOfertasSlice = createSlice({
  name: "carouselOfertas",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProduto: (state, action: PayloadAction<any[]>) => {
      state.produto = action.payload;
    },
    setSucesso: (state, action: PayloadAction<boolean>) => {
      state.sucesso = action.payload;
    },
    setErro: (state, action: PayloadAction<string | null>) => {
      state.erro = action.payload;
    },
    resetCarouselOfertasState: (state) => {
      state.loading = true;
      state.produto = [];
      state.sucesso = false;
      state.erro = null;
    },
  },
});

export const {
  setLoading,
  setProduto,
  setSucesso,
  setErro,
  resetCarouselOfertasState,
} = carouselOfertasSlice.actions;
export default carouselOfertasSlice.reducer;
