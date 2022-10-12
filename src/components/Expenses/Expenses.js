import React, {useState} from "react";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items
        .filter(({date}) => Number(date.getFullYear()) === Number(filteredYear))

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;