interface Props {
  onChangeCategory: (category: string) => void;
}

const ExpenseFilter = ({ onChangeCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onChangeCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertaiment">Entertaiment</option>
    </select>
  );
};

export default ExpenseFilter;
