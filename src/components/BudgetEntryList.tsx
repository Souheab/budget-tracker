import BudgetEntry from "./BudgetEntry";
import BudgetEntryObj from "../objects/BudgetEntryObj";
import "./BudgetEntryList.css";
interface BudgetEntryListProps {
  budgetEntryArray: Array<BudgetEntryObj>;
}

function BudgetEntryList(props: BudgetEntryListProps) {
  const budgetEntryItems = props.budgetEntryArray.map((budgetEntryObj) => (
    <BudgetEntry name={budgetEntryObj.name} amount={budgetEntryObj.amount} />
  ));

  return <div className="budget-entry-list">{budgetEntryItems}</div>;
}

export default BudgetEntryList;
