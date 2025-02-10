import { Link } from 'react-router-dom';
import { QuestFullInfo } from '../../types/quest';
import { getDifficultyLocalizedName, getReservedQuestUrlById, getThemeLocalizedName } from '../../utils/utils';

type QuestContentProps = {
  quest: QuestFullInfo;
}

export default function QuestContent ({quest}: QuestContentProps): JSX.Element {
  return (
    <div className="quest-page__content">
      <h1 className="title title--size-l title--uppercase quest-page__title">{quest.title}</h1>
      <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{getThemeLocalizedName(quest.type)}
      </p>
      <ul className="tags tags--size-l quest-page__tags">
        <li className="tags__item">
          <svg width="11" height="14" aria-hidden="true">
            <use xlinkHref="#icon-person"></use>
          </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
        </li>
        <li className="tags__item">
          <svg width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-level"></use>
          </svg>{getDifficultyLocalizedName(quest.level)}
        </li>
      </ul>
      <p className="quest-page__description">{quest.description}</p>
      <Link className="btn btn--accent btn--cta quest-page__btn" to={getReservedQuestUrlById(quest.id)}>Забронировать</Link>
    </div>
  );
}

