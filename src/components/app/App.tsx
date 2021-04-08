import Container from 'components/Container/Container';
import { Switch, Route, useLocation } from 'react-router-dom';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';

// import s from './App.module.css';

// React.FunctionComponent<Props> = (props: Props) => (
// const Component: React.SFC<Props> = (props: Props) => (
// =====================================
function App(): JSX.Element {
  const { pathname } = useLocation();

  return (
    // Suspense
    <Container>
      <NavBar />
      <Switch>
        <Route path={`${pathname}`} exact>
          <Hero />
          <Posts />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
