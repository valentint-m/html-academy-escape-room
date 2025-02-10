import { BookingInfo } from '../../types/quest';
import BookingContacts from '../booking-contacts/booking-contacts';
import BookingFormDate from '../booking-form-date/booking-form-date';

type BookingFormProps = {
  bookingInfo: BookingInfo;
}

export default function BookingForm ({bookingInfo}: BookingFormProps): JSX.Element {
  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {bookingInfo.slots.today.map((slot) => <BookingFormDate date={slot.time} isAvailable={slot.isAvailable} isChecked={false} key={slot.time}/>)}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {bookingInfo.slots.tomorrow.map((slot) => <BookingFormDate date={slot.time} isAvailable={slot.isAvailable} isChecked={false} key={slot.time}/>)}
          </div>
        </fieldset>
      </fieldset>
      <BookingContacts />
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}
