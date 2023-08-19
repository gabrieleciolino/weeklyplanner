import { configureStore } from '@reduxjs/toolkit';
import weekReducer from './weekSlice';
import templateSlice from './templateSlice';

const store = configureStore({
  reducer: {
    week: weekReducer,
    template: templateSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
