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

function App() {
  const [dateString] = useState(new Date().toDateString());
  const [budgetEntryList, setBudgetEntryList] = useState(
    AppData.getBudgetEntryList(dateString),
  );
  const [appSettings] = useState(AppSettings.getAppSettings());

  function updateBudgetEntryList(budgetEntryList: BudgetEntryListObj) {
    setBudgetEntryList(budgetEntryList);
    AppData.writeBudgetEntryList(dateString, budgetEntryList);
  }

  return (
    <>
      <Header />
      <AddModal
        onFormSubmit={(itemName: string, itemPrice: number) => {
          const budgetEntryListCopy = budgetEntryList.clone();
          budgetEntryListCopy.push(new BudgetEntryObj(itemName, itemPrice));
          updateBudgetEntryList(budgetEntryListCopy);
        }}
      />
      <DateSelector dateString={dateString} />
      <CurrentBudgetInfo
        totalBudget={appSettings.weeklyBudget}
        totalMoneySpent={budgetEntryList.totalMoneySpent}
      />
      <BudgetEntryList
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
      <FloatingButton
        className="add-floating-button"
        text="+"
        onClick={() => {
          const modal = document.querySelector(".add-modal");
          if (modal !== null) {
            (modal as any).showModal();
          }
        }}
      />
    </>
  );
}

export default App;
