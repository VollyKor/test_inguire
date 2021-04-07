import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    builder.addCase('case', (state, action) => {
      console.log(state, action);
    });
  },
});

export default postSlice;
