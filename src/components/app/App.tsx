import Container from 'components/Container/Container';
import SinglePagePost from 'components/SinglePagePost/SinglePagePost';
import { Switch, Route, useLocation } from 'react-router-dom';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';

// import s from './App.module.css';

// React.FunctionComponent<Props> = (props: Props) => (
// const Component: React.SFC<Props> = (props: Props) => (
// =====================================
function App(): JSX.Element {
  const location = useLocation();
  console.log(location);

  return (
    <Container>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Posts />
        </Route>
        <Route path="/posts/:postId" exact>
          <SinglePagePost />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
