import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 5, category: "Groceries" },
    { id: 2, description: "eggs", amount: 3, category: "Groceries" },
    { id: 3, description: "movie", amount: 20, category: "Entertaiment" },
    { id: 4, description: "lamp", amount: 4.33, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
