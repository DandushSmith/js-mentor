import { configureStore } from '@reduxjs/toolkit';
import { codeBlocksReducer } from './reducers';

const store = configureStore({
  reducer: {
    codeBlocks: codeBlocksReducer,
  },
});

export default store;