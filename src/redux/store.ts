import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
