import axios from 'axios';
import {
  Ipost,
  InewPost,
  IpostWithComments,
  IaddCommnet,
} from './TS_interfaces';

//  there few different methods
//  with async/await
//  with Promise.than.catch

const req = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com',
});

//  Promise.then.catch
// =====================================
const getAllPosts = (): Promise<Ipost[]> =>
  req
    .get('/posts')
    .then(res => res.data)
    .catch(e => {
      throw new Error(e.message);
    });

const getPostById = async (id: string): Promise<IpostWithComments> => {
  const post = await req.post(`/posts/${id}?_embed=comments`);
  return post.data;
};

const addPost = (post: InewPost): Promise<Ipost> =>
  req
    .post('/posts', post)
    .then(res => res.data)
    .catch(e => {
      throw new Error(e.message);
    });

// async/ await with  try catch
// =====================================================
const updatePost = async (post: Ipost): Promise<Ipost> => {
  try {
    const res = await req.patch(`/posts/${post.id}`);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const removePost = async (id: string): Promise<void> => {
  try {
    await req.delete(`/posts/${id}`);
  } catch (e) {
    throw new Error(e.message);
  }
};

const addComment = async (newComment: IaddCommnet): Promise<void> => {
  try {
    const res = await req.post(`/coments`, newComment);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  getPostById,
  getAllPosts,
  addPost,
  updatePost,
  removePost,
  addComment,
};
