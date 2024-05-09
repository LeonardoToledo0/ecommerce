import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BannerState {
  banner: any[];
  imagem: string;
  nome: string;
  sucesso: boolean;
  erro: string | null;
  loading: boolean;
}

const initialState: BannerState = {
  banner: [],
  sucesso: false,
  erro: null,
  loading: true,
  imagem: "",
  nome: "",
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBanner: (state, action: PayloadAction<any[]>) => {
      state.banner = action.payload;
    },
    setNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload;
    },
    setImagem: (state, action: PayloadAction<string>) => {
      state.imagem = action.payload;
    },

    setSucesso(state, action: PayloadAction<boolean>) {
      state.sucesso = action.payload;
    },
    setErro(state, action: PayloadAction<string | null>) {
      state.erro = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetBannerState(state) {
      state.banner = [];
      state.sucesso = true;
      state.erro = null;
      state.loading = true;
      state.nome = "";
      state.imagem = "";
    },
  },
});

export const {
  setBanner,
  setSucesso,
  setErro,
  setLoading,
  setImagem,
  setNome,
  resetBannerState,
} = bannerSlice.actions;

export default bannerSlice.reducer;
