import React, { useState } from "react";
import useTimer from "../hooks/use-timer";
import TimerForm from "./TimerForm";
import ExpiredTimerNotification from './ExpiredTimerNotification';
import classes from "./Plate.module.css";

const Plate = (props) => {
  const [open, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const {counter, setCounter, toggle} = useTimer();

  console.log(counter);

  const timerHandler = (e) => {
    setIsOpen(true);
    setId(e.target.id);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={timerHandler}
        className={classes.plate}
        id={props.id}
        aria-label="button__plate"
      >
        {counter}
      </button>
      {open && <TimerForm id={id} open={setIsOpen} time={setCounter} toggle={toggle}/>}
      {counter === 0 && <ExpiredTimerNotification id={id} counter={setCounter} open={setIsOpen}/>}
    </React.Fragment>
  );
};

export default Plate;
