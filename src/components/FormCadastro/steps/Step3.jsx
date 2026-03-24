import { FaEnvelope } from "react-icons/fa";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";

function Step3({ formData, errors, handleChange }) {

  const senhasIguais = formData.senha === formData.confirmarSenha;

  return (
    <>
      <InputField
        label="Email"
        type="email"
        placeholder="Digite seu e-mail"
        icon={FaEnvelope}
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
      />

      <PasswordField
        label="Senha"
        placeholder="Cadastre uma senha"
        value={formData.senha}
        onChange={(e) => handleChange("senha", e.target.value)}
        error={errors.senha}
      />

      <PasswordField
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        value={formData.confirmarSenha}
        onChange={(e) => handleChange("confirmarSenha", e.target.value)}
        error={errors.confirmarSenha}
      />

      {!senhasIguais && formData.confirmarSenha && (
        <span style={{ color: "red", fontSize: "0.8rem" }}>
          As senhas não coincidem
        </span>
      )}
    </>
  );
}

export default Step3;