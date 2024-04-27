import BudgetEntry from "./BudgetEntry";
import "./BudgetEntryList.css";
import BudgetEntryListObj from "../objects/BudgetEntryListObj";

interface BudgetEntryListProps {
  budgetEntryList: BudgetEntryListObj;
  onDelete: (id: number) => void;
}

export default function BudgetEntryList(props: BudgetEntryListProps) {
  const budgetEntryItems = props.budgetEntryList.budgetEntryArray.map(
    (budgetEntryObj) => (
      <BudgetEntry
        key={budgetEntryObj.id}
        budgetEntryObj={budgetEntryObj}
        onDeleteButtonClick={props.onDelete}
      />
    ),
  );

  return <ul className="budget-entry-list">{budgetEntryItems}</ul>;
}
