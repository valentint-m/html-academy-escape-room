import { Difficulty, DifficultyName } from '../../const';

type FilterItemDifficultyProps = {
  type: Difficulty;
  typeName: DifficultyName;
}

export default function FilterItemDifficulty ({type, typeName}: FilterItemDifficultyProps): JSX.Element {
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={type} checked />
      <label className="filter__label" htmlFor={type}><span className="filter__label-text">{typeName}</span>
      </label>
    </li>
  );
}
