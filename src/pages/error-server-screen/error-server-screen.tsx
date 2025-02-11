import { useAppDispatch } from '../../hooks';
import { fetchQuestsAction } from '../../store/api-actions/api-actions';

function ErrorServerScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось загрузить квесты</p>
      <button
        onClick={() => {
          dispatch(fetchQuestsAction());
        }}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorServerScreen;
