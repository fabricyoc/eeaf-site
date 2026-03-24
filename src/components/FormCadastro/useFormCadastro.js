import { useState } from "react";

export function useFormCadastro() {

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    telefoneResponsavel: "",
    dataNascimento: "",
    idade: null,
    foto: null,
    email: "",
    senha: "",
    confirmarSenha: "",
    escola: "Escola Estadual Aristófanes Fernandes",
    nivel: ""
  });

  const handleChange = (field, value) => {
    let newErrors = {};

    // DATA DE NASCIMENTO
    if (field === "dataNascimento") {
      const hoje = new Date();
      const nasc = new Date(value);

      // BLOQUEIA DATA FUTURA
      if (nasc > hoje) {
        newErrors.dataNascimento = "Data não pode ser futura";

        setErrors(prev => ({
          ...prev,
          ...newErrors
        }));

        return; // PARA EXECUÇÃO
      }

      // CALCULA IDADE
      let idade = hoje.getFullYear() - nasc.getFullYear();
      const mes = hoje.getMonth() - nasc.getMonth();

      if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        idade--;
      }

      // ATUALIZA TUDO DE UMA VEZ (CORRETO)
      setFormData(prev => ({
        ...prev,
        dataNascimento: value,
        idade
      }));

      // limpa erro se estiver ok
      setErrors(prev => ({
        ...prev,
        dataNascimento: ""
      }));

      return;
    }

    //  VALIDAÇÃO DO NOME
    if (field === "nome") {
      if (value.length < 6) {
        newErrors.nome = "O nome deve ter pelo menos 6 caracteres";

        setErrors(prev => ({
          ...prev,
          ...newErrors
        }));

        // ainda atualiza o valor (boa prática)
        setFormData(prev => ({
          ...prev,
          nome: value
        }));

        return;
      }
    }

    // VALIDAÇÃO DE SENHA
    if (field === "senha") {
      const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

      let error = "";

      if (value.length === 0) {
        error = "Informe a senha";
      } else if (!senhaRegex.test(value)) {
        error = "Senha deve ter 8+ caracteres, letra, número e símbolo";
      }

      setFormData(prev => ({
        ...prev,
        senha: value
      }));

      setErrors(prev => ({
        ...prev,
        senha: error
      }));

      return;
    }

    // ATUALIZA NORMAL (OUTROS CAMPOS)
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // LIMPA ERRO DO CAMPO
    setErrors(prev => ({
      ...prev,
      [field]: ""
    }));
  };

  const formatCPF = (value) => {
    value = value.replace(/\D/g, "").slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  };

  const formatPhone = (value) => {
    value = value.replace(/\D/g, "").slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.nome) newErrors.nome = "Informe o nome";

      if (!formData.dataNascimento) {
        newErrors.dataNascimento = "Informe a data";
      }

      if (!formData.cpf || formData.cpf.length < 14) {
        newErrors.cpf = "CPF inválido";
      }
    }

    if (step === 2) {
      if (!formData.escola) newErrors.escola = "Informe a escola";
      if (!formData.nivel) newErrors.nivel = "Selecione o nível";
    }

    if (step === 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

      if (!formData.email) {
        newErrors.email = "Informe o email";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email inválido";
      }

      if (!formData.senha) {
        newErrors.senha = "Informe a senha";
      } else if (!senhaRegex.test(formData.senha)) {
        newErrors.senha = "Senha deve ter 8+ caracteres, letra, número e símbolo";
      }


      if (!formData.confirmarSenha) {
        newErrors.confirmarSenha = "Confirme a senha";
      } else if (formData.senha !== formData.confirmarSenha) {
        newErrors.confirmarSenha = "Senhas diferentes";
      }
    }

    if (step === 4) {
      if (!formData.telefone) {
        newErrors.telefone = "Informe o telefone";
      }

      if (
        formData.idade !== null &&
        formData.idade < 18 &&
        !formData.telefoneResponsavel
      ) {
        newErrors.telefoneResponsavel = "Informe o responsável";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    const isValid = validateStep();

    if (isValid) {
      setErrors({}); // limpa erros da etapa anterior
      setStep((prev) => prev + 1);
    }
  };


  const prevStep = () => {
    setErrors({}); // limpa erros ao voltar
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStep()) return;

    console.log("Dados enviados:", formData);

    alert("Cadastro realizado com sucesso! (FAKE!!!)");
  };

  return {
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
  };
}