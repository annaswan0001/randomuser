import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  const attachedClass1 = [classes.level, classes.center];
  const attachedClass2 = [classes.points, classes.center];
  const attachedClass3 = [classes.points, classes.center];
  return (
    <div className={classes.center}>
      <div className={classes.card}>
        <div className={classes.additional}>
         
          {window.innerWidth>500? <img
            className={classes.useCard}
            src={props.user.picture.large}
            alt="photo"
          />:<img
          className={classes.useCard}
          src={props.user.picture.medium}
          alt="photo"
        />}

          <div className={classes.moreInfo}>
            <h1>{props.user.name.first} {props.user.name.last}</h1>

            <div className={classes.coords}>
              <span>Gender:</span>
              <span>{props.user.gender}</span>
            </div>

            <div className={classes.coords}>
              <span>Date of Bitrh:</span>
              <span>{new Date(props.user.dob.date).toLocaleDateString()}</span>
            </div>
            <div className={classes.stats}>
             
            </div>
          </div>
        </div>
        <div className={classes.general}>
          <h1>{props.user.name.first} {props.user.name.last}</h1>
          <p>email: {props.user.email}</p>
          <p>phone: {props.user.phone}</p>
          <p></p>
          <p>Country: {props.user.location.country}</p>
          <p>
            Street: {props.user.location.street.name}{" "}
            {props.user.location.street.number}
          </p>
        </div>
      </div>
    </div>
  );
}
