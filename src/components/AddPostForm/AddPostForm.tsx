import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Ipost } from '../../helpers/interfaces';

export default function AddPostForm(): JSX.Element {
  const [isErrorShown, setIsErrorShown] = useState(false);

  //   const schema = yup.object({
  //     title: yup.string().min(3, 'More then 3chars').max(20).required('Required'),
  //     body: yup.string().min(3, 'min 3 symbols').required('Required'),
  //   });

  const { register, handleSubmit } = useForm<Ipost>({
    // resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      body: '',
      id: nanoid(),
    },
  });

  function onSubmit(data: any) {
    if (data.title.length < 3 || data.title.length < 3) {
      setIsErrorShown(true);
      return;
    }
    console.log('submit', data);
  }
  const titleId = 'title';
  const bodiId = 'body';

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '15px' }}>
      <label
        htmlFor={titleId}
        style={{ display: 'block', marginBottom: '15px' }}
      >
        <span style={{ display: 'block' }}>{titleId}</span>
        <input id={titleId} {...register(titleId)} type="text" />
        {/* <p>{errors.title?.message}</p> */}
      </label>
      <label htmlFor={bodiId} style={{ display: 'block' }}>
        <span style={{ display: 'block' }}>{bodiId}</span>
        <textarea
          id={bodiId}
          {...register(bodiId)}
          style={{ resize: 'none' }}
        />
        {/* <p>{errors.body?.message}</p> */}
      </label>
      <button type="submit">Add post</button>
      {isErrorShown && <p>Error</p>}
    </form>
  );
}
