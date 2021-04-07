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

export interface IpostWithComments extends Ipost {
  comments: Icomment[];
}

export interface IaddComment {
  postId: Tid;
  body: string;
}

export interface Icomment extends IaddComment {
  id: Tid;
}

export interface Istate {
  posts: Ipost[];
  comments: Icomment[];
  isFetching: boolean;
  isLoading: boolean;
  error: any;
}

export type Tid = string | number;
