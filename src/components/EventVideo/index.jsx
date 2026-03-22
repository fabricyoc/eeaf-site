import styles from './EventVideo.module.css';
import { useEffect } from "react";

function EventVideo({ videos }) {

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [videos]); // importante!

  const isInstagram = (url) => url.includes("instagram.com");

  return (
    <>
      {
        videos.map((video, index) => (
          <div className={styles.video} key={index}>
            <h4>{video.title}</h4>

            {
              isInstagram(video.url) ? (
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={video.url}
                  data-instgrm-version="14"
                ></blockquote>
              ) : (
                <iframe
                  className={styles.vimeo}
                  src={video.url}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title={video.title}
                />
              )
            }
          </div>
        ))
      }
    </>
  );
}

export default EventVideo;