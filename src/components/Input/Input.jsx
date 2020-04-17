import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  let inputElement;
  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          ref={props.forwardedref}
          {...props}
        />
      );
      break;
    default: {
      return inputElement; //we can add select /textareas and ect
    }
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
