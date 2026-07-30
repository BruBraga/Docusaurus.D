export const prescricaoData = [
  {
    tipo: "secao",
    texto: "Adicionar prescrição"
  },
  {
    tipo: "dado",
    campo: "Preencher manualmente. Medicamento não encontrado na lista",
    obrigatorioPec: "não",
    formatoPec: "check box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },
  {
    tipo: "dado",
    campo: "Princípio ativo/medicamento",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_receita_medicamento",
    coluna: "co_medicamento",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  },
  {
    tipo: "dado",
    campo: "Via de administração",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_receita_medicamento",
    coluna: "co_aplicacao_medicamento",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Tipo de dose",
    obrigatorioPec: "sim",
    formatoPec: "radio button",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },
  {
    tipo: "dado",
    campo: "Quantidade da dose",
    obrigatorioPec: "sim",
    formatoPec: "numérico",
    tabela: "tb_receita_medicamento",
    coluna: "qt_dose",
    formatoBd: "character varying(100)",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Unidade de medida",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_receita_medicamento",
    coluna: "co_unidade_medida_dose",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },

  {
    tipo: "subsecao",
    texto: "Periodicidade da dose"
  },

  {
    tipo: "dado",
    campo: "Intervalo",
    obrigatorioPec: "-",
    formatoPec: "-",
    tabela: "tb_receita_medicamento",
    coluna: "tp_frequencia_dose",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "A cada",
    obrigatorioPec: "sim",
    formatoPec: "box",
    tabela: "tb_receita_medicamento",
    coluna: "ds_frequencia_dose",
    formatoBd: "character varying(25)",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Início do tratamento",
    obrigatorioPec: "sim",
    formatoPec: "dd/mm/aaaa",
    tabela: "tb_receita_medicamento",
    coluna: "dt_inicio_tratamento",
    formatoBd: "date",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Duração",
    obrigatorioPec: "sim",
    formatoPec: "numérico",
    tabela: "tb_receita_medicamento",
    coluna: "qt_duracao_tratamento",
    formatoBd: "integer",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "-",
    obrigatorioPec: "-",
    formatoPec: "radio button",
    tabela: "tb_receita_medicamento",
    coluna: "tp_un_medida_tempo_tratamento",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Recomendações",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "tb_receita_medicamento",
    coluna: "ds_recomendacao",
    formatoBd: "text",
    obrigatorioBd: "não"
  },

  {
    tipo: "subsecao",
    texto: "Integração com Hórus"
  },

  {
    tipo: "dado",
    campo: "Quantidade solicitada",
    obrigatorioPec: "sim",
    formatoPec: "numérico",
    tabela: "tb_receita_medicamento",
    coluna: "qt_receitada",
    formatoBd: "integer",
    obrigatorioBd: "não"
  }
];