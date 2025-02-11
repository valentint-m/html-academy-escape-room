import { Theme } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeTheme } from '../../store/quest-data/quest-data';
import { getThemeName } from '../../store/quest-data/quest-data-selectors';
import { getThemeLocalizedName } from '../../utils/utils';

type FilterItemThemeProps = {
  type: Theme;
}

export default function FilterItemTheme ({type}: FilterItemThemeProps): JSX.Element {
  const dispatch = useAppDispatch();
  const typeName = getThemeLocalizedName(type);
  const isChecked = type === useAppSelector(getThemeName);

  function handleChange () {
    dispatch(changeTheme(type));
  }
  return (
    <li className="filter__item">
      <input type="radio" name="type" id={type} checked={isChecked} onChange={handleChange}/>
      <label className="filter__label" htmlFor={type}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref="#icon-all-quests"></use>
        </svg><span className="filter__label-text">{typeName}</span>
      </label>
    </li>
  );
}
