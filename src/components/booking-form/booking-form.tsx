import { FormEvent, useState } from 'react';
import { BookingInfo, BookingPost, BookingPostWithId } from '../../types/quest';
import { Path, SlotDate } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { reserveQuestAction } from '../../store/api-actions/api-actions';
import { getSubmittingStatus } from '../../store/quest-data/quest-data-selectors';
import BookingContacts from '../booking-contacts/booking-contacts';
import BookingFormDate from '../booking-form-date/booking-form-date';
import { useNavigate } from 'react-router-dom';

type BookingFormProps = {
  bookingInfo: BookingInfo;
  questId: string;
}

export default function BookingForm ({bookingInfo, questId}: BookingFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedTime, setTime] = useState(['date', 'time']);

  const isSubmitting = useAppSelector(getSubmittingStatus);

  function checkIfTimeSelected (date: string, time: string): boolean {
    return selectedTime[0] === date && selectedTime[1] === time;
  }

  function handleRadioChange (date: string, time: string) {
    setTime([date, time]);
  }

  function handleSubmit (evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const children = formData.get('children') as string | null;
    const person = formData.get('person') as string | null;
    const tel = formData.get('tel') as string | null;
    const name = formData.get('name') as string | null;

    if (children && person && tel && name) {
      const personCount = Number(person);
      const isWithChildren = children === 'on';

      const postInfo: BookingPost = {
        date: selectedTime[0],
        time: selectedTime[1],
        contactPerson: name,
        phone: tel,
        withChildren: isWithChildren,
        peopleCount: personCount,
        placeId: bookingInfo.id
      };

      const postInfoWithId: BookingPostWithId = {
        bookingInfo: postInfo,
        questId: questId,
      };

      dispatch(reserveQuestAction(postInfoWithId)).then((userComment) => {
        if (userComment.payload) {
          navigate(Path.MyQuests);
        }
      });
    }

  }

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleSubmit}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {bookingInfo.slots.today.map((slot) => <BookingFormDate date={SlotDate.Today} time={slot.time} isAvailable={slot.isAvailable} isChecked={checkIfTimeSelected(SlotDate.Today, slot.time)} onChange={handleRadioChange} key={slot.time}/>)}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {bookingInfo.slots.tomorrow.map((slot) => <BookingFormDate date={SlotDate.Tomorrow} time={slot.time} isAvailable={slot.isAvailable} isChecked={checkIfTimeSelected(SlotDate.Tomorrow, slot.time)} onChange={handleRadioChange} key={slot.time}/>)}
          </div>
        </fieldset>
      </fieldset>
      <BookingContacts />
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit" disabled={isSubmitting}>Забронировать</button>
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
