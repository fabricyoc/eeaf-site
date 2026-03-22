import { useState, useMemo } from 'react';
import styles from './Events.module.css';
import EventVideo from '../EventVideo';
import EventFiles from '../EventFiles';

function Events({ year, events }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleStatus = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const eventosFiltrados = useMemo(() => {
    const grouped = {};

    events.forEach(item => {
      // filtra pelo ano
      if (item.event_year !== Number(year)) return;

      const key = `${item.event_year}_${item.event_name || 'sem_nome'}`;

      if (!grouped[key]) {
        grouped[key] = {
          event_year: item.event_year,
          event_name: item.event_name || 'Sem nome',
          files: [],
          videos: []
        };
      }

      // adiciona apenas se tiver conteúdo
      if (item.files?.length) {
        grouped[key].files.push(...item.files);
      }

      if (item.videos?.length) {
        grouped[key].videos.push(...item.videos);
      }
    });

    // remove eventos vazios
    return Object.values(grouped).filter(event =>
      event.files.length > 0 || event.videos.length > 0
    );

  }, [events, year]);

  // mensagem quando não há eventos
  if (!eventosFiltrados.length) {
    return (
      <p className={styles.empty}>
        Nenhum evento cadastrado em {year}.
      </p>
    );
  }

  return (
    <>
      {
        eventosFiltrados.map((event, index) => {
          const isOpen = openIndex === index;

          return (
            <section key={index} className={styles.event}>

              <h2
                className={styles.title2}
                onClick={() => toggleStatus(index)}
              >
                {event.event_name}

                <svg
                  className={styles.arrow}
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path d="M7 14l5-5 5 5" /> // seta cima
                  ) : (
                    <path d="M7 10l5 5 5-5" /> // seta baixo
                  )}
                </svg>
              </h2>

              <div className={`${styles.content} ${isOpen ? styles.active : ''}`}>
                <section className={styles.listContent}>

                  {/* arquivos */}
                  {event.files?.length > 0 && (
                    <EventFiles files={event.files} />
                  )}

                  {/* vídeos */}
                  {event.videos?.length > 0 && (
                    <EventVideo videos={event.videos} />
                  )}

                </section>
              </div>

            </section>
          );
        })
      }
    </>
  );
}

export default Events;