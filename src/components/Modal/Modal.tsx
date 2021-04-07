import { createPortal } from 'react-dom';
// import { useEffect } from 'react';
import React from 'react';
import s from './Modal.module.scss';
import CloseButton from '../CloseButton/CloseButton';

const modalRoot = document.querySelector('#modalRoot') as HTMLElement;

type Props = {
  onClose: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

function handleEsc(e: React.KeyboardEvent<HTMLDivElement>) {
  console.log(e.code);
}

export default function Modal({ onClose, children }: Props) {
  // useEffect(() => {
  //   window.addEventListener('keydown', handleEsc);
  //   return () => document.removeEventListener('keydown', handleEsc);
  // });

  function onBackdropClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div
      role="button"
      tabIndex={0}
      className={s.backdrop}
      onClick={onBackdropClick}
      onKeyDown={e => handleEsc(e)}
    >
      <div className={s.wrapper}>
        <CloseButton onClose={() => onClose()} />
        {children}
      </div>
    </div>,
    modalRoot,
  );
}
