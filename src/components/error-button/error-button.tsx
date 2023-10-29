import { Component, ReactNode } from 'react';
import { getAllCharacters } from 'services/api-service';
import { AllCharactersResponse } from 'src/types/api-types';

type ErrorButtonState = {
  data: AllCharactersResponse | null;
};

export class ErrorButton extends Component<ErrorButtonState> {
  generateError = () => {
    getAllCharacters('fwe').then((data) => {
      data.results.map((el) => el);
    });
  };
  render(): ReactNode {
    return (
      <button
        onClick={() => {
          this.generateError;
        }}
      >
        Throw error
      </button>
    );
  }
}
