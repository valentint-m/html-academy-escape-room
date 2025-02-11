import { Difficulty, Theme } from '../const';

type PeopleMinMax = [number, number];

export type Coords = [number, number];

type Location = {
  address: string;
  coords: Coords;
}

type Slot = {
  time: string;
  isAvailable: boolean;
}

type Slots = {
  today: Slot[];
  tomorrow: Slot[];
}

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Difficulty;
  type: Theme;
  peopleMinMax: PeopleMinMax;
}

export type QuestFullInfo = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Difficulty;
  type: Theme;
  peopleMinMax: PeopleMinMax;
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type BookingInfo = {
  id: string;
  location: Location;
  slots: Slots;
}

export type BookingPost = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type BookingPostWithId = {
  bookingInfo: BookingPost;
  questId: string;
}

export type ReservedQuest = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: true;
  peopleCount: 3;
  id: string;
  location: Location;
  quest: Quest;
}

