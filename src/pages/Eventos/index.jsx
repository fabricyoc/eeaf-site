import { Link, useParams, Navigate } from 'react-router-dom';
import CardsEvents from '../../components/CardsEvents';
import styles from './Eventos.module.css'
import Events from '../../components/Events';
import events from './eventos.json';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Eventos() {

  const params = useParams();

  const anos = [...new Set(events.map(item => item.event_year))]
    .sort((a, b) => b - a);

  const year = params.year ? Number(params.year) : 0;

  const hasEvents = (year) => {
    return events.some(item =>
      item.event_year === Number(year) &&
      (item.files?.length || item.videos?.length)
    );
  };

  // proteção de rota
  if (year !== 0 && !hasEvents(year)) {
    return <Navigate to="/eventos" replace />;
  }

  let heading = () => {
    return year === 0 ? "Eventos" : `Eventos de ${year}`;
  };

  let buttonBack = () => {
    return year === 0 ? '' : (
      <Link
        className={styles.buttonBack}
        to='/eventos'
      >
        Voltar aos eventos?
      </Link>
    );
  };

  return (
    <section className={styles.eventos}>
      <h2 className={styles.title2}>{heading()}</h2>

      {buttonBack()}

      {
        year === 0 ?
          <CardsEvents years={anos} events={events} />
          :
          <>
            <ScrollToTopButton />
            <Events year={year} events={events} />
          </>

      }

    </section>
  );
}

export default Eventos;