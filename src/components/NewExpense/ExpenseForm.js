import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = ({onSaveExpenseData, onCancel, showNewExpense}) => {
    const buildClearState = () => ({
        enteredTitle: '',
        enteredAmount: 0,
        enteredDate: ''
    })
    const [userInput, setUserInput] = useState(buildClearState());
    const titleChangeHandler = (event) => {
        setUserInput((prevState) => ({...prevState, enteredTitle: event.target.value}));
    };
    const amountChangeHandler = (event) => {
        //setUserInput({...userInput, enteredAmount: Number(event.target.value)});
        setUserInput((prevState) => ({...prevState, enteredAmount: Number(event.target.value)}));

    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => ({...prevState, enteredDate: event.target.value}));
        //
        // setUserInput({...userInput, enteredDate: event.target.value});
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        onSaveExpenseData(expenseData);
        onCancel();
        setUserInput(buildClearState())

    }
    return (
        showNewExpense ? <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form> : ''
    )
}
export default ExpenseForm;
