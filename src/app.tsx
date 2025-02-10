import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Path } from './const';
import PrivateRoute from './components/private-route/private-route';
import MainScreen from './pages/main-screen/main-screen';
import LoginScreen from './pages/login-screen/login-screen';
import MyQuestsScreen from './pages/my-quests-screen/my-quests-screen';
import BookingScreen from './pages/booking-screen/booking-screen';
import QuestScreen from './pages/quest-screen/quest-screen';
import ContactsScreen from './pages/contacts-screen/contacts-screen';
import ErrorRouteScreen from './pages/error-route-screen/error-route-screen';

function App (): JSX.Element {
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
