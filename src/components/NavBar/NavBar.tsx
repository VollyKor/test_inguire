import { NavLink } from 'react-router-dom';

const linkStyle = {
  display: 'inline-block',
  padding: '10px',
  marginRight: '15px',
  borderRadius: '4px',
  color: 'white',
  textDecoration: 'none',
  margin: '0px',
};

export default function Header(): JSX.Element {
  return (
    <>
      <header
        style={{ backgroundColor: 'grey', minHeight: '50px', padding: '15px' }}
      >
        <nav>
          <NavLink
            to="/"
            style={linkStyle}
            activeStyle={{ backgroundColor: 'green' }}
            exact
          >
            Main
          </NavLink>
          <NavLink
            to="/post/:userId"
            style={linkStyle}
            activeStyle={{ backgroundColor: 'green' }}
          >
            Post
          </NavLink>
        </nav>
      </header>
    </>
  );
}
