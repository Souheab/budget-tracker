import "./App.css";
import BudgetEntryList from "./BudgetEntryList";
import Header from "./Header";
import AddModal from "./AddModal";
import FloatingButton from "./FloatingButton";
import AppData from "../objects/AppData";
import { useState } from "react";
import BudgetEntryObj from "../objects/BudgetEntryObj";
import CurrentBudgetInfo from "./CurrentBudgetInfo";
import AppSettings from "../objects/AppSettings";
import DateSelector from "./DateSelector";
import BudgetEntryListObj from "../objects/BudgetEntryListObj";
import SettingsModal from "./SettingsModal";

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
      <Header />
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
        <div className="app-main-box">
          <DateSelector
            dateString={dateString}
            onChange={(date) => {
              const newDateString = date.toDateString();
              setDateString(newDateString);
              setBudgetEntryList(AppData.getBudgetEntryList(newDateString));
            }}
          />
          <CurrentBudgetInfo
            totalBudget={appSettings.dailyBudget}
            totalMoneySpent={budgetEntryList.totalMoneySpent}
            currencyString={appSettings.currencyString}
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
        </div>
      </div>
      <FloatingButton
        className="add-floating-button"
        text="+"
        onClick={() => {
          const modal = document.querySelector(".add-modal");
          if (modal !== null) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      />
      <FloatingButton
        className="settings-floating-button"
        text="S"
        onClick={() => {
          const modal = document.querySelector(".settings-modal");
          if (modal !== null) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      />
    </>
  );
}
