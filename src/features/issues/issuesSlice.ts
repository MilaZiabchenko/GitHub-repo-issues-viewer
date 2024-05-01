import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Issue } from '../../models/Issues';

type IssuesState = {
  open: Issue[];
  assigned: Issue[];
  closed: Issue[];
  data_fetched?: boolean;
  url_error?: boolean;
};

const initialState: IssuesState = {
  open: [],
  assigned: [],
  closed: [],
  data_fetched: false,
  url_error: false
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    getIssues: (state, action: PayloadAction<IssuesState>) => ({
      ...state,
      open: action.payload.open,
      assigned: action.payload.assigned,
      closed: action.payload.closed,
      data_fetched: true,
      url_error: false
    }),
    getFetchError: state => ({
      ...state,
      open: [],
      assigned: [],
      closed: [],
      data_fetched: false,
      url_error: true
    })
  }
});

export const { getIssues, getFetchError } = issuesSlice.actions;

export default issuesSlice.reducer;
