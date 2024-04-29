import "./App.css";
import BudgetEntryList from "./BudgetEntryList";
import Header from "./Header";
import AddModal from "./AddModal";
import AppData from "../objects/AppData";
import { useState } from "react";
import BudgetEntryObj from "../objects/BudgetEntryObj";
import AppSettings from "../objects/AppSettings";
import DateSelector from "./DateSelector";
import BudgetEntryListObj from "../objects/BudgetEntryListObj";
import SettingsModal from "./SettingsModal";
import twemojiMoneySvg from "../assets/twemoji-money-bag.svg";
import settingsSvg from "../assets/setting-line-icon.svg";

export default function App() {
  const [dateString, setDateString] = useState(new Date().toDateString());
  const [budgetEntryList, setBudgetEntryList] = useState(
    AppData.getBudgetEntryList(dateString),
  );
  const [appSettings, setAppSettings] = useState(AppSettings.getAppSettings());

  function updateBudgetEntryList(budgetEntryList: BudgetEntryListObj) {
    setBudgetEntryList(budgetEntryList);
    AppData.writeBudgetEntryList(dateString, budgetEntryList);
  }

  return (
    <>
      <AddModal
        onSubmit={(budgetEntryObj: BudgetEntryObj) => {
          const budgetEntryListCopy = budgetEntryList.clone();
          budgetEntryListCopy.push(budgetEntryObj);
          updateBudgetEntryList(budgetEntryListCopy);
        }}
      />
      <SettingsModal
        appSettings={appSettings}
        onSubmit={(appSettings: AppSettings) => {
          setAppSettings(appSettings);
        }}
      />
      <div className="site-main-box">
        <Header />
        <img src={twemojiMoneySvg} className="money-image" />
        <DateSelector
          dateString={dateString}
          onChange={(date) => {
            const newDateString = date.toDateString();
            setDateString(newDateString);
            setBudgetEntryList(AppData.getBudgetEntryList(newDateString));
          }}
        />
        <BudgetEntryList
          currencyString={appSettings.currencyString}
          onDelete={(id: number) => {
            const newBudgetEntryList = new BudgetEntryListObj();
            budgetEntryList.budgetEntryArray.forEach((budgetEntryObj) => {
              if (budgetEntryObj.id != id) {
                newBudgetEntryList.push(budgetEntryObj);
              }
            });

            updateBudgetEntryList(newBudgetEntryList);
          }}
          budgetEntryList={budgetEntryList}
        />
        <hr className="budget-info-hr" />
        <div className="budget-info-grid">
          <div>Budget Spent:</div>
          <div>{-budgetEntryList.totalMoneySpent}</div>
          <div>Total Budget:</div>
          <div>+{appSettings.dailyBudget}</div>
        </div>
        <hr className="budget-info-hr" />
        <div className="budget-info-grid">
          <div>Budget Left:</div>
          <div>{appSettings.dailyBudget - budgetEntryList.totalMoneySpent}</div>
        </div>
      </div>
      <img
        className="settings-button"
        alt="Settings"
        src={settingsSvg}
        onClick={() => {
          const modal = document.querySelector(".settings-modal");
          if (modal !== null) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      />
      <button
        className="add-button floating-button"
        onClick={() => {
          const modal = document.querySelector(".add-modal");
          if (modal !== null) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        +
      </button>
    </>
  );
}
