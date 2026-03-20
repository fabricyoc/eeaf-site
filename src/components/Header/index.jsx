import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => setshowMenu(!showMenu);
  const closeMenu = () => setshowMenu(false);
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

      {showMenu && <div className={styles.overlay} onClick={toggleMenu}></div>}

      <nav className={`${styles.navHeader} ${showMenu ? styles.showMenuSandwich : ''}`}>
        <Link to='/' onClick={closeMenu}>Início</Link>
        <Link to='/arquivos' onClick={closeMenu}>Arquivos</Link>
        <Link to='/eventos' onClick={closeMenu}>Eventos</Link>
        <Link to='/contatos' onClick={closeMenu}>Contatos</Link>
        <Link to='/login' onClick={closeMenu}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
