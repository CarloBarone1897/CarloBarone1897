//Not put in the components folder 'cause it's the "main" one.
//Now I will import my custom componente ExpenseItem

import ExpenseItem from "./components//Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses.js"
import React, {useState} from 'react'; //Technically not necessary with JSX, but we should always keep in mind that it works under the hood
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [//Took the initial expenses outside the app --> They'll be fucking constant now
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },

  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //Right now we have the pre-made array and the function below that was interestingly
  //Created beforehand, so to log the expenses inserted in the form. Now what?
  const addExpenseHandler = (expense) => {
    //setExpensesState([expense, ...expenses]); //Spread operator, holds all the previous values
    //Though, not completely exact because I would depend from the previous state
    //-->
    setExpenses(prevExpense =>{
      return [expense, ...expenses];
    });
    console.log('In App.js');
    console.log(expense); //Here I'm just logging data, I'll later go through how making it dynamic.
  } 
  //There is HTML in JS --> JSX, it's a special syntax created by the React team
  //What I did below is to create the Expenses component and import it as a component
  //Then I passed the "expenses" array as a "props" parameter for the function/component "Expenses".
  //K-BOOM, Baby! It works! Boy that's satisfying.
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} /> 
    </div>
  );
}
//JSX Syntax is very useful because the browser "translates" it in a very complicated way

export default App;
