import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Following function is very important - it LIFTS UP THE STATE, passing a function from here to App.js
    props.onAddExpense(expenseData); //This prop is used in the App.js file, therefore I put it here as well
  }; //parameter's name is up to me, but again - reasons
  
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
      {/*I can create my own props function, that's it. 
        I can name it as like as I please, but the "onWhatever" is a convention.*/}
    </div>
  );
};

export default NewExpense;
