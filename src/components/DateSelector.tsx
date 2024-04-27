import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectorProps {
  dateString: string;
  onChange: (date: Date) => void;
}

function DateSelector(props: DateSelectorProps) {
  return (
    <div className="date-selector">
      <DatePicker
        selected={new Date(props.dateString)}
        onChange={(date) => {
          if (date !== null) {
            props.onChange(date);
          }
        }}
      />
    </div>
  );
}

export default DateSelector;
