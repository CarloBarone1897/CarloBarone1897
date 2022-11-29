import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react"; //Technically not necessary with JSX, but we should always keep in mind that it works under the hood
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
/*Instead of creating the expenses div in the App function, I create it here, creating then a component 
which contains said div and is imported in App.js*/
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); //Built in method, close to MAP. It doesn't touch the original array, just creates a new one

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*Right now we have manually entered all expenses, but, regularly, 
        I DON'T KNOW how much data I'm gonna handle --> Must be "dynamized".
        HERE IT GOES*/}
        {/*A KEY IS THE UNIQUE VALUE THAT IDENTIFIES STUFF*/}
        {/*CAN'T USE FOR CYCLES HERE YAAAAAAAAAAAAAH I HATED THEM,
        but I can use something else
        This is the if-else synthax in modern JS:
        (expression ? ifCondition () : elseCondition)
        Further trick? expression && return IfCondition*/}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />;
      </Card>
    </div>
  );
} //I Can filter arrays with the filter method, and I shouldn't thing complicated
//Just change a new array based on the full expenses array

export default Expenses;
