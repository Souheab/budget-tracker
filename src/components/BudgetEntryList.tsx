import BudgetEntry from "./BudgetEntry";
import "./BudgetEntryList.css";
import BudgetEntryListObj from "../objects/BudgetEntryListObj";

interface BudgetEntryListProps {
  budgetEntryList: BudgetEntryListObj;
  onDelete: (id: number) => void;
  currencyString: string;
}

export default function BudgetEntryList(props: BudgetEntryListProps) {
  const budgetEntryItems = props.budgetEntryList.budgetEntryArray.map(
    (budgetEntryObj) => (
      <BudgetEntry
        key={budgetEntryObj.id}
        currencyString={props.currencyString}
        budgetEntryObj={budgetEntryObj}
        onDeleteButtonClick={props.onDelete}
      />
    ),
  );

  return <div className="budget-entry-list">{budgetEntryItems}</div>;
}
