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

enum Difficulty {
  Easy = 'easy',
  Middle = 'middle',
  Hard = 'hard',
  Any = 'any',
}

export { AuthorizationStatus, NameSpace, ApiRoute, Path, Theme, Difficulty };
