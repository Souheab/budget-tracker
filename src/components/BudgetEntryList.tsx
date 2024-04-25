import BudgetEntry from "./BudgetEntry";
import BudgetEntryObj from "../objects/BudgetEntryObj";
import "./BudgetEntryList.css";
interface BudgetEntryListProps {
  budgetEntryArray: Array<BudgetEntryObj>;
  onDelete: (id: number) => void;
}

function BudgetEntryList(props: BudgetEntryListProps) {
  const budgetEntryItems = props.budgetEntryArray.map((budgetEntryObj) => (
    <BudgetEntry
      key={budgetEntryObj.id}
      budgetEntryObj={budgetEntryObj}
      onDeleteButtonClick={props.onDelete}
    />
  ));

  return <ul className="budget-entry-list">{budgetEntryItems}</ul>;
}

export default BudgetEntryList;
