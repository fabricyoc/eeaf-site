import { FaWhatsapp } from "react-icons/fa";
import InputField from "../components/InputField";

function Step4({ formData, errors, handleChange, formatPhone }) {

  return (
    <>
      <InputField
        label="WhatsApp"
        placeholder="Digite seu WhatsApp"
        icon={FaWhatsapp}
        value={formData.telefone}
        onChange={(e)=>handleChange("telefone", formatPhone(e.target.value))}
        error={errors.telefone}
      />

      {formData.idade !== null && formData.idade < 18 && (
        <InputField
          label="WhatsApp do responsável"
          placeholder="Digite o WhatsApp de seu responsável"
          icon={FaWhatsapp}
          value={formData.telefoneResponsavel}
          onChange={(e)=>handleChange("telefoneResponsavel", formatPhone(e.target.value))}
          error={errors.telefoneResponsavel}
        />
      )}
    </>
  );
}

export default Step4;