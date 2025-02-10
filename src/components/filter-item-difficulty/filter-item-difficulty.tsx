import { Difficulty } from '../../const';
import { getDifficultyLocalizedName } from '../../utils/utils';

type FilterItemDifficultyProps = {
  type: Difficulty;
}

export default function FilterItemDifficulty ({type}: FilterItemDifficultyProps): JSX.Element {
  const typeName = getDifficultyLocalizedName(type);
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={type} checked />
      <label className="filter__label" htmlFor={type}><span className="filter__label-text">{typeName}</span>
      </label>
    </li>
  );
}
