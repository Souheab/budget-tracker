interface CloseDialogButtonProps {
  dialogClass: string;
}

export default function CloseDialogButton(props: CloseDialogButtonProps) {
  const onClick = () => {
    const modal = document.querySelector("." + props.dialogClass);
    (modal as HTMLDialogElement).close();
  };

  return <button onClick={onClick}>X</button>;
}
