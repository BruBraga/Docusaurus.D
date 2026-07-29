export default [
  { tipo: 'secao', texto: 'Cidadão / Lista de problemas dos familiares' },
  {
    tipo: 'dado',
    campo: 'CIAP 2',
    obrigatorioPec: 'não',
    formatoPec: 'combo box',
    tabela: 'rl_antecedente_ciap',
    coluna: 'co_ciap',
    formatoBd: 'bigint',
    obrigatorioBd: 'sim',
  },
  {
    tipo: 'dado',
    campo: 'Observações',
    obrigatorioPec: 'não',
    formatoPec: 'livre',
    tabela: 'rl_antecedente_ciap',
    coluna: 'ds_observacao',
    formatoBd: 'varchar(400)',
    obrigatorioBd: 'não',
  },
];