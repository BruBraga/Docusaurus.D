import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function VideoTutorial({ src }) {
  return (
    <div className={styles.videoWrapper}>
      <video controls>
        <source src={useBaseUrl(src)} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
}