import "./App.css";
import BudgetEntryList from "./BudgetEntryList";
import Header from "./Header";
import AddModal from "./AddModal";
import FloatingButton from "./FloatingButton";
import AppData from "../objects/AppData";
import { useState } from "react";
import BudgetEntryObj from "../objects/BudgetEntryObj";
import CurrentBudgetInfo from "./CurrentBudgetInfo";

function App() {
  const [dateString] = useState(new Date().toDateString());
  const [budgetEntryArray, setBudgetEntryArray] = useState(
    AppData.getAppData().getBudgetEntryArray(dateString),
  );

  return (
    <>
      <Header />
      <AddModal
        onFormSubmit={(itemName: string, itemPrice: number) => {
          const budgetEntryArrayCopy = [...budgetEntryArray];
          budgetEntryArrayCopy.push(new BudgetEntryObj(itemName, itemPrice));
          setBudgetEntryArray(budgetEntryArrayCopy);
        }}
      />
      <CurrentBudgetInfo
        totalBudget={200}
        budgetEntryArray={budgetEntryArray}
      />
      <BudgetEntryList
        onDelete={(id: number) => {
          const newArray = budgetEntryArray.filter(
            (budgetEntryObj) => budgetEntryObj.id != id,
          );
          setBudgetEntryArray(newArray);
        }}
        budgetEntryArray={budgetEntryArray}
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
