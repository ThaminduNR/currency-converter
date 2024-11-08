import {configureStore} from '@reduxjs/toolkit';
import historySlice from './hostorySlice';

const store = configureStore({
  reducer: {
    history: historySlice,
  },
});

export default store;
