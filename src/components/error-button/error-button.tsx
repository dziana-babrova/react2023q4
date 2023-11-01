import { useState } from 'react';

export const ErrorButton = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const generateError = () => {
    setHasError(true);
  };

  if (hasError) throw new Error('Error thrown');
  return <button onClick={generateError}>Throw error</button>;
};
