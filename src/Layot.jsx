import React from "react";
import Toolbar from "./components/ToolBar/Toolbar"



const Layot = (props) => {

    return (
      <React.Fragment>
        <div>
          <Toolbar 
        //   clicked={handleSideDrawer}
          />
          SideDrawer
        </div>
        <main>{props.children}</main>
      </React.Fragment>
    );
  }

export default Layot