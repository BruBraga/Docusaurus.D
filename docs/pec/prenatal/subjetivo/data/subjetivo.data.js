const subjetivoData = [
  {
    tipo: "dado",
    campo: "Subjetivo",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "tb_evolucao_subjetivo",
    coluna: "ds_subjetivo",
    formatoBd: "text",
    obrigatorioBd: "não",
  },

  {
    tipo: "dado",
    campo: "Motivo da consulta (CIAP 2)",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "rl_evolucao_subjetivo_ciap",
    coluna: "co_ciap",
    formatoBd: "bigint",
    obrigatorioBd: "sim",
  },

  {
    tipo: "dado",
    campo: "Adicionar observação",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "rl_evolucao_subjetivo_ciap",
    coluna: "ds_nota",
    formatoBd: "character varying(400)",
    obrigatorioBd: "não",
  },
];

export default subjetivoData;