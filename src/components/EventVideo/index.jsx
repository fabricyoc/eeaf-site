import styles from './EventVideo.module.css';

function EventVideo({ nameVideo }) {
  return (
    <div className={styles.video}>
      <h4>{nameVideo}</h4>
      <iframe
        src="https://player.vimeo.com/video/1040495493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="2024 Aula da saudade - Entrada">
      </iframe>
    </div>
  );
}

export default EventVideo;
