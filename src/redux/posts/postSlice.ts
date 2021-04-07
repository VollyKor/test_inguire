/* eslint-disable no-param-reassign */
// We can disable this rule becouse Redux using Immer
import { createSlice } from '@reduxjs/toolkit';
import { Istate } from 'helpers/interfaces';
import { postsOperations } from 'redux/posts';
import { fetchAddComment, fetchPostById } from './posts-operations';

const {
  fetchPosts,
  fetchAddPost,
  fetchUpdatePost,
  fetchDeletePost,
} = postsOperations;

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
  reducers: {
    // [postsActions.getPostById.toString()]: (state: Istate, { payload: id }) => {
    //   const postToFind = state.posts.filter(e => e.id === id);
    //   return
    // },
  },
  extraReducers: builder => {
    builder
      // Get Posts
      // ======================================
      .addCase(fetchPosts.pending, (state: Istate) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state: Istate, { payload }) => {
        state.isLoading = false;
        state.posts = payload;
      })
      .addCase(fetchPosts.rejected, (state: Istate, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.isLoading = true;
      })
      // Add Post
      // ==========================================
      .addCase(fetchAddPost.pending, (state: Istate) => {
        state.isLoading = true;
      })
      .addCase(fetchAddPost.fulfilled, (state: Istate, { payload }) => {
        state.posts.push(payload);
      })
      .addCase(fetchAddPost.rejected, (state: Istate, { payload }) => {
        console.log(payload);
        state.isLoading = false;
      })
      // Update Post
      // ==========================================
      .addCase(fetchUpdatePost.pending, (state: Istate) => {
        state.isLoading = true;
      })
      .addCase(fetchUpdatePost.fulfilled, (state: Istate, { payload }) => {
        const newPostsArray = state.posts.map(e => {
          if (e.id === payload.id) {
            return payload;
          }
          return e;
        });
        state.posts = newPostsArray;
      })
      .addCase(fetchUpdatePost.rejected, (state: Istate, { payload }) => {
        console.log(payload);
        state.isLoading = false;
      })
      // Delete Post
      // ==========================================
      .addCase(fetchDeletePost.pending, (state: Istate) => {
        state.isLoading = true;
      })
      .addCase(fetchDeletePost.fulfilled, (state: Istate, { payload: id }) => {
        console.log('slice', id);

        const newPostsArray = state.posts.filter(e => e.id !== id);
        state.posts = newPostsArray;
      })
      .addCase(fetchDeletePost.rejected, (state: Istate, { payload }) => {
        console.log(payload);
        state.isLoading = false;
      })
      // add Comments
      // ===============================================
      .addCase(fetchAddComment.pending, (state: Istate) => {
        state.isLoading = true;
      })
      .addCase(fetchAddComment.fulfilled, (state: Istate, { payload }) => {
        state.comments.push(payload);
      })
      .addCase(fetchAddComment.rejected, (state: Istate, { payload }) => {
        console.log(payload);
        state.isLoading = false;
      })
      // get Comments by Id
      // ===========================================
      .addCase(fetchPostById.pending, (state: Istate) => {
        state.isLoading = true;
      })
      .addCase(fetchPostById.fulfilled, (state: Istate, { payload }) => {
        state.comments = payload.comments;
      })
      .addCase(fetchPostById.rejected, (state: Istate, { payload }) => {
        console.log(payload);
        state.isLoading = false;
      });
  },
});

export default postSlice;
