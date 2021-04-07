import Container from 'components/Container/Container';
import { Switch, Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';
// import s from './App.module.css';

// React.FunctionComponent<Props> = (props: Props) => (
// const Component: React.SFC<Props> = (props: Props) => (
// =====================================
function App(): JSX.Element {
  return (
    // Suspense
    <Container>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Posts />
        </Route>
        <Route path="/post/:postId">
          <div>Another Page</div>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
