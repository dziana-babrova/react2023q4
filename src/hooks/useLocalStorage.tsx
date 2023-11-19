import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
  const [valueFromLS, setValueFromLS] = useState<string>(
    window.localStorage.getItem(key) || ''
  );

  useEffect(() => {
    window.localStorage.setItem(key, valueFromLS);
  }, [key, valueFromLS]);

  return { valueFromLS, setValueFromLS };
};
