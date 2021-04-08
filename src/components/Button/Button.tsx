import s from './Button.module.css';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

export default function Button({ children, onClick }: Props): JSX.Element {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      {children}
    </button>
  );
}

// export default Button
