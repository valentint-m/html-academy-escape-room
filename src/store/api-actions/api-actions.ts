import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute } from '../../const';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { dropToken, saveToken } from '../../services/token';
import { store } from '..';
import { BookingInfo, BookingPostWithId, Quest, QuestFullInfo, ReservedQuest } from '../../types/quest';
import { getQuestUrlById, getReservationUrlById, getReservedQuestUrlById } from '../../utils/utils';

export const fetchQuestByIdAction = createAsyncThunk<QuestFullInfo, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestById',
  async (questId, {extra: api}) => {
    const {data} = await api.get<QuestFullInfo>(getQuestUrlById(questId));
    return data;
  }
);

export const fetchBookingInfoByIdAction = createAsyncThunk<BookingInfo[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBookingInfoById',
  async (questId, {extra: api}) => {
    const {data} = await api.get<BookingInfo[]>(getReservedQuestUrlById(questId));
    return data;
  }
);

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Quest[]>(ApiRoute.Quest);
    return data;
  },
);

export const fetchReservedQuestsAction = createAsyncThunk<ReservedQuest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReservedQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<ReservedQuest[]>(ApiRoute.Reservation);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(ApiRoute.Login);
    return data.email;
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    store.dispatch(fetchQuestsAction());
    return data.email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    store.dispatch(fetchQuestsAction());
  },
);

export const reserveQuestAction = createAsyncThunk<ReservedQuest, BookingPostWithId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/reserveQuest',
  async (bookingInfoWithId, {extra: api}) => {
    const {data} = await api.post<ReservedQuest>(getReservedQuestUrlById(bookingInfoWithId.questId), bookingInfoWithId.bookingInfo);
    store.dispatch(fetchReservedQuestsAction());
    return data;
  },
);

export const deleteReservedQuest = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/deleteReservedQuest',
  async (questId, {extra: api}) => {
    await api.delete(getReservationUrlById(questId));
    store.dispatch(fetchReservedQuestsAction());
  },
);
