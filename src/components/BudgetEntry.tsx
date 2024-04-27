import BudgetEntryObj from "../objects/BudgetEntryObj";
import "./BudgetEntry.css";

interface BudgetEntryProps {
  budgetEntryObj: BudgetEntryObj;
  onDeleteButtonClick: (id: number) => void;
}

export default function BudgetEntry(props: BudgetEntryProps) {
  return (
    <li className="budget-entry" key={props.budgetEntryObj.id}>
      <div className="budget-entry-name">{props.budgetEntryObj.name}</div>
      <div className="budget-entry-amount">$ {props.budgetEntryObj.amount}</div>
      <button
        className="budget-entry-delete-button"
        onClick={() => {
          props.onDeleteButtonClick(props.budgetEntryObj.id);
        }}
      >
        D
      </button>
    </li>
  );
}
