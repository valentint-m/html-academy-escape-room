import { ApiRoute, Difficulty, DifficultyName, SlotDate, SlotDateName, Theme, ThemeName } from '../const';
import { Quest } from '../types/quest';

function getQuestUrlById (id: string) {
  return `${ApiRoute.Quest}/${id}`;
}

function getReservationUrlById (id: string) {
  return `${ApiRoute.Reservation}/${id}`;
}

function getReservedQuestUrlById (id: string) {
  return `${ApiRoute.Quest}/${id}/${ApiRoute.Booking}`;
}

function getDifficultyLocalizedName (name: Difficulty) {
  const difficultyIndex = Object.values(Difficulty).findIndex((difficulty) => difficulty.toLowerCase() === name.toLowerCase());
  const difficultyNames = Object.values(DifficultyName);

  return difficultyNames[difficultyIndex];
}

function getThemeLocalizedName (name: Theme) {
  const themeIndex = Object.values(Theme).findIndex((theme) => theme.toLowerCase() === name.toLowerCase());
  const themeNames = Object.values(ThemeName);

  return themeNames[themeIndex];
}

function getDateLocalizedName (date: string) {
  const dateIndex = Object.values(SlotDate).findIndex((slotDate) => slotDate.toLowerCase() === date.toLowerCase());
  const dateNames = Object.values(SlotDateName);

  return dateNames[dateIndex];
}

function filterQuests (quests: Quest[], theme: Theme, difficulty: Difficulty) {
  const questsByDifficulty = difficulty === Difficulty.Any ? quests : quests.filter((quest) => quest.level === difficulty);
  const questsByThemeAndDifficulty = theme === Theme.All ? questsByDifficulty : questsByDifficulty.filter((quest) => quest.type === theme);

  return questsByThemeAndDifficulty;
}

function getFormattedDate(date: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  const formattedDate = formatter.format(new Date(date));

  return formattedDate;
}

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


export { getQuestUrlById, getReservationUrlById, getReservedQuestUrlById, filterQuests, getFormattedDate, getRandomInt, getDifficultyLocalizedName, getThemeLocalizedName, getDateLocalizedName };
