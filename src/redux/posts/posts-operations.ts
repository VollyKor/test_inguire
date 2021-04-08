import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios as req, constants as c } from 'helpers';
import { IaddComment, Ipost, Tid } from 'helpers/interfaces';

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
  async (id: Tid) => {
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
      await req.updatePost(updatedPostObj);
      return updatedPostObj;
    } catch (error) {
      throw error.message;
    }
  },
);

export const fetchDeletePost = createAsyncThunk(
  c.RdeletePost,
  async (id: Tid) => {
    try {
      await req.removePost(id);
      return id;
    } catch (error) {
      throw error.message;
    }
  },
);

export const fetchAddComment = createAsyncThunk(
  c.RaddComment,
  async (id: IaddComment) => {
    try {
      const newComment = await req.addComment(id);
      return newComment;
    } catch (error) {
      throw error.message;
    }
  },
);
