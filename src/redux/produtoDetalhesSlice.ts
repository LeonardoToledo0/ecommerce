import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Produto {
  sku: string;
  valor_antigo: number;
  valor: number;
  desconto: number;
  modelo: string;
  nome: string;
  descricao: string;
  imagem_principal: string;
  imagem_miniatura_1: string;
  imagem_miniatura_2: string;
  imagem_miniatura_3: string;
  ativo: string;
  status: string;
  avaliacao: number;
}

interface ProdutoDetalhesState {
  produto: Produto | null;
  loading: boolean;
  sucesso: boolean;
  erro: string | null;
  sku: string;
  valor_antigo: number;
  valor: number;
  desconto: number;
  modelo: string;
  nome: string;
  descricao: string;
  imagem_principal: string;
  imagem_miniatura_1: string;
  imagem_miniatura_2: string;
  imagem_miniatura_3: string;
  ativo: string;
  status: string;
}

const initialState: ProdutoDetalhesState = {
  produto: null,
  loading: true,
  sucesso: false,
  erro: null,
  sku: "",
  valor_antigo: 0,
  valor: 0,
  desconto: 0,
  modelo: "",
  nome: "",
  descricao: "",
  imagem_principal: "",
  imagem_miniatura_1: "",
  imagem_miniatura_2: "",
  imagem_miniatura_3: "",
  ativo: "",
  status: "",
};

const ProdutoDetalhesSlice = createSlice({
  name: "produtoDetalhes",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProduto: (state, action: PayloadAction<Produto | null>) => {
      // Corrigido: PayloadAction agora é do tipo Produto | null
      state.produto = action.payload;
    },
    setSucesso: (state, action: PayloadAction<boolean>) => {
      state.sucesso = action.payload;
    },
    setErro: (state, action: PayloadAction<string | null>) => {
      state.erro = action.payload;
    },
    setSku: (state, action: PayloadAction<string>) => {
      state.sku = action.payload;
    },
    setValorAntigo: (state, action: PayloadAction<number>) => {
      state.valor_antigo = action.payload;
    },
    setValor: (state, action: PayloadAction<number>) => {
      state.valor = action.payload;
    },
    setDesconto: (state, action: PayloadAction<number>) => {
      state.desconto = action.payload;
    },
    setModelo: (state, action: PayloadAction<string>) => {
      state.modelo = action.payload;
    },
    setNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload;
    },
    setDescricao: (state, action: PayloadAction<string>) => {
      state.descricao = action.payload;
    },
    setImagemPrincipal: (state, action: PayloadAction<string>) => {
      state.imagem_principal = action.payload;
    },
    setImagemMiniatura1: (state, action: PayloadAction<string>) => {
      state.imagem_miniatura_1 = action.payload;
    },
    setImagemMiniatura2: (state, action: PayloadAction<string>) => {
      state.imagem_miniatura_2 = action.payload;
    },
    setImagemMiniatura3: (state, action: PayloadAction<string>) => {
      state.imagem_miniatura_3 = action.payload;
    },
    setAtivo: (state, action: PayloadAction<string>) => {
      state.ativo = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const {
  setLoading,
  setProduto,
  setSucesso,
  setErro,
  setSku,
  setValorAntigo,
  setValor,
  setDesconto,
  setModelo,
  setNome,
  setDescricao,
  setImagemPrincipal,
  setImagemMiniatura1,
  setImagemMiniatura2,
  setImagemMiniatura3,
  setAtivo,
  setStatus,
} = ProdutoDetalhesSlice.actions;
export default ProdutoDetalhesSlice.reducer;
