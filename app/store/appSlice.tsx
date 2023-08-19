import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AppStateType = {
  selectedWeek: string;
  selectedCells: string[];
  mode: 'edit' | 'select';
};

const initialState: AppStateType = {
  selectedWeek: '',
  selectedCells: [],
  mode: 'edit',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateSelectedWeek(state, action: PayloadAction<string>) {
      state.selectedWeek = action.payload;
    },
    updateSelectedCells(state, action: PayloadAction<string[]>) {
      state.selectedCells = action.payload;
    },
    updateMode(state, action: PayloadAction<'edit' | 'select'>) {
      state.mode = action.payload;
    },
  },
});

export const { updateSelectedWeek, updateSelectedCells, updateMode } =
  appSlice.actions;
export default appSlice.reducer;
