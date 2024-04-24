class BudgetEntryObj {
  private static idCounter: number = 0;
  id: number;
  name: string;
  amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
    this.id = BudgetEntryObj.idCounter;

    BudgetEntryObj.idCounter++;
  }
}

export default BudgetEntryObj;
