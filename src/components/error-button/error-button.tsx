import { Component, ReactNode } from 'react';

export class ErrorButton extends Component {
  throwError = async () => {
    throw new Error('An erro thrown');
  };

  render(): ReactNode {
    return (
      <button
        onClick={() => {
          this.throwError();
        }}
      >
        Throw error
      </button>
    );
  }
}
