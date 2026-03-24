import { FaUser, FaIdCard } from "react-icons/fa";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

function Step2({ formData, errors, handleChange }) {

  const niveis = [
    "1º ano do Ensino Fundamental",
    "2º ano do Ensino Fundamental",
    "3º ano do Ensino Fundamental",
    "4º ano do Ensino Fundamental",
    "5º ano do Ensino Fundamental",
    "6º ano do Ensino Fundamental",
    "7º ano do Ensino Fundamental",
    "8º ano do Ensino Fundamental",
    "9º ano do Ensino Fundamental",
    "1ª série Potiguar",
    "2ª série Potiguar",
    "3ª série Potiguar",
    "1ª série Técnica em Informática",
    "2ª série Técnica em Informática",
    "3ª série Técnica em Informática",
    "Não listado"
  ];

  return (
    <>
      <InputField
        label="Nome da sua escola"
        placeholder="Digite o nome da sua escola"
        icon={FaUser}
        value={formData.escola}
        onChange={(e)=>handleChange("escola", e.target.value)}
        error={errors.escola}
      />

      <SelectField
        label="Nível"
        icon={FaIdCard}
        value={formData.nivel}
        onChange={(e)=>handleChange("nivel", e.target.value)}
        error={errors.nivel}
      >
        <option value="">Selecione...</option>
        {niveis.map((n,i)=><option key={i}>{n}</option>)}
      </SelectField>
    </>
  );
}

export default Step2;