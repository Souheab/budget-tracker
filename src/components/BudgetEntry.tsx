import "./BudgetEntry.css";

interface BudgetEntryProps {
  name: string;
  amount: number;
}

function BudgetEntry(props: BudgetEntryProps) {
  return (
    <div className="budget-entry">
      <div className="budget-entry-name">{props.name}</div>
      <div className="budget-entry-amount">$ {props.amount}</div>
    </div>
  );
}

export default BudgetEntry;
