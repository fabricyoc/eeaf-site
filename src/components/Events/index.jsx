import { useState } from 'react';
import styles from './Events.module.css';
import EventVideo from '../EventVideo';
import EventFiles from '../EventFiles';

function Events({ year, events }) {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
    // console.log(status);
  };

  const checkIcon = () => {
    if (status) {
      // arrow up
      return <svg
        className={styles.arrow}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14l5-5 5 5" />
      </svg>
    } else {
      // arrow bottom
      return <svg
        className={styles.arrow}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l5 5 5-5" />
      </svg>;
    }
  };

  return (
    <section className={styles.event}>
      <h2
        className={styles.title2}
        onClick={toggleStatus}
      >
        {/* nome do evento */}
        Aula da Saudade
        {checkIcon()}
      </h2>
      <div className={`${styles.content} ${status ? styles.active : ''}`}>
        <section className={styles.listContent}>
          <EventVideo nameVideo="teste" />
          <EventFiles files={events} year={year} />
        </section>
      </div>

    </section>
  );
}

export default Events;
