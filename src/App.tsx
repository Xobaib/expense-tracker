import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 5, category: "Groceries" },
    { id: 2, description: "eggs", amount: 3, category: "Groceries" },
    { id: 3, description: "movie", amount: 20, category: "Entertaiment" },
    { id: 4, description: "lamp", amount: 4.33, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onChangeCategory={handleChangeCategory} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
