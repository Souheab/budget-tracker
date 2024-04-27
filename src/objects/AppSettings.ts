const localStorageKey = "budgetTrackerAppSettings";
const defaultWeeklyBudget = 100;

export default class AppSettings {
  weeklyBudget: number;

  constructor(weeklyBudget: number) {
    this.weeklyBudget = weeklyBudget;
  }

  updateLocalStorate() {
    window.localStorage.setItem(localStorageKey, JSON.stringify(this));
  }

  static getAppSettings(): AppSettings {
    const appSettingsString = window.localStorage.getItem(localStorageKey);
    if (appSettingsString === null) {
      const appSettings = new AppSettings(defaultWeeklyBudget);
      appSettings.updateLocalStorate();
      return appSettings;
    }

    const appSettingsJSON: AppSettings = JSON.parse(appSettingsString)!;
    const appSettings = new AppSettings(appSettingsJSON.weeklyBudget);
    return appSettings;
  }
}
