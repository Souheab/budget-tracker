import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectorProps {
  dateString: string;
}

function DateSelector(props: DateSelectorProps) {
  return (
    <div className="date-selector">
      <DatePicker
        selected={new Date(props.dateString)}
        onChange={(_, __) => {}}
      />
    </div>
  );
}

export default DateSelector;
