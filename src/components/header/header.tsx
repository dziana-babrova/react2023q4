import { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="app-title">Star Trek</h1>
      </header>
    );
  }
}
