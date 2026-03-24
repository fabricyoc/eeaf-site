import styles from '../FormCadastro.module.css';

function InputField({ label, icon: Icon, error, ...props }) {
  return (
    <div className={`${styles.field} ${styles.fieldFull}`}>
      <label htmlFor={label}>{label}</label>

      <div className={styles.inputWrapper}>
        {Icon && <Icon className={styles.icon} />}
        <input id={label} className={styles.input} {...props} />
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default InputField;