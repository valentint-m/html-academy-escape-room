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
  All = 'all',
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sciFi',
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


export { AuthorizationStatus, NameSpace, ApiRoute, Path, Theme, ThemeName, Difficulty, DifficultyName };
