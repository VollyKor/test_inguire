import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../redux/posts/posts-selectors';
import { getPosts as fetchPosts } from '../../redux/posts/posts-operations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(getPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {posts.map(e => (
          <li key={e.id}>
            <Link to={`/posts/${e.id}`}>
              <h2>{e.title}</h2>
              <p>{e.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
