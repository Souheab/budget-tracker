import BudgetEntryObj from "../objects/BudgetEntryObj.ts";
import BudgetEntryListObj from "./BudgetEntryListObj.ts";

const localStorageKeyPrefix = "budgetEntryObjArray ";

export default abstract class AppData {
  static writeBudgetEntryList(
    date: string,
    budgetEntryList: BudgetEntryListObj,
  ) {
    const key = localStorageKeyPrefix + date;
    window.localStorage.setItem(key, JSON.stringify(budgetEntryList));
  }

  static getBudgetEntryList(date: string): BudgetEntryListObj {
    const key = localStorageKeyPrefix + date;
    const budgetEntryListString = window.localStorage.getItem(key);
    if (budgetEntryListString === null) {
      return new BudgetEntryListObj();
    }
    const budgetEntryListJSON: BudgetEntryListObj = JSON.parse(
      budgetEntryListString,
    );

    // Revive the list
    const budgetEntryList = new BudgetEntryListObj();
    budgetEntryListJSON.budgetEntryArray.forEach((budgetEntryObj) => {
      budgetEntryList.push(
        new BudgetEntryObj(budgetEntryObj.name, budgetEntryObj.amount),
      );
    });
    budgetEntryList.totalMoneySpent = budgetEntryListJSON.totalMoneySpent;

    return budgetEntryList;
  }
}
