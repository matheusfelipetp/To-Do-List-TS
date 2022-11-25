import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.span}>React + TS Todo</span> @ 2022
      </p>
    </footer>
  );
};
