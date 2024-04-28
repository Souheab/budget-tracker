import "./CurrentBudgetInfo.css";

interface CurrentBudgetInfoProps {
  totalBudget: number;
  totalMoneySpent: number;
  currencyString: string;
}

export default function CurrentBudgetInfo(props: CurrentBudgetInfoProps) {
  return (
    <div className="current-budget-info">
      <div className="budget-box">
        <div>Total Budget:</div>
        <div className="total-budget">
          {props.currencyString + " " + props.totalBudget}
        </div>
      </div>
      <div className="budget-box">
        <div>Budget Spent:</div>
        <div className="available-budget">
          {props.currencyString + " " + props.totalMoneySpent}
        </div>
      </div>
    </div>
  );
}
