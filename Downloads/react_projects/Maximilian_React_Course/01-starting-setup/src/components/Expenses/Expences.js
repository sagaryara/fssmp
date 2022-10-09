import React, { useState } from "react";
import ExpenceItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expences = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((expence) => (
          <ExpenceItem
            key={expence.id}
            title={expence.title}
            amount={expence.amount}
            date={expence.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expences;
