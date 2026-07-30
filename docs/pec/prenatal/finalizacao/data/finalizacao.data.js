export const finalizacaoData = [
  {
    tipo: "secao",
    texto: "Finalização do Atendimento"
  },

  {
    tipo: "dado",
    campo: "Tipo de atendimento",
    obrigatorioPec: "sim",
    formatoPec: "radio button",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },

  {
    tipo: "dado",
    campo: "Cidadão participou do atendimento",
    obrigatorioPec: "não",
    formatoPec: "check box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },

  {
    tipo: "subsecao",
    texto: "Se check Cidadão participou do atendimento"
  },

  {
    tipo: "dado",
    campo: "Forma de participação",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },

  {
    tipo: "subsecao",
    texto: "Atendimento compartilhado"
  },

  {
    tipo: "dado",
    campo: "Profissional",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },

  {
    tipo: "dado",
    campo: "Forma de participação",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },

  {
    tipo: "dado",
    campo: "Procedimentos administrativos (SIGTAP)",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "rl_atend_proced",
    coluna: "co_proced",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  },

  {
    tipo: "dado",
    campo: "Conduta",
    obrigatorioPec: "sim",
    formatoPec: "check box",
    tabela: "rl_atend_prof_conduta",
    coluna: "tp_cds_conduta",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  }
];