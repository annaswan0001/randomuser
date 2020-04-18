import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo.jsx";
import NavigationItems from "../Navigation/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { useLocation, useHistory } from "react-router-dom";
import Button from "../Button/Button";

export default function Toolbar(props) {
  const location = useLocation();
  const history = useHistory();
  // let { uuid } = useParams();

  const getRoute = () => {
    var patt = new RegExp("/user/");
    var res = patt.test(location.pathname);
    return res;
  };

  const goBack = () => {
    history.goBack();
    // localStorage.removeItem("user")
  };

  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.clicked} open={props.open} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      {getRoute() ? <Button onClick={goBack}>Back to userList </Button> : null}
    </header>
  );
}
