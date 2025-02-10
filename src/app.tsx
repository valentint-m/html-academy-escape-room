import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthorizationStatus, Path } from './const';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchReservedQuestsAction } from './store/api-actions/api-actions';
import { getErrorStatus, getQuestsDataLoadingStatus } from './store/quest-data/quest-data-selectors';
import { getAuthorizationStatus } from './store/user-process/user-process-selectors';
import PrivateRoute from './components/private-route/private-route';
import MainScreen from './pages/main-screen/main-screen';
import LoginScreen from './pages/login-screen/login-screen';
import MyQuestsScreen from './pages/my-quests-screen/my-quests-screen';
import BookingScreen from './pages/booking-screen/booking-screen';
import QuestScreen from './pages/quest-screen/quest-screen';
import ContactsScreen from './pages/contacts-screen/contacts-screen';
import ErrorRouteScreen from './pages/error-route-screen/error-route-screen';
import LoadingScreen from './pages/loading-screen/loading-screen';
import ErrorServerScreen from './pages/error-server-screen/error-server-screen';

function App (): JSX.Element {
  const dispatch = useAppDispatch();
  const isQuestsDataLoading = useAppSelector(getQuestsDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchReservedQuestsAction());
    }
  }, [isLoggedIn, dispatch]);

  if (isQuestsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorServerScreen />);
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<MainScreen />} />
        <Route path={Path.Login} element={<LoginScreen />} />
        <Route path={Path.MyQuests} element={
          <PrivateRoute>
            <MyQuestsScreen />
          </PrivateRoute>
        }
        />
        <Route path={Path.Booking} element={<BookingScreen />} />
        <Route path={Path.Quest} element={<QuestScreen />} />
        <Route path={Path.Contacts} element={<ContactsScreen />} />
        <Route path='*' element={<ErrorRouteScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
