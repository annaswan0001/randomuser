import React, {useState} from "react";
import Toolbar from "./components/ToolBar/Toolbar";
import classes from "./Layot.module.css";
import SideDrawer from './components/SideDrawer/SideDrawer'

const Layot = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const handleSideDrawer = () => {
    console.log("clicked")
    setShowSideDrawer((showSideDrawer)=>!showSideDrawer)
  };
  return (
    <React.Fragment>
    
      <div>
        <Toolbar
          clicked={handleSideDrawer}
          open={showSideDrawer}
        />
      <SideDrawer open={showSideDrawer} clicked={handleSideDrawer}/>
      </div>
      <main className={classes.Main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layot;
