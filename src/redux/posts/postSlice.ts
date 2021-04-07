/* eslint-disable no-param-reassign */
// We can disable this rule becouse Redux useing Immer

import { createSlice } from '@reduxjs/toolkit';
import { Istate } from 'helpers/interfaces';
import { postsOperations } from 'redux/posts';

const { getPosts } = postsOperations;

const initialState: Istate = {
  posts: [],
  comments: [],
  isLoading: false,
  isFetching: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state: Istate, { payload }) => {
      state.posts = payload;
    });
  },
});

export default postSlice;
