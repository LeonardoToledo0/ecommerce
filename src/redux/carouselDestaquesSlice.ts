import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Produto {
  id: number;
  sku: string;
  nome: string;
  ativo: string;
  valor: number;
  imagem_principal: string;
  avaliacao: number;
  valor_antigo: number;
  status: string;
}

interface CarouselDestaquesState {
  produto: Produto[];
  loading: boolean;
  sucesso: boolean;
  erro: string | null;
}

const initialState: CarouselDestaquesState = {
  produto: [],
  loading: true,
  sucesso: false,
  erro: null,
};

const carouselDestaquesSlice = createSlice({
  name: "carouselDestaques",
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
    resetCarouselDestaquesState: (state) => {
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
  resetCarouselDestaquesState,
} = carouselDestaquesSlice.actions;
export default carouselDestaquesSlice.reducer;
