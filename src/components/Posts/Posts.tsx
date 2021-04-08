import { useEffect } from 'react';
import { Tid } from 'helpers/interfaces';
import { getPosts } from '../../redux/posts/posts-selectors';
import {
  fetchDeletePost,
  fetchPosts,
} from '../../redux/posts/posts-operations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OnePost from '../SinglePost/SinglePost';
import s from './Posts.module.css';

export default function Posts(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(getPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  function handleDelete(id: Tid) {
    console.log(id);
    dispatch(fetchDeletePost(id.toString()));
  }
  return (
    <>
      <ul className={s.list}>
        {posts.map(e => (
          <li className={s.item} key={e.id}>
            <OnePost post={e} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
