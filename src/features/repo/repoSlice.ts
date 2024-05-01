import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Owner } from '../../models/Owner';
import type { Repo } from '../../models/Repo';

type RepoState = {
  owner: Owner;
  repo: Repo;
};

const initialState: RepoState = {
  owner: {
    login: '',
    html_url: ''
  },
  repo: {
    id: 0,
    name: '',
    html_url: '',
    stargazers_count: 0
  }
};

const repoSlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    getOwnerAndRepo: (state, action: PayloadAction<RepoState>) => ({
      ...state,
      owner: action.payload.owner,
      repo: action.payload.repo
    })
  }
});

export const {getOwnerAndRepo} = repoSlice.actions;

export default repoSlice.reducer;
