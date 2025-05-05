import styles from '../footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © 2025 LoopIn. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
