export default {
  secoes: [
    {
      titulo: "Problemas e/ou condições avaliados neste atendimento",
      linhas: [
        {
          tipo: "dado",
          campo: "Problemas e/ou condições avaliados neste atendimento",
          obrigatorioPec: "não",
          formatoPec: "livre",
          tabela: "tb_evolucao_avaliacao",
          coluna: "ds_avaliacao",
          formatoBd: "text",
          obrigatorioBd: "não",
        },
      ],
    },

    {
      titulo: "Problemas e/ou condições avaliados neste atendimento",
      linhas: [
        {
          tipo: "dado",
          campo: "CIAP 2",
          obrigatorioPec: "não",
          formatoPec: "combo box",
          tabela: "tb_problema",
          coluna: "co_ciap",
          formatoBd: "bigint",
          obrigatorioBd: "não",
        },
        {
          tipo: "dado",
          campo: "CID 10",
          obrigatorioPec: "-",
          formatoPec: "combo box",
          tabela: "tb_problema",
          coluna: "co_cid10",
          formatoBd: "bigint",
          obrigatorioBd: "não",
        },
      ],
    },
  ],
};