import React, { ReactChildren, ReactChild } from 'react';
import s from './Container.module.css';

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function Container({ children }: AuxProps): JSX.Element {
  return <div className={s.body}>{children}</div>;
}
