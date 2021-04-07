import { Ipost } from 'helpers/interfaces';
import { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { fetchUpdatePost } from 'redux/posts/posts-operations';

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

  const titleId = 'title';
  const bodyId = 'body';

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
    <form style={{ padding: '15px' }} onSubmit={e => handlesubmit(e)}>
      <label
        htmlFor={titleId}
        style={{ display: 'block', marginBottom: '10px' }}
      >
        <span style={{ display: 'block', marginBottom: '10px' }}>Title</span>
        <input
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
          id={titleId}
        />
      </label>

      <label
        htmlFor={bodyId}
        style={{ display: 'block', marginBottom: '10px' }}
      >
        <span style={{ display: 'block', marginBottom: '10px' }}>Text</span>
        <textarea
          value={body}
          id={bodyId}
          style={{ resize: 'none' }}
          onChange={e => {
            setBody(e.target.value);
          }}
        />
      </label>
      <button type="submit">Save changes</button>
    </form>
  );
}
