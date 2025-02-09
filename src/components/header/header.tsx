import { Link } from 'react-router-dom';
import { Path } from '../../const';

export default function Header (): JSX.Element {
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
              <Link className="link not-disabled active" to={Path.Main}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={Path.Contacts}>Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}
