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

enum Path {
  Main = '/',
  Login = '/login',
  Contacts = '/contacts',
  MyQuests = '/my-quests',
  Booking = '/booking',
  Quest = '/quest/:id',
}

enum Theme {
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sciFi',
  All = 'all',
}

enum ThemeName {
  Adventure = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
  All = 'Все квесты',
}

enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
  Any = 'any',
}

enum DifficultyName {
  Easy = 'Легкий',
  Medium = 'Средний',
  Hard = 'Сложный',
  Any = 'Любой',
}


export { AuthorizationStatus, NameSpace, ApiRoute, Path, Theme, ThemeName, Difficulty, DifficultyName };
