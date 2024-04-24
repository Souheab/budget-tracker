import "./App.css";
import BudgetEntryList from "./BudgetEntryList";
import Header from "./Header";
import AddModal from "./AddModal";
import FloatingButton from "./FloatingButton";
import AppData from "../objects/AppData";
import { useState } from "react";
import BudgetEntryObj from "../objects/BudgetEntryObj";

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
      <BudgetEntryList budgetEntryArray={budgetEntryArray} />
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
