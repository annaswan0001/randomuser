import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo.jsx";


export default function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
      </nav>
    </header>
  );
}
