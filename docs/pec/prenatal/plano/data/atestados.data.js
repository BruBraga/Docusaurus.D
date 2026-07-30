export const atestadosData = [
  {
    tipo: "secao",
    texto: "Atestados"
  },
  {
    tipo: "subsecao",
    texto: "Atestados"
  },
  {
    tipo: "dado",
    campo: "Modelo",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_atestado",
    coluna: "tp_atestado",
    formatoBd: "integer",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Data",
    obrigatorioPec: "sim",
    formatoPec: "dd/mm/aaaa",
    tabela: "tb_atestado",
    coluna: "dt_afastamento",
    formatoBd: "timestamp without time zone",
    obrigatorioBd: "não"
  }
];