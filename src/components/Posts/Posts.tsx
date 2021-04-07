import { useEffect, useState } from 'react';
import { Ipost, Tid } from 'helpers/interfaces';
import { getPosts } from '../../redux/posts/posts-selectors';
import {
  fetchDeletePost,
  fetchPosts,
} from '../../redux/posts/posts-operations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OnePost from '../OnePost/OnsePost';

export default function Posts(): JSX.Element {
  const [isModalshown, setisModalshown] = useState(false);

  const dispatch = useAppDispatch();
  const posts = useAppSelector(getPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  function handleUpdate(post: Ipost): void {
    console.log(post.id);

    // dispatch(fetchUpdatePost(id.toString()));
  }
  function handleDelete(id: Tid) {
    console.log(id);
    dispatch(fetchDeletePost(id.toString()));
  }
  // function handleaAdComment(arguments) {
  //   // body
  // }

  return (
    <>
      <ul>
        {posts.map(e => (
          <li key={e.id}>
            <OnePost PostObj={e} />
          </li>
        ))}
      </ul>
    </>
  );
}
