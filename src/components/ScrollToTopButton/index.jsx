import styles from './ScrollToTopButton.module.css';

function ScrollToTopButton() {
  const handleClick = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return(
    <button
      onClick={handleClick}
      className={styles.scrollToTop}
    >
      &#9650;
    </button>
  );
}

export default ScrollToTopButton;