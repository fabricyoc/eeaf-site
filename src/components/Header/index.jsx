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
        <Link to='/'>
          <img src='/logo.png' alt="Imagem indisponível" />
          <span>
            <h3>EE Aristófanes Fernandes</h3>
            <p>São Vicente, RN</p>
          </span>
        </Link>
      </section>

      <nav
        className={`${styles.navHeader} ${showMenu ? styles.showMenuSandwich : ''}`}
        onClick={toggleMenu}
      >
        <Link to='/'>Início</Link>
        <Link to='/arquivos'>Arquivos</Link>
        {/* <a href="#" rel="noopener noreferrer">Contatos</a> */}
        <Link to='/contatos'>Contatos</Link>
        <a href="#" rel="noopener noreferrer">Login</a>
      </nav>
    </header>
  );
}

export default Header;
