import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={`${styles['app-footer']} app-wrapper`}>
      <a
        href="https://github.com/dziana-babrova/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles['footer-element']} ${styles.github}`}
      ></a>
      <p className={`${styles['footer-element']} ${styles.year}`}>2023</p>
      <a
        href="https://rs.school/react/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles['footer-element']} ${styles.logo}`}
      ></a>
    </footer>
  );
};
