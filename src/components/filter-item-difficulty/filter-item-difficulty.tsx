export default function FilterItemDifficulty (): JSX.Element {
  return (
    <li className="filter__item">
      <input type="radio" name="level" id="any" checked />
      <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
      </label>
    </li>
  );
}
