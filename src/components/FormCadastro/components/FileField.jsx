import styles from '../FormCadastro.module.css';

function FileField({ label, icon: Icon, onChange }) {
  return (
    <div className={`${styles.field} ${styles.fieldFull}`}>
      <label htmlFor={label}>{label}</label>

      <div className={styles.inputWrapper}>
        {Icon && <Icon className={styles.icon} />}
        <input id={label} type="file" className={styles.input} onChange={onChange} />
      </div>
    </div>
  );
}

export default FileField;