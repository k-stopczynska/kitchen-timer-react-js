import React, { useState, useEffect, useCallback } from "react";

const useTimer = () => {
  const [counter, setCounter] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const changeTime = useCallback(() => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      setCounter("");
      return;
    }
  }, [counter]);

  const toggle = () => {
    if (counter !== "" || counter <= 0) {
      setIsClicked(true);
    }
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
    };
  }, [isClicked, counter, changeTime]);

  return { counter, setCounter, toggle };
};

export default useTimer;
