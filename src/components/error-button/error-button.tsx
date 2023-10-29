import { Component, ReactNode } from 'react';

export class ErrorButton extends Component {
  throwError = () => {
    console.log('error');
    throw new Error('An error thrown');
  };

  render(): ReactNode {
    return <button onClick={this.throwError}>Throw error</button>;
  }
}