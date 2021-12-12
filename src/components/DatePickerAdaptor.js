import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerAdapter = ({ input: { onChange, value }, ...rest }) => (
    <DatePicker selected={value} onChange={date => onChange(date)} {...rest} />
  );