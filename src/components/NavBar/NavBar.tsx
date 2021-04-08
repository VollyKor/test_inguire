import { NavLink, useLocation } from 'react-router-dom';
import s from './NavBar.module.css';

export default function NavBar(): JSX.Element {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.link} activeClassName={s.active} exact>
            Main
          </NavLink>
          {!isMainPage && (
            <NavLink to="/posts/" className={s.link} activeClassName={s.active}>
              Post
            </NavLink>
          )}
        </nav>
      </header>
    </>
  );
}
