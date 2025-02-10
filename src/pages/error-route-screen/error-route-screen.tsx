import { Link } from 'react-router-dom';
import { Path } from '../../const';

function ErrorRouteScreen (): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <br />
      <Link to={Path.Main}>Главная страница</Link>
    </>
  );
}

export default ErrorRouteScreen;
