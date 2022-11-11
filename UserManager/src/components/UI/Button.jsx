import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const [buttonStyle, setButtonStyle] = useState(styles.button);

  const buttonHover = (event) => {
    setButtonStyle(styles.buttonHover);
  };
  const buttonFocus = (event) => {
    setButtonStyle(styles.buttonFocus);
  };

  return (
    <button
      onMouseOver={buttonHover}
      onFocus={buttonFocus}
      onClick={props.onClick}
      className={styles.button}
      type={props.type || "button"}
    >{props.children}</button>
  );
};

export default Button;
