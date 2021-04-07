export interface Inew {
  id: string;
}

export interface InewPost {
  title: string;
  body: string;
}

export interface Ipost extends InewPost {
  id: number | string;
}

export interface Icomments {
  body: string;
}

export interface IpostWithComments extends Ipost {
  comments: Icomments;
}

export interface IaddComment {
  postId: number;
  body: string;
}

export interface Istate {
  posts: Ipost[];
  comments: IaddComment[];
  isFetching: boolean;
  isLoading: boolean;
  error: any;
}

export type Tid = string | number;
