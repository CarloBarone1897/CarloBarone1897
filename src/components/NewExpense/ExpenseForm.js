import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //I can reuse useState() how many times I want, since every time it'll be for a different thing.
  //Though I'll most likely use it once, it's quite personal honestly. But how?

  //I can use useState passing an OBJECT (OBS! OBJECT) as a parameter:

  /*const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })*/

  //document.getElementById('').addEventListener('click', (event)=>{})
  //Instead, we put the event DIRECTLY in the parameters of the function below,
  //since the event will be passed in the JSX tag.
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //value property holds the content of the target element at the time the event occurs. Kewl!
    //setUserInput(
    /* ...userInput, /*spread Operator, this keeps automatically 
      all the old stuff, though it's risky*/
    //I DEPEND ON THE OLD STATE. What, then?
    //enteredTitle: event.target.value, //I have to put ALL data, because otherwise they would be lost, if I use a single object
    //(prevState)=> {
    //return {...prevState, enteredTitle: event.target.value};
    //});
    //Why I'm I doing it so? Because this way I don't need to depend to outdate or wrong previous states.
    //All cool and shit, but, for the moment, let's go back to the multiple
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
    //...userInput, //spread Operator, this keeps automatically all the old stuff
    //enteredAmount: event.target.value, //I have to put ALL data, because otherwise they would be lost, if I use a single object

    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
    //...userInput, //spread Operator, this keeps automatically all the old stuff
    //enteredDate: event.target.value, //I have to put ALL data, because otherwise they would be lost, if I use a single object

    //})
  };

  const submitHandler = (event) => {
    event.preventDefault(); //I have to put this here because, otherwise, everytime I click on "submit", it RELOADS THE PAGE, which I don't want

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); //this is TWO-WAY BINDING - Makes it possible to clean up forms right after having filled them up
    setEnteredAmount("");
    setEnteredDate("");
  };

  /*Could have used "onInput" here, 
        but on Change works with every type of input*/
  return (
    <form onSubmit={submitHandler}>
      {/*And that's why I add the "onSubmit" event listener here*/}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>{" "}
          {/*The submit
           element here affects the WHOLE FORM --> The "submit" event will affect that*/}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
