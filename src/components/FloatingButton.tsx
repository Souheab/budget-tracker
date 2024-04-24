import "./FloatingButton.css";

interface FloatingButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

function FloatingButton(props: FloatingButtonProps) {
  return (
    <button
      className={"floating-button " + props.className}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default FloatingButton;