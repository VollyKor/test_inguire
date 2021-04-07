import { useEffect } from 'react';
import { Tid } from 'helpers/interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCommentPostById } from '../../redux/posts/posts-selectors';
import { fetchPostById } from '../../redux/posts/posts-operations';

interface Iprops {
  postId: Tid;
}

export default function Comments({ postId }: Iprops) {
  const comments = useAppSelector(state => getCommentPostById(postId, state));
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);

  return comments ? (
    <ul>
      {comments.map(e => {
        return (
          <li key={e.id}>
            <p>{e.body}</p>
          </li>
        );
      })}
    </ul>
  ) : null;
}
