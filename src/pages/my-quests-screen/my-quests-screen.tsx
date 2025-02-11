import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MyQuestCard from '../../components/my-quest-card/my-quest-card';
import { useAppSelector } from '../../hooks';
import { getReservedQuests } from '../../store/quest-data/quest-data-selectors';

export default function MyQuestsScreen (): JSX.Element {
  const reservedQuests = useAppSelector(getReservedQuests);

  return (
    <>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            {reservedQuests.map((quest) => <MyQuestCard reservedQuest={quest} key={quest.id} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
