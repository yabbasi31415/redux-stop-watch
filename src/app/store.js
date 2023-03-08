import { configureStore } from '@reduxjs/toolkit';
import reducer from '../stopwatchReducer';

export const store = configureStore({
  reducer: {
    stopwatch: reducer,
  },
});
