import { Link } from 'react-router-dom';
import { Path } from '../../const';
import { ReservedQuest } from '../../types/quest';
import { getDateLocalizedName } from '../../utils/utils';
import { useAppDispatch } from '../../hooks';
import { deleteReservedQuest } from '../../store/api-actions/api-actions';

type MyQuestCardProps = {
  reservedQuest: ReservedQuest;
}

export default function MyQuestCard ({reservedQuest}: MyQuestCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleCancelButtonClick () {
    dispatch(deleteReservedQuest(reservedQuest.id));
  }

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={reservedQuest.quest.previewImgWebp} /><img src={reservedQuest.quest.previewImg} srcSet={reservedQuest.quest.previewImg} width="344" height="232" alt={reservedQuest.quest.title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><Link className="quest-card__link" to={Path.Quest}>{reservedQuest.quest.title}</Link><span className="quest-card__info">[{getDateLocalizedName(reservedQuest.date)},&nbsp;{reservedQuest.time}. {reservedQuest.location.address}]</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{reservedQuest.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{reservedQuest.quest.level}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={() => handleCancelButtonClick()}>Отменить</button>
      </div>
    </div>
  );
}

