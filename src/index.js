import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import counterApp from './reducers'
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles'
import theme from './theme'
import reportWebVitals from "./reportWebVitals";

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(counterApp, preloadedState)

function Application() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<Application/>, document.getElementById('root'));
reportWebVitals();