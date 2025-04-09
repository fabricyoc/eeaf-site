import CardsFiles from '../../components/CardsFiles';
import styles from './Arquivos.module.css';

function Arquivos() {
  return (
    <section className={styles.arquivos}>
      <h2>Arquivos e documentos</h2>
      <CardsFiles />
    </section>
  );
}

export default Arquivos;
