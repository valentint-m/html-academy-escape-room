import { Link } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { logoutAction } from '../../store/api-actions/api-actions';

//class not-disabled active

export default function Header (): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  function handleLogoutButtonClick (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evt.preventDefault();
    dispatch(logoutAction());
  }

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link className="logo header__logo" to={Path.Main} aria-label="Перейти на Главную">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link" to={Path.Main}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={Path.Contacts}>Контакты</Link>
            </li>
            {isAuthorized && (
              <li className="main-nav__item">
                <Link className="link" to={Path.MyQuests}>Мои бронирования</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          {isAuthorized ? (
            <Link className="btn btn--accent header__side-item" to={Path.Main} onClick={handleLogoutButtonClick}>Выйти</Link>
          ) : (
            <Link className="btn header__side-item header__login-btn" to={Path.Login}>Вход</Link>
          )}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}
