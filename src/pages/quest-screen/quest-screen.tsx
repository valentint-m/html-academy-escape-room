import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBookingInfoByIdAction, fetchQuestByIdAction } from '../../store/api-actions/api-actions';
import { getQuestById } from '../../store/quest-data/quest-data-selectors';
import { QuestFullInfo } from '../../types/quest';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestContent from '../../components/quest-content/quest-content';
import QuestPicture from '../../components/quest-picture/quest-picture';

export default function QuestScreen (): JSX.Element {
  const pageId = useParams().id;
  const dispatch = useAppDispatch();

  const questById: QuestFullInfo = useAppSelector(getQuestById);

  useEffect(() => {
    if (pageId !== questById.id && pageId) {
      dispatch(fetchQuestByIdAction(pageId));
      dispatch(fetchBookingInfoByIdAction(pageId));
    }
  }, [pageId, questById.id, dispatch]);

  return (
    <>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <QuestPicture quest={questById}/>
        </div>
        <div className="container container--size-l">
          <QuestContent quest={questById}/>
        </div>
      </main>
      <Footer />
    </>
  );
}

