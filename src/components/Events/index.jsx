import { useState, useMemo } from 'react';
import styles from './Events.module.css';
import EventVideoVimeo from '../EventVideoVimeo';
import EventVideoInstagram from '../EventVideoInstagram';
import EventFiles from '../EventFiles';

function Events({ year, events }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleStatus = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const eventosFiltrados = useMemo(() => {
    const grouped = {};

    events.forEach(item => {
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

      if (item.files?.length) {
        grouped[key].files.push(...item.files);
      }

      if (item.videos?.length) {
        grouped[key].videos.push(...item.videos);
      }
    });

    return Object.values(grouped).filter(event =>
      event.files.length > 0 || event.videos.length > 0
    );

  }, [events, year]);

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

          // separação inteligente
          const hasVimeo = event.videos?.some(v => !v.url.includes("instagram.com"));
          const hasInstagram = event.videos?.some(v => v.url.includes("instagram.com"));

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
                    <path d="M7 14l5-5 5 5" />
                  ) : (
                    <path d="M7 10l5 5 5-5" />
                  )}
                </svg>
              </h2>

              <div className={`${styles.content} ${isOpen ? styles.active : ''}`}>
                <section className={styles.listContent}>

                  {/* arquivos */}
                  {event.files?.length > 0 && (
                    <>
                      <h2 className={styles.subtitle}>Todas as mídias</h2>
                      <EventFiles files={event.files} />
                    </>
                  )}

                  {/* vídeos Vimeo */}
                  {hasVimeo && (
                    <>
                      <h2 className={styles.subtitle}>Vídeos</h2>
                      <EventVideoVimeo videos={event.videos} />
                    </>
                  )}

                  {/* Instagram */}
                  {hasInstagram && (
                    <>
                      <h2 className={styles.subtitle}>Instagram</h2>
                      <EventVideoInstagram videos={event.videos} />
                    </>
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