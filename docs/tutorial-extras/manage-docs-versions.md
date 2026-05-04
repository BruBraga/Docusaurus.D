---
sidebar_position: 1
---


# Pré-Natal - Diabetes Gestacional

<p class="justify">

A seguir, são apresentados os componentes formados pelos módulos que compõem as etapas fundamentais do atendimento à gestante, conforme ilustrado na imagem abaixo:

<div align="center">
![SOAP](/img/soap.png)
</div>



## Antecedentes

Para apoiar a compreensão das funcionalidades do módulo de **Antecedentes**, disponibilizamos um vídeo introdutório e de rápida visualização. Esse material apresenta, diretamente a partir das telas do sistema, as principais características e passos do módulo, oferecendo ao usuário uma visão prática e imediata de seu funcionamento.

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="videoWrapper">
  <video controls>
    <source
      src={useBaseUrl('/videos/soap_antecedentes.mp4')}
      type="video/mp4"
    />
    Seu navegador não suporta vídeo.
  </video>
   
</div>
</p>

---

### Mapeamento Técnico dos Campos do Sistema

<p className="descricao-tabela">
As tabelas a seguir apresentam o mapeamento dos campos da área de Antecedentes, indicando sua origem no banco de dados do PEC. Para cada tabela, são disponibilizadas imagens extraídas diretamente da interface do sistema, com o objetivo de facilitar a identificação visual dos campos na plataforma.
</p>

#### Antecedentes sobre Parto e Nascimento

<div align="center">
![antecedentes-cidadão-sessão-1](/img/antecedentes-cidadão-sessão-1.png)
</div>

<div className="tabela-container">

<table className="tabela-antecedentes">

<thead>

<tr className="header-group">
  <th colSpan="3" className="pec">PEC</th>
  <th colSpan="4" className="bd">Banco de Dados</th>
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

<tr>
  <td>Cidadão</td>
  <td>não</td>
  <td>livre</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_observacao</td>
  <td>varchar(4000)</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Cidadão / Antecedentes sobre Parto e Nascimento</td>
</tr>

<tr className="subsecao">
  <td colSpan="7">Informações obstétricas</td>
</tr>

<tr>
  <td>Gestas prévias</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_gestacao</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Abortos</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>qt_aborto</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Desfecho da última gestação aconteceu há menos de um ano</td>
  <td>não</td>
  <td>check box</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>st_valor_item<br/>st_parto_menos_de_um_ano</td>
  <td>integer<br/>integer</td>
  <td>não</td>
</tr>

<tr>
  <td>Partos realizados</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_parto</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Vaginais</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_parto_vaginal</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Cesáreas</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_cesaria</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Partos domiciliares</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_parto_domiciliar</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Nascidos</td>
</tr>

<tr>
  <td>Vivo</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>qt_nascidos_vivos</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Mortos</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_natimorto</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Recém-nascidos com</td>
</tr>

<tr>
  <td>Menos de 2500g</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_recem_nascido</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Mais de 4500g</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>qt_recem_nascido_acima</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Nascidos vivos</td>
</tr>

<tr>
  <td>Vivem</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_filho_vivo</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Mortos na 1ª semana</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_filho_vivo</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

<tr>
  <td>Mortos depois da 1ª semana</td>
  <td>não</td>
  <td>numérico</td>
  <td><strong>tb_antecedente_item<br/>tb_antecedente</strong></td>
  <td>ds_valor_item<br/>ds_filho_vivo</td>
  <td>varchar(4000)<br/>varchar(255)</td>
  <td>não</td>
</tr>

</tbody>

</table>

</div>


### Antecedentes resolvidos da Lista Problemas e Condições

<div align="center">
![antecedentes-cidadão-sessão-3](/img/antecedentes-cidadão-sessão-3.png)
</div>

<div className="tabela-container">

<table className="tabela-antecedentes">

<thead>

<tr className="header-group">
  <th colSpan="3" className="pec">PEC</th>
  <th colSpan="4" className="bd">Banco de Dados</th>
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

<tr className="secao">
  <td colSpan="7">Cidadão / Antecedentes sobre Parto e Nascimento</td>
</tr>

<tr className="subsecao">
  <td colSpan="7">Antecedentes resolvidos da Lista de Problemas e Condições</td>
</tr>

<tr>
  <td>CIAP 2</td>
  <td>não</td>
  <td>combo box</td>
  <td><strong>tb_problema</strong></td>
  <td>co_ciap</td>
  <td>bigint</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Início</td>
</tr>

<tr>
  <td>Início: Data ou Idade</td>
  <td>não</td>
  <td>dd/mm/aaaa ou anos e meses</td>
  <td><strong>tb_problema_evolucao</strong></td>
  <td>dt_inicio_problema</td>
  <td>date</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Fim</td>
</tr>

<tr>
  <td>Fim: Data ou Idade</td>
  <td>não</td>
  <td>dd/mm/aaaa ou anos e meses</td>
  <td><strong>tb_problema_evolucao</strong></td>
  <td>dt_inicio_problema</td>
  <td>date</td>
  <td>não</td>
</tr>

<tr>
  <td>Observações</td>
  <td>não</td>
  <td>livre</td>
  <td><strong>tb_problema_evolucao<br/>tb_problema</strong></td>
  <td>ds_observacao<br/>co_ultimo_problema_evolucao</td>
  <td>varchar(255)<br/>bigint</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Antecedentes hospitalares</td>
</tr>

<tr className="subsecao">
  <td colSpan="7">Cirurgia e/ou internação</td>
</tr>

<tr>
  <td>Cirurgia e/ou internação</td>
  <td>sim</td>
  <td>livre</td>
  <td><strong>tb_cirurgias_internacoes</strong></td>
  <td>ds_cirurgia_internacao</td>
  <td>varchar(400)</td>
  <td>não</td>
</tr>

<tr className="secao">
  <td colSpan="7">Realizada em</td>
</tr>

<tr>
  <td>Data ou Idade</td>
  <td>não</td>
  <td>dd/mm/aaaa ou anos e meses</td>
  <td><strong>tb_cirurgias_internacoes</strong></td>
  <td>dt_cirurgia_internacao</td>
  <td>date</td>
  <td>não</td>
</tr>

<tr>
  <td>Observações</td>
  <td>não</td>
  <td>livre</td>
  <td><strong>tb_cirurgias_internacoes</strong></td>
  <td>ds_observacoes</td>
  <td>varchar(800)</td>
  <td>não</td>
</tr>

</tbody>

</table>

</div>

### Antecedentes Familiar 

<div align="center">
![antecedentes-familiar](/img/antecedentes-familiar.png)
</div>

<div className="tabela-container">

<table className="tabela-antecedentes">

<thead>

<tr className="header-group">
  <th colSpan="3" className="pec">PEC</th>
  <th colSpan="4" className="bd">Banco de Dados</th>
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

<tr className="secao">
  <td colSpan="7">Cidadão / Lista de problemas dos familiares</td>
</tr>

<tr>
  <td>CIAP 2</td>
  <td>não</td>
  <td>combo box</td>
  <td><strong>rl_antecedente_ciap</strong></td>
  <td>co_ciap</td>
  <td>bigint</td>
  <td>sim</td>
</tr>

<tr>
  <td>Observações</td>
  <td>não</td>
  <td>livre</td>
  <td><strong>rl_antecedente_ciap</strong></td>
  <td>ds_observacao</td>
  <td>varchar(400)</td>
  <td>não</td>
</tr>

</tbody>

</table>

</div>

