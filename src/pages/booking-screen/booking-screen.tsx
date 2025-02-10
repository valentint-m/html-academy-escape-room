import { BookingInfo, Coords, QuestFullInfo } from '../../types/quest';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getBookingInfo, getQuestById } from '../../store/quest-data/quest-data-selectors';
import { useEffect } from 'react';
import { fetchBookingInfoByIdAction, fetchQuestByIdAction } from '../../store/api-actions/api-actions';
import BookingForm from '../../components/booking-form/booking-form';
import Header from '../../components/header/header';
import Map from '../../components/map/map';

export default function BookingScreen (): JSX.Element {
  const pageId = useParams().id;
  const dispatch = useAppDispatch();

  const questById: QuestFullInfo = useAppSelector(getQuestById);
  const bookingById: BookingInfo[] = useAppSelector(getBookingInfo);
  const selectedLocation: BookingInfo = bookingById[0];

  const selectedLocationCoords: Coords = selectedLocation.location.coords;
  const locations: Coords[] = bookingById.map((booking) => booking.location.coords);

  useEffect(() => {
    if (pageId !== questById.id && pageId) {
      dispatch(fetchQuestByIdAction(pageId));
      dispatch(fetchBookingInfoByIdAction(pageId));
    }
  }, [pageId, questById.id, dispatch]);

  return (
    <>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${questById.coverImgWebp}, ${questById.coverImgWebp} 2x`} /><img src={questById.previewImg} srcSet={`${questById.coverImg} 2x`} width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{questById.title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  <Map locations={locations} selectedPoint={selectedLocationCoords} />
                </div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: {selectedLocation?.location.address || null}</p>
            </div>
          </div>
          <BookingForm bookingInfo={selectedLocation}/>
        </div>
      </main>
    </>
  );
}
