import { useState } from 'react';
import styles from './error-button.module.scss';

export const ErrorButton = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const generateError = () => {
    setHasError(true);
  };

  if (hasError) throw new Error('Error thrown');
  return (
    <button className={styles['error-button']} onClick={generateError}>
      Throw error
    </button>
  );
};
