import BudgetEntryObj from "../objects/BudgetEntryObj.ts";

const localStorageKey = "budgetTrackerAppData";

class AppData {
  dateBudgetEntryMap: Map<string, Array<BudgetEntryObj>>;

  constructor(map?: Map<string, Array<BudgetEntryObj>>) {
    if (typeof map === "undefined") {
      this.dateBudgetEntryMap = new Map<string, Array<BudgetEntryObj>>([
        ["test", new Array<BudgetEntryObj>(new BudgetEntryObj("testing", 0))],
      ]);
    } else {
      this.dateBudgetEntryMap = map!;
    }
  }

  updateLocalStorage() {
    window.localStorage.setItem(
      localStorageKey,
      JSON.stringify(Array.from(this.dateBudgetEntryMap)),
    );
  }

  addBudgetEntryObj(budetEntryObj: BudgetEntryObj, date: string) {
    if (!this.dateBudgetEntryMap.has(date)) {
      this.dateBudgetEntryMap.set(date, new Array<BudgetEntryObj>());
    } else {
      const arr = this.dateBudgetEntryMap.get(date)!;
      arr.push(budetEntryObj);
    }
  }

  getBudgetEntryArray(date: string): Array<BudgetEntryObj> {
    if (!this.dateBudgetEntryMap.has(date)) {
      const array = new Array<BudgetEntryObj>();
      this.dateBudgetEntryMap.set(date, array);
      return array;
    }

    const array = this.dateBudgetEntryMap.get(date)!;
    return array;
  }

  writeBudgetEntryArray(date: string, budgetEntryArray: Array<BudgetEntryObj>) {
    this.dateBudgetEntryMap.set(date, budgetEntryArray);
    this.updateLocalStorage();
  }

  static getAppData(): AppData {
    const dateBudgetEntryMapString =
      window.localStorage.getItem(localStorageKey);
    if (dateBudgetEntryMapString == null) {
      let appData = new AppData();
      appData.updateLocalStorage();
      return appData;
    }
    const appDataMap = new Map<string, Array<BudgetEntryObj>>(
      JSON.parse(dateBudgetEntryMapString),
    );
    const appData = new AppData(appDataMap);
    return appData;
  }
}

export default AppData;
