import styles from './Card.module.css';

function Card({ modalidade, img, descricao }) {
  return (
    <section className={styles.card} key={modalidade}>
      <h2>{modalidade}</h2>
      <img src={`/imagens/${img}.jpeg`} alt="" />
      <p>{descricao}</p>
    </section>
  );
}

export default Card;
