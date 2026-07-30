export default {
  secoes: [
    {
      titulo: "Alergias e reações adversas",
      linhas: [
        {
          tipo: "dado",
          campo: "Categoria do agente causador",
          obrigatorioPec: "sim",
          formatoPec: "combo box",
          tabela: "tb_substancia_espec_alergia",
          coluna: "co_categoria",
          formatoBd: "bigint",
          obrigatorioBd: "sim",
        },
      ],
    },
  ],
};