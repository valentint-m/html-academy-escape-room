import { Link } from 'react-router-dom';
import { Path } from '../../const';

export default function QuestContent (): JSX.Element {
  return (
    <div className="quest-page__content">
      <h1 className="title title--size-l title--uppercase quest-page__title">Маньяк</h1>
      <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>Ужасы
      </p>
      <ul className="tags tags--size-l quest-page__tags">
        <li className="tags__item">
          <svg width="11" height="14" aria-hidden="true">
            <use xlinkHref="#icon-person"></use>
          </svg>3&ndash;6&nbsp;чел
        </li>
        <li className="tags__item">
          <svg width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-level"></use>
          </svg>Средний
        </li>
      </ul>
      <p className="quest-page__description">В&nbsp;комнате с&nbsp;приглушённым светом несколько человек, незнакомых друг с&nbsp;другом, приходят в&nbsp;себя. Никто не&nbsp;помнит, что произошло прошлым вечером. Руки и&nbsp;ноги связаны, но&nbsp;одному из&nbsp;вас получилось освободиться. На&nbsp;стене висит пугающий таймер и&nbsp;запущен отсчёт 60&nbsp;минут. Сможете&nbsp;ли вы&nbsp;разобраться в&nbsp;стрессовой ситуации, помочь другим, разобраться что произошло и&nbsp;выбраться из&nbsp;комнаты?</p>
      <Link className="btn btn--accent btn--cta quest-page__btn" to={Path.Booking}>Забронировать</Link>
    </div>
  );
}

