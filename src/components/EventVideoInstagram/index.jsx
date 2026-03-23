import { useEffect } from "react";
import styles from './EventVideoInstagram.module.css';

function EventVideoInstagram({ videos }) {

  // filtra apenas vídeos do Instagram
  const instagramVideos = videos.filter(video =>
    video.url.includes("instagram.com")
  );

  useEffect(() => {
    if (!instagramVideos.length) return;

    const scriptId = "instagram-embed-script";

    const loadEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // carrega o script apenas uma vez
    // if (!document.getElementById(scriptId)) {
    //   const script = document.createElement("script");
    //   script.id = scriptId;
    //   script.src = "https://www.instagram.com/embed.js";
    //   script.async = true;
    //   script.onload = loadEmbeds;
    //   document.body.appendChild(script);
    // } else {
    //   loadEmbeds();
    // }

    // fallback (React às vezes renderiza depois)
    const timer = setTimeout(loadEmbeds, 800);

    return () => clearTimeout(timer);

  }, [instagramVideos]);

  if (!instagramVideos.length) return null;

  return (
    <div className={styles.container}>
      {
        instagramVideos.map((video, index) => (
          <div className={styles.video} key={index}>
            <h4>{video.title}</h4>

            <blockquote
              className="instagram-media"
              data-instgrm-permalink={video.url}
              data-instgrm-version="14"
              style={{ width: "100%", margin: "0 auto" }}
            ></blockquote>

          </div>
        ))
      }
    </div>
  );
}

export default EventVideoInstagram;
