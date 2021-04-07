import { useState } from 'react';
import { Ipost, Tid } from 'helpers/interfaces';
import AddCommentsForm from 'components/Forms/AddCommentsForm';
import Modal from '../Modal/Modal';
import UpdatePostForm from '../Forms/UpdatePostForm';
import Comments from '../Comments/Comments';

interface Iprops {
  post: Ipost;
  handleUpdate: (postobj: Ipost) => void;
  handleDelete: (id: Tid) => void;
}

export default function SinglePost(props: Iprops): JSX.Element {
  const { post, handleUpdate, handleDelete } = props;

  const [isAddCommentFormShown, setIsAddCommentFormShown] = useState(false);
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  function HandleShowComments() {
    setIsCommentsShown(!isCommentsShown);
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <h2>{post.title}</h2>
        <p style={{ margin: '0px' }}>{post.body}</p>
        <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
          <button
            type="button"
            onClick={() => {
              handleUpdate(post);
              setIsModalShown(!isModalShown);
            }}
          >
            Update
          </button>
          <button
            style={{ marginLeft: '5px' }}
            type="button"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
          <button
            style={{ marginLeft: '5px' }}
            type="button"
            onClick={() => HandleShowComments()}
          >
            {isCommentsShown ? 'Hide comments' : 'Show Comments'}
          </button>
          <button
            style={{ marginLeft: '5px' }}
            type="button"
            onClick={() => setIsAddCommentFormShown(!isAddCommentFormShown)}
          >
            {isAddCommentFormShown ? 'Close form' : 'Add Comment'}
          </button>
        </div>
        {isAddCommentFormShown && <AddCommentsForm postId={post.id} />}
        {isCommentsShown && <Comments postId={post.id} />}
      </div>
      {isModalShown && (
        <Modal onClose={() => setIsModalShown(!isModalShown)}>
          <UpdatePostForm />
        </Modal>
      )}
    </>
  );
}
