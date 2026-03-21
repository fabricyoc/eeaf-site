import { Link } from 'react-router-dom';
import styles from './CardsEvents.module.css';

function CardEvent({ years }) {

  return (
    <section className={styles.cardsEvents}>
      {
        years.map((yearEvent, index) =>
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
