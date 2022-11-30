import React, { useState, useEffect } from 'react';

const useTimer = () => {
    const [counter, setCounter] = useState(60);
    const changeTime = () => {
      setCounter((prevCounter) => prevCounter - 1);
    };

    useEffect(() => {
      const intervalID = setInterval(changeTime, 1000);
      return () => {
        clearInterval(intervalID);
      };
    }, []);

    return counter;
}

export default useTimer;