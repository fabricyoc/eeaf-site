import FormCadastro from "../../components/FormCadastro";
import styles from './Cadastro.module.css';

function Login() {
  return (
    <section className={styles.cabecalhoCadastro}>
      <img src="/sigef/sigef.png" alt="" />
      <h2>SIGEF</h2>
      <p>Sistema de Gestão Escolar e Feiras de Ciências</p>
      <FormCadastro />
    </section>
  );
}

export default Login;
