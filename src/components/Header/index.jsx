import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      
      {/* botão menu */}
      <div
        className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* logo */}
      <section className={styles.logo}>
        <Link to="/">
          <img src="/logo.png" alt="Logo da escola" />
          <span>
            <h3>EE Aristófanes Fernandes</h3>
            <p>São Vicente, RN</p>
          </span>
        </Link>
      </section>

      {/* overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}

      {/* navegação */}
      <nav
        className={`${styles.nav} ${
          isMenuOpen ? styles.sidebarOpen : ""
        }`}
      >
        <Link to="/" onClick={closeMenu}>Início</Link>
        <Link to="/arquivos" onClick={closeMenu}>Arquivos</Link>
        <Link to="/eventos" onClick={closeMenu}>Eventos</Link>
        <Link to="/contatos" onClick={closeMenu}>Contatos</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;