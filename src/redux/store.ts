import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postSlice from './posts/postSlice';

export const store = configureStore(postSlice);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
