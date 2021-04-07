import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './AddPostForm.module.css';
import { InewPost, Ipost } from '../../../helpers/interfaces';
import { fetchAddPost as addNewPost } from '../../../redux/posts/posts-operations';
import { useAppDispatch } from '../../../redux/hooks';

export default function AddPostForm(): JSX.Element {
  const [isErrorShown, setIsErrorShown] = useState(false);
  const dispatch = useAppDispatch();

  const titleId = 'title';
  const bodiId = 'body';

  // Validation
  // ================================
  //   const schema = yup.object({
  //     title: yup.string().min(3, 'More then 3chars').max(20).required('Required'),
  //     body: yup.string().min(3, 'min 3 symbols').required('Required'),
  //   });

  const { register, handleSubmit } = useForm<InewPost>({
    // resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      body: '',
    },
  });

  function onSubmit(data: InewPost) {
    if (data.title.length < 3 || data.title.length < 3) {
      setIsErrorShown(true);
      setTimeout(() => {
        setIsErrorShown(false);
      }, 3000);
      return;
    }
    const newPost: Ipost = {
      id: nanoid(),
      ...data,
    };

    dispatch(addNewPost(newPost));
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={titleId} className={s.label}>
        <span className={s.text}>Title</span>
        <input
          autoComplete="off"
          className={s.input}
          id={titleId}
          {...register(titleId)}
          type="text"
        />
        {/* <p>{errors.title?.message}</p> */}
      </label>
      <label className={s.label} htmlFor={bodiId}>
        <span className={s.text}>Body</span>
        <textarea id={bodiId} {...register(bodiId)} className={s.textarea} />
        {/* <p>{errors.body?.message}</p> */}
      </label>
      <button className={s.button} type="submit">
        Add post
      </button>
      {isErrorShown && (
        <p className="error">Input more than 3 symbols in each field</p>
      )}
    </form>
  );
}
