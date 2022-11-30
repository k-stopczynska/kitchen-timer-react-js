import React, { useState } from "react";
import useTimer from '../hooks/use-timer';
import classes from './Plate.module.css';

const Plate = (props) => {
const [isClicked, setIsClicked] = useState(false);
const counter = useTimer(isClicked)

const timerHandler = () => {
  setIsClicked(true);
}

  return <button type="button" onClick={timerHandler} className={classes.plate} id={props.id}>{counter}</button>;
};

export default Plate;
