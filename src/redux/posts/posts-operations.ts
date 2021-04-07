import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios as req } from 'helpers';

export const getPosts = createAsyncThunk('posts/getAll', async () => {
  const posts = await req.getAllPosts();
  return posts;
});

export const getPostById = createAsyncThunk(
  'posts/getById',
  async (id: string) => {
    const post = await req.getPostById(id);
    return post;
  },
);
