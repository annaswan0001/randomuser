import React from "react";
import classes from "./DrawerToggle.module.css";

export default function DrawerToggle(props) {
  let attachedClasses = [classes.DrawerToggle]
  if(props.open){
    attachedClasses.push(classes.Blue)
  }
  return (
    <div onClick={props.clicked}
     className={attachedClasses.join(" ")}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
