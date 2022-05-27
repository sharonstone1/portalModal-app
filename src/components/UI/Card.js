import React from "react";
import classes from "../UI/Card.module.css";

const Card = (props) => {
  // classes present the classes module and card represent the classname value

  // props.className represent the className used in the Card component to call it
  // in order to apply its css implementation
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
