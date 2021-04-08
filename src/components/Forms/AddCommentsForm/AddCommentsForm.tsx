import { Tid } from 'helpers/interfaces';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { fetchAddComment } from '../../../redux/posts/posts-operations';
import s from './AddCommentsForm.module.css';

interface Iprops {
  postId: Tid;
  onClose: () => void;
}
export default function AddCommentsForm({
  postId,
  onClose,
}: Iprops): JSX.Element {
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
    onClose();
  }
  return (
    <div className={s.wrapper}>
      <form onSubmit={e => handleSubmit(e)} className={s.form}>
        <label htmlFor={commentId} className={s.label}>
          <span className={s.text}>Tap Comments there</span>
          <input
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
            id={commentId}
            className={s.input}
            autoComplete="off"
          />
        </label>
        <button className={s.button} type="submit">
          Add Comment
        </button>
      </form>
    </div>
  );
}
