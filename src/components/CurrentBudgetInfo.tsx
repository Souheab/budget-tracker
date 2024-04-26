import BudgetEntryObj from "../objects/BudgetEntryObj";

interface CurrentBudgetInfoProps {
  totalBudget: number;
  budgetEntryArray: Array<BudgetEntryObj>;
}

function CurrentBudgetInfo(props: CurrentBudgetInfoProps) {
  const moneySpent: number = props.budgetEntryArray.reduce(
    (sum: number, obj) => {
      return +sum + +obj.amount;
    },
    0,
  );

  return (
    <div className="current-budget-info-div">
      <div className="total-budget">{props.totalBudget}</div>
      <div className="available-budget">{moneySpent}</div>
    </div>
  );
}

export default CurrentBudgetInfo;
