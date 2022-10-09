import Expences from "./components/Expenses/Expences";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "$950.40",
      date: new Date(2021, 3, 26),
    },
    {
      id: "e2",
      title: "Life Insurance",
      amount: "$9150.40",
      date: new Date(2021, 3, 26),
    },
    {
      id: "e3",
      title: "Bike Insurance",
      amount: "$450.40",
      date: new Date(2021, 3, 26),
    },
  ];
  const addExpenseHandler = (expenses) => {
    console.log("App Logs", expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences expenses={expenses} />
    </div>
  );
}

export default App;
