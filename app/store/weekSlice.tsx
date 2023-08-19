import { WeekItem, WeekStateType } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: WeekStateType = {};

const weekSlice = createSlice({
  name: 'week',
  initialState,
  reducers: {
    add(state, action: PayloadAction<WeekItem>) {
      state[action.payload.id] = action.payload;
    },
    update(state, action: PayloadAction<Partial<WeekItem> & { id: string }>) {
      const { id: payloadId, ...payload } = action.payload;

      state[payloadId] = {
        ...state[payloadId],
        ...payload,
      };
    },
    delete(state, action) {
      delete state[action.payload.id];
    },
  },
});

export const { add, update, delete: deleteWeek } = weekSlice.actions;
export default weekSlice.reducer;
