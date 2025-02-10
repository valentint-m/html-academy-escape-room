import { Difficulty, DifficultyName } from '../../const';
import FilterItemDifficulty from '../filter-item-difficulty/filter-item-difficulty';

export default function FilterTypeDifficulty (): JSX.Element {
  const types = Object.values(Difficulty);
  const typeNames = Object.values(DifficultyName);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {types.map((type, index) => <FilterItemDifficulty type={type} typeName={typeNames[index]} key={type}/>)}
      </ul>
    </fieldset>
  );
}
