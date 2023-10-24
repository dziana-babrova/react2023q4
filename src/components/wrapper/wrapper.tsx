import { Component, PropsWithChildren } from 'react';
import './wrapper.scss';

export class Wrapper extends Component<PropsWithChildren> {
  render() {
    return <div className="app-wrapper">{this.props.children}</div>;
  }
}
