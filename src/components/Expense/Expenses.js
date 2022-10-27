import "./Expenses.css";
import Expenseitem from './Expenseitem';
import React from 'react';

function Expenses(props){
      const today = new Date("2022-3-29");
    // other way of mapping 
    //  function display(expense){
    //   return(  <Expenseitem   
    //   date = {today}
    //   title = {expense.title}
    //   amount = {expense.amount}
    //   />);
    //  }

    return (
        <div className="expenses">
        <h2>Let's Start</h2>
        {
         props.expenses.map(expense => (
        <Expenseitem   
        date = {today}
        title = {expense.title}
        amount = {expense.amount}
        />
        )
      )
     // props.expenses.map(display)
    }
       </div>
    );
}

export default Expenses;





