import { Component, PropsWithChildren, ReactNode } from 'react';
import { getAllCharacters } from 'services/api-service';
import { AllCharactersResponse } from 'src/types/api-types';

type ErrorButtonState = {
  data: AllCharactersResponse | null;
  clicked: boolean;
};

export class ErrorButton extends Component<
  PropsWithChildren,
  ErrorButtonState
> {
  state: ErrorButtonState = {
    clicked: false,
    data: null,
  };

  generateError = () => {
    getAllCharacters('korewd').then((response) => {
      this.setState({ data: response, clicked: true });
    });
  };

  render(): ReactNode {
    return this.state.data ? (
      this.state.data?.results.map((el) => {
        return <div key={el.id}></div>;
      })
    ) : (
      <button
        onClick={() => {
          this.generateError();
        }}
      >
        Throw error
      </button>
    );
  }
}
