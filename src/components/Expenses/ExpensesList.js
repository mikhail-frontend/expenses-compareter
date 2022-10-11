import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({items}) => {
    const isOneExpenseExist = Boolean(items && Array.isArray(items) && items.length);
    return (<ul className="expenses-list">
        {!isOneExpenseExist && <h2 className="expenses-list__fallback">Found no expenses</h2>}
        {isOneExpenseExist && items.map(({id, date, title, amount}) => (
            <ExpenseItem key={id} date={date} title={title} amount={amount}/>))}
    </ul>)
}
export default ExpensesList