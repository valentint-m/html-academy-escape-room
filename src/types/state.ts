import { AuthorizationStatus, Difficulty, Theme } from '../const.js';
import { store } from '../store/index.js';
import { BookingInfo, Quest, QuestFullInfo, ReservedQuest } from './quest.js';


export type UserProcess = {
  email: string;
  authorizationStatus: AuthorizationStatus;
  isLoggingOut: boolean;
};

export type QuestData = {
  quests: Quest[];
  questById: QuestFullInfo;
  bookingInfoById: BookingInfo;
  reservedQuests: ReservedQuest[];
  selectedTheme: Theme;
  selectedDifficulty: Difficulty;
  isQuestsDataLoading: boolean;
  hasError: boolean;
  isSubmitting: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
