import { useState, useEffect } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export const useLocalStorage = <T,>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [localStorageState, setLocalStorageState] = useState<T | undefined>(
    () => {
      if (!initialValue) return;
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
      } catch (err) {
        return initialValue;
      }
    }
  );

  useEffect(() => {
    if (localStorageState) {
      try {
        localStorage.setItem(key, JSON.stringify(localStorageState));
      } catch (err) {
        console.log(err);
      }
    }
  }, [localStorageState, key]);

  return [localStorageState, setLocalStorageState];
};
