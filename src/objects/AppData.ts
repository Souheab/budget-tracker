import BudgetEntryObj from "../objects/BudgetEntryObj.ts";

const localStorageKeyPrefix = "budgetEntryObjArray ";

abstract class AppData {
  static writeBudgetEntryArray(
    date: string,
    budgetEntryArray: Array<BudgetEntryObj>,
  ) {
    const key = localStorageKeyPrefix + date;
    window.localStorage.setItem(key, JSON.stringify(budgetEntryArray));
  }

  static getBudgetEntryArray(date: string): Array<BudgetEntryObj> {
    const key = localStorageKeyPrefix + date;
    const budgetEntryArrayString = window.localStorage.getItem(key);
    if (budgetEntryArrayString === null) {
      return new Array<BudgetEntryObj>();
    }
    const budgetEntryArray: Array<BudgetEntryObj> = JSON.parse(
      budgetEntryArrayString,
    );

    return budgetEntryArray;
  }
}

export default AppData;
