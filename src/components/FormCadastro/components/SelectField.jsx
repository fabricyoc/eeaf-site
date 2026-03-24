import styles from '../FormCadastro.module.css';

function SelectField({ label, icon: Icon, error, children, ...props }) {
  return (
    <div className={`${styles.field} ${styles.fieldFull}`}>
      <label htmlFor={label}>{label}</label>

      <div className={styles.inputWrapper}>
        {Icon && <Icon className={styles.icon} />}
        <select id={label} className={styles.input} {...props}>
          {children}
        </select>
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default SelectField;