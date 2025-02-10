import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestContent from '../../components/quest-content/quest-content';
import QuestPicture from '../../components/quest-picture/quest-picture';

export default function QuestScreen (): JSX.Element {
  return (
    <>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <QuestPicture />
        </div>
        <div className="container container--size-l">
          <QuestContent />
        </div>
      </main>
      <Footer />
    </>
  );
}

