import React from "react";
//import styled from "styled-components";

import styles from "./Button.module.css"; //You can use also "import classes", I have to use this synthax for insert CSS MODULES

//const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }//Adding a media query - whatever that is...

// &:focus {
//   outline: none;
// }

// &:hover, 
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `; 

//It's a DEFAULT JS SYNTHAX, albeit its weirdness.
//Basically, it uses an HTML tag as a function but instead of the (), you have ``.

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
