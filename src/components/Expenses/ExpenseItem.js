import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

const ExpenseItem =  ({title, amount, date}) => {
    const [reactiveTitle] = useState(title)
    // const clickHandler = () => {
    //     setReactiveTitle(reactiveTitle.split('').reverse().join(''))
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{reactiveTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/*<button onClick={clickHandler}>Change title</button>*/}
        </Card>
    )
}
export default ExpenseItem;