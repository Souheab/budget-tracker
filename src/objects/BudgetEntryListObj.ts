import BudgetEntryObj from "./BudgetEntryObj";

export default class BudgetEntryListObj {
  budgetEntryArray: Array<BudgetEntryObj>;
  totalMoneySpent: number;

  constructor() {
    this.budgetEntryArray = new Array<BudgetEntryObj>();
    this.totalMoneySpent = 0;
  }

  push(budgetEntryObj: BudgetEntryObj) {
    this.budgetEntryArray.push(budgetEntryObj);
    this.totalMoneySpent += budgetEntryObj.amount;
  }

  clone(): BudgetEntryListObj {
    const budgetEntryList = new BudgetEntryListObj();
    const budgetEntryArray: Array<BudgetEntryObj> = [...this.budgetEntryArray];
    budgetEntryList.budgetEntryArray = budgetEntryArray;
    budgetEntryList.totalMoneySpent = this.totalMoneySpent;
    return budgetEntryList;
  }
}
