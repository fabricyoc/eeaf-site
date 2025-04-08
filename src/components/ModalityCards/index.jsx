import styles from './ModalityCards.module.css';

function ModalityCard() {
  const modalidades = [
    {
      "modalidade": "Ensino Fundamental",
      "img": "ensino-fundamental",
      "descricao": "O Ensino Fundamental II abrange estudantes do 6º ao 9º ano e é uma fase essencial para a vida em sociedade."
    },
    {
      "modalidade": "Ensino Médio Regular",
      "img": "ensino-medio-regular",
      "descricao": "O Ensino Médio Regular é a modalidade mais conhecida de ensino. Nessa etapa intensifica-se o conhecimento de base."
    },
    {
      "modalidade": "Ensino Médio Técnico",
      "img": "ensino-medio-tecnico",
      "descricao": "O Ensino Técnico em Informática é uma modalidade profissionalizante integrada ao ensino médio."
    }
  ];

  return (
    <div className={styles.cardsModility}>
      {
        modalidades.map(m =>
          <section className={styles.card}>
            <h2>{m.modalidade}</h2>
            <img src={`/imagens/${m.img}.jpeg`} alt="" />
            <p>{m.descricao}</p>
          </section>
        )
      }
    </div>
  );
}

export default ModalityCard;
