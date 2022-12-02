import React, { useState, useEffect } from "react";

const useTimer = () => {

  const [counter, setCounter] = useState('');
  const [isClicked, setIsClicked] = useState(false);

console.log(counter)

  const changeTime = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const toggle = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    let intervalID = null;
    if (isClicked) {
      intervalID = setInterval(changeTime, 1000);
    } else if (!isClicked && counter !== 0) {
      clearInterval(intervalID);
    }
    return () => {
      clearInterval(intervalID);
    }
  }, [isClicked, counter]);

  return {counter, setCounter};
};

export default useTimer;
