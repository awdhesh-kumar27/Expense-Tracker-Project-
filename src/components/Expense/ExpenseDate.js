import './ExpenseDate.css';

import React from 'react';

function ExpenseDate(props){
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    return (
        <div className="expense-date">
            <span>{month}</span>
            {" "}
            <span>{day}</span>
            {","}
            <span>{year}</span> 
        </div>
    );

}

export default ExpenseDate;