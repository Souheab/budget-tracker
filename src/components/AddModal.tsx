import BudgetEntryObj from "../objects/BudgetEntryObj";
import CloseDialogButton from "./CloseDialogButton";

interface AddModalProps {
  onSubmit: (budgetEntryObj: BudgetEntryObj) => void;
}

export default function AddModal(props: AddModalProps) {
  const onSubmit = (event: any) => {
    const itemName: string = event.target.itemName.value;
    const itemPrice: number = event.target.itemPrice.value;
    const budgetEntryObj = new BudgetEntryObj(itemName, itemPrice);

    props.onSubmit(budgetEntryObj);
  };

  const dialogClass = "add-modal";

  return (
    <dialog className={dialogClass}>
      <CloseDialogButton dialogClass={dialogClass} />
      <form method="dialog" onSubmit={onSubmit}>
        <label>Item Name:</label>
        <input type="text" name="itemName" required />
        <label>Item Price:</label>
        <input type="number" name="itemPrice" />
        <button className="form-button">Add</button>
      </form>
    </dialog>
  );
}
