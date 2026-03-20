import styles from "./Footer.module.css";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <div className={styles.escola}>
        EEAF &copy; {anoAtual} - Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
