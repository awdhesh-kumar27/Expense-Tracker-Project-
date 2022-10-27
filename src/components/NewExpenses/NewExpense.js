import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
   

  const NewformDataHandler = (newexpense) =>{
     
     props.NewExpenseData(newexpense);
  }

    return (
        <div  className = 'NewExpense'>
            <ExpenseForm  newformdata = { NewformDataHandler }></ExpenseForm>

        </div>
    );

}




export default NewExpense ;