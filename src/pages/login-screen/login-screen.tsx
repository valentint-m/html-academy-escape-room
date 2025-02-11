import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getLoggingOutStatus } from '../../store/user-process/user-process-selectors';
import { AuthorizationStatus, Path } from '../../const';
import { FormEvent, useEffect } from 'react';
import { loginAction } from '../../store/api-actions/api-actions';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';

export default function LoginScreen (): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pathname = useLocation().state as string;

  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const isLoggingOut = useAppSelector(getLoggingOutStatus);

  function handleSubmit (evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    if (email && password) {
      dispatch(loginAction({email: email, password: password}));
    }
  }

  useEffect(() => {
    if (isLoggedIn && !isLoggingOut) {
      if (pathname) {
        navigate(pathname);
      } else {
        navigate(Path.Main);
      }
    }
  }, [isLoggedIn, isLoggingOut, navigate, pathname]);

  return (
    <>
      <Header />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <LoginForm onSubmit={handleSubmit}/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
