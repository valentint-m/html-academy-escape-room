import { Theme, ThemeName } from '../../const';

type FilterItemThemeProps = {
  type: Theme;
  typeName: ThemeName;
}

export default function FilterItemTheme ({type, typeName}: FilterItemThemeProps): JSX.Element {
  return (
    <li className="filter__item">
      <input type="radio" name="type" id={type} checked />
      <label className="filter__label" htmlFor={type}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref="#icon-all-quests"></use>
        </svg><span className="filter__label-text">{typeName}</span>
      </label>
    </li>
  );
}
