import FilterTypeDifficulty from '../filter-type-difficulty/filter-type-difficulty';
import FilterTypeTheme from '../filter-type-theme/filter-type-theme';

export default function FilterForm (): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <FilterTypeTheme />
      <FilterTypeDifficulty />
    </form>
  );
}
