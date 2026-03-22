import { useEffect } from "react";
import Carousel from '../Carousel';
import styles from './EventVideoInstagram.module.css';

function EventVideoInstagram({ videos }) {

  useEffect(() => {
    const loadInstagram = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    loadInstagram();

    const timer = setTimeout(loadInstagram, 1000);

    return () => clearTimeout(timer);
  }, [videos]);

  const instagramVideos = videos.filter(video =>
    video.url.includes("instagram.com")
  );

  if (!instagramVideos.length) return null;

  return (
    <Carousel>
      {
        instagramVideos.map((video, index) => (
          <div key={index}>
            <div className={styles.video}>
              <h4>{video.title}</h4>

              <blockquote
                className="instagram-media"
                data-instgrm-permalink={video.url}
                data-instgrm-version="14"
              ></blockquote>

            </div>
          </div>
        ))
      }
    </Carousel>
  );
}

export default EventVideoInstagram;