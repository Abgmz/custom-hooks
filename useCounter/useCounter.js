import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);
  const handleIncrement = (value = 1) => {
    setCounter((prev) => prev + value);
  };

  const handleDecrement = (value = 1) => {
    if(counter === 0) return;
    setCounter((prev) => prev - value);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
