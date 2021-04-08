import { useState } from 'react';
import { Ipost, Tid } from 'helpers/interfaces';
import AddCommentsForm from 'components/Forms/AddCommentsForm/AddCommentsForm';
import Button from 'components/Button/Button';
import Modal from '../Modal/Modal';
import UpdatePostForm from '../Forms/UpdatePostForm/UpdatePostForm';
import Comments from '../Comments/Comments';
import s from './SinglePost.module.css';

interface Iprops {
  post: Ipost;
  handleDelete: (id: Tid) => void;
}

export default function SinglePost(props: Iprops): JSX.Element {
  const { post, handleDelete } = props;

  const [isAddCommentFormShown, setIsAddCommentFormShown] = useState(false);
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  function HandleShowComments() {
    setIsCommentsShown(!isCommentsShown);
  }

  return (
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
  );
}
