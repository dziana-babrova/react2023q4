import './footer.scss';

export const Footer = () => {
  return (
    <footer className="app-footer app-wrapper">
      <a
        href="https://github.com/dziana-babrova/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-element github"
      ></a>
      <p className="footer-element year">2023</p>
      <a
        href="https://rs.school/react/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-element logo"
      ></a>
    </footer>
  );
};
