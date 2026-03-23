import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaWhatsapp,
  FaCalendarAlt,
  FaImage,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import styles from './FormCadastro.module.css';
import { Link } from "react-router-dom";

function FormCadastro() {

  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneResponsavel, setTelefoneResponsavel] = useState("");

  const [dataNascimento, setDataNascimento] = useState("");
  const [idade, setIdade] = useState(null);

  const [foto, setFoto] = useState(null);

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);

  const senhasIguais = senha === confirmarSenha;

  // calcular idade
  const calcularIdade = (data) => {
    const hoje = new Date();
    const nascimento = new Date(data);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  };

  // CPF
  const formatCPF = (value) => {
    value = value.replace(/\D/g, "").slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  };

  // telefone
  const formatPhone = (value) => {
    value = value.replace(/\D/g, "").slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  };

  const handleDataNascimento = (e) => {
    const data = e.target.value;
    setDataNascimento(data);

    if (data) {
      setIdade(calcularIdade(data));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!senhasIguais) {
      alert("As senhas não coincidem");
      return;
    }

    alert("Cadastro fake realizado!");
  };

  return (
    <form className={styles.formCadastro} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Cadastro</h3>

      {/* FOTO */}
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label htmlFor="foto">Foto de perfil</label>
        <div className={styles.inputWrapper}>
          <FaImage className={styles.icon} />
          <input
            type="file"
            id="foto"
            accept="image/*"
            className={styles.input}
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>
      </div>

      {/* NOME */}
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label htmlFor="nome">Nome</label>
        <div className={styles.inputWrapper}>
          <FaUser className={styles.icon} />
          <input type="text" id="nome" className={styles.input} placeholder="Digite seu nome" required />
        </div>
      </div>

      {/* DATA NASCIMENTO */}
      <div className={styles.field}>
        <label htmlFor="dataNasc">Data de nascimento</label>
        <div className={styles.inputWrapper}>
          <FaCalendarAlt className={styles.icon} />
          <input
            type="date"
            id="dataNasc"
            value={dataNascimento}
            onChange={handleDataNascimento}
            className={styles.input}
            required
          />
        </div>
      </div>

      {/* CPF */}
      <div className={styles.field}>
        <label htmlFor="cpf">CPF</label>
        <div className={styles.inputWrapper}>
          <FaIdCard className={styles.icon} />
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
            className={styles.input}
            placeholder="111.222.333-44"
            required
          />
        </div>
      </div>

      {/* EMAIL */}
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label htmlFor="email">E-mail</label>
        <div className={styles.inputWrapper}>
          <FaEnvelope className={styles.icon} />
          <input type="email" id="email" className={styles.input} placeholder="Digite seu e-mail" required />
        </div>
      </div>

      {/* SENHA */}
      <div className={styles.field}>
        <label htmlFor="senha">Senha</label>
        <div className={styles.inputWrapper}>
          <FaLock className={styles.icon} />

          <input
            type={showSenha ? "text" : "password"}
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
            placeholder="Digite sua senha"
            required
          />

          <span
            className={styles.eye}
            onClick={() => setShowSenha(!showSenha)}
          >
            {showSenha ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      {/* CONFIRMAR */}
      <div className={styles.field}>
        <label htmlFor="confirmarSenha">Confirmar Senha</label>
        <div className={styles.inputWrapper}>
          <FaLock className={styles.icon} />

          <input
            type={showConfirmar ? "text" : "password"}
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className={styles.input}
            placeholder="Confirme sua senha"
            required
          />

          <span
            className={styles.eye}
            onClick={() => setShowConfirmar(!showConfirmar)}
          >
            {showConfirmar ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {!senhasIguais && confirmarSenha && (
          <span className={styles.error}>
            As senhas não coincidem
          </span>
        )}
      </div>

      {/* WHATSAPP */}
      <div className={styles.field}>
        <label htmlFor="whatsapp">WhatsApp</label>
        <div className={styles.inputWrapper}>
          <FaWhatsapp className={styles.icon} />
          <input
            type="text"
            id="whatsapp"
            value={telefone}
            onChange={(e) => setTelefone(formatPhone(e.target.value))}
            className={styles.input}
            placeholder="(99) 99999-9999"
            required
          />
        </div>
      </div>

      {/* RESPONSÁVEL */}
      {idade !== null && idade < 18 && (
        <div className={styles.field}>
          <label htmlFor="whatsappResponsavel">WhatsApp do responsável</label>
          <div className={styles.inputWrapper}>
            <FaWhatsapp className={styles.icon} />
            <input
              type="text"
              id="whatsappResponsavel"
              value={telefoneResponsavel}
              onChange={(e) =>
                setTelefoneResponsavel(formatPhone(e.target.value))
              }
              className={styles.input}
              placeholder="(99) 99999-9999"
              required
            />
          </div>
        </div>
      )}

      {/* botões */}
      <button
        type="submit"
        className={styles.button}
        disabled={!senhasIguais}
      >
        Cadastrar
      </button>
      <Link
        to="/login"
        className={styles.buttonBack}
      >
        Voltar
      </Link>
    </form>
  );
}

export default FormCadastro;