import error404 from './error404.png';
import styles from './PageNotFound.module.css'

function PageNotFound() {
  return (
    <section className={styles.container}>
      <img src={error404} alt="" />
    </section>
  );
}

export default PageNotFound;
