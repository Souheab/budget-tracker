import BudgetEntryObj from "../objects/BudgetEntryObj";
import "./BudgetEntry.css";

interface BudgetEntryProps {
  budgetEntryObj: BudgetEntryObj;
  onDeleteButtonClick: (id: number) => void;
  currencyString: string;
}

export default function BudgetEntry(props: BudgetEntryProps) {
  return (
    <li className="budget-entry">
      <div className="budget-entry-name">{props.budgetEntryObj.name}</div>
      <div className="budget-entry-amount">
        {props.currencyString + " " + props.budgetEntryObj.amount}
      </div>
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
