import BudgetEntryObj from "../objects/BudgetEntryObj";
import "./BudgetEntry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface BudgetEntryProps {
  budgetEntryObj: BudgetEntryObj;
  onDeleteButtonClick: (id: number) => void;
  currencyString: string;
}

export default function BudgetEntry(props: BudgetEntryProps) {
  const budgetEntryAmountColorClass =
    props.budgetEntryObj.amount < 0 ? " red-bg" : " green-bg";

  return (
    <>
      <div className="budget-entry-name-and-delete-button">
        <div className="budget-entry-name">{props.budgetEntryObj.name}</div>
        <button
          className="budget-entry-delete-button"
          onClick={() => {
            props.onDeleteButtonClick(props.budgetEntryObj.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} className="fa-inverse" />
        </button>
      </div>
      <div className={"budget-entry-amount" + budgetEntryAmountColorClass}>
        {props.currencyString + " " + props.budgetEntryObj.amount}
      </div>
    </>
  );
}
