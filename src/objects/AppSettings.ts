const localStorageKey = "budgetTrackerAppSettings";
const defaultWeeklyBudget = 100;

export default class AppSettings {
  dailyBudget: number;
  currencyString: string;

  constructor(dailyBudget: number, currencyString: string) {
    this.dailyBudget = dailyBudget;
    this.currencyString = currencyString;
  }

  updateLocalStorate() {
    window.localStorage.setItem(localStorageKey, JSON.stringify(this));
  }

  static getAppSettings(): AppSettings {
    const appSettingsString = window.localStorage.getItem(localStorageKey);
    if (appSettingsString === null) {
      const appSettings = new AppSettings(defaultWeeklyBudget, "$");
      appSettings.updateLocalStorate();
      return appSettings;
    }

    const appSettingsJSON: AppSettings = JSON.parse(appSettingsString)!;
    const appSettings = new AppSettings(
      appSettingsJSON.dailyBudget,
      appSettingsJSON.currencyString,
    );
    return appSettings;
  }
}
