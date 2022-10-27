
import React,{ useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

let dummy_data  = [ {
  id :'e1',
  date : new Date(2022,3,25),
  title :"Car Insurance",
  amount : 300
  },
{ 
id : 'e2',
date : new Date(2022,3,28),
title :"School Fees",
amount : 200
}]
        
function App(props){
  
  // It is reduntant to create a lot of variables so we create an array of object 
  
  //  let expenseDate = new Date(2021,3,28);
  //  let expenseTitle = " School Fees ";
  //  let expenseAmount = 300;
   //  { Way of passing data in components of react from app.js file is known as props
   //  We can pass javascript variable like attribut and value. If it is variable then put 
   // in curly braces. and If it is a string put it in double quotes }

// If we want to return more than 1 html component then put all in the one wrapper(div) and return
    const [newData,setnewData] = useState(dummy_data);

const newexpensedatahandler =(NewExpense) =>{
  
    const totalData = [NewExpense,...newData];
    setnewData(totalData);
    console.log(totalData);
}

return (
      //Every component behave like a div
      <div>
       <NewExpense NewExpenseData = { newexpensedatahandler } />
        <Expenses  expenses={newData} />
        </div>
      );
}
// we used default keyword because we can change the name of function in import file;
export default App;