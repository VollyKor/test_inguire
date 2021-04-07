import { IaddComment, Ipost, Istate } from '../../helpers/interfaces';

export const getPosts = (state: Istate): Ipost[] => state.posts;
export const getComments = (state: Istate): IaddComment[] => state.comments;
