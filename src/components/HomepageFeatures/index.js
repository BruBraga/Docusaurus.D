import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Projeto PROADI-SUS DIAna na APS',
    Svg: require('@site/static/img/home/logodaps.svg').default,
    description: (
      <>
        O projeto DIAna na APS tem como objetivo a promoção de ferramentas digitais para Atenção Primária à Saúde.
      </>
    ),
  },
  {
    title: 'Einstein Hospital Israelita',
    Svg: require('@site/static/img/home/logoeinstein.svg').default,
    description: (
      <>
        Este projeto faz parte do portifólio do hospital de excelência Einstein Hospital Israelita, localizado na cidade de São Paulo.
      </>
    ),
  },
  {
    title: 'Sistema Único de Saúde',
    Svg: require('@site/static/img/home/logosus.svg').default,
    description: (
      <>
        O SUS é o sistema público de saúde do Brasil, que garante acesso integral, universal e gratuito à população.
      </>
    ),
  },
  {
    title: 'PROADI-SUS',
    Svg: require('@site/static/img/home/logoproadi.svg').default,
    description: (
      <>
        O Programa de Apoio ao Desenvolvimento Institucional do Sistema Único de Saúde é uma iniciativa do Ministério da Saúde que promove a cooperação entre hospitais de excelência e o SUS.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={clsx('text--center', styles.logoWrapper)}>
        <Svg
          className={styles.featureSvg}
          role="img"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}