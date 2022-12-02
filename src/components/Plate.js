import React, { useState } from "react";
import useTimer from "../hooks/use-timer";
import TimerForm from "./TimerForm";
import classes from "./Plate.module.css";

const Plate = (props) => {
  const [open, setIsOpen] = useState(false);
  const {counter, setCounter, toggle} = useTimer();

  const timerHandler = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={timerHandler}
        className={classes.plate}
        id={props.id}
      >
        {counter}
      </button>
      {open && <TimerForm open={setIsOpen} time={setCounter} toggle={toggle}/>}
    </React.Fragment>
  );
};

export default Plate;
