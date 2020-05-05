import React, { memo } from 'react';
import styles from './styles.module.css';
import baseLogo from '../../../assets/tinykitten.svg';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://tinykitten.me"
      rel="noopener noreferrer"
      target="_blank"
      className={`${styles.productof} ${styles.link}`}
    >
      A product of&nbsp;
      <img src={baseLogo} alt="TinyKitten" />
    </a>
    <p className={`${styles.copyright} ${styles.link}`}>
      Copyright &copy; 2020&nbsp;
      <a target="_blank" rel="noopener noreferrer" href="https://tinykitten.me">
        TinyKitten
      </a>
    </p>
  </footer>
);

export default memo(Footer);
