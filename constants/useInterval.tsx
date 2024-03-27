import { useEffect, useState } from 'react';

const useInterval = (callback, delay) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay]);

  useEffect(() => {
    if (callback) {
      callback(counter);
    }
  }, [callback, counter]);

  return counter;
};

export default useInterval;