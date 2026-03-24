import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import styles from '../FormCadastro.module.css';

function PasswordField({ label, value, onChange, error, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.field}>
      <label htmlFor={label}>{label}</label>

      <div className={styles.inputWrapper}>
        <FaLock className={styles.icon} />

        <input
          id={label}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder={placeholder}
        />

        <span className={styles.eye} onClick={() => setShow(!show)}>
          {show ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default PasswordField;