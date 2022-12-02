import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {

  return ReactDOM.createPortal(
    <div id="modal">
      <div className={classes.overlay}></div>
      <div className={classes.modal}>{props.children}</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;