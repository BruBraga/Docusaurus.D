import React from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Footer() {
  const location = useLocation();
  const homeUrl = useBaseUrl('/');

  if (location.pathname === homeUrl) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Catálogo de Dados DIAna
      </p>
    </footer>
  );
}