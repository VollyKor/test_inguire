import { useState, useEffect } from 'react';
// import { Ipost, Tid } from 'helpers/interfaces';
import AddCommentsForm from 'components/Forms/AddCommentsForm/AddCommentsForm';
import Button from 'components/Button/Button';
import * as S from 'redux/posts/posts-selectors';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { Tid } from 'helpers/interfaces';
import { fetchDeletePost, fetchPostById } from 'redux/posts/posts-operations';
import { useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';
import UpdatePostForm from '../Forms/UpdatePostForm/UpdatePostForm';
import Comments from '../Comments/Comments';
import s from './SinglePagePost.module.css';

interface Iparams {
  postId?: Tid;
}

export default function SinglePost(): JSX.Element {
  const [isAddCommentFormShown, setIsAddCommentFormShown] = useState(false);
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const params: Iparams = useParams();

  let id: Tid = '';
  if (params.postId) {
    id = params.postId;
  }

  const post = useAppSelector(state => S.getPostById(state, id));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!post) {
      dispatch(fetchPostById(id));
    }
  }, [dispatch, id, post]);

  function HandleShowComments() {
    setIsCommentsShown(!isCommentsShown);
  }

  function handleDelete(postId: Tid) {
    dispatch(fetchDeletePost(postId));
  }

  return post ? (
    <div className={s.wrapper}>
      <h2 className={s.title}>{post.title}</h2>
      <p className={s.text}>{post.body}</p>
      <div className={s.buttonGroup}>
        <Button
          onClick={() => {
            setIsModalShown(!isModalShown);
          }}
        >
          Update
        </Button>
        <Button onClick={() => handleDelete(post.id)}>Delete</Button>
        <Button onClick={() => HandleShowComments()}>
          {isCommentsShown ? 'Hide comments' : 'Show Comments'}
        </Button>
        <Button
          onClick={() => setIsAddCommentFormShown(!isAddCommentFormShown)}
        >
          {isAddCommentFormShown ? 'Close form' : 'Add Comment'}
        </Button>
      </div>

      {isAddCommentFormShown && (
        <AddCommentsForm
          postId={post.id}
          onClose={() => setIsAddCommentFormShown(false)}
        />
      )}
      {isCommentsShown && <Comments postId={post.id} />}

      {isModalShown && (
        <Modal onClose={() => setIsModalShown(!isModalShown)}>
          <UpdatePostForm
            postObj={post}
            onClose={() => setIsModalShown(!isModalShown)}
          />
        </Modal>
      )}
    </div>
  ) : (
    <div>Post not Found</div>
  );
}
