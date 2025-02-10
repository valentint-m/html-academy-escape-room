import { ApiRoute, Difficulty, Theme } from '../const';
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

function filterQuests (quests: Quest[], theme: Theme, difficulty: Difficulty) {
  const questsByDifficulty = quests.filter((quest) => quest.level === difficulty);
  const questsByThemeAndDifficulty = questsByDifficulty.filter((quest) => quest.type === theme);

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


export { getQuestUrlById, getReservationUrlById, getReservedQuestUrlById, filterQuests, getFormattedDate, getRandomInt };
