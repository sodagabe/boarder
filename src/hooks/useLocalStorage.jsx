import { useEffect, useState } from "react";

function getValueFromStorage(key, defaultValue, parseFunction) {
  const savedValueString = localStorage.getItem(key);
  const savedValue = JSON.parse(savedValueString);
  const parsedValue = parseFunction(savedValue);
  const initialValue = parsedValue || defaultValue;
  return initialValue;
}

function useLocalStorage(key, defaultValue, parseFunction = (value) => value) {
  const [value, setValue] = useState(() =>
    getValueFromStorage(key, defaultValue, parseFunction),
  );

  useEffect(() => {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
