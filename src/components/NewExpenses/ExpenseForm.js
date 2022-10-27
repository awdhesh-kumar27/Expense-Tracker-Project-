import React ,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
     const [enteredtitle,setTitle] = useState("");
     const [entereddate ,setDate] = useState("");
     const [enteredamount ,setAmount] = useState("");


    const titleHandler = (event) => {
            setTitle(event.target.value);
    }
        const dateHandler = (event) => {
            setDate(event.target.value );
        }
        const amountHandler = (event) => {
            setAmount(event.target.value);
        } 

    const submitHandler = (event) =>{
        event.preventDefault();
        const newdata = {
            title : enteredtitle,
            date : entereddate,
            amount : enteredamount
        }
        props.newformdata(newdata);
        setDate("");
        setTitle("");
        setAmount("");
    }
    return (
        <form onSubmit = { submitHandler }>
            <div className = "elementcss">
                <div>
                    <label> Title </label>
                    <input type = 'text' value ={enteredtitle} onChange = {titleHandler}  required/>
                </div>
                <div>
                    <label> Date </label>
                    <input type = 'date' value ={entereddate} onChange = {dateHandler} required/>
                </div>
                <div>
                    <label> Amount </label>
                    <input type = 'number' min="0.01" step = "0.01" value ={enteredamount} onChange = {amountHandler} required/>
                </div>
            </div>
            <div className = "submit-button"  >
                <button type='submit' > ADD EXPENSE </button>
            </div>
        </form>
    );
}

export default ExpenseForm;