import styles from './CardsModalities.module.css';
import modalities from './modalidades.json';

function CardsModalities() {
  return (
    <div className={styles.cardsModalities}>
      {
        modalities.map(modality =>
          <section className={styles.card} key={modality.modalidade}>
            <h2>{modality.modalidade}</h2>
            <img src={`/imagens/${modality.img}`} alt="" />
            <p>{modality.descricao}</p>
          </section>
        )
      }
    </div>
  );
}

export default CardsModalities;
