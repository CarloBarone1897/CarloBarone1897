//Understanding of what a Component code is.
import React, { useState } from "react"; //This will help us
//First of all: a Component in React is just a JAVASCRIPT FUNCTION

/*OBS! UPPER CASE AT THE BEGINNING, ALWAYS!
Lower case - native HTML
//Upper case - custom made*/

import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
//import React from 'react'; //Technically not necessary with JSX, but we should always keep in mind that it works under the hood
//We need a NAMED import for updating stuff.
//-->

//This function usually returns HTML or JSX code.
const ExpenseItem = (props) => {
  //here I will get only ONE parameter, which holds all the props
  /*The following JS code will help the return;
   For the moment it'll be just "fake" dynamic data, but
   the whole aim of React is to be reusable and adaptable 
   to a potentially unlimited amount of stuff.
   */
  /*const expenseDate = new Date(2021, 2, 28); //Date format: year, month (OBS! Start from 0), day)
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
    No longer necessary --> We went to dynamic data!*/
  const [title, setTitle] = useState(props.title); //This is a REACT HOOK - all of them start with "USE", and they must be called DIRECTLY INTO COMPONENT FILES.
  //Returns an ARRAY, first value is the variable and the second element is the UPDATING function --> ARRAY DISTRUCTION.
  //First element is a pointer at the managed value (here, props.title), whereas the second element is a function that allows the value to be changed later on.
  //Convention: [value, setValue], but I could call them in any way.

  const clickHandler = () => {
    //What I add here it should UPDATE what happens in the return.
    setTitle("Updated!"); //We can do that because we don't use "=" for assigning, instead, we have a function. We never "assign" a value --> We can use a const there with no prob
    console.log(title);
  };

  //Instead of putting it into the JSX, which would become bad, I'll keep the clickHandler here!
  return (
    //I have to write everything inside a SINGLE ROOT ELEMENT (usually a div)
    //I wwon't type "Class", but "className" --> It's JSX, not HTML
   <li>
   <Card className="expense-item">
      {/*OBS! I can't use custom components as return "wrappers", or better - I have to add the 
    "children" thing in their definition. Once done, it works again, though it looks a bit broken,
    have to fix that --> I need that a className can be set in my component.*/}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/*Here I used the "title", not anymore the "props.title", because I'm changing "title" above*/}
        {/*You call the prop "title" here, because the property is "title" in the other file - they must match
        One can insert JS simple snippets in JSX wit CURLY BRACES. Also comments, kewl!*/}
      </div>
      <div className="expense-item__price">€{props.amount}</div>
      {/*I need a function into the onclick prop.
       I POINT to it, I don't execute it there --> NO PARENTHESES, 
      because the function would be executed when the JSX code is read, 
      not exactly on the click. Forget the style, we'll take this out later*/}
    </Card>
    </li> //The list thing here is because I will return this thing as the content of an Unordered List --> Must change
  ); //Final conclusion? We no longer have hard coded stuff in JSX, but somewhat "dynamic" things
};
/*There must be only ONE root element for each component --> 
not more than ONE DIV*/
//for using this component elsewhere, we have to export it

export default ExpenseItem;
