export default {
  secoes: [
    {
      titulo: "Pré-natal, parto e nascimento",
      linhas: [
        {
          tipo: "dado",
          campo: "Tipo de gravidez",
          obrigatorioPec: "não",
          formatoPec: "combo box",
          tabela: "tb_pre_natal",
          coluna: "tp_gravidez",
          formatoBd: "bigint",
          obrigatorioBd: "não",
        },
      ],
    },
  ],
};