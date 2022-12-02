import React from "react";
import Modal from "./Modal";
import classes from "./TimerForm.module.css";

const TimerForm = (props) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
    const userTime = e.target.children[1].value;
    closeModal();
    props.time(userTime);
    props.toggle();
  };

  const closeModal = () => {
    props.open(false);
  };

  return (
    <Modal>
       <h2>{props.id} plate</h2>
      <form
        className={classes.form__control}
        type="submit"
        onSubmit={submitFormHandler}
      >
        <label htmlFor="user__input">set time in minutes</label>
        <input
          className={classes.user__input}
          id="user__input"
          type="number"
          min="1"
          max="14000"
          step="1"
        ></input>
        <button type="submit" className={classes.button__add__timer}>
          Add timer
        </button>
      </form>
    </Modal>
  );
};

export default TimerForm;
