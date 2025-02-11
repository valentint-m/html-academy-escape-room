import { Difficulty } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeDifficulty } from '../../store/quest-data/quest-data';
import { getDifficultyName } from '../../store/quest-data/quest-data-selectors';
import { getDifficultyLocalizedName } from '../../utils/utils';

type FilterItemDifficultyProps = {
  type: Difficulty;
}

export default function FilterItemDifficulty ({type}: FilterItemDifficultyProps): JSX.Element {
  const dispatch = useAppDispatch();
  const typeName = getDifficultyLocalizedName(type);
  const isChecked = type === useAppSelector(getDifficultyName);

  function handleChange () {
    dispatch(changeDifficulty(type));
  }

  return (
    <li className="filter__item">
      <input type="radio" name="level" id={type} checked={isChecked} onChange={handleChange}/>
      <label className="filter__label" htmlFor={type}><span className="filter__label-text">{typeName}</span>
      </label>
    </li>
  );
}
