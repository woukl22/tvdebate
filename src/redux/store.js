import { configureStore } from '@reduxjs/toolkit';
import { scriptReducer } from './slices';

const store = configureStore({
  reducer: {
    script: scriptReducer,
  },
});

export default store;
