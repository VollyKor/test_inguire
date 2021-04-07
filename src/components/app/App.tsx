// import {Suspense} from 'react'
import { Switch, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';
// import Footer from '../Footer/Footer';

// React.FunctionComponent<Props> = (props: Props) => (
// const Component: React.SFC<Props> = (props: Props) => (
// =====================================
function App(): JSX.Element {
  return (
    // Suspense
    <>
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
      {/* <Footer /> */}
    </>
  );
}

export default App;
