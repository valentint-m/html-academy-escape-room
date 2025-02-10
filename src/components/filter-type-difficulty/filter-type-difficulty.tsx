import FilterItemDifficulty from '../filter-item-difficulty/filter-item-difficulty';

export default function FilterTypeDifficulty (): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        <FilterItemDifficulty />
      </ul>
    </fieldset>
  );
}
