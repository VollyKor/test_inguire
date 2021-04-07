import { createPortal } from 'react-dom';
import React from 'react';
import s from './Modal.module.css';
import CloseButton from '../CloseButton/CloseButton';

const modalRoot = document.querySelector('#modalRoot') as HTMLElement;

type Props = {
  onClose: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

export default function Modal({ onClose, children }: Props) {
  function onBackdropClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div
      role="textbox"
      tabIndex={0}
      className={s.backdrop}
      onClick={onBackdropClick}
      onKeyDown={e => {
        console.log(e);
      }}
    >
      <div className={s.wrapper}>
        <CloseButton onClose={() => onClose()} />
        {children}
      </div>
    </div>,
    modalRoot,
  );
}
