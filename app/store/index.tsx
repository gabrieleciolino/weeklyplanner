import { configureStore } from '@reduxjs/toolkit';
import weekReducer from './weekSlice';
import templateSlice from './templateSlice';
import appSlice from './appSlice';

const store = configureStore({
  reducer: {
    week: weekReducer,
    template: templateSlice,
    app: appSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
