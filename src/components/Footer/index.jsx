import styles from "./Footer.module.css";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <div className={styles.escola}>
        Escola Estadual Aristófanes Fernandes {anoAtual} &copy;. Todos os direitos reservados.
      </div>
      <span>Desenvolvido por <a href="https://fabricyoc.github.io/" target="_blank" rel="noopener noreferrer">Fabricyo</a>.</span>
    </footer>
  );
}

export default Footer;
