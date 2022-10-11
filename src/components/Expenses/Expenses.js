import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items
        .filter(({date}) => Number(date.getFullYear()) === Number(filteredYear))

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {
                //abuse, but fine. && will return the second(last) cond
            }
            <div>
            {!(filteredExpenses && Array.isArray(filteredExpenses) && filteredExpenses.length) && 'nothing found'}

            {(filteredExpenses && Array.isArray(filteredExpenses) && filteredExpenses.length)
                && filteredExpenses.map(({id, date, title, amount}) => (
                    <ExpenseItem key={id} date={date} title={title} amount={amount}/>
                ))}
            }
            </div>


        </Card>
    )
}

export default Expenses;