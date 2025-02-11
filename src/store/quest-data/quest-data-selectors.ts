import { NameSpace, Theme, Difficulty } from '../../const';
import { BookingInfo, Quest, QuestFullInfo, ReservedQuest } from '../../types/quest';
import { State } from '../../types/state';
import { filterQuests } from '../../utils/utils';

export const getQuests = (state: State): Quest[] => state[NameSpace.Data].quests;

export const getQuestById = (state: State): QuestFullInfo => state[NameSpace.Data].questById;

export const getFilteredQuests = (state: State): Quest[] => {
  const quests = state[NameSpace.Data].quests;
  const difficulty = state[NameSpace.Data].selectedDifficulty;
  const theme = state[NameSpace.Data].selectedTheme;

  return filterQuests(quests, theme, difficulty);
};

export const getReservedQuests = (state: State): ReservedQuest[] => state[NameSpace.Data].reservedQuests;

export const getBookingInfo = (state: State): BookingInfo[] => state[NameSpace.Data].bookingInfoById;

export const getThemeName = (state: State): Theme => state[NameSpace.Data].selectedTheme;

export const getDifficultyName = (state: State): Difficulty => state[NameSpace.Data].selectedDifficulty;

export const getQuestsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isQuestsDataLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getSubmittingStatus = (state: State): boolean => state[NameSpace.Data].isSubmitting;

