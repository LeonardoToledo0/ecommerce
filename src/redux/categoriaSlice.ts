import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriaState {
  nome: string;
  ativo: string;
  sucesso: boolean;
  erro: string | null;
}

const initialState: CategoriaState = {
  nome: "",
  ativo: "",
  sucesso: false,
  erro: null,
};

const categoriaSlice = createSlice({
  name: "categoria",
  initialState,
  reducers: {
    setNome(state, action: PayloadAction<string>) {
      state.nome = action.payload;
    },
    setAtivo(state, action: PayloadAction<string>) {
      state.ativo = action.payload;
    },
    setSucesso(state, action: PayloadAction<boolean>) {
      state.sucesso = action.payload;
    },
    setErro(state, action: PayloadAction<string | null>) {
      state.erro = action.payload;
    },
    resetCategoriaState(state) {
      state.nome = "";
      state.ativo = "";
      state.sucesso = false;
      state.erro = null;
    },
  },
});

export const { setNome, setAtivo, setSucesso, setErro, resetCategoriaState } =
  categoriaSlice.actions;

export default categoriaSlice.reducer;
