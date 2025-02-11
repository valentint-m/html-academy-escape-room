import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilterForm from '../../components/filter-form/filter-form';
import QuestCard from '../../components/quest-card/quest-card';
import { useAppSelector } from '../../hooks';
import { getFilteredQuests } from '../../store/quest-data/quest-data-selectors';

export default function MainScreen (): JSX.Element {
  const quests = useAppSelector(getFilteredQuests);

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <FilterForm />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {quests.map((quest) => <QuestCard quest={quest} key={quest.id}/>)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
