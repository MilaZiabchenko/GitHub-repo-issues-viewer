import { configureStore } from '@reduxjs/toolkit';
import repoReducer from '../features/repo/repoSlice';
import issuesReducer from '../features/issues/issuesSlice';

const store = configureStore({
  reducer: {
    repository: repoReducer,
    issues: issuesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
