import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenceDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenceItem = (props) => {
  const { title, amount, date } = props;

  return (
    <Card className="card expense-item">
      <ExpenceDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenceItem;
