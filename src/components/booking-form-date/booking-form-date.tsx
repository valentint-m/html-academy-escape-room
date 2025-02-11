type BookingFormDateProps = {
  date: string;
  time: string;
  isAvailable: boolean;
  isChecked: boolean;
  onChange: (date: string, time: string) => void;
}

export default function BookingFormDate ({date, time, isChecked, isAvailable, onChange}: BookingFormDateProps): JSX.Element {
  const id = `${date}${time.slice(0,2)}h${time.slice(3)}m`;

  return (
    <label className="custom-radio booking-form__date">
      <input type="radio" id={id} name="date" required disabled={!isAvailable} checked={isChecked} value={id} onChange={() => onChange(date, time)}/><span className="custom-radio__label">{time}</span>
    </label>
  );
}
