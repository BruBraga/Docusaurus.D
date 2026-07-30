export const exameAltoCustoData = [
  {
    tipo: "secao",
    texto: "Solicitação de exames de alto custo"
  },
  {
    tipo: "dado",
    campo: "+ Adicionar exame de alto custo",
    obrigatorioPec: "não",
    formatoPec: "button",
    tabela: "tb_requisicao_exame",
    coluna: "tp_exame",
    formatoBd: "integer",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Exames",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_exame_requisitado",
    coluna: "co_proced",
    formatoBd: "-",
    obrigatorioBd: "-"
  },
  {
    tipo: "dado",
    campo: "CID 10",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_requisicao_exame",
    coluna: "co_cid10",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Justificativa do procedimento",
    obrigatorioPec: "sim",
    formatoPec: "livre",
    tabela: "tb_requisicao_exame",
    coluna: "ds_justificativa_procedimento",
    formatoBd: "character varying(2000)",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Observações",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "tb_requisicao_exame",
    coluna: "ds_observacao",
    formatoBd: "character varying(500)",
    obrigatorioBd: "não"
  }
];