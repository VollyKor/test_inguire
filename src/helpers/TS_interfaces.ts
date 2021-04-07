export interface Inew {
  id: string;
}

export interface InewPost {
  title: string;
  body: string;
}

export interface Ipost extends InewPost {
  id: number;
}

export interface Icomments {
  body: string;
}

export interface IpostWithComments extends Ipost {
  comments: Icomments;
}

export interface IaddCommnet {
  postId: number;
  body: string;
}
