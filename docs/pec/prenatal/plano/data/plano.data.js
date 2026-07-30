export const planoData = [
  {
    tipo: "secao",
    texto: "Plano"
  },
  {
    tipo: "dado",
    campo: "Cidadão em observação",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },
  {
    tipo: "dado",
    campo: "Plano",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "tb_evolucao_plano",
    coluna: "ds_plano",
    formatoBd: "text",
    obrigatorioBd: "não"
  },
  {
    tipo: "subsecao",
    texto: "Intervenções e/ou procedimentos clínicos realizados"
  },
  {
    tipo: "dado",
    campo: "CIAP2",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "rl_evolucao_plano_ciap",
    coluna: "co_ciap",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "SIGTAP",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "rl_evolucao_plano_ciap",
    coluna: "co_proced",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  }
];