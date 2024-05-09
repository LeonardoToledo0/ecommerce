import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface BannerOfertasState {
  nome: string;
  ativo: string;
  status: string;
  sucesso: boolean;
  erro: string | null;
  imagem: File | null;
}
const initialState: BannerOfertasState = {
  nome: "",
  ativo: "",
  status: "",
  sucesso: false,
  erro: null,
  imagem: null,
};

const bannerOfertasSlice = createSlice({
  name: "bannerOfertas",
  initialState,
  reducers: {
    setNome(state, action: PayloadAction<string>) {
      state.nome = action.payload;
    },
    setAtivo(state, action: PayloadAction<string>) {
      state.ativo = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSucesso(state, action: PayloadAction<boolean>) {
      state.sucesso = action.payload;
    },
    setErro(state, action: PayloadAction<string | null>) {
      state.erro = action.payload;
    },
    setImagem(state, action: PayloadAction<File | null>) {
      state.imagem = action.payload;
    },
    resetBannerState(state) {
      state.nome = "";
      state.ativo = "";
      state.status = "";
      state.sucesso = false;
      state.erro = null;
      state.imagem = null;
    },
  },
});

export const {
  setNome,
  setAtivo,
  setStatus,
  setSucesso,
  setErro,
  setImagem,
  resetBannerState,
} = bannerOfertasSlice.actions;

export default bannerOfertasSlice.reducer;
