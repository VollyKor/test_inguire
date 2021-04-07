import { createAction } from '@reduxjs/toolkit';
import { constants as c } from 'helpers';
import { InewPost, Ipost } from '../../helpers/interfaces';

export const addPost = createAction<InewPost>(c.RaddPost);
export const deletePost = createAction<string>(c.RdeletePost);
export const updatePostById = createAction<Ipost>(c.RupdatePostById);
export const getPostById = createAction<Ipost>(c.RupdatePostById);
