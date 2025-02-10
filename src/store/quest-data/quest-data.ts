import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Difficulty, Theme } from '../../const';
import { QuestData } from '../../types/state';
import { deleteReservedQuest, fetchBookingInfoByIdAction, fetchQuestByIdAction, fetchQuestsAction, fetchReservedQuestsAction, reserveQuestAction } from '../api-actions/api-actions';
import { BookingInfo, Quest, QuestFullInfo, ReservedQuest } from '../../types/quest';

const initialState: QuestData = {
  quests: [],
  questById: {
    id: '',
    title: '',
    previewImg: '',
    previewImgWebp: '',
    level: Difficulty.Any,
    type: Theme.All,
    peopleMinMax: [0, 0],
    description: '',
    coverImg: '',
    coverImgWebp: '',
  },
  reservedQuests: [],
  bookingInfoById: {
    id: '',
    location: {
      address: '',
      coords: [0, 0],
    },
    slots: {
      today: [],
      tomorrow: [],
    }
  },
  selectedTheme: Theme.All,
  selectedDifficulty: Difficulty.Any,
  isQuestsDataLoading: false,
  hasError: false,
  isSubmitting: false,
};

export const questData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.selectedTheme = action.payload;
    },
    changeDifficulty: (state, action: PayloadAction<Difficulty>) => {
      state.selectedDifficulty = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action: PayloadAction<Quest[]>) => {
        state.quests = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchQuestByIdAction.pending, (state) => {
        state.isQuestsDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchQuestByIdAction.fulfilled, (state, action: PayloadAction<QuestFullInfo>) => {
        state.questById = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestByIdAction.rejected, (state) => {
        state.isQuestsDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchReservedQuestsAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchReservedQuestsAction.fulfilled, (state, action: PayloadAction<ReservedQuest[]>) => {
        state.reservedQuests = action.payload;
      })
      .addCase(fetchReservedQuestsAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchBookingInfoByIdAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchBookingInfoByIdAction.fulfilled, (state, action: PayloadAction<BookingInfo>) => {
        state.bookingInfoById = action.payload;
      })
      .addCase(fetchBookingInfoByIdAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(reserveQuestAction.pending, (state) => {
        state.isSubmitting = true;
        state.hasError = false;
      })
      .addCase(reserveQuestAction.fulfilled, (state) => {
        state.isSubmitting = false;
      })
      .addCase(reserveQuestAction.rejected, (state) => {
        state.isSubmitting = false;
      })
      .addCase(deleteReservedQuest.pending, (state) => {
        state.hasError = false;
      })
      .addCase(deleteReservedQuest.rejected, (state) => {
        state.hasError = true;
      });
  }
});

export const { changeTheme, changeDifficulty } = questData.actions;
