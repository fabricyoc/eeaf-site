import styles from './EventFiles.module.css';

function EventFiles({ files, year }) {

  const arquivosDoAno = files.find(f => f.event_year === Number(year));

  return (
    <div className={styles.contentFiles}>
      <h4>Links</h4>
      <section className={styles.files}>

        {
          arquivosDoAno?.files.map((file, index) => (
            <a
              key={index}
              href={file.url}
              rel='noopener noreferrer'
              target='_blank'
            >
              {file.title}
            </a>
          ))
        }
      </section>
    </div>
  );
}

export default EventFiles;
