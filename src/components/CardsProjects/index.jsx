import styles from './CardsProjects.module.css';
import projetos from './projetos.json';

function CardsProjects() {
  return (
    <div className={styles.cardsProjects}>
      {
        projetos.map(p =>
          <section 
            className={styles.cardProject}
            key={p.titulo}
          >
            <img
              className={styles.imgCardProject}
              src={`/imagens/${p.img}`}
              alt=""
            />

            <article className={styles.conteudoCardProject}>
              <h2>{p.titulo}</h2>
              <p className={styles.descricaoCardProject} dangerouslySetInnerHTML={{ __html: p.descricao }}>
                {/* {p.descricao} */}
              </p>
            </article>
          </section>
        )
      }
    </div>
  );
}

export default CardsProjects;
