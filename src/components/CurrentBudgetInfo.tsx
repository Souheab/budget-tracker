interface CurrentBudgetInfoProps {
  totalBudget: number;
  totalMoneySpent: number;
}

export default function CurrentBudgetInfo(props: CurrentBudgetInfoProps) {
  return (
    <div className="current-budget-info-div">
      <div className="total-budget">{props.totalBudget}</div>
      <div className="available-budget">{props.totalMoneySpent}</div>
    </div>
  );
}
