import { Navigate, useLocation } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute ({children }: PrivateRouteProps): JSX.Element {
  const location = useLocation();
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  return isLoggedIn ? children : <Navigate to={Path.Login} state={location.pathname}/>;
}

export default PrivateRoute;
