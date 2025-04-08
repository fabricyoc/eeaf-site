import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => setshowMenu(!showMenu);

  return (
    <header className={styles.cabecalho}>
      <div
        className={styles.menu}
        onClick={toggleMenu}
      >
        <div className={styles.linha}></div>
        <div className={styles.linha}></div>
        <div className={styles.linha}></div>
      </div>

      <section className={styles.logo}>
        <img src='/logo.png' alt="Imagem indisponível" />
        <span>
          <h3>EE Aristófanes Fernandes</h3>
          <p>São Vicente, RN</p>
        </span>
      </section>

      <nav
        className={`${styles.navHeader} ${showMenu ? styles.showMenuSandwich : ''}`}
        onClick={toggleMenu}
      >
        {/* <a href="#" rel="noopener noreferrer">Sobre</a> */}
        <Link to='/'>Sobre</Link>
        <a href="#" rel="noopener noreferrer">Modalidades</a>
        <a href="#" rel="noopener noreferrer">Projetos</a>
        <a href="#" rel="noopener noreferrer">Arquivos</a>
        <a href="#" rel="noopener noreferrer">Contatos</a>
        {/* <a href="#" rel="noopener noreferrer">Login</a> */}
      </nav>
    </header>
  );
}

export default Header;
