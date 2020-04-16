import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems";
// import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";
import DrawerTogle from './DrawerToggle/DrawerToggle'

export default function SideDrawer(props) {
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
       
    }
  return (
    <React.Fragment>

      {/* <Backdrop show={props.open} clicked={props.handleSideDrawer}/> */}
      <div className={ attachedClasses.join(" ")}>
        <DrawerTogle  open={props.open} clicked={props.clicked}/>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </React.Fragment>
  );
}
