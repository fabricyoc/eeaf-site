import FormLogin from "../../components/FormLogin";
import styles from './Login.module.css';

function Login() {
  return (
    <section className={styles.cabecalhoLogin}>
      <img src="/sigef/sigef.png" alt="" />
      <h2>SIGEF</h2>
      <p>Sistema de Gestão Escolar e Feiras de Ciências</p>
      <FormLogin />
    </section>
  );
}

export default Login;
