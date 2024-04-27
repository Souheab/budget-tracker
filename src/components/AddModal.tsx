import BudgetEntryObj from "../objects/BudgetEntryObj";

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

  return (
    <dialog className="add-modal">
      <form method="dialog" onSubmit={onSubmit}>
        <label>
          Add Item:
          <input type="text" name="itemName" required />
        </label>
        <label>
          Item Price:
          <input type="number" name="itemPrice" />
        </label>
        <button>Add</button>
      </form>
    </dialog>
  );
}
