import { FaUser, FaCalendarAlt, FaIdCard, FaImage } from "react-icons/fa";
import InputField from "../components/InputField";
import FileField from "../components/FileField";

function Step1({ formData, errors, handleChange, formatCPF }) {
  return (
    <>
      <FileField
        label="Foto"
        icon={FaImage}
        onChange={(e) => handleChange("foto", e.target.files[0])}
      />

      <InputField
        label="Nome"
        placeholder="Digite seu nome"
        icon={FaUser}
        value={formData.nome}
        onChange={(e) => handleChange("nome", e.target.value)}
        error={errors.nome}
      />

      <InputField
        label="Data de nascimento"
        type="date"
        icon={FaCalendarAlt}
        value={formData.dataNascimento}
        onChange={(e) => handleChange("dataNascimento", e.target.value)}
        max={new Date().toISOString().split("T")[0]}
        error={errors.dataNascimento}
      />

      <InputField
        label="CPF"
        placeholder="111.222.333-44"
        icon={FaIdCard}
        value={formData.cpf}
        onChange={(e) => handleChange("cpf", formatCPF(e.target.value))}
        error={errors.cpf}
      />
    </>
  );
}

export default Step1;