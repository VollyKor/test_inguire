import { AiFillCloseCircle } from 'react-icons/ai';
import s from './CloseButton.module.css';

interface IProps {
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function CloseButton({ onClose }: IProps): JSX.Element {
  return (
    <button
      type="button"
      aria-label="close-button"
      onClick={onClose}
      className={s.btn}
    >
      <AiFillCloseCircle className={s.icon} color="#e69346" />
    </button>
  );
}
