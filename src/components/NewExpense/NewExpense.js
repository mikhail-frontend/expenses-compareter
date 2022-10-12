import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import {useState} from "react";

const NewExpense = ({onSaveExpenseData}) => {

    const [showNewExpense, onShowNewExpenseChanged] = useState(false);
    const setShowNewExpenseVisible = () => onShowNewExpenseChanged(true);
    const setShowNewExpenseHidden = () => onShowNewExpenseChanged(false);

    return (
        <div className="new-expense">
            {showNewExpense && <ExpenseForm onSaveExpenseData={onSaveExpenseData}
                                            onCancel={setShowNewExpenseHidden}
                                            showNewExpense={showNewExpense}
            />}
            {!showNewExpense && <button onClick={setShowNewExpenseVisible}>Add new expense</button>}

        </div>
    )
}
export default NewExpense;