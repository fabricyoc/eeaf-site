import { Link } from 'react-router-dom';
import styles from './CardsEvents.module.css';

function CardEvent() {
  const yearsEvents = [2024, 2025];
  // Ordena o array em ordem decrescente
  // const sortedYearsEvents = yearsEvents.sort((a, b) => b - a);
  const sortedYearsEvents = [...new Set(yearsEvents)].sort((a, b) => b - a);


  return (
    <section className={styles.cardsEvents}>
      {
        sortedYearsEvents.map((yearEvent, index) =>
          <Link
            to={`/eventos/${yearEvent}`}
            key={index}
            className={styles.cardEvent}
          >
            <h2>{yearEvent}</h2>

          </Link>
        )
      }
    </section>
  );
}

export default CardEvent;
