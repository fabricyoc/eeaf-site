# 🎓 Sistema EEAF - Plataforma Web

Sistema desenvolvido para a **Escola Estadual Aristófanes Fernandes (EEAF)** com o objetivo de gerenciar eventos, cadastros de alunos e atividades acadêmicas de forma moderna, organizada e eficiente.

---

## 🚀 Tecnologias Utilizadas

* ⚛️ React.js
* ⚡ Vite

---

## 📌 Funcionalidades

* ✅ Cadastro de usuários em múltiplas etapas
* ✅ Validação completa de formulário
* ✅ Interface moderna e responsiva
* ✅ Componentização reutilizável
* ✅ Separação de lógica com Custom Hooks
* ✅ Navegação SPA (Single Page Application)

---

## 🧠 Arquitetura do Projeto

O projeto foi estruturado seguindo boas práticas de desenvolvimento front-end.

---

## 📥 Como Clonar o Projeto

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Acesse a pasta:

```bash
cd nome-do-projeto
```

---

## 📦 Instalar Dependências

```bash
npm install
```

ou

```bash
yarn install
```

---

## ▶️ Executar o Projeto

```bash
npm run dev
```

ou

```bash
yarn dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## 🧪 Validações Implementadas

O sistema possui validações robustas:

### 📧 Email

* Deve conter `@` e `.`
* Validação via Regex

### 🔐 Senha

* Mínimo 8 caracteres
* Pelo menos:

  * 1 letra
  * 1 número
  * 1 símbolo

### 🆔 CPF

* Formatação automática
* Validação de tamanho

### 📅 Data de Nascimento

* Não permite datas futuras
* Cálculo automático de idade

### 👨‍👩‍👧 Responsável

* Campo obrigatório para menores de idade

---

## 🧭 Fluxo do Cadastro

O formulário funciona em 4 etapas:

1. 👤 Dados pessoais
2. 🏫 Escola e nível
3. 🔐 Credenciais de acesso
4. 📱 Contato

✔ O usuário só avança se os dados da etapa forem válidos
✔ Navegação controlada via estado (`useState`)

---

## 📱 Responsividade

O sistema foi adaptado para:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablets

---

## 🔐 Segurança e UX

* Validação dupla (frontend + lógica)
* Bloqueio de avanço entre etapas inválidas
* Feedback visual de erros
* Controle manual de submissão

---

## 🔮 Melhorias Futuras

* 🔗 Integração com backend (API REST)
* 🗄️ Persistência em banco de dados
* 🔐 Sistema de autenticação
* 📊 Dashboard administrativo
* ☁️ Upload real de imagens
* 📈 Indicador de força de senha

---

## 👨‍💻 Desenvolvedor

Projeto desenvolvido por:

**Fabricyo**

---

## ❤️ Considerações Finais

Este sistema foi desenvolvido com foco em:

* organização
* escalabilidade
* experiência do usuário

Servindo como base para aplicações reais no ambiente educacional e como projeto de portfólio profissional.
