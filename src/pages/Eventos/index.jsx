import { Link, useParams } from 'react-router-dom';
import CardsEvents from '../../components/CardsEvents';
import styles from './Eventos.module.css'
import Events from '../../components/Events';
import events from './eventos.json';

function Eventos() {
  // React Route Dom exige para receber os parâmetros
  const params = useParams();

  // todos os anos dos eventos de forma única e decrescente
  const anos = [...new Set(events.map(item => item.event_year))].sort((a, b) => b - a);

  // const year = params.year;
  // console.log("Value of params:", year);
  const year = Object.entries(params).length === 0 ? 0 : params.year;

  let heading = () => {
    return year === 0 ? "Eventos" : `Eventos de ${year}`;
  };

  let buttonBack = () => {
    return year === 0 ?
      '' :
      <Link
        className={styles.buttonBack}
        to='/eventos'
      >
        Voltar aos eventos?
      </Link>;
  }

  return (
    <section className={styles.eventos}>
      <h2 className={styles.title2}>{heading()}</h2>
      {buttonBack()}
      {
        year === 0 ?
          <CardsEvents years={anos} events={events} />
          :
          // <h3>Aqui será exibido os eventos do ano de {year}</h3>
          <Events year={year} events={events} />
      }
    </section>
  );
}

export default Eventos;
