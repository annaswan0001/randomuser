import React from "react";
import classes from "./UserList.module.css";

export default function UserList(props) {
  const classesArray = [classes.Card, classes.Transform];
  return (
    <li className={classes.CardList} onClick={props.getDetailInfo}>
      <div className={classesArray.join(" ")}>
        <div className={classes.Face}>
          <img src={props.user.picture.medium} alt="photo" />
        </div>
        <div className={classes.ContainText}>
          <h3>
            HI! I am {props.user.name.first} {props.user.name.last}
          </h3>
          <p>
            My id:
            {props.user.id.value && props.user.id.value.length > 0
              ? props.user.id.value
              : Math.random()}
          </p>
        </div>
      </div>

      {/* {props.user.name.first} {props.user.name.last} */}
    </li>
  );
}
