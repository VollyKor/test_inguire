import { IaddComment, Ipost, Istate } from '../../helpers/interfaces';

export const getPosts = (state: Istate): Ipost[] => state.posts;
export const getComments = (state: Istate): IaddComment[] => state.comments;

export const getPostById = (
  postid: string | number,
  state: Istate,
): Ipost | undefined => {
  const post = state.posts.find(e => e.id === postid);
  return post;
};
