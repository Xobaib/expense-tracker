import categories from "./categories";

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
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
