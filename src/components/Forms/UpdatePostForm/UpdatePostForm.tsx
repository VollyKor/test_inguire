import { Ipost } from 'helpers/interfaces';
import { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { fetchUpdatePost } from 'redux/posts/posts-operations';
import s from './UpdatePostForm.module.css';

interface Iprops {
  postObj: Ipost;
  onClose: () => void;
}

export default function UpdatePostForm({
  postObj,
  onClose,
}: Iprops): JSX.Element {
  const [title, setTitle] = useState(postObj.title);
  const [body, setBody] = useState(postObj.body);

  const dispatch = useAppDispatch();

  const titleId = 'title1';
  const bodyId = 'body1';

  function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const updatedPost = {
      title,
      body,
      id: postObj.id,
    };
    dispatch(fetchUpdatePost(updatedPost));
    onClose();
  }

  return (
    <form className={s.form} onSubmit={e => handlesubmit(e)}>
      <label htmlFor={titleId} className={s.label}>
        <span className={s.text}>Title</span>
        <input
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
          className={s.input}
          id={titleId}
        />
      </label>

      <label htmlFor={bodyId} className={s.label}>
        <span className={s.text}>Text</span>
        <textarea
          className={s.textarea}
          value={body}
          id={bodyId}
          style={{ resize: 'none' }}
          onChange={e => {
            setBody(e.target.value);
          }}
        />
      </label>
      <div className={s.wrapper}>
        <button className={s.button} type="submit">
          Save changes
        </button>
        <button
          className={s.buttonClose}
          type="button"
          onClick={() => onClose()}
        >
          Close
        </button>
      </div>
    </form>
  );
}
