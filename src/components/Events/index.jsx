import { useState } from 'react';
import styles from './Events.module.css';

function Events({ year }) {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
    console.log(status);
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
        Aula da Saudade
        {checkIcon()}
      </h2>
      <div className={`${styles.content} ${status ? styles.active : ''}`}>
        <section className={styles.listContent}>
        <div className={styles.video}>
            <h4>Título do Vídeo</h4>
            <iframe
              src="https://player.vimeo.com/video/1040495493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="2024 Aula da saudade - Entrada">
            </iframe>
          </div>

          <div className={styles.contentFiles}>
            <h4>Links</h4>
            <section className={styles.files}>
              <a href="#">Text 1</a>
              <a href="#">Text 2</a>
              <a href="#">Text 3</a>
              <a href="#">Text 4</a>
              <a href="#">Text 5</a>
              <a href="#">Text 5</a>
              <a href="#">Text 5</a>
              <a href="#">Text 5</a>
              <a href="#">Text 5</a>
            </section>
          </div>
        </section>
      </div>

    </section>
  );
}

export default Events;
