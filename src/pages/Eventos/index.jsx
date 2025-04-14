import { useParams } from 'react-router-dom';
import CardsEvents from '../../components/CardsEvents';
import styles from './Eventos.module.css'

function Eventos() {
  // React Route Dom exige para receber os parâmetros
  const params = useParams();
  const year = params.year;
  // console.log("Value of params", params);


  return (
    <section className={styles.eventos}>
      <h2>Eventos de {year}</h2>
      {
        Object.entries(params).length === 0 ?
          <CardsEvents />
          :
          <h3>Aqui será exibido os eventos do ano de {year}</h3>
      }
    </section>
  );
}

export default Eventos;
