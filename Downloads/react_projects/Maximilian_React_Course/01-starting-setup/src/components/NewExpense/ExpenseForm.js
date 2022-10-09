import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // TODO: Insteed of Multiple state use single state
  //   const [enteredInput, setEnteredInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "bb",
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredTitle: e.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: e.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: e.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredDate: e.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: e.target.value,
    //   };
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            step="0"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
