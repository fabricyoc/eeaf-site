import styles from './CardsFiles.module.css';
import arquivos from './arquivos.json';

function CardsFiles() {
  return (
    <section className={styles.cardsFiles}>
      {
        arquivos.map((item, index) =>
          <article
            className={styles.cardFile}
            key={index}
          >
            <h2 className={styles.title}>{item.topico}</h2>
            <div className={styles.line}></div>
            <ul className={styles.files}>
              {
                item.arquivos.map((arquivo, index) =>
                  <li key={index}>
                    <a
                      href={arquivo.url}
                      target="_blank"
                      rel='noopener noreferrer'
                    >
                      {arquivo.titulo}
                    </a>
                  </li>
                )
              }
            </ul>
          </article>
        )
      }
    </section>
  );
}

export default CardsFiles;
