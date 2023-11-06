import { useState } from 'react';
import './error-button.scss';

export const ErrorButton = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const generateError = () => {
    setHasError(true);
  };

  if (hasError) throw new Error('Error thrown');
  return (
    <button className="error-button" onClick={generateError}>
      Throw error
    </button>
  );
};
