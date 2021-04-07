import axios from 'axios';
import {
  Ipost,
  InewPost,
  IpostWithComments,
  IaddComment,
  Icomment,
  Tid,
} from './interfaces';

//  there few different methods
//  with async/await
//  with Promise.than.catch

export const req = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com',
});

//  Promise.then.catch
// =====================================
export const getAllPosts = (): Promise<Ipost[]> =>
  req
    .get('/posts')
    .then(res => res.data)
    .catch(e => {
      throw new Error(e.message);
    });

export const getPostById = async (id: Tid): Promise<IpostWithComments> => {
  const post = await req.get(`/posts/${id}?_embed=comments`);
  return post.data;
};

export const addPost = (post: InewPost): Promise<Ipost> =>
  req
    .post('/posts', post)
    .then(res => res.data)
    .catch(e => {
      throw new Error(e.message);
    });

// async/ await with  try catch
// =====================================================
export const updatePost = async (post: Ipost): Promise<Ipost> => {
  try {
    const res = await req.patch(`/posts/${post.id}`);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const removePost = async (id: string): Promise<void> => {
  try {
    await req.delete(`/posts/${id}`);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const addComment = async (
  newComment: IaddComment,
): Promise<Icomment> => {
  try {
    const res = await req.post(`/comments`, newComment);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};
