type BookingFormDateProps = {
  date: string;
  isAvailable: boolean;
  isChecked: boolean;
}

export default function BookingFormDate ({date, isChecked, isAvailable}: BookingFormDateProps): JSX.Element {
  return (
    <label className="custom-radio booking-form__date">
      <input type="radio" id="today9h45m" name="date" required disabled={isAvailable} checked={isChecked} value="today9h45m" /><span className="custom-radio__label">{date}</span>
    </label>
  );
}
