import './Expenseitem.css';
import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
// to recieve javascript data from app.js file we create an object " props " declare as argument 
// in function and access it as property and value;
function Expenseitem(props){ 
 // to write javascript code  we write variables or content in {} Curly Braces
 // toISOString() method for access whole data 
 
  //   const [newtitle,setNewTitle] = useState("");
  //   const [title,setTitle] = useState(props.title);
  // const clickHandler = () => {
  //         setTitle(newtitle);       
  // }
  //   const changeHandler = (event) =>{
  //          setNewTitle(event.target.value);
  //   }
   return (
     <div className='expense-item'>
        <ExpenseDate  date = {props.date} />
        <div className='expense-item-description'>
            <h2>{ props.title }</h2>
            </div>
            <div className='expense-item-price'>${props.amount}</div>
            {/* <input type='text' value = {newtitle} onChange = { changeHandler } ></input>
            <button className='expense-item-button' onClick={ clickHandler }>Change Title</button> */}
     </div>
   );
}

export default Expenseitem;