import BudgetEntryObj from "../objects/BudgetEntryObj";
import "./BudgetEntry.css";

interface BudgetEntryProps {
  budgetEntryObj: BudgetEntryObj;
  onDeleteButtonClick: (id: number) => void;
  currencyString: string;
}

export default function BudgetEntry(props: BudgetEntryProps) {
  const budgetEntryAmountColorClass =
    props.budgetEntryObj.amount < 0 ? " red-bg" : " green-bg";

  return (
    <li className="budget-entry">
      <div className="budget-entry-name">{props.budgetEntryObj.name}</div>
      <button
        className="budget-entry-delete-button"
        onClick={() => {
          props.onDeleteButtonClick(props.budgetEntryObj.id);
        }}
      >
        D
      </button>
      <div className={"budget-entry-amount" + budgetEntryAmountColorClass}>
        {props.currencyString + " " + props.budgetEntryObj.amount}
      </div>
    </li>
  );
}
