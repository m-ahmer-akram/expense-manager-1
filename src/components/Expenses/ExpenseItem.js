import React from "react";
import "./ExpenseItem.scss";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 2, 26);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 121.05;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <Card className="expense-item__price">${props.amount}</Card>
      </div>
    </Card>
  );
};

export default ExpenseItem;
