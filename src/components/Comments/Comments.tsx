import { useEffect } from 'react';
import { Tid } from 'helpers/interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCommentPostById } from '../../redux/posts/posts-selectors';
import { fetchPostById } from '../../redux/posts/posts-operations';
import s from './Comments.module.css';

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
    <>
      <h3 className={s.title}>
        {comments.length > 0 ? 'Comments' : 'No Comments'}
      </h3>
      <ul className={s.list}>
        {comments.map(e => {
          return (
            <li className={s.item} key={e.id}>
              <p className={s.text}>{e.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  ) : null;
}
