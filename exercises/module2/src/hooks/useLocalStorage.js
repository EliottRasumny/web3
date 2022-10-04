import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(initialValue));
  }
  const [valueState, setterState] = useState(
    JSON.parse(localStorage.getItem(key))
  );

  const setter = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setterState(newValue);
  };

  return [valueState, setter];
};

export default useLocalStorage;
