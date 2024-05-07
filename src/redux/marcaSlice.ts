import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarcaState {
  nome: string;
  ativo: string;
  sucesso: boolean;
  erro: string | null;
}

const initialState: MarcaState = {
  nome: "",
  ativo: "",
  sucesso: false,
  erro: null,
};

const marcaSlice = createSlice({
  name: "marca",
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
    resetMarcaState(state) {
      state.nome = "";
      state.ativo = "";
      state.sucesso = false;
      state.erro = null;
    },
  },
});

export const { setNome, setAtivo, setSucesso, setErro, resetMarcaState } =
  marcaSlice.actions;

export default marcaSlice.reducer;
