const DefaultCityCoords: [number, number] = [59.57, 30.19];
const DefaultCompanyCoords: [number, number] = [59.968322, 30.317359];

const DEFAULT_ZOOM = 8;

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

enum ApiRoute {
  Quest = '/quest',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
  Booking = 'booking',
}

enum UrlMarker {
  Default = '/img/svg/pin-default.svg',
  Selected = '/img/svg/pin-active.svg'
}

enum SlotDate {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

enum SlotDateName {
  Today = 'сегодня',
  Tomorrow = 'завтра',
}

enum Path {
  Main = '/',
  Login = '/login',
  Contacts = '/contacts',
  MyQuests = '/my-quests',
  Booking = '/quest/:id/booking',
  Quest = '/quest/:id',
}

enum Theme {
  All = 'all',
  Adventure = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

enum ThemeName {
  All = 'Все квесты',
  Adventure = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
}

enum Difficulty {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

enum DifficultyName {
  Any = 'Любой',
  Easy = 'Легкий',
  Medium = 'Средний',
  Hard = 'Сложный',
}

export { AuthorizationStatus, NameSpace, ApiRoute, Path, Theme, ThemeName, Difficulty, DifficultyName, UrlMarker, SlotDate, SlotDateName, DefaultCityCoords, DefaultCompanyCoords, DEFAULT_ZOOM };
