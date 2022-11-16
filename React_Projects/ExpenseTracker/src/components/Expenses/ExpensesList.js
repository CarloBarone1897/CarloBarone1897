import './ExpensesList.css'
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    
  
  if (props.expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }
  return <ul className='expenses-list'>
    {props.expenses.map(expense => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
  //The snippet above is sublime, fixes everything so to have like 2 lines in the return statement.
};

export default ExpensesList;