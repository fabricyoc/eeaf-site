import styles from './Arquivos.module.css';
import CardsFiles from '../../components/CardsFiles';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Arquivos() {
  return (
    <section className={styles.arquivos}>
      <span className={styles.scroll}>
        <ScrollToTopButton />
      </span>
      <h2>Arquivos e documentos</h2>
      <CardsFiles />
    </section>
  );
}

export default Arquivos;
