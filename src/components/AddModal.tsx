interface AddModalProps {
  onSubmit: (itemName: string, itemPrice: number) => void;
}

function AddModal(props: AddModalProps) {
  let onSubmit = (event: any) => {
    let itemName: string = event.target.itemName.value;
    let itemPrice: number = event.target.itemPrice.value;
    props.onSubmit(itemName, itemPrice);
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

export default AddModal;
