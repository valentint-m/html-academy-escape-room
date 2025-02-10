import FilterItemTheme from '../filter-item-theme/filter-item-theme';

export default function FilterTypeTheme (): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        <FilterItemTheme />
      </ul>
    </fieldset>
  );
}
