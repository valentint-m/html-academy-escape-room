import { Theme, ThemeName } from '../../const';
import FilterItemTheme from '../filter-item-theme/filter-item-theme';

export default function FilterTypeTheme (): JSX.Element {
  const types = Object.values(Theme);
  const typeNames = Object.values(ThemeName);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {types.map((type, index) => <FilterItemTheme type={type} typeName={typeNames[index]} key={type}/>)}
      </ul>
    </fieldset>
  );
}
