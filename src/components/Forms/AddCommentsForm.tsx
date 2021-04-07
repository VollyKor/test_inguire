import { Tid } from 'helpers/interfaces';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchAddComment } from '../../redux/posts/posts-operations';

interface Iprops {
  postId: Tid;
}
export default function AddCommentsForm({ postId }: Iprops): JSX.Element {
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();
  const commentId = 'comment';

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newComment = {
      postId,
      body: comment,
    };

    dispatch(fetchAddComment(newComment));
    setComment('');
  }
  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        top: '100',
        backgroundColor: 'green',
        zIndex: 2,
      }}
    >
      <form onSubmit={e => handleSubmit(e)} style={{ padding: '15px' }}>
        <label htmlFor={commentId} style={{ display: 'block' }}>
          <span style={{ marginBottom: '10px' }}>Input New comment</span>
          <input
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
            id={commentId}
            style={{ display: 'block' }}
          />
        </label>
      </form>
    </div>
  );
}
