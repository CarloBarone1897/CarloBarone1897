import React from 'react'; //Technically not necessary with JSX, but we should always keep in mind that it works under the hood
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //This means what? I have the default class AND the
  //class of the element I'm taking into the Card component

  return <div className={classes}>{props.children}</div>;

  /*The "children" prop is a reserved name, which React sets
    automatically. Adding "children" makes the things included in a 
    custom component wrapper visible again, though a bit "broken"*/
}

export default Card;
