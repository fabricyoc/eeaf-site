import styles from './FormCadastro.module.css';
import { Link } from "react-router-dom";

import { useFormCadastro } from "./useFormCadastro";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

function FormCadastro() {

  const {
    step,
    formData,
    errors,
    handleChange,
    formatCPF,
    formatPhone,
    nextStep,
    prevStep,
    validateStep,
    handleSubmit
  } = useFormCadastro();

  const steps = [
    <Step1 {...{ formData, errors, handleChange, formatCPF }} />,
    <Step2 {...{ formData, errors, handleChange }} />,
    <Step3 {...{ formData, errors, handleChange }} />,
    <Step4 {...{ formData, errors, handleChange, formatPhone }} />
  ];

  return (
    <form
      className={styles.formCadastro}
      onSubmit={handleSubmit}
    >
      <h3 className={styles.title}>Cadastro</h3>
      <div className={styles.progress}>Etapa {step} de 4</div>

      {steps[step - 1]}

      <div className={styles.navigation}>
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Etapa anterior
          </button>
        )}

        {step < 4 ? (
          <button type="button" onClick={nextStep}>
            Próxima etapa
          </button>
        ) : (
          <button
            type="button"
            className={styles.cadastrar}
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        )}
      </div>

      <Link to="/login" className={styles.buttonBack}>
        Voltar
      </Link>
    </form>
  );
}

export default FormCadastro;