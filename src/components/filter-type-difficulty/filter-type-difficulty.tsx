import { Difficulty } from '../../const';
import FilterItemDifficulty from '../filter-item-difficulty/filter-item-difficulty';

export default function FilterTypeDifficulty (): JSX.Element {
  const types = Object.values(Difficulty);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {types.map((type) => <FilterItemDifficulty type={type} key={type}/>)}
      </ul>
    </fieldset>
  );
}
