import styles from './EventVideoVimeo.module.css';

function EventVideoVimeo({ videos }) {

  const vimeoVideos = videos.filter(video =>
    !video.url.includes("instagram.com")
  );

  if (!vimeoVideos.length) return null;

  return (
    <div className={styles.videosVimeo}>
      {
        vimeoVideos.map((video, index) => (
          <div className={styles.video} key={index}>
            <h4>{video.title}</h4>
            <iframe
              className={styles.vimeo}
              src={video.url}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title={video.title}
            />

          </div>
        ))
      }
    </div>
  );
}

export default EventVideoVimeo;