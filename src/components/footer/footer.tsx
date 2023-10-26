import { Component, ReactNode } from 'react';
import './footer.scss';

export class Footer extends Component {
  render(): ReactNode {
    return (
      <footer className="app-footer">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-element github"
        ></a>
        <p className="footer-element year">2023</p>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-element logo"
        ></a>
      </footer>
    );
  }
}
