import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProdutoState {
  loading: boolean;
  sucesso: boolean;
  erro: string | null;
  categorias: any[];
  marcas: any[];
  sku: string;
  marcas_id: number;
  categorias_id: number;
  valor_antigo: number;
  estoque: number;
  valor: number;
  desconto: number;
  modelo: string;
  nome: string;
  descricao: string;
  imagem_principal: File | null;
  imagem_miniatura_1: File | null;
  imagem_miniatura_2: File | null;
  imagem_miniatura_3: File | null;
  ativo: string;
  status: string;
}

const initialState: ProdutoState = {
  loading: true,
  sucesso: false,
  erro: null,
  categorias: [],
  marcas: [],
  sku: "",
  marcas_id: 0,
  categorias_id: 0,
  valor_antigo: 0,
  estoque: 0,
  valor: 0,
  desconto: 0,
  modelo: "",
  nome: "",
  descricao: "",
  imagem_principal: null,
  imagem_miniatura_1: null,
  imagem_miniatura_2: null,
  imagem_miniatura_3: null,
  ativo: "",
  status: "",
};

const produtoSlice = createSlice({
  name: "produto",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSucesso: (state, action: PayloadAction<boolean>) => {
      state.sucesso = action.payload;
    },
    setErro: (state, action: PayloadAction<string | null>) => {
      state.erro = action.payload;
    },
    setCategorias: (state, action: PayloadAction<any[]>) => {
      state.categorias = action.payload;
    },
    setMarcas: (state, action: PayloadAction<any[]>) => {
      state.marcas = action.payload;
    },
    setSku: (state, action: PayloadAction<string>) => {
      state.sku = action.payload;
    },
    setMarcasId: (state, action: PayloadAction<number>) => {
      state.marcas_id = action.payload;
    },
    setCategoriasId: (state, action: PayloadAction<number>) => {
      state.categorias_id = action.payload;
    },
    setValorAntigo: (state, action: PayloadAction<number>) => {
      state.valor_antigo = action.payload;
    },
    setEstoque: (state, action: PayloadAction<number>) => {
      state.estoque = action.payload;
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
    setImagemPrincipal: (state, action: PayloadAction<File | null>) => {
      state.imagem_principal = action.payload;
    },
    setImagemMiniatura1: (state, action: PayloadAction<File | null>) => {
      state.imagem_miniatura_1 = action.payload;
    },
    setImagemMiniatura2: (state, action: PayloadAction<File | null>) => {
      state.imagem_miniatura_2 = action.payload;
    },
    setImagemMiniatura3: (state, action: PayloadAction<File | null>) => {
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
  setSucesso,
  setErro,
  setCategorias,
  setMarcas,
  setSku,
  setMarcasId,
  setCategoriasId,
  setValorAntigo,
  setEstoque,
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
} = produtoSlice.actions;

export default produtoSlice.reducer;
