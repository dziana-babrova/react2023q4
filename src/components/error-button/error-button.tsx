import { Component, ReactNode } from 'react';

export class ErrorButton extends Component {
  throwError = async () => {
    fetch('fwfwfw').then((data) => data.json());
  };

  render(): ReactNode {
    return <button onClick={this.throwError}>Throw error</button>;
  }
}
