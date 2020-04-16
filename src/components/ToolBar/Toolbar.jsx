import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo.jsx";
import NavigationItems from '../Navigation/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


export default function Toolbar(props) {

  return (
    <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.clicked} open={props.open}/>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
      <NavigationItems/>
      </nav>

    </header>
  );
}
