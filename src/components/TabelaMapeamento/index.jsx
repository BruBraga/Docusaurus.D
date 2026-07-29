import React from 'react';
import styles from './styles.module.css';

/**
 * Renderiza uma tabela de mapeamento técnico PEC ↔ Banco de Dados.
 *
 * @param {string} titulo - Título opcional acima da tabela (ex: "Antecedentes sobre Parto e Nascimento")
 * @param {Array} linhas - Array de objetos descrevendo cada linha da tabela.
 *
 * Cada item de `linhas` pode ser de 3 tipos, diferenciados pela propriedade `tipo`:
 *
 * 1. { tipo: 'secao', texto: 'Nascidos' }
 * 2. { tipo: 'subsecao', texto: 'Informações obstétricas' }
 * 3. {
 *      tipo: 'dado',
 *      campo: 'Gestas prévias',
 *      obrigatorioPec: 'não',
 *      formatoPec: 'numérico',
 *      tabela: ['tb_antecedente_item', 'tb_antecedente'],
 *      coluna: ['ds_valor_item', 'ds_gestacao'],
 *      formatoBd: ['varchar(4000)', 'varchar(255)'],
 *      obrigatorioBd: 'não',
 *    }
 *
 * Campos `tabela`, `coluna` e `formatoBd` aceitam string única ou array
 * (quando o campo do PEC mapeia para mais de uma coluna do banco).
 */
export default function TabelaMapeamento({ titulo, linhas, larguraFixa }) {
  return (
    <div className={styles.tabelaContainer}>
      {titulo && <p className={styles.tituloTabela}>{titulo}</p>}

      <table className={`${styles.tabelaAntecedentes} ${larguraFixa ? styles.larguraFixa : ''}`}>
        <thead>
          <tr className={styles.headerGroup}>
            <th colSpan="3" className={styles.pec}>PEC</th>
            <th colSpan="4" className={styles.bd}>Banco de Dados</th>
          </tr>
          <tr>
            <th>Campo</th>
            <th>Obrigatório</th>
            <th>Formato</th>
            <th>Tabela</th>
            <th>Coluna</th>
            <th>Formato</th>
            <th>Obrigatório</th>
          </tr>
        </thead>

        <tbody>
          {linhas.map((linha, index) => {
            if (linha.tipo === 'secao') {
              return (
                <tr key={index} className={styles.secao}>
                  <td colSpan="7">{linha.texto}</td>
                </tr>
              );
            }

            if (linha.tipo === 'subsecao') {
              return (
                <tr key={index} className={styles.subsecao}>
                  <td colSpan="7">{linha.texto}</td>
                </tr>
              );
            }

            // tipo === 'dado'
            return (
              <tr key={index}>
                <td>{linha.campo}</td>
                <td>{linha.obrigatorioPec}</td>
                <td>{linha.formatoPec}</td>
                <td><MultiLinha valor={linha.tabela} destaque /></td>
                <td><MultiLinha valor={linha.coluna} /></td>
                <td><MultiLinha valor={linha.formatoBd} /></td>
                <td>{linha.obrigatorioBd}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Componente auxiliar interno: um campo do PEC pode mapear para mais de
 * uma tabela/coluna/formato do banco (ex: "tb_antecedente_item" e
 * "tb_antecedente" juntos, separados por quebra de linha). Centraliza
 * essa lógica em vez de repeti-la em cada célula.
 */
function MultiLinha({ valor, destaque = false }) {
  const itens = Array.isArray(valor) ? valor : [valor];
  const conteudo = itens.map((item, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {item}
    </React.Fragment>
  ));

  return destaque ? <strong>{conteudo}</strong> : conteudo;
}