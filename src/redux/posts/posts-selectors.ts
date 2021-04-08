import {
  IaddComment,
  Icomment,
  Ipost,
  Istate,
  Tid,
} from '../../helpers/interfaces';

export const getPosts = (state: Istate): Ipost[] => state.posts;
export const getComments = (state: Istate): IaddComment[] => state.comments;
export const getPostById = (state: Istate, postId: Tid): Ipost | undefined => {
  const post = state.posts.find(e => {
    return e.id === postId;
  });
  return post;
};

export const getCommentPostById = (
  postid: Tid,
  state: Istate,
): Icomment[] | undefined => {
  const comments = state.comments.filter(e => e.postId === postid);
  if (comments) {
    return comments;
  }
  return undefined;
};
