import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export default function NavBar(): JSX.Element {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.link} activeClassName={s.active} exact>
            Main
          </NavLink>
          <NavLink to="/posts/" className={s.link} activeClassName={s.active}>
            Post
          </NavLink>
        </nav>
      </header>
    </>
  );
}
