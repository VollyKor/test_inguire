import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios as req, constants as c } from 'helpers';
import { Ipost } from 'helpers/interfaces';

export const fetchPosts = createAsyncThunk(c.RgetAllPosts, async () => {
  try {
    const posts = await req.getAllPosts();
    return posts;
  } catch (error) {
    throw error.message;
  }
});

export const fetchPostById = createAsyncThunk(
  c.RgetPostById,
  async (id: string) => {
    try {
      const post = await req.getPostById(id);
      return post;
    } catch (error) {
      throw error.message;
    }
  },
);

export const fetchAddPost = createAsyncThunk(
  c.RaddPost,
  async (newPostObj: Ipost) => {
    try {
      const newPost = await req.addPost(newPostObj);
      return newPost;
    } catch (error) {
      throw error.message;
    }
  },
);

export const fetchUpdatePost = createAsyncThunk(
  c.RupdatePostById,
  async (updatedPostObj: Ipost) => {
    try {
      const updatedPost = await req.updatePost(updatedPostObj);
      console.log('post-updated', updatedPost);
      return updatedPost;
    } catch (error) {
      throw error.message;
    }
  },
);

export const fetchDeletePost = createAsyncThunk(
  c.RdeletePost,
  async (id: string) => {
    try {
      await req.removePost(id);
      console.log('post deleted');
      return id;
    } catch (error) {
      throw error.message;
    }
  },
);
