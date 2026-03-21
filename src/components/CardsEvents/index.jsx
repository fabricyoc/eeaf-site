import { Link } from 'react-router-dom';
import styles from './CardsEvents.module.css';

function CardEvent({ years, events }) {

  return (
    <section className={styles.cardsEvents}>
      {
        years.map((yearEvent) => {
          
          // conta quantos eventos existem no ano
          const totalEventos = events.filter(item =>
            item.event_year === yearEvent &&
            (item.files?.length || item.videos?.length)
          ).length;

          const hasEvent = totalEventos > 0;

          return hasEvent ? (
            // ano com eventos (clicável)
            <Link
              to={`/eventos/${yearEvent}`}
              key={yearEvent}
              className={styles.cardEvent}
            >
              <h2>{yearEvent}</h2>
              <span>
                {totalEventos} {totalEventos === 1 ? 'evento' : 'eventos'}
              </span>
            </Link>
          ) : (
            // ano sem eventos (bloqueado)
            <div
              key={yearEvent}
              className={`${styles.cardEvent} ${styles.disabled}`}
            >
              <h2>{yearEvent}</h2>
              <span>Sem eventos</span>
            </div>
          );
        })
      }
    </section>
  );
}

export default CardEvent;