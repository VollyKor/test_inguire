import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import PostStore from './redux/store';

import App from './components/app/App';
import mainTheme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={PostStore}>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
