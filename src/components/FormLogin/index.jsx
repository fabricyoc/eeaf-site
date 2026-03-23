import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import styles from './FormLogin.module.css';
import { Link } from "react-router-dom";

function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.formLogin}>
      <h3 className={styles.title}>Entrar</h3>

      <div className={styles.field}>
        <label htmlFor="email">E-mail</label>

        <div className={styles.inputWrapper}>
          <FaEnvelope className={styles.icon} />

          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="senha">Senha</label>

        <div className={styles.inputWrapper}>
          <FaLock className={styles.icon} />

          <input
            type={showPassword ? "text" : "password"}
            id="senha"
            placeholder="Digite sua senha"
            required
          />

          <span
            className={styles.eye}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
      </div>

      <button type="submit" className={styles.button}>
        Entrar
      </button>

      <p className={styles.register}>
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </form>
  );
}

export default FormLogin;