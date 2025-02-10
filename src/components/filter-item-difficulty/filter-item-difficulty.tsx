import { Difficulty } from '../../const';
import { useAppSelector } from '../../hooks';
import { getDifficultyName } from '../../store/quest-data/quest-data-selectors';
import { getDifficultyLocalizedName } from '../../utils/utils';

type FilterItemDifficultyProps = {
  type: Difficulty;
}

export default function FilterItemDifficulty ({type}: FilterItemDifficultyProps): JSX.Element {
  const typeName = getDifficultyLocalizedName(type);
  const isChecked = type === useAppSelector(getDifficultyName);
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={type} checked={isChecked} />
      <label className="filter__label" htmlFor={type}><span className="filter__label-text">{typeName}</span>
      </label>
    </li>
  );
}
