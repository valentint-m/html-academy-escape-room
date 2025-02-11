import { Theme } from '../../const';
import FilterItemTheme from '../filter-item-theme/filter-item-theme';

export default function FilterTypeTheme (): JSX.Element {
  const types = Object.values(Theme);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {types.map((type) => <FilterItemTheme type={type} key={type}/>)}
      </ul>
    </fieldset>
  );
}
