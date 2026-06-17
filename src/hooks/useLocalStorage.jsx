import { useEffect, useState } from "react";

function getValueFromStorage(key, defaultValue) {
  const savedValueString = localStorage.getItem(key);
  const savedValue = JSON.parse(savedValueString);
  const initialValue = savedValue || defaultValue;
  return initialValue;
}

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() =>
    getValueFromStorage(key, defaultValue),
  );

  useEffect(() => {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
